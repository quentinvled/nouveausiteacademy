export function Testimonial() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #060d1f 0%, #0b1a3d 45%, #1340a0 75%, #1E6BF1 100%)",
            boxShadow: "0 40px 100px rgba(30,107,241,0.25)",
          }}
        >
          {/* Grid lines background */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Big decorative quote mark */}
          <div
            className="absolute -top-6 -left-4 text-[220px] font-black leading-none select-none"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            “
          </div>

          {/* Right glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #60a5fa, transparent)",
            }}
          />

          <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center gap-12">
            {/* Left — avatar + meta */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black mx-auto md:mx-0 mb-4"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Z
              </div>
              <div className="font-bold text-white text-lg">Zaynab</div>
              <div className="text-white/50 text-sm mt-0.5">
                Étudiante en psychologie
              </div>
              <div className="text-white/30 text-xs mt-0.5">Promotion 2024</div>

              {/* Stars */}
              <div className="flex justify-center md:justify-start gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-32 bg-white/10 self-center" />

            {/* Right — quote */}
            <div className="flex-1">
              <svg className="w-10 h-10 text-white/20 mb-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed italic">
                “Une formation incroyablement enrichissante qui a dépassé toutes
                mes attentes. On ne nous forme pas juste à un métier,{" "}
                <span className="font-semibold not-italic text-blue-200">
                  on nous amène vers l’excellence.
                </span>
                ”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

