import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohana Aditiyan | Full Stack Developer",
  description:
    "Portfolio of Mohana Aditiyan P - Full Stack Developer specialized in Next.js, React, Node.js and MySQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-white`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
