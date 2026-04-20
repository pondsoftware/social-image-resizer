import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imageresizers.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  title: "Social Media Image Resizer — Resize for Instagram, TikTok, YouTube & More",
  description:
    "Resize images for any social media platform. Preview how your image will look cropped, then download the perfect size for Instagram, TikTok, YouTube, LinkedIn, X, and more.",
  openGraph: {
    title: "Social Media Image Resizer",
    description:
      "Resize images for any social media platform. Preview how your image will look cropped, then download the perfect size for Instagram, TikTok, YouTube, LinkedIn, X, and more.",
    type: "website",
    url: "https://imageresizers.net",
    siteName: "Social Media Image Resizer",
  },
  twitter: {
    card: "summary",
    title: "Social Media Image Resizer",
    description:
      "Resize images for any social media platform. Preview how your image will look cropped, then download the perfect size for Instagram, TikTok, YouTube, LinkedIn, X, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5EPP70JHBT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5EPP70JHBT');
        `}
      </Script>
      <body className="min-h-full flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-rose-600 text-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" role="img" aria-label="Social Media Image Resizer logo">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
              <span className="text-xl font-bold">Social Media Image Resizer</span>
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-800 text-center mb-3">More Photo Tools</p>
              <div className="flex justify-center gap-4">
                <a href="https://imageconverters.net" className="flex-1 max-w-xs bg-rose-50 border border-rose-200 rounded-lg px-4 py-3 text-center hover:border-rose-400 hover:bg-rose-100 transition">
                  <p className="font-semibold text-rose-700 text-sm">Image Format Converter</p>
                  <p className="text-xs text-rose-600 mt-0.5">Convert HEIC, WEBP, AVIF &amp; more</p>
                </a>
                <a href="https://photometadata.net" className="flex-1 max-w-xs bg-rose-50 border border-rose-200 rounded-lg px-4 py-3 text-center hover:border-rose-400 hover:bg-rose-100 transition">
                  <p className="font-semibold text-rose-700 text-sm">Photo Metadata Viewer</p>
                  <p className="text-xs text-rose-600 mt-0.5">View &amp; strip EXIF data</p>
                </a>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 text-center mb-2">More Free Tools</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
                <a href="https://appliancecostcalculator.net" className="text-rose-600 hover:underline">Appliance Cost Calculator</a>
                <a href="https://sidehustletaxcalculator.net" className="text-rose-600 hover:underline">Side Hustle Tax Calculator</a>
                <a href="https://freelancerates.net" className="text-rose-600 hover:underline">Freelance Rate Calculator</a>
                <a href="https://lendingcalculator.net" className="text-rose-600 hover:underline">Mortgage Calculator</a>
                <a href="https://compoundinterestcalc.app" className="text-rose-600 hover:underline">Compound Interest Calculator</a>
                <a href="https://salaryconverter.net" className="text-rose-600 hover:underline">Salary Converter</a>
                <a href="https://printablepolly.com" className="text-rose-600 hover:underline">Printable Polly</a>
                <a href="https://biblegarden.net" className="text-rose-600 hover:underline">Bible Garden</a>
              </div>
            </div>
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
