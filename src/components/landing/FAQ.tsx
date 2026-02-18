import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency trenchless sewer repair in Des Moines?",
    answer: "Yes. Our Des Moines teams are available 24/7 for technical HD video diagnostics and trenchless pipe restoration. We provide rapid support across Polk County to restore your sewer flow without digging."
  },
  {
    question: "How does trenchless pipe lining work for Des Moines homes?",
    answer: "We utilize CIPP (Cured-In-Place Pipe) technology. By inserting a structural epoxy liner into your existing pipe, we create a new, seamless line that is stronger than the original, without excavating your yard or driveway."
  },
  {
    question: "Are your technicians licensed for Iowa infrastructure projects?",
    answer: "Absolutely. Our technicians are fully licensed and insured professionals who adhere strictly to Iowa plumbing codes and Des Moines residential and commercial standards."
  },
  {
    question: "How long does a Des Moines trenchless lining project take?",
    answer: "Most trenchless pipe lining projects can be completed in a single day. Our team focuses on efficient, non-invasive restorations that minimize disruption to your property while providing a 50+ year solution."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6">
            Des Moines <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about trenchless pipe lining and no-dig sewer restoration in Des Moines, Iowa.
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
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-indigo-600 text-left py-6">
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
