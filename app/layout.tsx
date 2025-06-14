import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SlideshowHeader from "./components/SlideshowHeader";
import Navigation from "./components/Navigation";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// ...existing code...
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-geist antialiased">
        <SlideshowHeader />
        <main className="min-h-screen pt-[100vh]">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}