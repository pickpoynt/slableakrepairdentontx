import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Home, Waves, Wind } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl block leading-none">Duvall</span>
                <span className="text-sm font-medium text-emerald-500">Window Mold Pros</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              King County's premier specialists in permanent window sill mold remediation and condensation control. We protect your home's integrity and air.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                <Facebook className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                <Instagram className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Black Mold Extraction</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Sill Moisture Barriers</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Thermal Leak Diagnostics</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Negative Pressure Containment</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-emerald-500 transition-colors flex items-center gap-2 font-medium"> Anti-Fungal Track Sealing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Company</h4>
            <ul className="space-y-4">
              <li><a href="#why-us" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Window Health Pledge</a></li>
              <li><a href="#window-mold-info" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Window Science</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Window Mold FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-emerald-500 transition-colors font-medium">Sill Inspection</a></li>
              <li><p className="text-slate-400 font-medium">Privacy Policy</p></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-lg font-bold mb-8 font-heading text-white">Duvall Mold Hotline</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Duvall Office</p>
                  <a href="tel:3802660944" className="text-lg font-bold text-white hover:text-emerald-500 transition-colors">
                    (380) 266-0944
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">Service Region</p>
                  <p className="text-white font-bold">
                    Duvall & King County
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Duvall Window Mold Pros. Professional Window Remediation.
          </p>
          <div className="flex items-center gap-2 text-slate-600 text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>IICRC & EPA Certified Mold Recovery Specialists</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Duvall Window Mold Pros",
          "telephone": "+13802660944",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Duvall",
            "addressRegion": "WA",
            "postalCode": "98019",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "47.7423",
            "longitude": "-121.9857"
          },
          "openingHours": "Mo-Su 00:00-23:59"
        })}
      </script>
    </footer>
  );
};

export default Footer;
