import { Shield, Wind, Zap, FlaskConical, Search, ClipboardCheck, Activity, Gauge, Microscope } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Black Mold Extraction",
    description: "Surgical removal of Stachybotrys colonies from wood and vinyl window sills using PNW-certified protocols.",
    link: "#window-mold-info"
  },
  {
    icon: Wind,
    title: "Spore Containment",
    description: "Utilizing HEPA-filtered negative pressure to prevent cross-contamination while cleaning window mold.",
    link: "#window-mold-info"
  },
  {
    icon: Search,
    title: "Thermal Leak Mapping",
    description: "Identifying thermal bridging and seal failures that cause localized window condensation and mold growth.",
    link: "#window-mold-info"
  },
  {
    icon: FlaskConical,
    title: "Anti-Fungal Barriers",
    description: "Applying deep-penetrating antimicrobial sealants to window tracks and sills to prevent return growth.",
    link: "#window-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Window Remediation Technology
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Duvall's damp climate requires more than just surface cleaning. We use precision moisture diagnostics to eliminate window mold permanently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider">
                  View Protocol <ClipboardCheck className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
