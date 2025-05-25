import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asphalt Calculator - Driveway Cost & Tonnage Calculator",
  description: "Free asphalt calculator for driveways, roads & parking lots. Calculate asphalt tonnage, material costs, and get instant estimates. Perfect for contractors & DIY projects.",
  keywords: ["asphalt driveway cost calculator", "asphalt tonnage calculator", "asphalt driveway calculator", "asphalt ton calculator", "paving calculator", "asphalt estimator"],
  authors: [{ name: "Asphalt Calculator Tool" }],
  alternates: {
    canonical: 'https://www.asphalt-calculator.vip/'
  },
  icons: {
    icon: [
      { url: '/favicon.svg' }
    ],
    apple: [
      { url: '/favicon.svg' }
    ]
  },
  openGraph: {
    title: "Asphalt Calculator - Driveway Cost & Tonnage Calculator",
    description: "Calculate asphalt tonnage and costs instantly. Free calculator for driveways, roads & parking lots. Get accurate material estimates for your paving project.",
    url: "https://www.asphalt-calculator.vip",
    siteName: "Asphalt Calculator",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Asphalt Calculator - Calculate Tonnage and Costs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Calculator - Driveway Cost & Tonnage Calculator",
    description: "Calculate asphalt tonnage and costs instantly. Free calculator for driveways, roads & parking lots. Get accurate material estimates.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <JsonLd />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
