import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import DesMoinesPipeLiningInfo from "@/components/landing/DesMoinesPipeLiningInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>trenchless pipe lining des moines | Des Moines Pipe Lining Pros</title>
        <meta name="description" content="trenchless pipe lining des moines - Expert no-dig sewer and pipe lining in Des Moines, IA. Professional CIPP restoration for residential and commercial lines. Call (877) 792-1410 today." />
        <meta name="keywords" content="trenchless pipe lining des moines, Des Moines sewer lining, no-dig pipe repair Iowa, CIPP lining Des Moines Polk County" />
        <link rel="canonical" href="https://trenchless-pipe-lining-des-moines.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Des Moines Pipe Lining Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "400 Locust St",
              "addressLocality": "Des Moines",
              "addressRegion": "IA",
              "postalCode": "50309",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.5868",
              "longitude": "-93.6250"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Des Moines, Iowa"
            },
            "priceRange": "$$$",
            "description": "Leading providers of trenchless pipe lining and no-dig sewer restoration in Des Moines, IA. Utilizing CIPP technology to repair underground infrastructure without excavation."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Trenchless Pipe Lining",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Des Moines Pipe Lining Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Des Moines, IA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Des Moines Trenchless Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sewer Pipe Lining (CIPP)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trenchless Sewer Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sectional Point Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="trenchless pipe lining des moines - Des Moines Pipe Lining Pros" />
        <meta property="og:description" content="Expert trenchless pipe lining and no-dig sewer repair in Des Moines, IA. Restore your pipes without destroying your yard." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trenchless-pipe-lining-des-moines.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              trenchless pipe lining des moines
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Des Moines Pipe Lining Pros</span>
            </>
          }
          subtitle="Iowa's leading infrastructure specialists for no-dig pipe restoration and trenchless sewer lining. We utilize advanced CIPP technology to seal and reinforce your underground lines with zero excavation. Protecting Des Moines properties for decades."
          image="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
          badge="DES MOINES TRENCHLESS SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <DesMoinesPipeLiningInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
