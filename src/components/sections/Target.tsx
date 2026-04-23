const targets = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Professionnels souhaitant se spécialiser",
    text: "Thérapeutes, coachs, médecins, infirmiers ou tout professionnel du soin désirant approfondir ses compétences.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Personnes en reconversion",
    text: "Vous souhaitez donner un nouveau sens à votre vie professionnelle en vous orientant vers l'accompagnement humain.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Managers et leaders",
    text: "Développez vos soft skills et votre intelligence émotionnelle pour mieux guider vos équipes et prévenir le burn-out.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: "Passionnés de développement personnel",
    text: "Pour toute personne désireuse de mieux se connaître, de travailler sur elle-même et d'accompagner son entourage.",
  },
];

export function Target() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
            À qui s'adresse So' Academy
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            À qui s'adressent nos formations&nbsp;?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Nos programmes sont conçus pour toute personne désireuse de
            progresser, se reconvertir ou accompagner les autres.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((t) => (
            <div
              key={t.title}
              className="group bg-gray-50 hover:bg-[#EBF2FF] rounded-3xl p-6 transition-all duration-300 hover:shadow-md border border-transparent hover:border-blue-100"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#1E6BF1] shadow-sm mb-5 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {t.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                {t.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
