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
  description: "immersive music world with thrilling NFT battles, curated discovery, and seamless trading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                HarmoniX
              </h2>
              <nav className="flex space-x-8">
                {['Home', 'Discovery', 'Dashboard'].map((item) => (
                  <a
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 mt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            © 2023 HarmoniX — All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
