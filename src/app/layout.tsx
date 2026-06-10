import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} - Full Stack Developer & AI Product Builder`,
    template: `%s | ${profile.name}`,
  },
  description: "Portfolio of Rohan Vijaykumar Karande, a Full Stack Developer, AI Product Builder, and MCA student building commerce platforms, AI tools, and full-stack web products.",
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: `${profile.name} Portfolio`,
  category: "portfolio",
  keywords: [
    "Rohan Vijaykumar Karande",
    "Full Stack Developer",
    "AI Product Builder",
    "MCA Student",
    "Next.js Developer",
    "React Developer",
    "Rohya0099",
  ],
  openGraph: {
    title: `${profile.name} - Full Stack Developer & AI Product Builder`,
    description: "Full-stack portfolio featuring live commerce work, AI systems, SaaS concepts, and business-ready web applications.",
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/sacred-spices-showcase.png",
        width: 1200,
        height: 630,
        alt: "Sacred Spices commerce platform built by Rohan Karande",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Full Stack Developer & AI Product Builder`,
    description: "Live commerce, AI systems, SaaS concepts, and full-stack product work.",
    images: ["/projects/sacred-spices-showcase.png"],
  },
  alternates: {
    canonical: profile.siteUrl,
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
  other: {
    email: profile.email,
    github: profile.github,
    linkedin: profile.linkedin,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: `mailto:${profile.email}`,
    jobTitle: "Full Stack Developer and AI Product Builder",
    description: "Full Stack Developer, AI Product Builder, and MCA student building commerce platforms, AI tools, and SaaS-style products.",
    url: profile.siteUrl,
    sameAs: [profile.github, profile.linkedin],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Full Stack Development",
      "AI Product Development",
      "Next.js",
      "React",
      "TypeScript",
      "E-Commerce Platforms",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-stack web application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI product and automation development",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
