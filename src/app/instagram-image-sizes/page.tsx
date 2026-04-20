import ImageResizer from "@/components/ImageResizer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Image Sizes — 2024 Complete Guide | Social Media Image Resizer",
  description:
    "All Instagram image dimensions in one place: feed posts (1080x1080, 1080x1350, 1080x566), stories & reels (1080x1920), profile photos (320x320), and carousels. Resize instantly.",
};

export default function InstagramImageSizes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Instagram Image Sizes — 2024 Complete Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Instagram supports several image formats, each with specific pixel dimensions for optimal
          display. Using the correct size prevents cropping and compression artifacts.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Instagram Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Feed Posts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1080</span> — Square post (1:1)</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1350</span> — Portrait post (4:5, recommended for max screen space)</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 566</span> — Landscape post (1.91:1)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Stories & Reels</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1920</span> — Full-screen vertical (9:16)</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">320 x 320</span> — Circular crop, displays at 110px on mobile</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Carousel</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Same dimensions as feed posts — all slides must share the same aspect ratio</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl border border-rose-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Instagram Image Optimization Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Use portrait (4:5)</strong> for feed posts — it takes up more screen real estate in the feed than square.</li>
            <li><strong>Export at exactly 1080px wide</strong> — uploading larger images triggers Instagram&apos;s compression, reducing quality.</li>
            <li><strong>Use PNG for text-heavy graphics</strong> and JPEG for photographs to minimize compression artifacts.</li>
            <li><strong>Keep important content centered</strong> in Stories — the top and bottom 250px are covered by UI elements.</li>
            <li><strong>Profile photos are cropped circular</strong> — keep faces and logos away from corners.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="instagram" />

      <div className="mt-8 text-center">
        <a href="/" className="text-rose-600 hover:underline text-sm">
          ← Back to all platforms
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Instagram Image Resizer",
            "description": "Resize images to all Instagram dimensions — feed posts, stories, reels, and profile photos.",
            "url": "https://imageresizers.net/instagram-image-sizes",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  );
}
