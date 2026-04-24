export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #060d1f 0%, #0b1735 35%, #0f2452 60%, #1540a0 85%, #1E6BF1 110%)",
        }}
      />

      {/* Animated glow blobs */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, #1E6BF1 0%, transparent 70%)",
          animation: "pulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
          animation: "pulse 8s ease-in-out infinite 2s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, transparent 60%)",
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal light streak */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, #1E6BF1 50%, transparent 60%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60a5fa]" />
          </span>
          <span className="text-white/75 text-sm font-medium tracking-wide">
            Sophian Jouhari — Psychologue & Formateur Expert
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          <span className="block">Accompagner,</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #93c5fd 0%, #60a5fa 40%, #1E6BF1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Former,
          </span>
          <span className="block">Soutenir</span>
        </h1>

        {/* Divider line */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1E6BF1]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          La mission de Sophian Jouhari : vous guider dans votre développement
          personnel et mental, vers une vie plus épanouie et performante.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-0 max-w-lg mx-auto border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm bg-white/5 mb-12">
          {[
            { value: "500+", label: "Diplômés" },
            { value: "3", label: "Expertises" },
            { value: "97%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 text-center ${i < 2 ? "border-r border-white/10" : ""}`}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{
                  background: "linear-gradient(180deg, #ffffff, #93c5fd)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#piliers">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "linear-gradient(135deg, #1E6BF1, #2563eb)",
                boxShadow: "0 8px 32px rgba(30,107,241,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Découvrir nos activités
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
          <a href="#video">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white/85 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-200 cursor-pointer backdrop-blur-sm">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/15">
                <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Voir la présentation
            </button>
          </a>
        </div>
      </div>

    </section>
  );
}

