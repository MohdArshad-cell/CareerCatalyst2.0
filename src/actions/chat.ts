"use server";

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an expert career advisor and sales representative for "Career Catalyst".
Your goal is to answer questions about our services, clear doubts, and eventually guide the user to connect with our team on WhatsApp.

Here is the information you know:
- **Who we are:** Career Catalyst helps ambitious professionals bypass Applicant Tracking Systems (ATS) and secure top-tier interviews.
- **Our Services:**
  1. ATS Resume Overhaul ($19): Complete rewrite in XYZ format, LaTeX source + PDF, 48h turnaround, 1 revision.
  2. Job Hunt Accelerator ($49): Resume overhaul + LinkedIn Profile Revamp + Custom Cover Letter Framework + Keyword Strategy.
  3. Full Career Stack ($99): Everything in Accelerator + Custom Deployed Web Portfolio + Premium Design.
- **Why choose us:** We focus on data-driven, ATS-compliant formats (no flashy, unreadable designs). We position our clients as high-impact professionals, focusing on business value and ROI rather than just listing responsibilities.
- **Tone:** Professional, direct, confident, and slightly urgent. We are experts who know what works. Do not be overly overly apologetic or use too many emojis.

Your instructions:
1. Answer the user's questions directly based on the context above.
2. If they ask a question outside of this context, politely pivot back to how our services can help them get hired.
3. Once you have answered their questions and they seem satisfied or ready to take action, tell them to click the "Connect on WhatsApp" button below to chat with our founders.
4. **CRITICAL:** When you are recommending they connect on WhatsApp, you MUST include the exact string: "[SHOW_WHATSAPP_LINK]" in your response. The frontend will use this to display the button.

Do not make up pricing or services that are not listed above.
`;

export async function processChat(history: { role: string; parts: [{ text: string }] }[]) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      text: "I'm currently undergoing maintenance (API Key missing). Please message the team directly on WhatsApp!",
      showWhatsApp: true,
    };
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      systemInstruction: SYSTEM_PROMPT
    });

    const generationConfig = {
      temperature: 0.7,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 1024,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    // Pop the last message to use as the current prompt
    const currentMessage = history.pop()?.parts[0].text || "";

    // Start chat session with remaining history
    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: history,
    });

    const result = await chatSession.sendMessage(currentMessage);
    const responseText = result.response.text();

    const showWhatsApp = responseText.includes("[SHOW_WHATSAPP_LINK]");
    const cleanText = responseText.replace("[SHOW_WHATSAPP_LINK]", "").trim();

    return {
      text: cleanText,
      showWhatsApp: showWhatsApp,
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "I'm having a little trouble connecting to my brain right now. Please message the team directly on WhatsApp!",
      showWhatsApp: true,
    };
  }
}
