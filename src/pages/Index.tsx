import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AlondraParkCopperPipeInfo from "@/components/landing/AlondraParkCopperPipeInfo";
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
        <title>Copper pipe pinhole leak repair Alondra Park Alondra Park</title>
        <meta name="description" content="Copper pipe pinhole leak repair Alondra Park Alondra Park. Expert copper pipe pitting corrosion repair and pinhole leak detection in Alondra Park, CA. 24/7 rapid response and precision soldering. Call (877) 792-1410!" />
        <meta name="keywords" content="Copper pipe pinhole leak repair Alondra Park, Alondra Park copper pipe repair, pinhole leak repair Alondra Park, copper pipe corrosion Alondra Park, South Bay copper plumbing" />
        <link rel="canonical" href="https://alondra-park-copper-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alondra Park Copper Pipe Pros",
            "image": "https://images.unsplash.com/photo-1581244276891-643f809d8463?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alondra Park",
              "addressRegion": "CA",
              "postalCode": "90249",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.8892",
              "longitude": "-118.3306"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Alondra Park, CA"
            },
            "priceRange": "$$",
            "description": "Professional copper pipe pinhole leak repair and pitting corrosion diagnostics in Alondra Park, CA. We specialize in precision soldering and localized pipe restoration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Copper Pipe Pinhole Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Alondra Park Copper Pipe Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Alondra Park, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Copper Pipe Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pitting Corrosion Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Precision Copper Soldering & Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pinhole Leak Moisture Mapping"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Whole-System Copper Assessment"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Copper pipe pinhole leak repair Alondra Park - Expert Infrastructure Care" />
        <meta property="og:description" content="Expert copper pinhole leak repair in Alondra Park. Stop microscopic pitting corrosion with precision soldering and thermal diagnostics. Fast response for South Bay property owners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alondra-park-copper-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581244276891-643f809d8463?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Copper pipe pinhole leak repair Alondra Park
              <span className="block text-orange-400 mt-2 text-2xl md:text-3xl italic">Alondra Park Copper Pipe Pros</span>
            </>
          }
          subtitle="Alondra Park's trusted authority for copper pipe pitting restoration. We provide high-precision pinhole leak repair, thermal diagnostics, and mastercraft soldering systems. Professional Infrastructure Quality."
          image="https://images.unsplash.com/photo-1581244276184-7e504c86e06b?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1550156064-07d0d08018e6?auto=format&fit=crop&q=80"
          badge="ALONDRA PARK COPPER PIPE EXPERTS"
        />
        <Services />
        <WhyUs />
        <AlondraParkCopperPipeInfo />
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
