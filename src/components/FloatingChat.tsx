"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight, Loader2 } from "lucide-react";
import { processChat } from "@/actions/chat";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

// Format required by Gemini API
interface ChatHistoryPart {
  role: "user" | "model";
  parts: [{ text: string }];
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! 👋 I'm the Career Catalyst assistant. How can I help you bypass the ATS and secure top-tier interviews today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, showWhatsAppButton]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    
    // Add user message to UI immediately
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Format history for Gemini API
      const historyToFormat = [...messages, userMsg];
      
      // We skip the very first greeting message to save tokens if we want, 
      // but let's include it so the model knows what was said.
      const formattedHistory: ChatHistoryPart[] = historyToFormat.map((msg) => ({
        role: msg.sender === "bot" ? "model" : "user",
        parts: [{ text: msg.text }],
      }));

      // Call the Server Action
      const response = await processChat(formattedHistory);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: response.text,
      };

      setMessages((prev) => [...prev, botMsg]);
      
      if (response.showWhatsApp) {
        setShowWhatsAppButton(true);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev, 
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "I encountered a network issue. Please connect with our team directly on WhatsApp!"
        }
      ]);
      setShowWhatsAppButton(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-zinc-950 border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-zinc-900 border-b border-white/10 p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CC</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-900 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Career Catalyst</h3>
                    <p className="text-zinc-400 text-xs">AI Assistant</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[400px] bg-zinc-950/50 flex flex-col gap-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.sender === "bot"
                        ? "bg-zinc-800/80 text-zinc-200 self-start rounded-tl-sm border border-white/5"
                        : "bg-primary-600 text-white self-end rounded-tr-sm"
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-800/80 text-zinc-400 self-start rounded-2xl rounded-tl-sm border border-white/5 px-4 py-2.5 text-sm flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" /> Thinking...
                  </motion.div>
                )}

                {showWhatsAppButton && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="self-center mt-2 w-full"
                  >
                    <a
                      href="https://wa.me/917887096421?text=Hi!%20I%20just%20spoke%20with%20your%20assistant.%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                    >
                      Connect on WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-3 bg-zinc-900/80 border-t border-white/10 backdrop-blur-md">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about our services..."
                    disabled={isLoading}
                    className="w-full bg-black border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all disabled:opacity-50"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className="absolute right-1.5 p-2 bg-primary-600 hover:bg-primary-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-full transition-colors flex items-center justify-center"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(99,102,241,0.5)] hover:shadow-[0_10px_60px_rgba(99,102,241,0.8)] relative border border-white/30 transition-all"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
          {!isOpen && (
            <div className="absolute inset-[-4px] bg-primary-500/20 rounded-full animate-ping pointer-events-none" />
          )}
        </motion.button>
      </div>
    </>
  );
}
