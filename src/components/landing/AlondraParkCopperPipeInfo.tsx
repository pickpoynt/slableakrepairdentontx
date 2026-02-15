import { Droplets, ShieldAlert, Zap, Microscope, CheckCircle2 } from "lucide-react";

const copperFactors = [
    {
        icon: Droplets,
        title: "Pitting Corrosion Combat",
        description: "Alondra Park's specific water chemistry can lead to localized pitting corrosion in older copper systems. We specialize in identifying these microscopic 'pinhole' failures before they cause catastrophic water damage."
    },
    {
        icon: Microscope,
        title: "Micro-Leak Diagnostics",
        description: "Pinhole leaks often hide behind drywall or under insulation. We utilize thermal imaging and moisture mapping to locate the exact point of failure without tearing apart your Alondra Park home."
    },
    {
        icon: Zap,
        title: "Rapid Sectional Repair",
        description: "When a pinhole leak strikes, speed is essential. Our Alondra Park teams provide surgical sectional replacements, removing compromised copper and installing high-grade, corrosion-resistant piping."
    },
    {
        icon: ShieldAlert,
        title: "Systemic Health Analysis",
        description: "One pinhole leak often signals more to come. We perform a comprehensive 'systemic' analysis of your entire Alondra Park property's copper infrastructure to assess the risk of future failures."
    }
];

const copperBenefits = [
    {
        title: "Soldering Mastercraft",
        description: "Our technicians are experts in precision copper welding and soldering, ensuring every repair is structurally superior to the original installation."
    },
    {
        title: "Water Quality Testing",
        description: "We include a basic water chemistry assessment with our pinhole repairs to help Alondra Park homeowners understand the root cause of their pipe corrosion."
    },
    {
        title: "Flat-Rate Restoration",
        description: "Transparency is our standard. You'll receive a detailed project assessment and fixed-rate pricing for your copper pipe restoration upfront."
    },
    {
        title: "24/7 Leak Response",
        description: "A pinhole leak never stops. Our Alondra Park emergency units are strategically positioned for 30-minute response times across the South Bay."
    }
];

const AlondraParkCopperPipeInfo = () => {
    return (
        <section id="copper-pipe-info" className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/20 to-slate-900 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        Alondra Park Copper Specialists
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 italic">
                        Stopping Copper Pinhole Leaks in Alondra Park
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        In Alondra Park, copper piping that was once the industry standard is now reaching its critical failure point.
                        Microscopic impurities and local water factors create 'pitting' that eats through metal from the inside out.
                        We provide the technical surgical repairs needed to save your home.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {copperFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-orange-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-orange-400">
                                Alondra Park Property Protection
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                A single pinhole leak can cause thousands in mold and structural damage. Our Alondra Park experts use
                                non-invasive diagnostics to stop leaks at the source, preserving your South Bay investment for the long term.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {copperBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1581244276891-643f809d8463?auto=format&fit=crop&q=80"
                                alt="Copper Pipe Repair and Soldering"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-orange-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Precision Infrastructure Restoration</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategic Service Network */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Strategic Service Network
                    </h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "Dallas Plumber", link: "https://dallasplumber.vercel.app" },
                            { name: "San Antonio Plumbing", link: "https://sanantonioplumbing.vercel.app" },
                            { name: "Plumber San Francisco CA", link: "https://plumbersanfranciscoca.vercel.app/" }
                        ].map((site) => (
                            <a
                                key={site.name}
                                href={site.link}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-sm uppercase tracking-widest hover:border-orange-500/50 shadow-xl"
                            >
                                {site.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AlondraParkCopperPipeInfo;
