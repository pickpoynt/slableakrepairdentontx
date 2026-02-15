import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WestNyackPlumbingInfo from "@/components/landing/WestNyackPlumbingInfo";
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
        <title>plumber west nyack ny</title>
        <meta name="description" content="plumber west nyack ny - Expert plumbing repair, leak detection & maintenance services. 24/7 response for Rockland County. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber west nyack ny, West Nyack plumber, plumbing repair West Nyack, emergency plumber West Nyack, Rockland County plumbing, Clarkstown plumber" />
        <link rel="canonical" href="https://west-nyack-plumbing.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "West Nyack Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1517527667690-0f8a3794b150?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "West Nyack",
              "addressRegion": "NY",
              "postalCode": "10994",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.0912",
              "longitude": "-73.9665"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "West Nyack, NY"
            },
            "priceRange": "$$",
            "description": "Professional residential and commercial plumbing services in West Nyack, NY. We specialize in rapid emergency response, technical diagnostics, and high-performance plumbing care for Rockland County homes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Plumbing Restoration",
            "provider": {
              "@type": "LocalBusiness",
              "name": "West Nyack Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "West Nyack, NY"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "West Nyack Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Advanced Pipe Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency System Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Infrastructure Maintenance"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber west nyack ny West Nyack NY - West Nyack Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing services in West Nyack, NY. Rapid response and master-level diagnostics for Rockland County homeowners." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://west-nyack-plumbing.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1517527667690-0f8a3794b150?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber west nyack ny
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">West Nyack Plumbing Pros</span>
            </>
          }
          subtitle="West Nyack's trusted authority for high-performance infrastructure. We provide precision diagnostics, technical repair, and 24/7 support for Rockland County. Mechanical Excellence."
          image="https://images.unsplash.com/photo-1517527667690-0f8a3794b150?auto=format&fit=crop&q=80&w=1200"
          overlayImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000"
          badge="WEST NYACK MASTER PLUMBERS"
        />
        <Services />
        <WhyUs />
        <WestNyackPlumbingInfo />
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
