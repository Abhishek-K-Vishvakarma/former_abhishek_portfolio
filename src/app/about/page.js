import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {

  const stats = [

    {
      number: "2+",
      label: "Years Experience"
    },

    {
      number: "10+",
      label: "Projects Built"
    },

    {
      number: "AI",
      label: "Powered Solutions"
    },

    {
      number: "24/7",
      label: "Learning Mindset"
    }

  ];

  return (

    <>

      <Navbar />

      <section className="relative min-h-screen overflow-hidden bg-[#030712] py-16 sm:py-24">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-pink-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 blur-[160px] rounded-full"></div>

        <div className="container-width relative z-10 px-4 sm:px-6 lg:px-0">

          {/* =====================
        HEADING
    ===================== */}
          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[4px] text-cyan-400 font-semibold">
                About • Experience • Skills
              </p>
            </div>

            <p className="
        text-2xl sm:text-4xl md:text-6xl
        font-black leading-tight text-white
      ">
              Passionate About <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-500 bg-clip-text text-transparent">
                Building Modern
              </span>
              <br className="hidden sm:block" />
              {" "}Digital Products
            </p>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 mt-6 sm:mt-8 max-w-3xl mx-auto">
              I'm <span className="text-white font-semibold">Abhishek Vishvakarma</span>,
              a Full Stack Developer and AI/ML Engineer focused on scalable backend systems,
              AI integrations, cloud deployment, Docker infrastructure, and modern frontend experiences.
            </p>

          </div>

          {/* =====================
        MAIN SECTION
    ===================== */}
          <div className="mt-14 sm:mt-20 grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">

            {/* LEFT — IMAGE */}
            <div className="relative flex justify-center">

              <div className="absolute w-[200px] sm:w-[340px] h-[200px] sm:h-[340px] bg-cyan-500/15 blur-[100px] rounded-full"></div>

              {/* Card */}
              <div className="
          relative
          w-full max-w-[300px] sm:max-w-[400px]
          rounded-[28px] sm:rounded-[40px]
          p-[1.5px]
          bg-gradient-to-br from-cyan-400/60 via-blue-500/40 to-pink-500/60
          shadow-[0_0_80px_rgba(34,211,238,0.2)]
        ">
                <div className="relative rounded-[27px] sm:rounded-[39px] bg-[#050e1a] p-3 sm:p-5 overflow-hidden">

                  {/* shimmer top */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

                  {/* mesh bg */}
                  <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: `radial-gradient(circle at 20% 20%, rgba(34,211,238,0.07) 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(236,72,153,0.07) 0%, transparent 50%)`
                  }}></div>

                  {/* top dots */}
                  <div className="relative z-10 flex items-center justify-between px-2 mb-3 sm:mb-4">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-[0_0_6px_rgba(248,113,113,0.7)]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.7)]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]"></span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping absolute"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 relative"></div>
                      <span className="text-[8px] sm:text-[9px] text-green-400 font-bold tracking-wider">AVAILABLE</span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative group overflow-hidden rounded-[20px] sm:rounded-[28px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <img
                      src="/my_image.png"
                      alt="Abhishek"
                      className="w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050e1a]/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-pink-400/20 to-transparent"></div>
                  </div>

                  {/* Name + Role */}
                  <div className="relative z-10 mt-3 sm:mt-4 flex flex-col items-center gap-2">
                    <p className="text-white font-black text-sm sm:text-base tracking-tight">Abhishek Vishvakarma</p>
                    <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-pink-500/10 border border-white/10">
                      <p className="text-[9px] sm:text-[10px] tracking-[2px] text-cyan-300 font-bold flex items-center gap-2">
                        <span>Full Stack Dev</span>
                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                        <span>AI Engineer</span>
                      </p>
                    </div>
                  </div>

                  {/* shimmer bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"></div>

                </div>
              </div>

              {/* Floating badges */}
              <div className="
          absolute -left-1 sm:-left-0 top-10 sm:top-20
          px-3 py-2 rounded-2xl
          bg-[#050e1a]/95 border border-cyan-400/30
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(34,211,238,0.15)]
          hover:scale-110 hover:border-cyan-400/60
          transition-all duration-300 z-20 group
        ">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]"></div>
                  <p className="text-cyan-300 text-[8px] sm:text-[10px] font-bold tracking-[2px]">MERN STACK</p>
                </div>
                <div className="mt-1 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500"></div>
              </div>

              <div className="
          absolute -right-4 sm:-right-8 bottom-12 sm:bottom-20
          px-3 py-2 rounded-2xl
          bg-[#050e1a]/95 border border-pink-400/30
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(236,72,153,0.15)]
          hover:scale-110 hover:border-pink-400/60
          transition-all duration-300 z-20 group
        ">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_rgba(236,72,153,0.8)]"></div>
                  <p className="text-pink-300 text-[8px] sm:text-[10px] font-bold tracking-[2px]">AI Engineer</p>
                </div>
                <div className="mt-1 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"></div>
              </div>

            </div>

            {/* RIGHT — CONTENT */}
            <div className="flex flex-col gap-5 sm:gap-6">

              {/* Main content card */}
              <div className="
          relative overflow-hidden
          rounded-[24px] sm:rounded-[32px]
          border border-white/10
          bg-white/4
          backdrop-blur-xl
          p-5 sm:p-8
        ">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

                <p className="text-xl sm:text-3xl md:text-4xl font-black leading-snug text-white">
                  Turning Ideas Into
                  <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                    {" "}Real Solutions
                  </span>
                </p>

                <p className="text-slate-400 text-sm sm:text-base leading-7 sm:leading-8 mt-4 sm:mt-5">
                  I love solving real-world problems using modern technologies. Every project
                  I build is crafted with performance, scalability, and user experience in mind.
                </p>

                <p className="text-slate-400 text-sm sm:text-base leading-7 sm:leading-8 mt-3 sm:mt-4">
                  My expertise includes MERN Stack, FastAPI, Docker, cloud deployment, and
                  building intelligent AI-powered applications that make a real difference.
                </p>

                {/* Skill tags */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-5 sm:mt-7 justify-items-center">
                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "FastAPI",
                    "MongoDB",
                    "Docker",
                    "AWS",
                    "OpenAI",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="
        w-full
        text-center
        px-3 sm:px-4 py-1.5 sm:py-2

        rounded-full
        bg-cyan-500/8
        border border-cyan-400/20

        text-cyan-300
        text-[10px] sm:text-xs
        font-semibold

        hover:bg-cyan-500/15
        hover:border-cyan-400/40
        hover:scale-105
        transition-all duration-300

        cursor-default
      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Mini info cards row */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">

                {[
                  { icon: "⚡", label: "Clean Code", desc: "Readable & scalable" },
                  { icon: "🚀", label: "Fast Delivery", desc: "On time, every time" },
                  { icon: "🤖", label: "AI Focused", desc: "LLM & ML integrations" },
                  { icon: "☁️", label: "Cloud Ready", desc: "Docker & AWS deploy" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                relative overflow-hidden
                rounded-2xl sm:rounded-3xl
                border border-white/8
                bg-white/3
                backdrop-blur-xl
                p-3 sm:p-5
                hover:border-cyan-400/25
                hover:bg-white/6
                transition-all duration-300
                group
              "
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    <div className="text-lg sm:text-2xl mb-2">{item.icon}</div>
                    <p className="text-white font-bold text-xs sm:text-sm">{item.label}</p>
                    <p className="text-slate-500 text-[10px] sm:text-xs mt-0.5">{item.desc}</p>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* =====================
        STATS
    ===================== */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 mt-14 sm:mt-20">
            {stats.map((item, i) => (
              <div
                key={i}
                className="
            relative overflow-hidden
            rounded-2xl sm:rounded-3xl
            border border-white/10
            bg-white/4
            backdrop-blur-xl
            p-4 sm:p-7
            text-center
            hover:border-cyan-400/25
            hover:bg-white/7
            transition-all duration-300
            group
          "
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/15 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <p className="text-2xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                  {item.number}
                </p>
                <p className="text-slate-400 text-[10px] sm:text-sm mt-2 sm:mt-3 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />

    </>

  );

}