import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Golden Landscaping LLC | Premier Lawn Care in Valdosta, GA",
  description: "Get top-quality lawn mowing, edging, mulching, and tree pruning in Valdosta, GA with Golden Landscaping LLC. Call (386) 855-0292 for your FREE estimate today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Golden Landscaping LLC",
    "image": "",
    "@id": "",
    "url": "",
    "telephone": "+13868550292",
    "email": "goldenlandscaping26@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Valdosta",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.8327,
      "longitude": -83.2785
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#111111] text-gray-100">{children}</body>
    </html>
  );
}
