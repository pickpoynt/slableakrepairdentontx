import { Shield, Microscope, MapPin, Home, ClipboardCheck, Wind, Award, Sparkles, Droplets, Waves } from "lucide-react";

const reasons = [
  {
    icon: Home,
    title: "Ocean City Foundation Experts",
    description: "We are the leading specialists for crawl space water removal in Ocean City, serving Maryland coastal property owners for over 15 years."
  },
  {
    icon: Microscope,
    title: "Coastal Moisture Analysis",
    description: "Every Ocean City project begins with a professional thermal assessment, identifying the exact migration path of groundwater into your crawl space."
  },
  {
    icon: Waves,
    title: "Storm Surge Response",
    description: "We provide specialized extraction and drying for Ocean City foundations after major Atlantic storm surges or coastal flooding events."
  },
  {
    icon: ClipboardCheck,
    title: "IICRC Certified & Local",
    description: "Our Ocean City team is IICRC certified in water damage restoration and structural drying, meeting the highest industry standards for crawl spaces."
  },
  {
    icon: Shield,
    title: "Certified Dry Guarantee",
    description: "We don't just 'pump out' water; we extract and encapsulate. If any foundation moisture residue is found within 30 days, we'll return at zero cost."
  },
  {
    icon: Award,
    title: "OC Approved Partner",
    description: "Working directly with Ocean City property managers and coastal homeowners to ensure permanent moisture control in beach environments."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Ocean City's Choice for Crawl Space Recovery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the foundation restoration team that Ocean City property owners trust. We specialize in turning a flooded crawl space into a dry, healthy foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;




