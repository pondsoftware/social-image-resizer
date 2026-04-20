import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Media Image Resizer — Resize for Instagram, TikTok, YouTube & More",
  description:
    "Resize images for any social media platform. Preview how your image will look cropped, then download the perfect size for Instagram, TikTok, YouTube, LinkedIn, X, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K7FMZ8XELQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K7FMZ8XELQ');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-xl font-bold text-gray-900">
              Social Media Image Resizer
            </p>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 text-center">
              Image dimensions are based on the latest platform
              recommendations as of 2024. Platforms may update their
              requirements — check each platform&apos;s guidelines for the most
              current specs.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
