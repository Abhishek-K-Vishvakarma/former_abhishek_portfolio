'use client';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#020617] pt-32 lg:pt-40">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.15),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_25%),radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_35%)]"></div>

      {/* Animated Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full animate-pulse"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-pink-500/20 blur-[170px] rounded-full animate-pulse"></div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* Floating Blur */}
      <div className="absolute top-[35%] left-[45%] w-[280px] h-[280px] bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center justify-items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* MAIN HEADING */}
            <h1
              className="
            text-[40px]
            sm:text-[52px]
            lg:text-[68px]
            font-black
            leading-[1.05]
            tracking-[-2px]
            text-white
            max-w-4xl
            mx-auto
            lg:mx-0
          "
            >
              <span className="block text-white/90">Building</span>

              <span className="relative inline-block mt-2">
                {/* Main Gradient Text */}
                <span
                  className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-pink-500
                bg-clip-text
                text-transparent
                drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]
              "
                >
                  Future Ready
                </span>

                {/* Glow */}
                <span
                  className="
                absolute
                -bottom-3
                left-1/2
                -translate-x-1/2
                w-[90%]
                h-5
                bg-gradient-to-r
                from-cyan-400/40
                via-blue-500/30
                to-pink-500/40
                blur-2xl
                rounded-full
              "
                ></span>
              </span>

              <span className="block mt-2 text-white">Digital Experiences</span>
            </h1>

            {/* Description */}
            <p
              className="
    text-slate-400
    mt-6 sm:mt-10

    text-sm sm:text-[16px] md:text-[18px]

    leading-relaxed sm:leading-[2]

    max-w-full sm:max-w-2xl
    mx-auto lg:mx-0

    text-center lg:text-left
  "
            >
              I’m{' '}
              <span className="font-semibold text-white">
                Abhishek Vishvakarma
              </span>
              , a Full Stack Developer crafting scalable backend systems,
              AI-powered applications, immersive frontend experiences, cloud
              infrastructures, and high-performance digital products using MERN
              Stack & FastAPI.
            </p>

            {/* BUTTONS */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-14">

              <a
                href="/projects"
                className="
              group
              relative
              overflow-hidden
              px-10 py-4
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-pink-500
              font-semibold
              text-white
              shadow-[0_15px_50px_rgba(34,211,238,0.35)]
              hover:scale-105
              transition-all
              duration-500
            "
              >

                <span className="relative z-10">
                  View Projects
                </span>

                <div
                  className="
                absolute inset-0
                translate-x-[-100%]
                group-hover:translate-x-[100%]
                transition-all
                duration-1000
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
                ></div>

              </a>

              <a
                href="/contact"
                className="
              px-10 py-4
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              text-white
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:scale-105
              transition-all
              duration-300
            "
              >
                Contact Me
              </a>

            </div> */}
            {/* Resume download */}
            <div
              className="
  grid grid-cols-2
  gap-3
  mt-6
  w-fit
  mx-auto
  sm:flex sm:gap-4
"
            >
              {/* VIEW RESUME */}
              <a
                href="/Abhishek_Software_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-[135px] sm:w-auto

      px-3 sm:px-6
      py-2 sm:py-3

      text-xs sm:text-sm
      font-semibold
      text-white
      text-center

      rounded-xl
      bg-white/5
      border border-white/10

      whitespace-nowrap
      hover:border-cyan-400/40
      hover:bg-white/10
      transition
    "
              >
                👁 View Resume
              </a>

              {/* DOWNLOAD RESUME */}
              <a
                href="/Abhishek_Software_Engineer.pdf"
                download
                className="
      w-[135px] sm:w-auto

      px-3 sm:px-6
      py-2 sm:py-3

      text-xs sm:text-sm
      font-semibold
      text-white
      text-center

      rounded-xl
      bg-gradient-to-r from-cyan-500 to-blue-500

      whitespace-nowrap
      hover:scale-105
      transition
      shadow-[0_0_18px_rgba(34,211,238,0.25)]
    "
              >
                ⬇ Download
              </a>
            </div>
          </div>
          {/* RIGHT SIDE - ULTRA PREMIUM HERO */}
          <div className="relative flex justify-center items-center mt-10 lg:mt-0 w-full">
            {/* AMBIENT ENERGY LAYERS */}
            <div className="absolute w-[260px] sm:w-[400px] lg:w-[440px] h-[260px] sm:h-[400px] lg:h-[440px] bg-cyan-500/15 blur-[160px] rounded-full animate-pulse"></div>
            <div className="absolute w-[200px] sm:w-[300px] lg:w-[340px] h-[200px] sm:h-[300px] lg:h-[340px] bg-pink-500/12 blur-[130px] rounded-full animate-pulse delay-1000"></div>
            <div className="absolute w-[140px] sm:w-[200px] lg:w-[220px] h-[140px] sm:h-[200px] lg:h-[220px] bg-blue-500/10 blur-[100px] rounded-full animate-pulse delay-500"></div>

            {/* ORBIT RINGS */}
            <div className="absolute w-[280px] sm:w-[380px] lg:w-[420px] h-[280px] sm:h-[380px] lg:h-[420px] border border-cyan-400/8 rounded-full animate-spin-slow"></div>
            <div
              className="absolute w-[240px] sm:w-[320px] lg:w-[360px] h-[240px] sm:h-[320px] lg:h-[360px] border border-pink-400/6 rounded-full animate-spin-slow"
              style={{
                animationDirection: 'reverse',
                animationDuration: '20s',
              }}
            ></div>

            {/* ORBIT DOTS */}
            <div className="absolute w-[280px] sm:w-[380px] lg:w-[420px] h-[280px] sm:h-[380px] lg:h-[420px] animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-pink-400/60 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></div>
            </div>

            {/* MAIN CARD WRAPPER */}
            <div className="relative w-full flex justify-center">
              {/* OUTER GLOW BORDER */}
              <div
                className="
      p-[1.5px]
      rounded-[44px]
      bg-gradient-to-br from-cyan-400/80 via-blue-500/60 to-pink-500/80
      shadow-[0_0_80px_rgba(34,211,238,0.3),0_0_160px_rgba(34,211,238,0.1)]
      w-full
      max-w-[260px] sm:max-w-[310px] lg:max-w-[330px]
    "
              >
                {/* INNER CARD */}
                <div className="relative rounded-[43px] bg-[#050e1a] overflow-hidden">
                  {/* INNER SHIMMER TOP */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

                  {/* MESH BACKGROUND */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, rgba(34,211,238,0.08) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(236,72,153,0.08) 0%, transparent 50%),
                              radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 60%)`,
                    }}
                  ></div>

                  {/* CARD CONTENT */}
                  <div className="relative p-4 sm:p-5">
                    {/* TOP BAR — macOS dots */}
                    <div className="flex items-center justify-between px-2 py-1.5 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/90 shadow-[0_0_6px_rgba(248,113,113,0.6)]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/90 shadow-[0_0_6px_rgba(250,204,21,0.6)]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/90 shadow-[0_0_6px_rgba(74,222,128,0.6)]"></div>
                      </div>
                      {/* Live indicator */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping absolute"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <span className="text-[9px] text-green-400 font-semibold tracking-wider">
                          AVAILABLE
                        </span>
                      </div>
                    </div>

                    {/* IMAGE SECTION */}
                    <div className="relative flex justify-center group">
                      {/* IMAGE GLOW */}
                      <div className="absolute -inset-2 bg-gradient-to-b from-cyan-500/20 via-blue-500/10 to-pink-500/20 rounded-[26px] blur-2xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

                      {/* IMAGE FRAME */}
                      <div
                        className="
              relative overflow-hidden
              rounded-[24px]
              border border-white/10
              w-full max-w-[190px] sm:max-w-[220px]
              shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]
            "
                      >
                        <img
                          src="/my_image.png"
                          alt="Abhishek"
                          className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />

                        {/* DEPTH GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/90 via-transparent to-transparent"></div>

                        {/* SIDE EDGE GLOWS */}
                        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
                        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-pink-400/20 to-transparent"></div>

                        {/* HOVER LIGHT SWEEP */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 transition duration-700 translate-x-[-100%] group-hover:translate-x-[200%]"></div>
                      </div>
                    </div>

                    {/* NAME + ROLE LABEL */}
                    <div className="mt-4 flex flex-col items-center gap-2">
                      {/* NAME */}
                      <h3 className="text-white font-black text-base sm:text-lg tracking-tight">
                        Abhishek
                      </h3>

                      {/* ROLE PILL */}
                      <div
                        className="
              px-4 py-1.5
              rounded-full
              bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-pink-500/10
              border border-white/10
              backdrop-blur-xl
            "
                      >
                        <p className="text-[9px] sm:text-[10px] tracking-[2.5px] text-cyan-300 font-bold flex items-center gap-2">
                          <span className="whitespace-nowrap">
                            Full Stack Dev
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/40"></span>
                          <span className="whitespace-nowrap">AI Engineer</span>
                        </p>
                      </div>
                    </div>

                    {/* STATS ROW */}
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        { num: '2+', label: 'Years' },
                        { num: '10+', label: 'Projects' },
                        { num: '100%', label: 'Passion' },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="
                flex flex-col items-center
                py-2 rounded-2xl
                bg-white/4 border border-white/8
                hover:border-cyan-400/20 hover:bg-white/6
                transition-all duration-300
              "
                        >
                          <span className="text-sm sm:text-base font-black text-white leading-none">
                            {stat.num}
                          </span>
                          <span className="text-[8px] sm:text-[9px] text-slate-400 mt-1 tracking-wider">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM SHIMMER */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"></div>
                </div>
              </div>

              {/* ========================
        FLOATING BADGES
    ======================== */}

              {/* MERN STACK — LEFT */}
              <div
                className="
  absolute -left-1 sm:-left-10 top-12 sm:top-20
  px-3 sm:px-4 py-2 sm:py-2.5
  rounded-2xl
  bg-[#050e1a]/90
  border border-cyan-400/25
  backdrop-blur-2xl
  shadow-[0_0_30px_rgba(34,211,238,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]
  hover:scale-110 hover:border-cyan-400/50
  transition-all duration-300
  z-20
  group
"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></div>
                  <p className="text-cyan-300 text-[8px] sm:text-[10px] font-bold tracking-[2px]">
                    MERN STACK
                  </p>
                </div>
                {/* mini bar */}
                <div className="mt-1 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500"></div>
              </div>

              {/* AI SYSTEMS — RIGHT */}
              <div
                className="
  absolute -right-1 sm:-right-10 bottom-16 sm:bottom-24
  px-3 sm:px-4 py-2 sm:py-2.5
  rounded-2xl
  bg-[#050e1a]/90
  border border-pink-400/25
  backdrop-blur-2xl
  shadow-[0_0_30px_rgba(236,72,153,0.15),inset_0_1px_0_rgba(255,255,255,0.05)]
  hover:scale-110 hover:border-pink-400/50
  transition-all duration-300
  z-20
  group
"
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_rgba(236,72,153,0.8)]"></div>
                  <p className="text-pink-300 text-[8px] sm:text-[10px] font-bold tracking-[2px]">
                    AI SYSTEMS
                  </p>
                </div>
                <div className="mt-1 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"></div>
              </div>

              {/* EXTRA BADGE — TOP RIGHT (new) */}
              <div
                className="
  absolute right-1 sm:-right-6 top-4 sm:top-10
  px-2.5 py-1.5
  rounded-xl
  bg-[#050e1a]/90
  border border-blue-400/20
  backdrop-blur-2xl
  shadow-[0_0_20px_rgba(59,130,246,0.12)]
  hover:scale-110
  transition-all duration-300
  z-20
"
              >
                <p className="text-blue-300 text-[8px] sm:text-[9px] font-bold tracking-[1.5px]">
                  ⚡ NEXT.JS
                </p>
              </div>

              {/* EXTRA BADGE — BOTTOM LEFT (new) */}
              <div
                className="
  absolute left-0 sm:-left-6 bottom-6 sm:bottom-14
  px-2.5 py-1.5
  rounded-xl
  bg-[#050e1a]/90
  border border-purple-400/20
  backdrop-blur-2xl
  shadow-[0_0_20px_rgba(168,85,247,0.12)]
  hover:scale-110
  transition-all duration-300
  z-20
"
              >
                <p className="text-purple-300 text-[8px] sm:text-[9px] font-bold tracking-[1.5px]">
                  🤖 LLM APIs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
