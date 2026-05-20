'use client';

import { useEffect, useRef, useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import skills from '@/data/skills';

export default function Skills() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [gridView, setGridView] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (selectedSkill) {
      setCountdown(20);
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setSelectedSkill(null);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedSkill]);

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-pink-500/10 blur-[120px] rounded-full"></div>

      <div className="container-width relative z-10">
        {/* Heading */}
        <SectionTitle
          title="Technical Skills"
          subtitle="Interactive Tech Stack"
        />

        {/* =========================
            BACK BUTTON — outside grid
        ========================= */}
        {gridView && (
          <div className="flex justify-center mt-8 mb-6">
            <button
              onClick={() => {
                setGridView(false);
                setSelectedSkill(null);
              }}
              className="
                relative
                px-5 sm:px-6
                py-2.5 sm:py-3
                rounded-full
                bg-gradient-to-r from-[#00f5ff] via-[#3b82f6] to-[#a855f7]
                text-white
                font-semibold
                text-sm sm:text-base
                shadow-[0_0_25px_rgba(0,245,255,0.35)]
                hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]
                transition-all duration-300
                hover:scale-105
                backdrop-blur-xl
                border border-white/10
              "
            >
              ← Back To Orbit
            </button>
          </div>
        )}

        {/* =========================
    ORBIT / GRID WRAPPER
========================= */}
        <div
          className={`
  relative transition-all duration-1000
  ${
    gridView
      ? `
        grid
        grid-cols-3
        sm:grid-cols-4
        md:grid-cols-5
        lg:grid-cols-6
        gap-2 sm:gap-3
        justify-items-center
        items-center
        w-full
        mt-4
      `
      : `
        flex
        items-center
        justify-center
        min-h-[420px] sm:min-h-[600px] lg:min-h-[750px]
      `
  }
`}
        >
          {/* =========================
      ORBIT VIEW
  ========================= */}
          {!gridView && (
            <>
              {/* Center Core */}
              <button
                onClick={() => setGridView(true)}
                className={`
          absolute z-30
          w-[130px] h-[130px]
          sm:w-[170px] sm:h-[170px]
          rounded-full
          bg-gradient-to-br from-cyan-500 via-blue-500 to-pink-500
          flex items-center justify-center
          shadow-[0_0_100px_rgba(34,211,238,0.45)]
          transition-all duration-700
          hover:scale-110
          cursor-pointer
          ${visible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
        `}
              >
                <div
                  className="
          w-[105px] h-[105px]
          sm:w-[140px] sm:h-[140px]
          rounded-full bg-[#07111f]
          border border-white/10
          flex items-center justify-center text-center
        "
                >
                  <h2 className="text-white font-black text-lg sm:text-2xl leading-7">
                    MY <br /> SKILLS
                  </h2>
                </div>
              </button>

              {/* Orbit Ring */}
              <div
                className={`
        absolute rounded-full
        border border-cyan-400/10
        animate-spin-slow
        ${isMobile ? 'w-[320px] h-[320px]' : 'w-[620px] h-[620px]'}
      `}
              ></div>
            </>
          )}

          {/* =========================
      SKILLS
  ========================= */}
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const radius = isMobile ? 145 : 290;

            return (
              <div
                key={index}
                className={`
          ${gridView ? 'relative' : 'absolute'}
          transition-all duration-1000
          group
          ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
                style={
                  gridView
                    ? {}
                    : {
                        transform: `
                  rotate(${angle}deg)
                  translate(${radius}px)
                  rotate(-${angle}deg)
                `,
                        transitionDelay: `${index * 120}ms`,
                      }
                }
              >
                {/* CARD */}
                <div
                  onClick={() => setSelectedSkill(skill)}
                  className="
            relative overflow-hidden
            rounded-2xl
            border border-white/10
            bg-gradient-to-b from-white/8 to-white/3
            backdrop-blur-xl
            flex flex-col items-center justify-center
            p-3 sm:p-4

            w-[90px] h-[95px]
            sm:w-[110px] sm:h-[115px]
            md:w-[125px] md:h-[130px]

            shadow-[0_4px_20px_rgba(0,0,0,0.3)]
            transition-all duration-400
            cursor-pointer

            hover:scale-105
            hover:-translate-y-1.5
            hover:border-cyan-400/50
            hover:bg-gradient-to-b hover:from-cyan-500/15 hover:to-blue-500/5
            hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)]
          "
                >
                  {/* Top shine line */}
                  <div
                    className="
            absolute top-0 left-4 right-4 h-[1px]
            bg-gradient-to-r from-transparent via-white/30 to-transparent
          "
                  ></div>

                  {/* Hover glow overlay */}
                  <div
                    className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition duration-400
            bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10
          "
                  ></div>

                  {/* Corner accent */}
                  <div
                    className="
            absolute top-2 right-2
            w-1 h-1 rounded-full
            bg-cyan-400/0
            group-hover:bg-cyan-400/80
            transition-all duration-300
          "
                  ></div>

                  {/* IMAGE */}
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="
              relative z-10
              w-9 h-9
              sm:w-12 sm:h-12
              md:w-14 md:h-14
              object-contain
              transition-all duration-400
              group-hover:scale-115
              drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]
            "
                  />

                  {/* NAME */}
                  <p
                    className="
            relative z-10
            text-[9px] sm:text-[11px] md:text-xs
            text-slate-300
            group-hover:text-white
            font-semibold
            mt-2.5 text-center leading-tight
            transition-colors duration-300
          "
                  >
                    {skill.name}
                  </p>

                  {/* Bottom glow bar on hover */}
                  <div
                    className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            h-[2px] w-0
            group-hover:w-3/4
            rounded-full
            bg-gradient-to-r from-cyan-400 to-pink-400
            transition-all duration-500
          "
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================
      POPUP
========================= */}
      {selectedSkill && (
        <div
          className="
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/70 backdrop-blur-md
      px-3 sm:px-5
      pointer-events-auto
    "
          onClick={() => setSelectedSkill(null)} // outside click close
        >
          <div
            className="
        relative w-full
        max-w-sm sm:max-w-lg md:max-w-2xl
        rounded-3xl sm:rounded-[35px]
        border border-white/10
        bg-[#07111f]/95
        backdrop-blur-2xl
        p-5 sm:p-8 md:p-10
        shadow-[0_0_60px_rgba(34,211,238,0.2)]
        overflow-hidden
        pointer-events-auto
      "
            onClick={(e) => e.stopPropagation()} // prevent close on card click
          >
            {/* Glow (FIXED) */}
            <div className="absolute -top-16 -right-16 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-16 -left-16 w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            {/* CLOSE BUTTON (FIXED) */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="
          absolute top-4 right-4 z-[1000]
          w-10 h-10
          rounded-full
          bg-white/10 border border-white/10
          text-white
          hover:bg-red-500
          transition
        "
            >
              ✕
            </button>

            {/* CONTENT */}
            <div className="relative z-10">
              {/* ICON */}
              <div
                className="
          w-16 h-16 sm:w-24 sm:h-24
          rounded-2xl sm:rounded-3xl
          bg-white/5 border border-white/10
          flex items-center justify-center
        "
              >
                <img
                  src={selectedSkill.image}
                  alt={selectedSkill.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                />
              </div>

              {/* TITLE */}
              <h2
                className="
          text-xl sm:text-3xl md:text-4xl
          font-black text-white
          mt-5 sm:mt-8
        "
              >
                {selectedSkill.name}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
          text-slate-400
          text-sm sm:text-base md:text-lg
          leading-relaxed sm:leading-8
          mt-4 sm:mt-6
        "
              >
                {selectedSkill.description}
              </p>

              {/* COUNTDOWN */}
              <div
                className="
          mt-6 sm:mt-8
          inline-flex items-center gap-2 sm:gap-3
          px-4 sm:px-5 py-2 sm:py-3
          rounded-xl sm:rounded-2xl
          bg-cyan-500/10
          border border-cyan-400/20
        "
              >
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-400 animate-pulse"></div>
                <p className="text-cyan-300 text-xs sm:text-sm font-medium">
                  Auto closing in {countdown}s
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
