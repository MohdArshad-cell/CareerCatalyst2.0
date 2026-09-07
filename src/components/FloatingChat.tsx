"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { useChat, Message } from "ai/react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "917887096421";

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [initialMessages, setInitialMessages] = useState<Message[]>([]);

  // Hydration & Local Storage
  useEffect(() => {
    const saved = localStorage.getItem("career_catalyst_chat");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTimeout(() => setInitialMessages(parsed), 0);
      } catch {
        console.error("Failed to parse chat history");
      }
    } else {
      setTimeout(() => {
        setInitialMessages([
          {
            id: "1",
            role: "assistant",
            content: "Hi! How can I help you today?",
            createdAt: new Date(),
          }
        ]);
      }, 0);
    }
    
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
  }, []);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages,
    id: "career-catalyst-chat",
  });

  // Save to local storage whenever messages change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("career_catalyst_chat", JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // Only submit if there's input
      if (input.trim()) {
        handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
      }
    }
  };

  // Check if we should show the WhatsApp button based on the conversation
  const showWhatsAppButton = messages.some(
    (m: Message) => m.role === "assistant" && m.content.includes("[SHOW_WHATSAPP_LINK]")
  );

  if (!isMounted) return null;

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
                {messages.map((msg: Message) => {
                  // Hide the magic string from the UI
                  const cleanText = msg.content.replace("[SHOW_WHATSAPP_LINK]", "");
                  
                  if (!cleanText.trim()) return null; // Skip rendering if empty

                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role !== "user"
                          ? "bg-zinc-800/80 text-zinc-200 self-start rounded-tl-sm border border-white/5"
                          : "bg-primary-600 text-white self-end rounded-tr-sm"
                      }`}
                    >
                      {msg.role !== "user" ? (
                        <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-a:text-primary-400 prose-ul:pl-4 prose-ol:pl-4 prose-li:my-0.5">
                          <ReactMarkdown>{cleanText}</ReactMarkdown>
                        </div>
                      ) : (
                        cleanText
                      )}
                    </motion.div>
                  );
                })}

                {isLoading && messages[messages.length - 1]?.role === "user" && (
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
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I%20just%20spoke%20with%20your%20assistant.%20I'd%20like%20to%20learn%20more%20about%20your%20services.`}
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (input.trim()) handleSubmit(e);
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about our services..."
                    disabled={isLoading}
                    className="w-full bg-black border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-1.5 p-2 bg-primary-600 hover:bg-primary-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-full transition-colors flex items-center justify-center"
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  </button>
                </form>
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
