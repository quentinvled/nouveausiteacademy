export function VideoSection() {
  return (
    <section id="video" className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-[#1E6BF1] bg-[#EBF2FF] mb-4">
            Présentation
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            So&apos; Academy en{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1E6BF1, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              quelques minutes
            </span>
          </h2>
          <p className="text-lg text-gray-500">
            Sophian Jouhari vous présente sa vision, sa méthode et ce qui rend cet écosystème unique.
          </p>
        </div>

        {/* Video embed */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ boxShadow: "0 32px 80px rgba(30,107,241,0.18)" }}
        >
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/tUPCLRg7w3w"
              title="So' Academy — Présentation par Sophian Jouhari"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
