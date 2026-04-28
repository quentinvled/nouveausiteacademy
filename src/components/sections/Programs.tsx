"use client";

const programs = [
  {
    badge: "Psychologie",
    title: "Psychologie Positive",
    text: "Maîtrisez les fondements scientifiques du bonheur et de la résilience. Apprenez à cultiver le bien-être durable chez vos clients comme dans votre propre vie.",
    duration: "6 mois",
    level: "Tous niveaux",
    color: "#1E6BF1",
    light: "#EBF2FF",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    badge: "Hypnose",
    title: "Praticien en Hypnose",
    text: "Devenez expert en hypnose ericksonienne et accompagnez vos clients vers des changements profonds, durables et respectueux de leur êctre intérieur.",
    duration: "8 mois",
    level: "Intermédiaire",
    color: "#0369a1",
    light: "#e0f2fe",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    badge: "Bien-être",
    title: "Gestion du Stress & Burn-out",
    text: "Formez-vous à l’accompagnement des personnes en épuisement ou en surcharge émotionnelle, avec des protocoles concrets, éprouvés et immédiatement applicables.",
    duration: "4 mois",
    level: "Tous niveaux",
    color: "#0d47a1",
    light: "#e8eaf6",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export function Programs() {
  return (
    <section id="programmes" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
            Nos programmes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos programmes phares
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Chaque formation est conçue pour vous donner bien plus que des connaissances :
            une posture, une pratique et une identité professionnelle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
            >
              {/* Top color bar */}
              <div
                className="h-1.5 w-full"
                style={{ background: p.color }}
              />

              <div className="p-8 flex flex-col flex-1">
                {/* Icon + badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: p.light, color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: p.light, color: p.color }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                  {p.title}
                </h3>

                {/* Text */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                  {p.text}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {p.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {p.level}
                  </span>
                </div>

                {/* CTA */}
                <button
                  className="w-full py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 active:scale-[0.98] cursor-pointer"
                  style={{ background: p.color }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See all */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-[#1E6BF1] font-semibold text-sm hover:gap-3 transition-all duration-200 cursor-pointer">
            Voir tous nos programmes
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
