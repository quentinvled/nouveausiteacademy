const values = [
  {
    number: "01",
    title: "L'humain au centre",
    text: "Chaque apprenant est unique. Nos formations sont pensées pour respecter le rythme, les besoins et les aspirations de chacun.",
  },
  {
    number: "02",
    title: "L'excellence sans compromis",
    text: "Nous exigeons le meilleur de nos formateurs comme de nos apprenants. La qualité n'est pas une option, c'est une promesse.",
  },
  {
    number: "03",
    title: "La pratique avant tout",
    text: "Nos formations intègrent des mises en situation réelles, des supervisions et des outils directement applicables sur le terrain.",
  },
  {
    number: "04",
    title: "Le savoir-être",
    text: "Au-delà des compétences techniques, nous cultivons la posture, l'écoute, la bienveillance et l'éthique professionnelle.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophie" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
              Notre ADN
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Notre philosophie{" "}
              <span className="text-[#1E6BF1]">pédagogique</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Formation orientée humain, excellence, pratique et savoir-être.
              Une approche qui va bien au-delà de la simple transmission de
              connaissances — nous façonnons des praticiens d'exception.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E6BF1] text-white font-semibold text-sm hover:bg-[#155fd8] transition-colors shadow-md hover:shadow-lg cursor-pointer">
              Notre approche en détail
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right — values */}
          <div className="space-y-4">
            {values.map((v) => (
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
  );
}
