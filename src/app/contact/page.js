import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {

  return (

    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden py-16 sm:py-24 px-4 sm:px-0">

        {/* Background Effects (smaller on mobile) */}
        <div className="absolute top-0 left-0 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-cyan-500/10 blur-[100px] sm:blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-indigo-500/10 blur-[100px] sm:blur-[140px] rounded-full"></div>

        <div className="container-width relative z-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">

            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-sky-400 text-xs sm:text-sm mb-4 sm:mb-5">
              Contact • Collaboration • Opportunities
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
              Let's <span className="gradient-text">Connect</span>
            </h1>

            <p className="text-slate-400 mt-5 sm:mt-8 text-sm sm:text-lg leading-relaxed sm:leading-8 px-2 sm:px-0">
              Open for freelance projects, full-time opportunities,
              AI integrations, backend systems and modern web applications.
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 mt-14 sm:mt-20 items-start">

            {/* LEFT */}
            <div className="space-y-6 sm:space-y-8">

              <div className="glass-card rounded-2xl sm:rounded-[30px] p-6 sm:p-8 border border-white/10">

                <h2 className="text-xl sm:text-3xl font-bold mb-6 text-white">
                  Contact Information
                </h2>

                <div className="space-y-5 sm:space-y-6">

                  {/* Email */}
                  <div className="flex items-start gap-4 sm:gap-5">

                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-500/10 flex items-center justify-center text-xl sm:text-2xl">
                      📧
                    </div>

                    <div className="min-w-0">
                      <p className="text-slate-400 text-xs sm:text-sm">Email</p>
                      <h3 className="text-sm sm:text-lg text-white font-medium break-all">
                        vishabhishek019@gmail.com
                      </h3>
                    </div>

                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 sm:gap-5">

                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-500/10 flex items-center justify-center text-xl sm:text-2xl">
                      📱
                    </div>

                    <div>
                      <p className="text-slate-400 text-xs sm:text-sm">Phone</p>
                      <h3 className="text-sm sm:text-lg text-white font-medium">
                        +91 9324393412
                      </h3>
                    </div>

                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4 sm:gap-5">

                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-pink-500/10 flex items-center justify-center text-xl sm:text-2xl">
                      💼
                    </div>

                    <div className="min-w-0">
                      <p className="text-slate-400 text-xs sm:text-sm">LinkedIn</p>
                      <h3 className="text-sm sm:text-lg text-white font-medium break-all">
                        linkedin.com/in/abhishek-vishvakarma-a55b45281
                      </h3>
                    </div>

                  </div>

                </div>
              </div>

              {/* Quote */}
              <div className="rounded-2xl sm:rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

                <h3 className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
                  Building modern digital products with clean UI,
                  scalable backend systems and AI integrations.
                </h3>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="
        rounded-2xl sm:rounded-[35px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-6 sm:p-10
        shadow-[0_10px_60px_rgba(15,23,42,0.4)]
      ">

              <h2 className="text-xl sm:text-3xl font-bold text-white mb-8 sm:mb-10">
                Send Message
              </h2>

              <form className="space-y-5 sm:space-y-6">

                {/* Inputs */}
                <input className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base outline-none focus:border-cyan-400" placeholder="Full Name" />

                <input className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base outline-none focus:border-cyan-400" placeholder="Email Address" />

                <textarea rows="5" className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-white text-sm sm:text-base outline-none resize-none focus:border-cyan-400" placeholder="Message"></textarea>

                {/* Button */}
                <button className="
            w-full py-3 sm:py-4
            rounded-xl
            bg-gradient-to-r from-cyan-500 to-blue-500
            text-white font-semibold
            text-sm sm:text-base
            hover:scale-[1.02]
            transition
          ">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>
      <Footer />
    </>

  );

}