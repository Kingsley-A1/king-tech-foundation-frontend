import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "King Tech Foundation",
    template: "%s | King Tech Foundation",
  },
  description:
    "For Honour and For Excellence, Engineering the Solutions of this, and the Next Generation.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kingtechfoundation.com",
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "King Tech Foundation",
    title: "King Tech Foundation",
    description:
      "For Honour and For Excellence, Engineering the Solutions of this, and the Next Generation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "King Tech Foundation",
    description:
      "For Honour and For Excellence, Engineering the Solutions of this, and the Next Generation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ktf-white text-ktf-obsidian">
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
