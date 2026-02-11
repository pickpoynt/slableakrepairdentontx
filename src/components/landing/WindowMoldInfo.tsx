import { Shield, Droplets, Wind, CheckCircle2, AlertTriangle, ThermometerSnowflake, Microscope } from "lucide-react";

const WindowMoldInfo = () => {
    return (
        <section id="window-mold-info" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-60" />
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                                alt="Black mold on window sills Duvall"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2 text-emerald-600">
                                    <AlertTriangle className="w-5 h-5 font-bold" />
                                    <span className="font-bold uppercase tracking-wider text-sm">Health Risk Alert</span>
                                </div>
                                <p className="text-slate-800 font-medium">
                                    Black mold on Duvall window sills often indicates systemic humidity issues that can affect respiratory health in children and pets.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                            <Shield className="w-16 h-16 text-white" />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                            Solving the <span className="text-emerald-600 uppercase">Condensation Crisis</span> in Duvall Homes
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Duvall's proximity to the Snoqualmie River and our characteristically damp Pacific Northwest winters create the perfect "cold bridge" at your windows. When warm indoor air hits cold glass, condensation feeds <strong className="text-slate-900 uppercase">Stachybotrys chartarum</strong> (Black Mold) on wood and vinyl sills.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: ThermometerSnowflake,
                                    title: "Thermal Bridging Correction",
                                    desc: "We identify exactly where moisture is bypassing your seals to stop the feeding cycle of mold colonies."
                                },
                                {
                                    icon: Microscope,
                                    title: "Spore Containment",
                                    desc: "When cleaning window sills, spores easily become airborne. We use negative pressure to keep your Duvall home safe."
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "Permanent Antimicrobial Sealing",
                                    desc: "We treat sills with medical-grade, PNW-verified sealants that resist moisture even during Duvall's rainiest months."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                                        <item.icon className="w-6 h-6 text-emerald-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                            <a
                                href="tel:3802660944"
                                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-xl"
                            >
                                <AlertTriangle className="w-5 h-5 text-emerald-400" />
                                Schedule Sill Inspection
                            </a>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">
                                        WA
                                    </div>
                                ))}
                                <div className="pl-4 text-sm font-bold text-slate-500 italic">
                                    Serving King County since 2012
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WindowMoldInfo;
