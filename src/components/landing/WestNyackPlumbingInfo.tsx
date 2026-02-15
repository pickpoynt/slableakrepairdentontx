import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone, CheckCircle } from "lucide-react";

const WestNyackPlumbingInfo = () => {
    return (
        <section id="west-nyack-info" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-[0.02] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <MapPin className="w-4 h-4" />
                            <span>West Nyack, NY & Rockland County</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Premier <span className="text-indigo-600">Plumbing Solutions</span> in West Nyack
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Serving the West Nyack community with localized expertise. From the Palisades Center area to the quiet neighborhoods of Rockland County, we provide precision plumbing restoration and 24/7 support.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Shield className="w-7 h-7 text-indigo-600" />
                                    Why West Nyack Chooses Us
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Clock className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Rapid Rockland Response</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We understand the layout of West Nyack and Clarkstown. Our local technicians are mobile and ready to respond to urgent calls within minutes, not hours.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Wrench className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Suburban System Experts</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Specializing in the residential plumbing systems found in West Nyack's colonial and contemporary homes, including complex sewer line diagnostics and water pressure regulation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Water Quality Solutions</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Protecting Rockland County families with advanced filtration and softening systems tailored to local municipal water profiles.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Service Highlight */}
                        <div className="relative group lg:mt-12">
                            <div className="absolute -inset-4 bg-indigo-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
                            <div className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-xl">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Technical Diagnostics</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed italic">
                                    "Our mission in West Nyack is to provide more than just a fix. We provide a long-term infrastructure solution. We use thermal imaging and acoustic sensors to find issues before they become disasters."
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Video Sewer Line Inspections",
                                        "Acoustic Leak Correlation",
                                        "Hydro-Jetting Pipe Restoration",
                                        "Tankless Water Heater Engineering"
                                    ].map((service, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-3 h-3 text-emerald-600" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{service}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* West Nyack Commitment */}
                    <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">
                                Your Local West Nyack Infrastructure Authority
                            </h3>
                            <p className="text-indigo-100 text-lg leading-relaxed mb-10 italic">
                                From the shopping districts of the Palisades to the residential streets near Clarkstown High School South, West Nyack Plumbing Pros is committed to maintaining the flow of our community. We handle everything from minor faucet repairs to full-scale residential repiping with the same degree of technical precision.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="tel:8777921410" className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold text-xl hover:bg-slate-50 transition-all shadow-lg flex items-center gap-3">
                                    <Phone className="w-6 h-6" />
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-200 font-bold uppercase tracking-widest text-sm">
                                    Available 24/7 for Clarkstown Emergencies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WestNyackPlumbingInfo;
