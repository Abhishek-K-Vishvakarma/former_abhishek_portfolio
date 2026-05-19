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
      {/* FLOATING BUTTON (when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-6 right-6
            px-5 py-4
            rounded-full
            bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500
            text-white font-bold
            shadow-[0_0_40px_rgba(34,211,238,0.35)]
            hover:scale-110 transition-all duration-300
            z-50
          "
        >
          🤖 AI
        </button>
      )}

      {/* CHAT PANEL */}
      <div
        className={`
          fixed bottom-6 right-6
          w-[90%] sm:w-[380px]
          h-[500px]
          rounded-3xl
          border border-white/10
          bg-[#07111f]/90
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(34,211,238,0.15)]
          flex flex-col
          overflow-hidden
          transition-all duration-500
          z-50

          ${ open ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0 pointer-events-none" }
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
          <h2 className="text-white font-semibold">
            Abhishek AI Assistant 🤖
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-red-400 text-xl"
          >
            ✕
          </button>
        </div>

        {/* CHAT BOX */}
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
                  transition-all duration-300

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

          {loading && (
            <div className="text-slate-400 animate-pulse text-sm">
              AI is thinking...
            </div>
          )}
        </div>

        {/* INPUT */}
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
              text-white
              font-semibold
              hover:scale-105
              transition
            "
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}