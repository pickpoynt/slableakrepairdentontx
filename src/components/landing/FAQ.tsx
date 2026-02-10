import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do you remove standing water from an Ocean City crawl space?",
    answer: "We use submersible high-volume pumps and heavy-duty extraction vacuums specifically designed for sand-heavy Ocean City groundwater. Once extraction is complete, we provide full structural drying."
  },
  {
    question: "Why is groundwater a problem in Ocean City crawl spaces?",
    answer: "Ocean City is a barrier island with a very high water table. High tides and heavy rains can cause water to seep directly through the ground into your crawl space, leading to wood rot and foundation instability."
  },
  {
    question: "Do you offer crawl space encapsulation in MD?",
    answer: "Yes. We are Ocean City's experts in full crawl space encapsulation, which involves sealing the floor and walls with a high-mil vapor barrier to permanently keep out humidity and groundwater."
  },
  {
    question: "Will my homeowners insurance cover crawl space water removal?",
    answer: "Many policies cover water removal if the flooding was caused by a sudden event like a burst pipe. We provide full digital moisture mapping and documentation to assist with your insurance claim."
  },
  {
    question: "How long does it take to dry out a crawl space on the island?",
    answer: "Typically, the drying process takes 3 to 5 days using industrial LGR dehumidifiers and high-velocity air movers, depending on the severity of the intrusion and local humidity levels."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Ocean City Crawl Space FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Professional foundation expertise for Ocean City homeowners and coastal property managers.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-teal-600 py-6 transition-colors leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;




