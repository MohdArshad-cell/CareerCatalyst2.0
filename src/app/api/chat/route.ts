import { streamText, CoreMessage } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

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
- **Tone:** Professional, direct, confident, and slightly urgent. We are experts who know what works. Do not be overly apologetic or use too many emojis.

Your instructions:
1. Answer the user's questions directly based on the context above.
2. If they ask a question outside of this context, politely pivot back to how our services can help them get hired.
3. Once you have answered their questions and they seem satisfied or ready to take action, tell them to click the "Connect on WhatsApp" button below to chat with our founders.
4. **CRITICAL:** When you are recommending they connect on WhatsApp, you MUST include the exact string: "[SHOW_WHATSAPP_LINK]" in your response. The frontend will use this to display the button.

Do not make up pricing or services that are not listed above.
`;

// Simple in-memory rate limiter (Note: resets on serverless cold starts)
const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

// Zod schema for validating the incoming request body
const RequestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system', 'data']),
      content: z.string().max(2000), // Prevent massive inputs
    })
  ).max(50), // Prevent massive arrays
});

export async function POST(req: Request) {
  // 1. Basic IP Rate Limiting
  const ip = req.headers.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  const userRate = rateLimit.get(ip) || { count: 0, timestamp: now };

  if (now - userRate.timestamp > RATE_LIMIT_WINDOW_MS) {
    userRate.count = 1;
    userRate.timestamp = now;
  } else {
    userRate.count++;
  }
  
  rateLimit.set(ip, userRate);

  if (userRate.count > MAX_REQUESTS_PER_WINDOW) {
    return new Response('Too many requests. Please slow down.', { status: 429 });
  }

  try {
    // 2. Validate payload
    const body = await req.json();
    const result = RequestSchema.safeParse(body);
    
    if (!result.success) {
      return new Response('Invalid request payload', { status: 400 });
    }

    const { messages } = result.data;

    // 3. Truncate context to the last 10 messages to save tokens
    const recentMessages = messages.slice(-10);

    // 4. Generate AI Stream
    const resultStream = await streamText({
      model: google('gemini-1.5-flash'),
      system: SYSTEM_PROMPT,
      messages: recentMessages as CoreMessage[],
      temperature: 0.7,
    });

    return resultStream.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
