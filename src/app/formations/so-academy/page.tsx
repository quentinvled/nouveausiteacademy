"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const programs = [
  {
    badge: "Psychologie",
    title: "Psychologie Positive",
    text: "Apprenez les fondements de la psychologie positive et comment les appliquer dans votre vie et votre travail pour cultiver le bien-être.",
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
    text: "Devenez praticien en hypnose Ericksonienne certifié et accompagnez les autres vers un changement durable et profond.",
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
    text: "Maîtrisez des techniques efficaces pour gérer le stress, prévenir le burn-out et améliorer votre résilience au quotidien.",
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

const faqItems = [
  {
    question: "Puis-je exercer à l'international avec cette certification ?",
    answer: "Notre centre est accrédité officiellement, ce qui permet une reconnaissance de votre certificat à l'international.",
  },
  {
    question: "Y a-t-il un accompagnement après la formation ?",
    answer: "Oui, une supervision est assurée pendant et après la formation afin de vous accompagner dans votre évolution.",
  },
  {
    question: "Les cours sont-ils en ligne ou en présentiel ?",
    answer: "La partie théorique est accessible en ligne. Certaines pratiques peuvent être proposées en présentiel selon les sessions.",
  },
  {
    question: "Puis-je revoir les modules après la formation ?",
    answer: "Vous bénéficiez d'un accès permanent aux contenus ainsi que de la possibilité de revenir sur certaines sessions.",
  },
];

export default function FormationSoAcademy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                "linear-gradient(135deg, #060d1f 0%, #0b1735 35%, #0f2452 60%, #1540a0 85%, #1E6BF1 110%)",
            }}
          />
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #1E6BF1 0%, transparent 70%)", animation: "pulse 6s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)", animation: "pulse 8s ease-in-out infinite 2s" }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute inset-0 opacity-10"
            style={{ background: "linear-gradient(105deg, transparent 40%, #1E6BF1 50%, transparent 60%)" }}
          />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-32 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#60a5fa]" />
              </span>
              <span className="text-white/75 text-sm font-medium tracking-wide">
                Formation · So&apos; Academy
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              So&apos; Academy
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
                background: "linear-gradient(90deg, #93c5fd 0%, #60a5fa 50%, #ffffff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Des formations certifiantes pour devenir le professionnel que vous avez toujours voulu être.
            </p>

            {/* Body */}
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Maîtrisez les outils de la psychologie, de l&apos;hypnose et du développement personnel. Construisez une pratique solide, éthique et reconnue.
            </p>

            {/* CTA */}
            <a href="#programmes">
              <button
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #1E6BF1, #2563eb)",
                  boxShadow: "0 8px 32px rgba(30,107,241,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                }}
              >
                Découvrir les formations
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </a>
          </div>
        </section>

        {/* ── INTRODUCTION ── */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
              Notre approche
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Bien plus qu&apos;une formation
            </h2>
            <div className="space-y-5 text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
              <p>
                À So&apos; Academy, nous ne transmettons pas un programme. Nous créons les conditions d’une vraie transformation.
              </p>
              <p>
                Chaque module allie rigueur scientifique, pratique encadrée et développement personnel, pour que vous sortiez de la formation non seulement compétent, mais profondément avancé.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROGRAMMES PHARES ── */}
        <section id="programmes" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                Nos programmes
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Nos programmes phares
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Chaque formation est conçue pour vous donner une posture, une pratique
                et une identité professionnelle, pas seulement un diplôme.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((p) => (
                <div
                  key={p.title}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                >
                  <div className="h-1.5 w-full" style={{ background: p.color }} />
                  <div className="p-8 flex flex-col flex-1">
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
                    <h3 className="text-xl font-extrabold text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{p.text}</p>
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
                    <button
                      className="w-full py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 active:scale-[0.98] cursor-pointer hover:opacity-90 hover:-translate-y-0.5"
                      style={{ background: p.color }}
                    >
                      En savoir plus →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POUR QUI ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                  Public cible
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Cette formation est faite pour vous
                </h2>
                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                  Que vous partiez de zéro ou que vous cherchiez à approfondir votre expertise, nos parcours s&apos;adaptent à votre profil et à vos ambitions.
                </p>
                <ul className="space-y-4">
                  {[
                    "Professionnels du soin et de l’accompagnement",
                    "Personnes en reconversion professionnelle",
                    "Managers souhaitant développer leur intelligence émotionnelle",
                    "Passionnés de psychologie et de développement personnel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF2FF] flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-[#1E6BF1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                  style={{ background: "linear-gradient(135deg, #0d1b3e 0%, #1E6BF1 100%)" }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10">
                    <div className="text-5xl font-black mb-2">500+</div>
                    <div className="text-white/70 text-base mb-8">Praticiens formés dans le monde</div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { n: "97%", l: "Taux de satisfaction" },
                        { n: "3+", l: "Années d'expérience" },
                        { n: "7", l: "Programmes disponibles" },
                        { n: "24/7", l: "Accès aux ressources" },
                      ].map((s) => (
                        <div key={s.l} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                          <div className="text-2xl font-bold">{s.n}</div>
                          <div className="text-white/60 text-xs mt-1">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10 opacity-20"
                  style={{ background: "#1E6BF1" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── MÉTHODE ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                Notre méthode
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Une méthode structurée pour votre réussite
              </h2>
              <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Nos formations reposent sur une approche complète qui vous permet de progresser à votre rythme tout en développant des compétences concrètes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { n: "01", title: "Un enseignement par des experts du domaine", icon: "🎓" },
                { n: "02", title: "Une approche centrée sur la pratique et les cas réels", icon: "🔬" },
                { n: "03", title: "Un accompagnement tout au long de votre formation", icon: "🤝" },
                { n: "04", title: "Une montée en compétences progressive et structurée", icon: "📈" },
              ].map((item) => (
                <div
                  key={item.n}
                  className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-[#EBF2FF] transition-colors leading-none block mb-3">
                    {item.n}
                  </span>
                  <p className="text-gray-700 font-medium leading-relaxed text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AVANTAGES ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                Avantages
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Pourquoi choisir So&apos; Academy&nbsp;?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "♾️", title: "Accès à vie à votre formation", text: "Revenez sur vos contenus quand vous le souhaitez, indéfiniment." },
                { icon: "🤝", title: "Supervision pendant et après", text: "Sessions de supervision régulières pour affiner votre pratique et progresser en confiance." },
                { icon: "👁️", title: "Observation de séances réelles", text: "Possibilité d'observer des séances réelles menées par des praticiens experts." },
                { icon: "🚀", title: "Accompagnement au lancement", text: "Nous vous guidons dans la création de votre activité professionnelle dès la fin de la formation." },
                { icon: "🏅", title: "Certification reconnue à l'international", text: "Nos certifications sont reconnues en France et à l'international par les organismes professionnels." },
                { icon: "📋", title: "Intégration dans un réseau professionnel", text: "Rejoignez notre réseau de praticiens et bénéficiez de visibilité auprès de milliers de clients." },
              ].map((adv) => (
                <div
                  key={adv.title}
                  className="group flex items-start gap-4 bg-gray-50 rounded-2xl p-6 hover:bg-[#EBF2FF] transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-200">
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-sm">{adv.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{adv.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHIE ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                  Notre ADN
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Notre philosophie{" "}
                  <span className="text-[#1E6BF1]">pédagogique</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-500 leading-relaxed">
                  <p>Nous formons des praticiens compétents, éthiques et prêts à faire une différence.</p>
                  <p>
                    Au-delà des connaissances, nous mettons l&apos;accent sur le savoir-être, l&apos;écoute et la capacité à accompagner chaque individu avec justesse.
                  </p>
                  <p>
                    Notre objectif est de vous permettre de devenir un professionnel aligné, confiant et efficace dans votre pratique.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { number: "01", title: "L'humain au centre", text: "Chaque apprenant est unique. Nos formations respectent votre rythme, vos besoins et vos aspirations." },
                  { number: "02", title: "L'excellence sans compromis", text: "Nous exigeons le meilleur de nos formateurs comme de nos apprenants. La qualité est une promesse." },
                  { number: "03", title: "La pratique avant tout", text: "Mises en situation réelles, supervisions et outils directement applicables sur le terrain." },
                  { number: "04", title: "Le savoir-être", text: "Posture, écoute, bienveillance et éthique professionnelle au cœur de chaque programme." },
                ].map((v) => (
                  <div
                    key={v.number}
                    className="flex gap-5 items-start group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                  >
                    <span className="text-3xl font-black text-gray-100 group-hover:text-[#1E6BF1] transition-colors duration-200 flex-shrink-0 leading-none">
                      {v.number}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TÉMOIGNAGE ── */}
        <section className="py-28 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                Témoignage
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900">Ce que disent nos apprenants</h2>
            </div>

            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #060d1f 0%, #0b1a3d 45%, #1340a0 75%, #1E6BF1 100%)",
                boxShadow: "0 40px 100px rgba(30,107,241,0.25)",
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
              <div
                className="absolute -top-6 -left-4 text-[220px] font-black leading-none select-none"
                style={{ color: "rgba(255,255,255,0.04)" }}
              >
                &ldquo;
              </div>
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }}
              />

              <div className="relative z-10 p-12 md:p-16 flex flex-col md:flex-row items-center gap-12">
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
                  <div className="text-white/50 text-sm mt-0.5">Étudiante en psychologie</div>
                  <div className="flex justify-center md:justify-start gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block w-px h-32 bg-white/10 self-center" />

                <div className="flex-1">
                  <svg className="w-10 h-10 text-white/20 mb-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed italic">
                    &ldquo;Une formation incroyablement enrichissante qui a dépassé toutes mes attentes. La pédagogie et l&apos;approche sont remarquables.{" "}
                    <span className="font-semibold not-italic text-blue-200">
                      On ne nous forme pas simplement à un métier, on nous amène vers l&apos;excellence.
                    </span>
                    &rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-500">Tout ce que vous devez savoir avant de commencer.</p>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-shadow hover:shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-gray-900 text-base group-hover:text-[#1E6BF1] transition-colors">
                      {item.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        openFaq === i ? "bg-[#1E6BF1] text-white rotate-45" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-28 bg-gray-50 overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, #EBF2FF 0%, transparent 60%), radial-gradient(circle at 70% 50%, #dbeafe 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-6">
              Rejoignez-nous
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Prêt à transformer{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #1E6BF1, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                votre avenir&nbsp;?
              </span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
              Rejoignez So&apos; Academy et développez des compétences qui auront un impact réel sur votre vie et celle des autres.
            </p>
            <a href="#programmes">
              <button
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                style={{
                  background: "linear-gradient(135deg, #1E6BF1, #2563eb)",
                  boxShadow: "0 8px 32px rgba(30,107,241,0.45)",
                }}
              >
                Accéder aux formations
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
