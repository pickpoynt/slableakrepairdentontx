import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Waves, Zap, Home } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Crawl space water removal Ocean City MD
      <span className="block text-teal-400 mt-2">Ocean City Crawl Space Pros: Coastal Foundation Experts</span>
    </>
  ),
  subtitle = "Protect your Ocean City home from groundwater and coastal humidity. Our specialized crawl space extraction and encapsulation systems permanently stop moisture at the foundation—preventing rot and mold.",
  image = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Crawl space water removal Ocean City MD" className="w-full h-full object-cover brightness-75" />
        {/* UNIQUE OVERLAY IMAGE: Using a water ripple texture overlay for the niche */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80"
            alt="Water Ripple Overlay"
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-3000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/60 to-teal-950/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-8 animate-fade-in shadow-lg shadow-teal-500/5">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Ocean City's Foundation Specialists</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-teal-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Restoration Process
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <Home className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-white font-medium">Crawl Space Pros</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-white font-medium">24/7 Response</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <Waves className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-white font-medium">Coastal Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
