export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Asphalt Calculator",
    "description": "A free online calculator that helps you estimate the amount of asphalt needed for your paving project. Calculate volume, weight, and cost for driveways, roads, and parking lots.",
    "url": "https://asphalt-calculator.com",
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Volume calculation in cubic feet, cubic yards, and cubic meters",
      "Weight calculation in pounds, tons, and metric tons",
      "Cost estimation based on current asphalt prices",
      "Support for both imperial and metric units",
      "Instant calculations with no page reload"
    ],
    "screenshot": "https://asphalt-calculator.com/og-image.svg",
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://asphalt-calculator.com/#calculator"
    },
    "provider": {
      "@type": "Organization",
      "name": "Asphalt Calculator Tool",
      "url": "https://asphalt-calculator.com"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Contractors, DIY Homeowners, Engineers, Construction Companies"
    },
    "softwareHelp": {
      "@type": "CreativeWork",
      "name": "Asphalt Calculator Help",
      "description": "Instructions on how to use the asphalt calculator and understand asphalt requirements.",
      "url": "https://asphalt-calculator.com/#how-to-use"
    },
    "keywords": "asphalt calculator, asphalt estimator, paving calculator, driveway calculator, asphalt materials, asphalt cost calculator"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 