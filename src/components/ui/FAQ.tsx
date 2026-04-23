"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const items: FAQItem[] = [
  {
    question: "Peut-on exercer à l'international ?",
    answer:
      "Oui, nos certifications sont reconnues à l'international. De nombreux diplômés exercent en Europe, en Amérique du Nord et en Afrique francophone. Nous vous accompagnons également dans les démarches administratives spécifiques à chaque pays.",
  },
  {
    question: "Y a-t-il un accompagnement après formation ?",
    answer:
      "Absolument. So' Academy propose un suivi post-formation avec accès à une communauté privée, des sessions de supervision mensuelles et un référencement professionnel dans notre annuaire de praticiens certifiés.",
  },
  {
    question: "Les cours sont-ils en ligne ou en présentiel ?",
    answer:
      "Nos formations sont disponibles à 100% en ligne, en format asynchrone avec des sessions live régulières. Des séminaires en présentiel sont organisés plusieurs fois par an pour les apprenants qui le souhaitent.",
  },
  {
    question: "Peut-on revoir les modules ?",
    answer:
      "Oui, vous bénéficiez d'un accès à vie à l'ensemble des modules de votre formation. Toutes les vidéos, ressources et exercices restent accessibles indéfiniment depuis votre espace personnel.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-2xl overflow-hidden bg-white transition-shadow hover:shadow-md"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left group cursor-pointer"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-900 text-base group-hover:text-[#1E6BF1] transition-colors">
              {item.question}
            </span>
            <span
              className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                open === i
                  ? "bg-[#1E6BF1] text-white rotate-45"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
