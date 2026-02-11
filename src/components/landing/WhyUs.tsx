import { ShieldCheck, Zap, Users, Award, Wind, FlaskConical, Search, Activity, Microscope, AlertTriangle } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Surgical Extraction",
    description: "We don't just wipe window sills. We surgically remove mold colonies from the microscopic pores of wood and vinyl frames."
  },
  {
    icon: Search,
    title: "Thermal Mapping",
    description: "We identify the exact 'cold spots' on your glass and frames where condensation is feeding the mold growth cycle."
  },
  {
    icon: ShieldCheck,
    title: "Safe For Families",
    description: "Our PNW-optimized antimicrobial barriers are 100% non-toxic, ensuring window areas are safe for children and pets to touch."
  },
  {
    icon: AlertTriangle,
    title: "Source Elimination",
    description: "We address the structural condensation issues, not just the visible mold, ensuring a permanent dry-out for your sills."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Why Duvall Trust Our Window Extraction Protocols
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Black mold on window sills is often a symptom of systemic moisture issues. Our King County specialists bridge the gap between restoration and building science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-emerald-600 to-emerald-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Toxic Sill Colonies?</h3>
            <p className="text-emerald-50 text-lg font-medium opacity-90">
              Our Duvall mobilization teams can perform a full sill extraction and moisture mapping within 24 hours. Protect your window health.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-emerald-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
          >
            <ShieldCheck className="w-6 h-6" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
