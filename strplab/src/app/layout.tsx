import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/layout/Navbar";
import CartDrawer from "@/components/layout/CartDrawer";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "STRP LAB — Premium Watch Accessories for Collectors",
    template: "%s | STRP LAB",
  },
  description:
    "STRP LAB creates precision-engineered bioceramic cases and premium straps for AP x Swatch MoonSwatch collectors. Crafted for those who demand more.",
  keywords: [
    "STRP LAB",
    "MoonSwatch strap",
    "bioceramic case",
    "AP x Swatch accessories",
    "premium watch strap",
    "carbon fiber watch",
    "luxury watch accessories",
  ],
  authors: [{ name: "STRP LAB" }],
  creator: "STRP LAB",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strplab.com",
    siteName: "STRP LAB",
    title: "STRP LAB — Premium Watch Accessories for Collectors",
    description:
      "Precision-engineered bioceramic cases and premium straps for AP x Swatch MoonSwatch collectors.",
    images: [
      {
        url: "https://strplab.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "STRP LAB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STRP LAB — Premium Watch Accessories for Collectors",
    description:
      "Precision-engineered bioceramic cases and premium straps for AP x Swatch MoonSwatch collectors.",
    images: ["https://strplab.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
