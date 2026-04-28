"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const axes = [
  {
    number: "01",
    title: "Équilibre émotionnel",
    text: "Apprenez à gérer le stress, la pression et les doutes pour rester maître de vos émotions dans les moments clés.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Optimisation de la performance",
    text: "Développez votre concentration, votre motivation et votre confiance pour atteindre vos objectifs les plus ambitieux.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Résilience et dépassement",
    text: "Renforcez votre mental pour rebondir après l'échec, surmonter les obstacles et repousser constamment vos limites.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const benefits = [
  "Une concentration renforcée",
  "Une meilleure gestion du stress et de la pression",
  "Une confiance durable en vos capacités",
  "Une régularité dans vos performances",
  "Une capacité à rebondir face aux échecs",
];

const targets = [
  "Atteindre leur plein potentiel et performer régulièrement",
  "Mieux gérer la pression des compétitions et des grands événements",
  "Développer une confiance solide en leurs capacités",
  "Surmonter les blocages mentaux et les baisses de motivation",
];

export default function SoPerformance() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #050b1a 0%, #0a1528 35%, #0e1f42 60%, #1a3a7a 85%, #1E6BF1 110%)",
            }}
          />
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #1E6BF1 0%, transparent 70%)",
              animation: "pulse 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
              animation: "pulse 8s ease-in-out infinite 2s",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, #1E6BF1 50%, transparent 60%)",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-32 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60a5fa]" />
              </span>
              <span className="text-white/75 text-sm font-medium tracking-wide">
                Performance · So&apos; Performance
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              So&apos; Performance
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#1E6BF1]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-semibold mb-5 leading-snug"
              style={{
                background:
                  "linear-gradient(90deg, #93c5fd 0%, #60a5fa 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              La différence entre un bon athlète et un grand athlète se joue dans la tête.
            </p>

            {/* Body */}
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Apprenez à transformer la pression en énergie, les doutes en détermination, et les obstacles en tremplins vers l’excellence.
            </p>

            {/* CTA */}
            <a href="#accompagnement">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #1E6BF1, #2563eb)",
                  boxShadow:
                    "0 8px 32px rgba(30,107,241,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                Accéder à la préparation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </section>

        {/* ── INTRODUCTION ── */}
        <section id="accompagnement" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
              Notre approche
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Le mental fait la différence
            </h2>
            <div className="space-y-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              <p>
                En compétition, les meilleurs athlètes ne sont pas forcément les plus talentueux physiquement. Ce sont ceux qui savent rester solides quand tout vacille.
              </p>
              <p>
                La préparation mentale n’est pas un luxe réservé aux pros. C’est un avantage stratégique accessible à tous ceux qui ont l’ambition de progresser vraiment.
              </p>
              <p>
                Chez So’ Performance, nous vous donnons les outils pour performer régulièrement, pas seulement les bons jours.
              </p>
            </div>
          </div>
        </section>

        {/* ── POUR QUI ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                  Public cible
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Pour les athlètes qui refusent de se limiter
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Notre accompagnement est fait pour ceux qui veulent aller plus loin que ce que leur mental leur permet aujourd&apos;hui.
                </p>
                <ul className="space-y-4">
                  {targets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF2FF] flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3.5 h-3.5 text-[#1E6BF1]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right visual */}
              <div className="relative hidden lg:block">
                <div
                  className="rounded-3xl p-10 text-white relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #0d1b3e 0%, #1E6BF1 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm font-medium">
                        Progression mentale
                      </span>
                    </div>
                    <div className="space-y-5">
                      {[
                        { label: "Gestion du stress", value: 92 },
                        { label: "Concentration", value: 87 },
                        { label: "Confiance en soi", value: 95 },
                        { label: "Régularité", value: 89 },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-white/80">{label}</span>
                            <span className="text-white font-semibold">
                              +{value}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-white/70 rounded-full"
                              style={{ width: `${value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-xs text-white/40 text-center">
                      Amélioration moyenne constatée après accompagnement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MÉTHODE ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                Méthode
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Nos axes d&apos;intervention
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Nous travaillons sur des piliers fondamentaux pour construire une performance mentale durable, adaptée à chaque athlète.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {axes.map((axe) => (
                <div
                  key={axe.title}
                  className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EBF2FF] text-[#1E6BF1] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {axe.icon}
                    </div>
                    <span className="text-5xl font-black text-gray-100 leading-none mt-1">
                      {axe.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                    {axe.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{axe.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPROCHE ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left visual */}
              <div className="relative hidden lg:block">
                <div
                  className="rounded-3xl p-10 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #060d1f 0%, #0b1735 60%, #1540a0 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="relative z-10 space-y-5">
                    {[
                      { icon: "🎯", label: "Objectifs personnalisés" },
                      { icon: "🧠", label: "Outils concrets & applicables" },
                      { icon: "🏅", label: "Adapté à votre discipline" },
                      { icon: "📈", label: "Suivi de votre progression" },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                      >
                        <span className="text-2xl">{icon}</span>
                        <span className="text-white/80 font-medium text-sm">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                  Notre approche
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Adapté à votre réalité de sportif
                </h2>
                <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
                  <p>
                    Chaque athlète évolue dans un contexte unique. Notre accompagnement est conçu sur-mesure, en fonction de votre discipline, votre niveau et les défis que vous traversez.
                  </p>
                  <p>
                    Nous ne plaquons pas de recettes génériques. Nous construisons avec vous des outils mentaux que vous pouvez activer immédiatement, en entraînement comme en compétition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BÉNÉFICES ── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
              Bénéfices
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 leading-tight">
              Ce que vous allez développer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="group flex items-center gap-3 bg-gray-50 hover:bg-[#EBF2FF] border border-gray-100 rounded-2xl px-5 py-4 transition-all duration-200 hover:border-[#1E6BF1]/20 hover:shadow-sm text-left"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#EBF2FF] group-hover:bg-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg
                      className="w-4 h-4 text-[#1E6BF1]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-10">
              Témoignage
            </span>
            <div
              className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0d1b3e 0%, #1E6BF1 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <svg
                className="w-10 h-10 text-white/20 mx-auto mb-6 relative z-10"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
              </svg>
              <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                L&apos;accompagnement avec Sophian a transformé mon approche de la compétition. J&apos;ai appris à maîtriser ma concentration et à transformer la pression en énergie positive. C&apos;est un véritable tournant dans ma carrière.
              </blockquote>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-white/30" />
                <p className="text-white/70 text-sm font-semibold">
                  Alex R., tennisman professionnel
                </p>
                <div className="h-px w-8 bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* ── POSITIONNEMENT ── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
              Positionnement
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Ce n’est pas du talent, c’est du travail mental
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
              À haut niveau, quelques centièmes séparent les champions. Ce qui fait la différence, c&apos;est votre capacité à garder la tête froide quand la pression monte, à rester concentré quand tout déraille.
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Un mental entraîné est votre avantage le plus décisif.
            </p>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #060d1f 0%, #0b1735 40%, #1E6BF1 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Passez au niveau supérieur
                </h2>
                <p className="text-white/60 text-lg mb-10">
                  Investissez dans votre préparation mentale et libérez votre plein potentiel.
                </p>
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-[#1E6BF1] bg-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 hover:shadow-2xl"
                  style={{ boxShadow: "0 8px 32px rgba(30,107,241,0.3)" }}
                >
                  Commencer l&apos;accompagnement
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
