import { ShieldCheck, Droplets, Activity, ClipboardCheck, ClipboardList, MapPin, CheckCircle2, FlaskConical, Search, Clock } from "lucide-react";

const CaryBackflowInfo = () => {
    return (
        <section id="cary-backflow-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <ShieldCheck className="w-4 h-4" />
                            <span>NC Certified Backflow Authorities</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Professional <span className="text-emerald-600">Backflow Testing</span> in Cary
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Ensuring the safety of Cary's drinking water through technical certification and precision assembly testing. We specialize in residential and commercial backflow prevention in Wake County.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Technical Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <ClipboardCheck className="w-7 h-7 text-emerald-600" />
                                    Cary Compliance Solutions
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Annual Certification</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We provide the state-mandated annual testing required by the Town of Cary and Wake County to ensure your backflow preventer is functioning within safety parameters.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Assembly Repair</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                If your assembly fails testing, our certified technicians can perform immediate repairs using OEM parts to restore site water safety and compliance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                            <ClipboardList className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Automated Reporting</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We handle all the paperwork and electronic submissions to local water authorities, ensuring your certification is logged correctly and on time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-emerald-600" />
                                    Wake County Service Areas
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Serving Cary and the Research Triangle region with specialized backflow expertise:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Cary Central",
                                        "West Cary",
                                        "Apex",
                                        "Morrisville",
                                        "Holly Springs",
                                        "Preston",
                                        "Lochmere",
                                        "Wake County North"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Cary Compliance Experts
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Did you receive a backflow testing notice? Don't risk water service interruption. Call Cary's certified specialists for rapid testing and reporting.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">NC Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Wake County Approved</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Cary Local</div>
                                </div>
                            </div>
                            <div className="bg-emerald-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Service Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-emerald-100 text-sm italic">
                                    Rapid Testing & Certification
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaryBackflowInfo;
