"use client";

import { useState } from "react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const askAI = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { role: "ai", text: data.reply },
    ]);

    setLoading(false);
  };

  return (
    <>
      {/* =========================
      FLOATING BUTTON
  ========================= */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
        fixed bottom-6 right-6 z-50
        px-5 py-4
        rounded-full
        bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500
        text-white font-bold
        shadow-[0_0_40px_rgba(34,211,238,0.35)]
        hover:scale-110 transition-all duration-300
      "
        >
          🤖 AI
        </button>
      )}

      {/* =========================
      CHAT PANEL
  ========================= */}
      <div
        className={`
      fixed bottom-6 right-6 z-50
      w-[92%] sm:w-[380px]
      h-[520px]
      rounded-3xl
      border border-white/10
      bg-[#07111f]/90
      backdrop-blur-2xl
      shadow-[0_0_80px_rgba(34,211,238,0.15)]
      flex flex-col
      overflow-hidden
      transition-all duration-500

      ${ open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40 pointer-events-none" }
    `}
      >

        {/* =========================
        AI HEADER (PREMIUM)
    ========================= */}
        <div className="relative border-b border-white/10 bg-white/5 overflow-hidden">
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="
    absolute top-3 right-3 z-[999]
    w-9 h-9
    rounded-full
    bg-white/10
    border border-white/20
    text-white
    hover:bg-red-500
    transition
    flex items-center justify-center
  "
          >
            ✕
          </button>
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-cyan-500/20 blur-[110px] rounded-full animate-pulse"></div>
          </div>

          <div className="relative flex flex-col items-center justify-center py-5">

            {/* AI AVATAR */}
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
                alt="AI"
                className="
              w-20 h-20
              rounded-full
              border border-cyan-400/30
              shadow-[0_0_40px_rgba(34,211,238,0.5)]
            "
              />

              {/* Online dot */}
              <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-ping"></span>
            </div>

            {/* TITLE */}
            <h2 className="text-white font-bold mt-3 text-lg">
              Abhishek AI Assistant
            </h2>

            {/* SUBTITLE */}
            <p className="text-cyan-300 text-xs mt-1 text-center px-4">
              Ask me anything about skills, projects & experience
            </p>

            {/* TYPING DOTS */}
            <div className="flex gap-1 mt-3 items-center">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            </div>
          </div>
        </div>

        {/* =========================
        CHAT BOX
    ========================= */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${ m.role === "user" ? "justify-end" : "justify-start" }`}
            >
              <div
                className={`
              max-w-[80%]
              px-4 py-2
              rounded-2xl
              text-sm
              break-words

              ${ m.role === "user"
                    ? "bg-cyan-500 text-white rounded-br-none"
                    : "bg-white/10 text-white rounded-bl-none"
                  }
            `}
              >
                {m.text}
              </div>
            </div>
          ))}

          {/* LOADING */}
          {loading && (
            <div className="flex items-center gap-3 text-slate-300 text-sm">

              {/* <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
                alt="AI"
                className="w-10 h-10 rounded-full"
              /> */}

              <div>
                <p className="text-cyan-300 font-medium">
                  AI is thinking...
                </p>

                <div className="flex gap-1 mt-1 items-end h-4">
                  <span className="w-1 h-2 bg-cyan-400 animate-bounce"></span>
                  <span className="w-1 h-3 bg-cyan-400 animate-bounce [animation-delay:0.1s]"></span>
                  <span className="w-1 h-4 bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-3 bg-cyan-400 animate-bounce [animation-delay:0.3s]"></span>
                  <span className="w-1 h-2 bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* =========================
        INPUT AREA
    ========================= */}
        <div className="p-3 border-t border-white/10 bg-white/5 flex gap-2">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Abhishek..."
            className="
          flex-1 px-4 py-2
          rounded-xl
          bg-black/30
          border border-white/10
          text-white
          outline-none
          focus:border-cyan-400
        "
          />

          <button
            onClick={askAI}
            className="
          px-4 py-2
          rounded-xl
          bg-gradient-to-r from-cyan-500 to-blue-500
          text-white font-semibold
          hover:scale-105 transition
        "
          >
            Send
          </button>

        </div>
      </div>
    </>
  );
}