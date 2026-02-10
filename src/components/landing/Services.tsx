import { Wind, Shield, Sparkles, AlertTriangle, Zap, Activity, Filter, Thermometer, ShieldCheck, Droplets, Waves, Home } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Standing Water Removal",
    description: "Removing water from Ocean City home foundations using specialized high-volume pumping systems. We handle coastal storm surges.",
    link: "#crawl-space-info"
  },
  {
    icon: ShieldCheck,
    title: "Crawl Space Encapsulation",
    description: "Installing heavy-duty vapor barriers to seal out Maryland's coastal humidity and prevent floor joist rot permanently.",
    link: "#crawl-space-info"
  },
  {
    icon: Activity,
    title: "Foundation Profiling",
    description: "Digital mapping of moisture levels in your crawl space to identify hidden leaks and groundwater entry points.",
    link: "#crawl-space-info"
  },
  {
    icon: Thermometer,
    title: "LGR Dehumidification",
    description: "Removing massive amounts of humidity from MD crawl spaces to prevent persistent dampness and secondary mold growth.",
    link: "#crawl-space-info"
  },
  {
    icon: Home,
    title: "Sump Pump Installation",
    description: "Commercial-grade sump pump systems designed to handle Ocean City storm drainage and high-tide intrusions.",
    link: "#crawl-space-info"
  },
  {
    icon: AlertTriangle,
    title: "Mold Remediation",
    description: "Full-scale containment and removal of foundation mold colonies that thrive in Ocean City's salt-air environments.",
    link: "#crawl-space-info"
  },
  {
    icon: Shield,
    title: "Maryland State Licensed",
    description: "Professional crawl space recovery services fully insured and licensed for residential work in Ocean City, MD.",
    link: "#crawl-space-info"
  },
  {
    icon: Zap,
    title: "24/7 Rapid Response",
    description: "Ocean City's fastest emergency crew for crawl space floods. We are ready to respond to island property owners 24/7.",
    link: "#crawl-space-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Ocean City's Foundation Recovery Technology
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Protect your island home. Our Ocean City restoration team uses specialized foundation equipment and coastal encapsulation protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                    <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;


