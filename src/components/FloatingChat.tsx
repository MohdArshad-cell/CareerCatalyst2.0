"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

type ChatStep = "greeting" | "role" | "goal" | "handoff";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("greeting");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! 👋 To make sure we give you the best advice, what is your current or target role?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [role, setRole] = useState("");
  const [goal, setGoal] = useState("");
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue.trim(),
    };
    
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // Process logic based on step
    if (step === "greeting") {
      setRole(userMsg.text);
      setStep("role");
      
      // Simulate typing delay
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: "bot",
            text: "Awesome. What is your primary career goal right now? (e.g., Break into top tier companies, increase salary, transition to a new field)",
          },
        ]);
        setStep("goal");
      }, 600);
    } else if (step === "goal") {
      setGoal(userMsg.text);
      setStep("handoff");
      
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: "bot",
            text: "Perfect, I've got the context. Let's get you connected with our team on WhatsApp to discuss the next steps!",
          },
        ]);
      }, 600);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const getWhatsAppUrl = () => {
    const text = `Hi! I am a ${role} and my goal is to ${goal}. I'd like to learn more about your services.`;
    return `https://wa.me/917887096421?text=${encodeURIComponent(text)}`;
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
                    <p className="text-zinc-400 text-xs">Typically replies instantly</p>
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
                
                {step === "handoff" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="self-center mt-2 w-full"
                  >
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.2)]"
                    >
                      Continue to WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              {step !== "handoff" && (
                <div className="p-3 bg-zinc-900/80 border-t border-white/10 backdrop-blur-md">
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder={step === "greeting" ? "Type your role..." : "Type your goal..."}
                      className="w-full bg-black border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="absolute right-1.5 p-2 bg-primary-600 hover:bg-primary-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-full transition-colors flex items-center justify-center"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
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
