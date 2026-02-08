import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "St. Louis's Sewer Masters",
    description: "We are the leading specialists for trenchless clay pipe replacement in St. Louis, serving historic districts from Lafayette Square to Dogtown with surgical precision."
  },
  {
    icon: Microscope,
    title: "HD Robotic Entry",
    description: "Every STL sewer project starts with a robotic camera inspection, allowing us to see every crack and root intrusion in your 100-year-old clay pipes."
  },
  {
    icon: Building2,
    title: "Commercial Grade Tech",
    description: "We use industrial-grade pipe bursting and relining equipment that is far more durable and less invasive than the methods used by generic St. Louis plumbers."
  },
  {
    icon: ClipboardCheck,
    title: "Licensed & Locally Insured",
    description: "Our St. Louis team is fully licensed and insured in Missouri, ensuring your property is protected and all work exceeds local STL plumbing codes."
  },
  {
    icon: Shield,
    title: "Trenchless Guarantee",
    description: "We specialize in non-invasive repairs. No digging up your Forest Park area lawn or South City driveway—we fix your pipes entirely from the inside out."
  },
  {
    icon: MapPin,
    title: "Deep St. Louis Roots",
    description: "We are proud St. Louis locals. Whether you're near the Arch or in University City, we understand the specific soil and infrastructure challenges of our city."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            St. Louis's Highest Rated Sewer Specialists
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the team that St. Louis homeowners trust. We specialize in turning a recurring sewer nightmare into a permanent, maintenance-free solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
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


