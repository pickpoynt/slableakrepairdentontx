import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CrawlSpaceInfo from "@/components/landing/CrawlSpaceInfo";
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
        <title>Crawl space water removal Ocean City MD | Ocean City Crawl Space Pros</title>
        <meta name="description" content="Crawl space water removal Ocean City MD. Professional standing water extraction, coastal encapsulation, and mold prevention in MD. Call (380) 266-0944!" />
        <meta name="keywords" content="Crawl space water removal Ocean City MD, crawl space encapsulation MD, Ocean City foundation flood repair, crawl space flood mitigation" />
        <link rel="canonical" href="https://oceancity-crawlspace-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ocean City Crawl Space Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ocean City",
              "addressRegion": "MD",
              "postalCode": "21842",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.3365",
              "longitude": "-75.0849"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ocean City, Maryland"
            },
            "priceRange": "$$$",
            "description": "Expert crawl space water removal and encapsulation in Ocean City, MD. Specialized in coastal moisture control, sump pump systems, and foundation recovery."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Crawl Space Water Removal Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ocean City Crawl Space Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ocean City, Maryland"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Crawl Space Recovery Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Standing Water Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Crawl Space Encapsulation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sump Pump Installation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Foundation Dehumidification"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Crawl space water removal Ocean City MD | Crawl Space Pros" />
        <meta property="og:description" content="Professional crawl space water removal in Ocean City, MD. 24/7 standing water extraction and encapsulation. Call (380) 266-0944 for immediate service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oceancity-crawlspace-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Crawl space water removal Ocean City MD
              <span className="block text-teal-400 mt-2">Ocean City Crawl Space Pros: Coastal Foundation Experts</span>
            </>
          }
          subtitle="Don't let standing water rot your coastal foundation. Our specialized crawl space extraction and encapsulation systems target moisture trapped beneath your home—preventing mold and structural decay with Ocean City precision."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <CrawlSpaceInfo />
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




