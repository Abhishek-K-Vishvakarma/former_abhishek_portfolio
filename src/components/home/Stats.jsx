'use client';

export default function State() {
  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Built' },
    { value: 'AI', label: 'Powered Apps' },
    { value: 'Full Stack', label: 'MERN • FastAPI • Node Projects' },
  ];

  return (
    <div className="mt-16 overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

      {/* Marquee track */}
      <div className="flex w-max gap-4 sm:gap-6 animate-marquee">
        {[...stats, ...stats].map((item, index) => (
          <div
            key={index}
            className="
              min-w-[180px] sm:min-w-[260px] lg:min-w-[300px]

              relative group overflow-hidden

              rounded-2xl sm:rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-2xl

              p-4 sm:p-6 lg:p-8

              transition-all duration-500

              hover:scale-105
              hover:border-cyan-400/30
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
          >
            {/* Glow */}
            <div
              className="
              absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10
              transition duration-500
            "
            ></div>

            {/* Value */}
            <h2
              className="
              text-2xl sm:text-4xl lg:text-5xl
              font-black text-white relative z-10
            "
            >
              {item.value}
            </h2>

            {/* Label */}
            <p
              className="
              text-slate-400 mt-2 sm:mt-3
              text-xs sm:text-sm lg:text-base
              relative z-10
              leading-snug
            "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
