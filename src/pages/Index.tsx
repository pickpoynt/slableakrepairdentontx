import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ElCajonSlabLeakInfo from "@/components/landing/ElCajonSlabLeakInfo";
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
        <title>slab leak detection el cajon</title>
        <meta name="description" content="slab leak detection el cajon - Expert non-invasive slab leak detection and foundation leak repair in El Cajon, CA. Acoustic diagnostics and rapid response. Call (877) 792-1410." />
        <meta name="keywords" content="slab leak detection el cajon, El Cajon foundation leak, local leak detection El Cajon, under slab plumbing repair San Diego County" />
        <link rel="canonical" href="https://slab-leak-detection-el-cajon.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Slab Leak Detection El Cajon Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "El Cajon",
              "addressRegion": "CA",
              "postalCode": "92020",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7948",
              "longitude": "-116.9625"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "El Cajon, CA"
            },
            "priceRange": "$$$",
            "description": "Specialized slab leak detection and foundation plumbing repair services in El Cajon, California. Using advanced acoustic and thermal imaging technology."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Slab Leak Detection El Cajon Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "El Cajon, California"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "El Cajon Leak Detection Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Slab Leak Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Imaging Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak detection el cajon - Slab Leak Detection El Cajon Pros" />
        <meta property="og:description" content="Professional slab leak detection in El Cajon, CA. Non-invasive technology to pinpoints leaks under your foundation quickly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-detection-el-cajon.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak detection el cajon
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Slab Leak Detection El Cajon Pros</span>
            </>
          }
          subtitle="San Diego East County's slab leak authorities. Non-invasive detection and precision repair for your home's foundation. Serving Fletcher Hills, Granite Hills, and beyond."
          image="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1517646272486-a28f66881793?auto=format&fit=crop&q=80"
          badge="EL CAJON LEAK SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <ElCajonSlabLeakInfo />
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
