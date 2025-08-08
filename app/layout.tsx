import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perfecttiming.local"),
  title: "Perfect Timing — Ask once, act at the right time",
  description:
    "Add your question to cart—love, career, money, property, health—and receive a clear, time-specific answer from your birth chart within 48 working hours.",
  openGraph: {
    title: "Perfect Timing — Ask once, act at the right time",
    description:
      "One precise answer backed by Vedic Astrology. Get timing, remedies, and an action plan.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Perfect Timing OG",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect Timing",
    description:
      "One precise answer backed by Vedic Astrology. Get timing, remedies, and an action plan.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-zinc-200 pb-28`}>
        {children}
      </body>
    </html>
  );
}
