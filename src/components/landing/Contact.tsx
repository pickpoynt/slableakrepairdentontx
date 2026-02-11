import { Phone, Mail, MapPin, Clock, ShieldCheck, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-6 font-bold uppercase tracking-wider text-sm">
                <ShieldCheck className="w-4 h-4" />
                Duvall Window Mold Team
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Request a Scientific Window Inspection
              </h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Don't let black mold rot your window sills. Our Duvall-based specialists provide deep fungal extraction and permanent moisture barriers.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-1">Duvall Mold Hotline</p>
                    <a href="tel:3802660944" className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                      (380) 266-0944
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-emerald-600 border border-slate-100">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-1">Response Speed</p>
                    <p className="text-xl font-bold text-slate-900">Emergency Extraction Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-emerald-600 border border-slate-100">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-xl font-bold text-slate-900">Duvall & King County, WA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-emerald-900/10 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Request Window Analysis</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-emerald-500 transition-all outline-none font-medium"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-emerald-500 transition-all outline-none font-medium"
                      placeholder="(380) 266-0944"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Mold Location</label>
                  <select className="w-full bg-slate-50 border-slate-200 rounded-xl h-14 px-6 focus:ring-2 focus:ring-emerald-500 transition-all outline-none font-medium">
                    <option>Bedroom Windows</option>
                    <option>Living Area Windows</option>
                    <option>Kitchen / Bathroom Sliders</option>
                    <option>Whole-Home Windows</option>
                    <option>Basement Egress Windows</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider ml-1">Problem Details</label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border-slate-200 rounded-xl p-6 focus:ring-2 focus:ring-emerald-500 transition-all outline-none font-medium"
                    placeholder="Describe the mold growth: size, color, and which rooms are affected..."
                  ></textarea>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-16 rounded-xl text-lg font-bold shadow-lg shadow-emerald-900/20">
                  Request Sill Inspection
                </Button>
                <p className="text-center text-slate-500 text-sm italic font-medium">
                  *Scientific containment and eco-safe protocols
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
