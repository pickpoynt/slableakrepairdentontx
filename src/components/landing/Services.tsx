import { ArrowRight, Drill, Zap, Camera, Waves } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-indigo-600">Trenchless Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Des Moines property owners trust us for technical pipe diagnostics and precision no-dig restoration. We provide specialized care for all of Polk County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Zap,
              title: "Sewer Lining",
              description: "We use advanced CIPP technology to create a new, seamless pipe inside your old one, sealing all leaks and preventing future root intrusion.",
              link: "#contact"
            },
            {
              icon: Drill,
              title: "Pipe Bursting",
              description: "Specialized trenchless replacement for severely damaged lines that can't be lined, replacing the old pipe with a brand-new HDPE line.",
              link: "#contact"
            },
            {
              icon: Camera,
              title: "HD Inspections",
              description: "High-tech robotic camera scans to identify structural failures, blockages, and pipe conditions without a single shovel of dirt moved.",
              link: "#contact"
            },
            {
              icon: Waves,
              title: "Emergency Repair",
              description: "Sewer failures are critical. Our 24/7 Des Moines team is ready to tackle urgent backups and underground plumbing emergencies.",
              link: "#contact"
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
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
