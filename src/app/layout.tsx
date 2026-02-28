import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar/Navbar";
import { CalculatorProvider } from "@/context/CalculatorContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ElevateWeb - Restaurant Web App Studio",
  description: "Stop Paying Commission. Keep 100% Revenue. We build custom ordering web apps for restaurants, cafes, and hotels in India.",
  openGraph: {
    title: "ElevateWeb - Restaurant Web App Studio",
    description: "Stop Paying Commission. Keep 100% Revenue. Custom ordering web apps for restaurants, cafes & hotels.",
    url: "https://elevatewebdev.in",
    siteName: "ElevateWeb",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ElevateWeb - Restaurant Web App Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevateWeb - Restaurant Web App Studio",
    description: "Stop Paying Commission. Keep 100% Revenue.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          <CalculatorProvider>
            <Navbar />
            {children}
          </CalculatorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
