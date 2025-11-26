import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
      <body className={`${myFont.className} antialiased`}>{children}</body>
    </html>
  );
}
