"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const services = [
  {
    title: "Thérapie individuelle",
    text: "Un accompagnement personnalisé pour travailler sur vos émotions, vos blocages et votre développement personnel.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "#1E6BF1",
    light: "#EBF2FF",
    badge: "Individuel",
  },
  {
    title: "Thérapie de couple",
    text: "Un espace de dialogue pour améliorer la communication, résoudre les conflits et renforcer votre relation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "#7c3aed",
    light: "#f3f0ff",
    badge: "Couple",
  },
  {
    title: "Soutien psychologique",
    text: "Un accompagnement ponctuel pour vous aider à traverser une période difficile et retrouver de la clarté.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "#0369a1",
    light: "#e0f2fe",
    badge: "Soutien",
  },
];

const targets = [
  "Personnes confrontées à des périodes de vie difficiles (deuil, séparation, transition)",
  "Personnes souffrant d'anxiété, de stress ou de dépression",
  "Personnes confrontées à des phobies ou des blocages",
  "Couples souhaitant améliorer leur communication et leur relation",
  "Toute personne en quête de sens et d'équilibre",
];

const values = [
  { icon: "🔒", label: "Confidentialité totale" },
  { icon: "👂", label: "Écoute active et bienveillante" },
  { icon: "🕊️", label: "Respect de votre rythme" },
  { icon: "🤝", label: "Approche humaine et personnalisée" },
  { icon: "💛", label: "Accompagnement sans jugement" },
];

export default function SoTherapies() {
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
                "linear-gradient(135deg, #0a0518 0%, #160a30 35%, #230f4a 60%, #4c1d95 85%, #7c3aed 110%)",
            }}
          />
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
              animation: "pulse 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
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
                "linear-gradient(105deg, transparent 40%, #7c3aed 50%, transparent 60%)",
            }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-32 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-300" />
              </span>
              <span className="text-white/75 text-sm font-medium tracking-wide">
                Thérapie · So&apos; Thérapies
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              So&apos; Thérapie
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
            </div>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl font-semibold mb-5 leading-snug"
              style={{
                background:
                  "linear-gradient(90deg, #c4b5fd 0%, #a78bfa 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Parce que demander de l’aide est le premier acte de courage.
            </p>

            {/* Body */}
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Un espace d'écoute bienveillant, confidentiel et sans jugement, pour traverser ce que vous vivez et retrouver un chemin vers vous-même.
            </p>

            {/* CTA */}
            <a href="#accompagnements">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  boxShadow:
                    "0 8px 32px rgba(124,58,237,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                Prendre rendez-vous
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
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ color: "#7c3aed", background: "#f3f0ff" }}
            >
              Notre approche
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Un accompagnement qui part de vous
            </h2>
            <div className="space-y-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              <p>
                La thérapie n'est pas une faiblesse. C'est un choix lucide : prendre soin de soi avec le même sérieux qu'on accorde à sa santé physique.
              </p>
              <p>
                Chez So’ Thérapies, chaque séance est un espace où vous êtes pleinement accueilli, sans jugement, à votre rythme.
              </p>
              <p>
                Notre approche est adaptée à votre situation spécifique, dans un cadre éthique et professionnel.
              </p>
            </div>
          </div>
        </section>

        {/* ── POUR QUI ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                  style={{ color: "#7c3aed", background: "#f3f0ff" }}
                >
                  Public cible
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Pour tous ceux qui traversent quelque chose de difficile
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Vous n’avez pas besoin d’aller très mal pour chercher de l’aide. Il suffit de ressentir que quelque chose n’est plus en place.
                </p>
                <ul className="space-y-4">
                  {targets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "#f3f0ff" }}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: "#7c3aed" }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
                      "linear-gradient(135deg, #0a0518 0%, #7c3aed 100%)",
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
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <span className="text-white/70 text-sm font-medium">
                        Un espace pour vous
                      </span>
                    </div>
                    {[
                      { label: "Bien-être retrouvé", value: 94 },
                      { label: "Gestion des émotions", value: 89 },
                      { label: "Confiance en soi", value: 91 },
                      { label: "Clarté mentale", value: 87 },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-white/80">{label}</span>
                          <span className="text-white font-semibold">+{value}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white/70 rounded-full"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <p className="mt-4 text-xs text-white/40 text-center">
                      Amélioration moyenne constatée après accompagnement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="accompagnements" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                style={{ color: "#7c3aed", background: "#f3f0ff" }}
              >
                Services
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Nos accompagnements
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Nous proposons différents types de thérapies afin de répondre au mieux à vos besoins.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                >
                  <div className="h-1.5 w-full" style={{ background: s.color }} />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: s.light, color: s.color }}
                      >
                        {s.icon}
                      </div>
                      <span
                        className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: s.light, color: s.color }}
                      >
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{s.text}</p>
                    <button
                      className="w-full py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 active:scale-[0.98] cursor-pointer hover:opacity-90 hover:-translate-y-0.5"
                      style={{ background: s.color }}
                    >
                      En savoir plus →
                    </button>
                  </div>
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
                      "linear-gradient(135deg, #0a0518 0%, #230f4a 60%, #7c3aed 100%)",
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
                  <div className="relative z-10 space-y-4">
                    {[
                      { icon: "🌿", label: "Un cadre bienveillant et sécurisant" },
                      { icon: "🎧", label: "Écoute profonde et sans jugement" },
                      { icon: "🔑", label: "Des outils concrets et adaptés" },
                      { icon: "🌱", label: "Progression à votre rythme" },
                    ].map(({ icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                      >
                        <span className="text-2xl">{icon}</span>
                        <span className="text-white/80 font-medium text-sm">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
                  style={{ color: "#7c3aed", background: "#f3f0ff" }}
                >
                  Notre approche
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Un cadre où vous êtes vraiment écouté
                </h2>
                <div className="space-y-5 text-lg text-gray-500 leading-relaxed">
                  <p>
                    Nous créons d’abord une relation de confiance. Parce que rien de profond ne peut se construire sans sécurité émotionnelle.
                  </p>
                  <p>
                    Notre approche repose sur l&apos;écoute active, l&apos;empathie et une présence pleine, pour que vous puissiez avancer à votre rythme, sans jamais vous sentir jugé.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALEURS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ color: "#7c3aed", background: "#f3f0ff" }}
            >
              Nos valeurs
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 leading-tight">
              Un cadre sécurisant pour avancer
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {values.map(({ icon, label }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 bg-gray-50 hover:bg-[#f3f0ff] border border-gray-100 rounded-2xl px-5 py-4 transition-all duration-200 hover:border-violet-200 hover:shadow-sm text-left"
                >
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <span className="text-gray-700 font-medium text-sm leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-10"
              style={{ color: "#7c3aed", background: "#f3f0ff" }}
            >
              Témoignage
            </span>
            <div
              className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0a0518 0%, #7c3aed 100%)",
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
                Grâce à cet accompagnement, j&apos;ai pu mieux comprendre mes émotions et avancer avec plus de sérénité. Je me suis sentie écoutée, comprise et guidée avec bienveillance. Une véritable transformation.
              </blockquote>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-white/30" />
                <p className="text-white/70 text-sm font-semibold">Claire M.</p>
                <div className="h-px w-8 bg-white/30" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #0a0518 0%, #230f4a 40%, #7c3aed 100%)",
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
                  La première séance commence par un message
                </h2>
                <p className="text-white/60 text-lg mb-10">
                  Pas besoin de tout expliquer d’emblée. Nous prenons le temps de vous connaître, à votre rythme.
                </p>
                <button
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 hover:shadow-2xl"
                  style={{
                    background: "#ffffff",
                    color: "#7c3aed",
                    boxShadow: "0 8px 32px rgba(124,58,237,0.3)",
                  }}
                >
                  Réserver une séance
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
