import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import projects from "@/data/projects";

export default function ProjectsPage() {

  return (

    <>
      <Navbar />

      <section
        className="
    relative
    min-h-screen
    overflow-hidden

    pt-28
    sm:pt-32

    pb-16
    sm:pb-20

    px-4
    sm:px-0
  "
      >

        {/* Background */}
        <div className="absolute top-0 left-0 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-cyan-500/10 blur-[100px] sm:blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-indigo-500/10 blur-[100px] sm:blur-[140px] rounded-full"></div>

        <div className="container-width relative z-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">

            <div
              className="
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-full
    bg-cyan-500/10
    border
    border-cyan-400/20
    mb-6
    "
            >

              <div
                className="
      w-1.5
      h-1.5
      rounded-full
      bg-cyan-400
      animate-pulse
      shadow-[0_0_8px_rgba(34,211,238,0.8)]
      "
              />

              <p
                className="
      uppercase
      tracking-[4px]
      sm:tracking-[5px]
      text-cyan-400
      text-[10px]
      sm:text-xs
      font-semibold
      "
              >
                Developer • Innovation • Technology
              </p>

            </div>

            <h1
              className="
    text-3xl
    sm:text-5xl
    md:text-6xl
    font-black
    leading-tight
    "
            >
              Featured{" "}
              <span className="gradient-text">
                Projects
              </span>
            </h1>

            <p
              className="
    text-slate-400
    mt-5
    sm:mt-8
    text-sm
    sm:text-lg
    leading-7
    sm:leading-8
    max-w-3xl
    mx-auto
    px-2
    sm:px-0
    "
            >
              Real-world scalable applications built using
              MERN Stack, AI integrations,
              cloud deployment, Docker,
              and modern frontend systems.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8 mt-12 sm:mt-20">

            {projects.map((project, index) => (
              <div
                key={index}
                className="
            group relative overflow-hidden

            rounded-2xl sm:rounded-[38px]

            border border-white/10
            bg-[rgba(15,23,42,0.65)]
            backdrop-blur-2xl

            p-5 sm:p-8 md:p-10

            transition-all duration-700

            hover:-translate-y-2 sm:hover:-translate-y-5
            hover:border-cyan-400/40
            hover:shadow-[0_10px_60px_rgba(34,211,238,0.12)]
          "
              >

                {/* Glow */}
                <div className="
            absolute -top-16 -right-16
            w-32 sm:w-56 h-32 sm:h-56
            bg-cyan-500/10 blur-[90px] sm:blur-[120px]
            rounded-full
            opacity-0 group-hover:opacity-100
            transition
          "></div>

                {/* Index */}
                <div className="relative z-10 flex justify-between items-center">

                  <div className="
              text-3xl sm:text-6xl md:text-7xl
              font-black text-white/5
              group-hover:text-cyan-400/10
            ">
                    0{index + 1}
                  </div>

                  <div className="
              px-3 py-1 sm:px-5 sm:py-2
              rounded-full
              border border-cyan-400/20
              bg-cyan-500/10
              text-cyan-300
              text-[10px] sm:text-xs
              tracking-[2px]
              uppercase
            ">
                    Featured
                  </div>

                </div>

                {/* Content */}
                <div className="relative z-10 mt-4 sm:mt-8">

                  <h2 className="
              text-lg sm:text-2xl md:text-3xl
              font-black text-white
              group-hover:text-cyan-300
            ">
                    {project.title}
                  </h2>

                  <div className="mt-4 w-12 sm:w-20 h-[2px] sm:h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                  <p className="
              mt-4 sm:mt-8
              text-slate-400
              text-xs sm:text-[15px]
              leading-6 sm:leading-8
            ">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-10">

                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="
                    px-2 sm:px-4 py-1 sm:py-2
                    rounded-lg sm:rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    text-[10px] sm:text-sm
                    text-slate-300
                    hover:text-cyan-300
                  "
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-14 sm:mt-28 text-center px-4">

            <div className="
        inline-block w-full sm:w-auto

        rounded-2xl sm:rounded-[30px]

        border border-white/10
        bg-white/5
        backdrop-blur-xl

        px-5 sm:px-10
        py-8 sm:py-10

        max-w-2xl sm:max-w-4xl
      ">

              <h2 className="text-2xl sm:text-4xl font-black leading-snug">
                Want To Build{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Something Amazing?
                </span>
              </h2>

              <p className="text-slate-400 mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed">
                I build scalable web applications, AI systems, APIs and modern frontend experiences.
              </p>

              <a
                href="/contact"
                className="
            inline-flex mt-6 sm:mt-8

            px-6 sm:px-8 py-3 sm:py-4

            rounded-xl sm:rounded-2xl

            bg-gradient-to-r from-cyan-500 to-blue-500

            text-white font-semibold
            text-sm sm:text-base

            hover:scale-105
            transition
          "
              >
                Let's Connect
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>

  );

}