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
  title: "ElevateWeb - Restaurant Website Builder",
  description: "Stop Paying Commission. Keep 100% Revenue.",
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
