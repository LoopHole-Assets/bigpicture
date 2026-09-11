import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bigpicturegraphics.com.np"),
  title: {
    default: "BigPicture Graphics — Creative & Digital Studio in Nepal",
    template: "%s — BigPicture Graphics",
  },
  description:
    "BigPicture Graphics is a Nepal-based creative and digital studio offering branding, graphic design, video editing, digital marketing, web development, printing and complete creative solutions.",
  keywords: [
    "Graphic design Nepal",
    "Creative agency Nepal",
    "Branding agency Nepal",
    "Digital marketing Nepal",
    "Web development Nepal",
    "Video editing Nepal",
    "Printing Nepal",
    "Social media design Nepal",
    "Creative studio Nepal",
  ],
  authors: [{ name: "BigPicture Graphics" }],
  creator: "BigPicture Graphics",
  publisher: "BigPicture Graphics",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BigPicture Graphics — Creative & Digital Studio in Nepal",
    description:
        "The Big Move for Your Brand's Picture — BigPicture Graphics is a Nepal-based creative studio offering branding, design, video, digital marketing, web and print under one roof.",
    url: "https://bigpicturegraphics.com.np",
    siteName: "BigPicture Graphics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BigPicture Graphics — Creative & Digital Studio in Nepal",
    description:
        "The Big Move for Your Brand's Picture — branding, design, video, digital marketing, web and print under one roof.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.svg.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BigPicture Graphics",
  description:
    "Creative and digital solutions studio based in Nepal offering branding, graphic design, video editing, digital marketing, web development, printing and creative strategy.",
  slogan: "The Big Move for Your Brand's Picture.",
  areaServed: "Worldwide",
  knowsLanguage: ["en", "ne"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "NP",
    addressLocality: "Chuchepati, Kathmandu",
  },
  email: "bigpicturegraphic@gmail.com",
  telephone: ["9700003368", "9700003369"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video & Motion" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Printing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Solutions" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground`}
      >
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
