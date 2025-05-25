export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Asphalt Driveway Cost & Tonnage Calculator",
    "description": "Free online calculator for estimating asphalt tonnage and costs for driveways, roads, and parking lots. Get accurate material estimates and cost calculations for your paving project.",
    "url": "https://www.asphalt-calculator.vip",
    "applicationCategory": "CalculatorApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Asphalt driveway cost estimation",
      "Tonnage calculation for asphalt projects",
      "Material quantity estimation",
      "Cost per ton calculation",
      "Imperial and metric unit conversion",
      "Instant calculations with no page reload"
    ],
    "screenshot": "https://www.asphalt-calculator.vip/logo.svg",
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://www.asphalt-calculator.vip/#calculator"
    },
    "provider": {
      "@type": "Organization",
      "name": "Asphalt Calculator Tool",
      "url": "https://www.asphalt-calculator.vip"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Contractors, DIY Homeowners, Engineers, Construction Companies, Paving Companies"
    },
    "softwareHelp": {
      "@type": "CreativeWork",
      "name": "Asphalt Calculator Help Guide",
      "description": "Learn how to calculate asphalt tonnage and costs for your driveway or paving project using our free calculator.",
      "url": "https://www.asphalt-calculator.vip/#how-to-use"
    },
    "keywords": "asphalt driveway cost calculator, asphalt tonnage calculator, asphalt driveway calculator, asphalt ton calculator, paving calculator, asphalt estimator"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 