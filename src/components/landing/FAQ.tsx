const faqs = [
  {
    question: "Why does black mold keep returning to my window sills?",
    answer: "In Duvall, the temperature difference between outdoor air and indoor heating creates condensation on glass. This water pools on the sill, feeding mold. Permanent removal requires addressing the thermal bridging and applying antimicrobial barriers, not just wiping the surface."
  },
  {
    question: "Is the black mold on my windows toxic?",
    answer: "Many varieties of black mold found on window sills, including Stachybotrys, can produce mycotoxins. These can trigger respiratory issues, especially in children. We recommend professional extraction rather than 'bleaching,' which often leaves the root structure intact."
  },
  {
    question: "Can't I just use bleach to clean the window sill?",
    answer: "Bleach is mostly water; while it may change the color of the mold on the surface, the moisture can actually feed the roots (hyphae) inside porous wood sills. We use industrial-grade, non-toxic fungicides that penetrate the wood to kill the colony at its source."
  },
  {
    question: "Will you need to replace my window frames?",
    answer: "In 90% of cases, we can save the window frames and sills through our deep-extraction and sealing process. We only recommend replacement if the wood has sustained significant structural rot that compromises the window's integrity."
  },
  {
    question: "How long does the window remediation process take?",
    answer: "Most Duvall residential window projects are completed in a single day. This includes containment setup, HEPA vacuuming, fungal extraction, and the application of our PNW-certified moisture barriers."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Window Mold Remediation FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Expert answers to your questions about black mold and window condensation in Duvall, Washington.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors flex items-start gap-3">
                  <span className="text-emerald-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-emerald-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
