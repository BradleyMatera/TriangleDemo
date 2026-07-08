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
  title: "WebGPU Lab — Interactive graphics learning platform",
  description:
    "WebGPU Lab is a production-grade interactive platform for learning modern graphics programming with live WebGPU rendering, WGSL editing, and GPU pipeline visualization.",
  keywords: [
    "WebGPU",
    "graphics programming",
    "WGSL",
    "WebGPU Lab",
    "Next.js 16",
    "Bun",
    "TypeScript"
  ],
  authors: [{ name: "deondreE" }],
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "WebGPU Lab — Interactive graphics learning platform",
    description:
      "A production-grade WebGPU learning environment with live preview, pipeline visualizer, shader playground, and GPU diagnostics.",
    url: "https://bradleymatera.github.io/TriangleDemo/",
    siteName: "WebGPU Lab",
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
