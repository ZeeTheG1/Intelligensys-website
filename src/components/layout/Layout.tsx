import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Intelligensys | AI Automation Agency - Transform Your Business</title>
        <meta name="description" content="Intelligensys is a leading AI automation agency specializing in business process automation, AI chatbots, data intelligence, and custom AI solutions for modern enterprises." />
        <meta name="keywords" content="AI automation, business automation, artificial intelligence agency, AI chatbots, process automation, data intelligence, machine learning, AI consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Intelligensys" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://intelligensys.com/" />
        <meta property="og:title" content="Intelligensys | AI Automation Agency - Transform Your Business" />
        <meta property="og:description" content="Transform your business with cutting-edge AI automation solutions. Increase efficiency, reduce costs, and scale effortlessly with Intelligensys." />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://intelligensys.com/" />
        <meta property="twitter:title" content="Intelligensys | AI Automation Agency - Transform Your Business" />
        <meta property="twitter:description" content="Transform your business with cutting-edge AI automation solutions. Increase efficiency, reduce costs, and scale effortlessly with Intelligensys." />
        <meta property="twitter:image" content="/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://intelligensys.com/" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Intelligensys",
            "url": "https://intelligensys.com",
            "logo": "https://intelligensys.com/logo.svg",
            "description": "Leading AI automation agency specializing in business process automation and intelligent solutions",
            "sameAs": [
              "https://linkedin.com/company/intelligensys",
              "https://twitter.com/intelligensys"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-AI-INTEL",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;