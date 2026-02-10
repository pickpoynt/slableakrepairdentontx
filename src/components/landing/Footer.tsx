import { Phone, Mail, MapPin, Home, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Ocean City Crawl Space Pros
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Ocean City's leading specialists in coastal crawl space water removal. We protect your island foundation with industrial extraction and full encapsulation technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:3802660944" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Foundation Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-teal-600" /> Standing Water Removal</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-teal-600" /> Foundation Dewatering</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-teal-600" /> Crawl Space Encapsulation</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-teal-600" /> Sump Pump Installation</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-teal-600" /> Structural Drying</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Ocean City MD Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> Ocean City Boardwalk</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> North Ocean City</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> West Ocean City</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> Caine Woods Area</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal-600" /> Montego Bay Neighborhood</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Ocean City MD Hotline</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div className="text-teal-400 font-bold text-sm uppercase mb-2">MD Licensed & Bonded</div>
              <a href="tel:3802660944" className="text-2xl font-heading font-bold text-white hover:text-teal-400 transition-colors">
                (380) 266-0944
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                Licensed & Insured #OCMDREST1
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Ocean City Crawl Space Pros. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Crawl space water removal Ocean City MD</div>
            <div className="w-2 h-2 rounded-full bg-teal-600/30" />
            <div className="text-xs text-slate-600 italic">MD Coast Foundation Recovery</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Ocean City Crawl Space Pros",
          "telephone": "+1-380-266-0944",
          "url": "https://oceancity-crawlspace-pros.com/",
          "logo": "https://oceancity-crawlspace-pros.com/logo.png",
          "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
          "description": "Professional crawl space water removal and foundation restoration services in Ocean City, MD. We specialize in coastal encapsulation and dewatering.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving Ocean City and the Coastal Highway",
            "addressLocality": "Ocean City",
            "addressRegion": "MD",
            "postalCode": "21842",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 38.3365,
            "longitude": -75.0849
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;

