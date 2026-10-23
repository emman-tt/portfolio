import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteNav } from "./shared/site-nav";
import "./globals.css";

const archivo = localFont({
  src: "./fonts/archivo-var.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const interTight = localFont({
  src: "./fonts/inter-tight-var.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-var.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-var.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
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
