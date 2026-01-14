import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const myFont = localFont({
  src: "../fonts/microgme-webfont.woff2",
});

export const metadata: Metadata = {
  title: "Peter Ogbonnaya's Portfolio",
  description: "Web and App Developer portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
