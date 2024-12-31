import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmonix",
  description: "A music player that helps you focus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-100 p-4 flex justify-between">
          <h2 className="font-bold text-xl">HarmoniX</h2>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/discovery" className="hover:underline">Discovery</a>
            <a href="/dashboard" className="hover:underline">Dashboard</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
