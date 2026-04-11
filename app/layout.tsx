import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Smilefix Dental & Facial Aesthetic Clinic Multan | Best Dentist in Multan",
    template: "%s | Smilefix Dental & Aesthetic Clinic Multan",
  },
  description:
    "Multan's premier dental and facial aesthetic clinic. Expert dentistry, Hollywood Smiles, Invisalign, dental implants, Botox, fillers, and more. Book your consultation today.",
  keywords: [
    "dental clinic Multan",
    "best dentist Multan",
    "aesthetic clinic Multan",
    "teeth whitening Multan",
    "dental implants Multan",
    "facial aesthetics Multan",
    "Hollywood smile Multan",
    "Botox Multan",
    "lip filler Multan",
    "Invisalign Multan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://smilefixmultan.pk",
    siteName: "Smilefix Dental & Aesthetic Clinic",
    title: "Smilefix Dental & Facial Aesthetic Clinic Multan",
    description:
      "Expert dentistry and facial aesthetic medicine under one roof in Multan, Pakistan. Book your consultation today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smilefix Dental & Facial Aesthetic Clinic Multan",
    description:
      "Multan's premier dental and facial aesthetic clinic. Expert dentistry, cosmetic treatments, and facial aesthetics.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://smilefixmultan.pk"),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Dentist", "MedicalBusiness"],
  name: "Smilefix Dental and Facial Aesthetic Clinic",
  description:
    "Premium dental and facial aesthetic clinic in Multan, Pakistan. Offering comprehensive dentistry and non-surgical facial treatments.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[CLINIC_ADDRESS]",
    addressLocality: "Multan",
    addressRegion: "Punjab",
    postalCode: "60000",
    addressCountry: "PK",
  },
  telephone: "+92-XXX-XXXXXXX",
  url: "https://smilefixmultan.pk",
  openingHours: "Mo-Sa 10:00-21:00",
  priceRange: "Rs. 500 - Rs. 50,000",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.1968",
    longitude: "71.4707",
  },
  image: "https://smilefixmultan.pk/images/clinic.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body antialiased bg-white text-brand-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
