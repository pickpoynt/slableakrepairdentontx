import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WindowMoldInfo from "@/components/landing/WindowMoldInfo";
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
        <title>black mold on window sills Duvall | Duvall Window Mold Pros</title>
        <meta name="description" content="black mold on window sills Duvall. Professional remediation for window condensation mold, toxic black mold removal, and sill preservation in King County. Call (380) 266-0944!" />
        <meta name="keywords" content="black mold on window sills Duvall, window mold removal Duvall WA, Stachybotrys remediation King County, window condensation specialists" />
        <link rel="canonical" href="https://duvall-window-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Duvall Window Mold Pros",
            "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
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
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Duvall, Washington"
            },
            "priceRange": "$$$",
            "description": "Specialized window mold remediation and moisture control in Duvall, WA. We eliminate black mold from window sills and address root condensation causes."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Window Mold Remediation Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Duvall Window Mold Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Duvall, Washington"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Window Recovery Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Black Mold Sill Remediation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Frame Moisture Barriers"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Condensation Control Retrofitting"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Stachybotrys Spore Containment"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="black mold on window sills Duvall | Window Mold Pros" />
        <meta property="og:description" content="Professional black mold remediation for window sills in Duvall, WA. Stop condensation damage and protect your family's health." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://duvall-window-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              black mold on window sills Duvall
              <span className="block text-emerald-400 mt-2">Duvall Window Mold Pros: Condensation Specialists</span>
            </>
          }
          subtitle="Don't let seasonal window condensation rot your window frames and poison your indoor air. Our PNW-certified remediation protocols target toxic black mold at the source—ensuring a dry, fungal-free home in any weather."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <WindowMoldInfo />
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
