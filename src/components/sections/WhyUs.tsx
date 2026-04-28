const advantages = [
  {
    icon: "🎓",
    title: "Enseignement par des experts",
    text: "Nos formateurs sont des praticiens reconnus avec une expérience terrain de plusieurs années.",
  },
  {
    icon: "✅",
    title: "Garantie de réussite",
    text: "Un suivi personnalisé et des ressources illimitées jusqu’à votre certification.",
  },
  {
    icon: "♾️",
    title: "Accès à vie aux formations",
    text: "Rejoignez votre espace une fois, bénéficiez des mises à jour et des contenus pour toujours.",
  },
  {
    icon: "🤝",
    title: "Supervision pendant et après",
    text: "Sessions de supervision régulières pour affiner votre pratique et progresser en confiance.",
  },
  {
    icon: "🚀",
    title: "Accompagnement au lancement",
    text: "Nous vous guidons dans la création de votre activité professionnelle dès la fin de la formation.",
  },
  {
    icon: "🏅",
    title: "Certification reconnue",
    text: "Nos certifications sont reconnues en France et à l'international par les organismes professionnels.",
  },
  {
    icon: "📋",
    title: "Référencement professionnel",
    text: "Intégrez notre annuaire de praticiens et bénéficiez de visibilité auprès de milliers de clients.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
              Pourquoi nous choisir
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ce qui rend{" "}
              <span className="text-[#1E6BF1]">So&apos; Academy unique</span>
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Nous n’avons pas construit une école de plus. Nous avons conçu un
              écosystème où chaque détail : le contenu, le suivi, la communauté.
              Tout est pensé pour faire de vous un praticien d'exception.
            </p>
            {/* Advantages list */}
            <div className="space-y-4">
                {advantages.map((adv) => (
                  <div
                    key={adv.title}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#EBF2FF] flex items-center justify-center text-lg group-hover:bg-[#1E6BF1] group-hover:scale-110 transition-all duration-200">
                      {adv.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {adv.title}
                      </div>
                      <div className="text-gray-500 text-sm leading-relaxed mt-0.5">
                        {adv.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            
          </div>

          {/* Right — visual card */}
          <div className="relative hidden lg:block">
            <div
              className="rounded-3xl p-10 text-white relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0d1b3e 0%, #1E6BF1 100%)",
              }}
            >
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10">
                <div className="text-6xl font-black mb-2">500+</div>
                <div className="text-white/70 text-lg mb-8">
                  Praticiens certifiés dans le monde
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "97%", l: "Taux de satisfaction" },
                    { n: "3 ans", l: "D'expérience" },
                    { n: "7", l: "Programmes disponibles" },
                    { n: "24/7", l: "Accès aux ressources" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold">{s.n}</div>
                      <div className="text-white/60 text-xs mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Shadow decoration */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10 opacity-20"
              style={{ background: "#1E6BF1" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
