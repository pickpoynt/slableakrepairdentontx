import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Wind, Zap, FlaskConical, Search, Microscope } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = "black mold on window sills Duvall",
  subtitle = "Toxic black mold colonies on your window sills are a health hazard and a structural threat. Our Duvall specialists use surgical extraction and moisture mapping to eliminate moisture-fed mold permanently. Duvall Window Mold Pros: Protect Your Home.",
  image = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="black mold on window sills Duvall" className="w-full h-full object-cover brightness-[0.4]" />
        {/* UNIQUE OVERLAY IMAGE: Using a misty glass/moisture texture overlay */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1510444349110-85f26955034f?auto=format&fit=crop&q=80"
            alt="Window Condensation Overlay"
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-[14000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-emerald-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-8 animate-fade-in shadow-lg shadow-emerald-500/5">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Duvall's Certified Window Mold Extraction</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-emerald-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Our Protocal
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Microscope className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white font-medium">Surgical Extraction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white font-medium">Sill Protection</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-white font-medium">Thermal Diagnostics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
