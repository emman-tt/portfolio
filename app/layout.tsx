import type { Metadata } from "next";
import { Archivo, Geist_Mono, Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import { SiteNav } from "./shared/site-nav";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.emmanverse.uk"),
  title: {
    default: "Emmanuel Acquah — Creative Developer",
    template: "%s — Emmanuel Acquah",
  },
  description:
    "Full-stack engineer in Accra, Ghana. I design, build and ship production platforms — marketplaces, storefronts, music tools — with motion baked in. Any stack, any scale.",
  keywords: [
    "Emmanuel Acquah",
    "creative developer",
    "full-stack engineer",
    "Ghana",
    "Accra",
    "Next.js",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Emmanuel Acquah",
    title: "Emmanuel Acquah — Creative Developer",
    description: "Any stack, any scale, made in Ghana.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${interTight.variable} ${inter.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
