import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "./JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asphalt Calculator - Estimate Asphalt Materials and Costs",
  description: "Easy to use asphalt calculator. Effortlessly calculate asphalt materials needed for your driveway, road or parking lot projects. Get accurate cost estimates.",
  keywords: ["asphalt calculator", "asphalt estimator", "paving calculator", "driveway calculator", "asphalt materials", "asphalt cost calculator"],
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
    title: "Asphalt Calculator - Estimate Asphalt Materials and Costs",
    description: "Easily calculate the amount of asphalt needed for your project. Get accurate material and cost estimates for your paving projects.",
    url: "https://asphalt-calculator.com",
    siteName: "Asphalt Calculator",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Asphalt Calculator - Estimate Materials and Costs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Asphalt Calculator - Estimate Materials and Costs",
    description: "Easily calculate the amount of asphalt needed for your paving project. Get accurate estimates for volume, weight, and cost.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
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
