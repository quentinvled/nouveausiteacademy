"use client";

import Link from "next/link";

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    number: "01",
    tag: "Formation",
    title: "So' Academy",
    text: "Formations d'excellence en psychologie et développement personnel. Devenez praticien certifié et accompagnez vos clients vers la transformation.",
    cta: "Découvrir les formations",
    href: "/formations/so-academy",
    gradient: "linear-gradient(135deg, #1E6BF1 0%, #3b82f6 100%)",
    shadow: "rgba(30,107,241,0.35)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    number: "02",
    tag: "Performance",
    title: "So' Performance",
    text: "Accompagnement mental pour sportifs visant la haute performance. Libérez votre potentiel psychologique pour atteindre vos sommets.",
    cta: "Accéder à la préparation",
    href: undefined,
    gradient: "linear-gradient(135deg, #0d47a1 0%, #1565c0 100%)",
    shadow: "rgba(13,71,161,0.35)",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    number: "03",
    tag: "Thérapie",
    title: "So’Therapies",
    text: "Soutien psychologique et accompagnement vers le bien-être. Un espace bienveillant pour traverser vos épreuves et retrouver l'équilibre.",
    cta: "Découvrir l'accompagnement",    href: undefined,    gradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
    shadow: "rgba(3,105,161,0.35)",
  },
];

export function Pillars() {
  return (
    <section id="piliers" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
            Nos activités
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Trois expertises,{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1E6BF1, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              une vision commune
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Former des praticiens d&apos;exception, élever des sportifs vers leurs sommets,
            accompagner des êmes vers la guérison. Trois chemins, une seule ambition.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${p.shadow}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* Gradient top banner */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden"
                style={{ background: p.gradient }}
              >
                {/* Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                {/* Number */}
                <span
                  className="absolute top-4 right-5 text-6xl font-black opacity-15 text-white leading-none select-none"
                >
                  {p.number}
                </span>
                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  {p.tag}
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm flex-1 mb-8">
                  {p.text}
                </p>

                {/* CTA */}
                {p.href ? (
                  <Link href={p.href}>
                    <button
                      className="w-full py-3.5 px-6 rounded-2xl font-semibold text-sm text-white transition-all duration-200 active:scale-[0.98] cursor-pointer hover:opacity-90 hover:-translate-y-0.5"
                      style={{ background: p.gradient }}
                    >
                      {p.cta} →
                    </button>
                  </Link>
                ) : (
                  <button
                    className="w-full py-3.5 px-6 rounded-2xl font-semibold text-sm text-white transition-all duration-200 active:scale-[0.98] cursor-pointer hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: p.gradient }}
                  >
                    {p.cta} →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
