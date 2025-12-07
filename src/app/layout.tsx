import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { TranslationProvider } from "@/i18n/TranslationProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tranquility Cannabis Social Club | Torremolinos Center, Málaga",
  description: "Tranquility is a private, members-only cannabis social club in Torremolinos Center, Málaga. We focus on wellbeing, education and responsible cannabis culture within Spain’s association model.",
  keywords: [
    "Tranquility",
    "cannabis social club torremolinos",
    "cannabis association malaga",
    "private social club spain",
    "responsible cannabis culture",
    "torremolinos center club",
    "weed club",
    "cannabis club"
  ],
  authors: [{ name: "Tranquility Social Club" }],
  creator: "Tranquility Social Club",
  publisher: "Tranquility Social Club",
  robots: {
    index: true,
    follow: true,
  },
   alternates: {
    canonical: "https://tranquilitysocialclub.com/",
  },
  openGraph: {
    title: "Tranquility Cannabis Social Club | Torremolinos, Málaga",
    description:
      "A private, members-only cannabis social club in Torremolinos dedicated to wellbeing, education and responsible cannabis culture.",
    url: "https://tranquilitysocialclyb.com/",
    siteName: "Tranquility Cannabis Social Club",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tranquility Cannabis Social Club Torremolinos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranquility Cannabis Social Club | Torremolinos",
    description:
      "Members-only cannabis association in Torremolinos focusing on wellbeing, education and responsible culture.",
    images: ["https://your-domain.com/og-image.jpg"],
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TranslationProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </TranslationProvider>
      </body>
    </html>
  );
}
