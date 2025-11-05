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
  metadataBase: new URL("https://bradleymatera.github.io/TriangleDemo/"),
  title: "Triangle Shader Lab — WebGPU triangle walkthrough",
  description:
    "Triangle Shader Lab distills the canonical WebGPU 'hello triangle' sample into an interactive demo and annotated architecture overview.",
  keywords: [
    "WebGPU",
    "hello triangle",
    "shader lab",
    "Next.js 16",
    "Bun",
    "NextUI",
    "TypeScript"
  ],
  authors: [{ name: "deondreE" }],
  openGraph: {
    title: "Triangle Shader Lab — WebGPU triangle walkthrough",
    description:
      "A focused WebGPU playground highlighting the hello triangle pipeline, rendered through a polished Next.js 16 experience.",
    url: "https://bradleymatera.github.io/TriangleDemo/",
    siteName: "Triangle Shader Lab",
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
