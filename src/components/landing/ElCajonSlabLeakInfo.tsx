import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone, Zap, Search, Radar } from "lucide-react";

const ElCajonSlabLeakInfo = () => {
    return (
        <section id="el-cajon-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Radar className="w-4 h-4" />
                            <span>San Diego County Leak Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Advanced <span className="text-blue-600">Slab Leak Detection</span> in El Cajon
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting East County homes from invisible water damage. Our non-invasive technology pinpoint leaks under your foundation without unnecessary destruction.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Priority Response */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Clock className="w-7 h-7 text-blue-600" />
                                    East County Rapid Response
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Radar className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Acoustic & Thermal Imaging</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We use state-of-the-art sonic equipment and thermal cameras to find the exact location of foundation leaks, saving you time and money.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Foundation Protection</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Slab leaks can compromise the structural integrity of your El Cajon home. We provide comprehensive repair solutions that address the root cause.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Droplet className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Water Bill Analysis</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Noticed an unexplained spike in your Helix Water District or Padre Dam bill? We help identify if a hidden leak is the culprit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Reach */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-blue-600" />
                                    Serving El Cajon & East County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    We are proud to serve the entire Valley of El Cajon and surrounding communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Fletcher Hills",
                                        "Granite Hills",
                                        "Bostonia",
                                        "Rancho San Diego",
                                        "Singing Hills",
                                        "Winter Gardens",
                                        "Santee",
                                        "La Mesa"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Slab Leak Experts
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Don't wait for your floor to get hot or your bills to skyrocket. Trust El Cajon's premier leak detection specialists.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Licensed & Insured</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Non-Invasive Tech</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Direct Billing</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Leak Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic">
                                    Immediate Dispatch in El Cajon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ElCajonSlabLeakInfo;
