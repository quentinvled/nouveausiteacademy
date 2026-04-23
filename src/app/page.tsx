import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { Pillars } from "@/components/sections/Pillars";
import { WhyUs } from "@/components/sections/WhyUs";
import { Programs } from "@/components/sections/Programs";
import { Target } from "@/components/sections/Target";
import { Philosophy } from "@/components/sections/Philosophy";
import { Testimonial } from "@/components/sections/Testimonial";
import { FAQ } from "@/components/ui/FAQ";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Vidéo */}
        <VideoSection />

        {/* 3. 3 Piliers */}
        <Pillars />

        {/* 4. Pourquoi So' Academy */}
        <WhyUs />

        {/* 5. Programmes phares */}
        <Programs />

        {/* 6. Cible */}
        <Target />

        {/* 7. Philosophie */}
        <Philosophy />

        {/* 8. Témoignage */}
        <Testimonial />

        {/* 9. FAQ */}
        <section id="faq" className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-lg text-gray-500">
                Tout ce que vous devez savoir avant de commencer.
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        {/* CTA finale */}
        <section className="py-28 bg-gray-50 overflow-hidden relative">
          {/* bg decoration */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 50%, #EBF2FF 0%, transparent 60%), radial-gradient(circle at 70% 50%, #dbeafe 0%, transparent 60%)",
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
                votre vie&nbsp;?
              </span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
              Rejoignez So&apos; Academy et faites partie de la prochaine promotion
              de praticiens d&apos;excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#piliers">
                <button
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base text-white transition-all duration-300 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "linear-gradient(135deg, #1E6BF1, #2563eb)",
                    boxShadow: "0 8px 32px rgba(30,107,241,0.45)",
                  }}
                >
                  Commencer maintenant
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
              <a href="#video">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-gray-600 border-2 border-gray-200 hover:border-[#1E6BF1] hover:text-[#1E6BF1] transition-all duration-200 cursor-pointer bg-white">
                  Voir la présentation
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
