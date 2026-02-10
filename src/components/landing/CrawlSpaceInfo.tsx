import { Droplets, Shield, Home, Wind, Zap, Thermometer } from "lucide-react";

const CrawlSpaceInfo = () => {
    return (
        <section id="crawl-space-info" className="py-20 bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Beachfront Crawl Space Water Removal in Ocean City, MD
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                            Ocean City's high water table and coastal environment make crawl spaces extremely vulnerable to standing water and humidity. We specialize in advanced extraction and permanent moisture control for island foundations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative group overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                                alt="Crawl space water removal Ocean City"
                                className="w-full h-full object-cover aspect-video brightness-90 group-hover:brightness-100 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                                Coastal Groundwater Mitigation
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Unlike inland properties, Ocean City foundations face constant pressure from the Atlantic and Sinepuxent Bay. Standing water in your crawl space isn't just a nuisance—it's a threat to your floor joists and indoor air quality.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-teal-100 p-2 rounded-lg">
                                        <Droplets className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Rapid Extraction</h4>
                                        <p className="text-slate-500 text-sm">Industrial pumps for standing water.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-teal-100 p-2 rounded-lg">
                                        <Shield className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Encapsulation</h4>
                                        <p className="text-slate-500 text-sm">Vapor barriers for coastal humidity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 rounded-[2.5rem] bg-white border border-teal-100 shadow-xl shadow-teal-900/5 hover:-translate-y-2 transition-all duration-300">
                            <Wind className="w-12 h-12 text-teal-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Dehumidification</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "Commercial-grade humidity control to prevent wood rot and coastal mold growth beneath your home."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-teal-600 text-white shadow-xl shadow-teal-900/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
                            <Home className="absolute -right-4 -bottom-4 w-32 h-32 text-white/10 group-hover:rotate-12 transition-transform duration-500" />
                            <Zap className="w-12 h-12 text-teal-200 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Sump Pump Experts</h3>
                            <p className="text-teal-50/90 leading-relaxed italic">
                                "Smart sump pump systems designed to handle Ocean City storm surges and high-tide intrusions."
                            </p>
                        </div>
                        <div className="p-10 rounded-[2.5rem] bg-white border border-teal-100 shadow-xl shadow-teal-900/5 hover:-translate-y-2 transition-all duration-300">
                            <Thermometer className="w-12 h-12 text-teal-500 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Digital Monitoring</h3>
                            <p className="text-slate-600 leading-relaxed italic">
                                "Remote moisture sensors that alert you the moment water enters your foundation space."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CrawlSpaceInfo;
