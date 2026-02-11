import { Shield, Wind, Zap, Droplets, Thermometer, Search, Microscope, Sparkles } from "lucide-react";

const WindowSillMoldInfo = () => {
    return (
        <section id="window-mold-info" className="py-24 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 mb-6 font-bold uppercase tracking-wider text-sm">
                            <Droplets className="w-4 h-4" />
                            Condensation & Microbial Control
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                            black mold on window sills Duvall: Professional Remediation
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            Duvall's heavy rains and temperature swings create the perfect environment for "thermal bridging" on window sills. When moist indoor air hits cold glass, condensation feeds black mold spores. We don't just wipe it away; we treat the structural porous surfaces to prevent regrowth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-teal-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-teal-600 flex items-center justify-center mb-8 shadow-lg shadow-teal-200">
                                <Microscope className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Spore Identification</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Not all black spots are the same. We identify whether you're dealing with Cladosporium or the more hazardous Stachybotrys common in PNW window frames.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-teal-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-teal-600 flex items-center justify-center mb-8 shadow-lg shadow-teal-200">
                                <Search className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Seal Integrity Audit</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We inspect the caulking and weatherstripping of your Duvall home to ensure exterior moisture isn't fuel for internal microbial colonies.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-teal-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-teal-600 flex items-center justify-center mb-8 shadow-lg shadow-teal-200">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Bacteriostatic Coating</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                After cleaning, we apply a professional-grade antimicrobial sealant to window tracks and sills that inhibits mold growth even in high condensation.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80"
                                alt="Clean Window Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Duvall's Window Health Experts</h3>
                                <p className="text-teal-100 text-lg leading-relaxed mb-8 opacity-90 font-medium">
                                    Window sill mold is more than an aesthetic issue; it's a direct threat to your indoor air quality every time you open a window. In Duvall's damp climate, window tracks often become reservoirs for harmful spores. Our medical-grade cleaning removes the bio-load and disinfects the entire frame.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Wind className="text-teal-400 w-6 h-6" />
                                        HEPA Vacuuming for Dry Spores
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Wind className="text-teal-400 w-6 h-6" />
                                        Medical-Grade Disinfection
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Wind className="text-teal-400 w-6 h-6" />
                                        Regrowth Inhibition Shield
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="text-2xl font-bold text-white mb-4">Common Sill Mold Causes</h4>
                                <ul className="text-teal-50 space-y-4 font-medium opacity-80">
                                    <li>• Blocked weep holes in window tracks</li>
                                    <li>• Single-pane glass or failed vacuum seals</li>
                                    <li>• Heavy drapes trapping humid air against glass</li>
                                    <li>• Rising damp from exterior flower beds</li>
                                    <li>• Poor airflow around window alcoves</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WindowSillMoldInfo;
