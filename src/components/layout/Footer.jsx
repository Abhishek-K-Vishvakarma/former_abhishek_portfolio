export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#020617]">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_60%)]"></div>

      <div className="container-width relative z-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LEFT TEXT */}
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2026{' '}
            <span className="text-white font-semibold">
              Abhishek Vishvakarma
            </span>
            . All rights reserved.
          </p>

          {/* LINKS */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
            {[
              { name: 'GitHub', link: '#' },
              { name: 'LinkedIn', link: '#' },
              { name: 'Email', link: '#' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="
                  relative
                  px-4 py-2
                  rounded-full

                  text-sm text-slate-300

                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl

                  transition-all duration-300

                  hover:text-white
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
                  hover:-translate-y-1
                "
              >
                {item.name}

                {/* Hover glow line */}
                <span
                  className="
                  absolute inset-0 rounded-full opacity-0 hover:opacity-100
                  bg-gradient-to-r from-cyan-500/10 to-pink-500/10
                  transition
                "
                ></span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex justify-center">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Small note */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Engineered with ❤️ using Next.js, Tailwind CSS & AI Innovation 🤖✨
        </p>
      </div>
    </footer>
  );
}
