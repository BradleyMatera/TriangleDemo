import type { Metadata } from "next";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bradleymatera.github.io/leaf-js/"),
  title: "leaf-js Demo — WebGPU showcase rebuilt with Next.js 16",
  description:
    "A premium refresh of the leaf-js WebGPU demo using Next.js 16, Bun, Tailwind, and NextUI. Explore modern architecture, theming, and a live WebGPU triangle render.",
  keywords: [
    "leaf-js",
    "WebGPU",
    "Next.js 16",
    "Bun",
    "NextUI",
    "Tailwind CSS",
    "TypeScript"
  ],
  authors: [{ name: "deondreE" }],
  openGraph: {
    title: "leaf-js Demo — WebGPU showcase rebuilt with Next.js 16",
    description:
      "A bold, modern refresh built with Bun, Next.js 16, NextUI, and Tailwind. Includes the original WebGPU triangle demo and enhanced documentation.",
    url: "https://bradleymatera.github.io/leaf-js/",
    siteName: "leaf-js Demo",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-mesh-gradient">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
