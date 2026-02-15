import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What causes copper pinhole leaks in Alondra Park?",
    answer: "Copper pinhole leaks are typically caused by pitting corrosion, which occurs due to specific water chemistry factors and microscopic impurities in the pipe material. Local South Bay water conditions can accelerate this internal metal decay."
  },
  {
    question: "How do you find a tiny pinhole leak?",
    answer: "We use thermal imaging cameras to detect moisture patterns and temperature changes behind walls. This allows us to find the exact location of a microscopic copper leak without intrusive demo work in your Alondra Park home."
  },
  {
    question: "Should I replace all my copper pipes?",
    answer: "Not always. If pinhole leaks are localized, a surgical sectional repair is often sufficient. However, if our systemic analysis shows widespread pitting corrosion throughout your Alondra Park property, we may recommend a strategic repiping plan."
  },
  {
    question: "Will you provide a price before starting the work?",
    answer: "Absolutely. We believe in transparency. Our technicians will diagnose the issue and provide a clear, upfront, flat-rate pricing assessment before any work begins."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Alondra Park Copper <span className="text-orange-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about copper pipe pitting corrosion and pinhole leak repair in Alondra Park.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-blue-600 text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
