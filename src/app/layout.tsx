import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import { TranslationProvider } from "@/i18n/TranslationProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tranquility",
  description: "Tranquility — a private members-only social club focused on wellbeing and community",
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
