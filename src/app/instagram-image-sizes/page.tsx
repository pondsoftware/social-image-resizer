import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
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

      <nav className="mt-10 border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Other Platform Guides</h2>
          <Link href="/" className="text-sm text-rose-600 hover:underline">
            ← All platforms
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/facebook-cover-photo-size" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Facebook Cover Photo Size</p>
            <p className="text-xs text-gray-500 mt-0.5">Cover photos, posts & profile</p>
          </Link>
          <Link href="/youtube-thumbnail-size" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">YouTube Thumbnail Size</p>
            <p className="text-xs text-gray-500 mt-0.5">Thumbnails, banners & profile</p>
          </Link>
          <Link href="/tiktok-video-size" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">TikTok Video Size</p>
            <p className="text-xs text-gray-500 mt-0.5">Video covers & photo posts</p>
          </Link>
          <Link href="/linkedin-image-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">LinkedIn Image Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Profile, banner & post images</p>
          </Link>
          <Link href="/twitter-image-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Twitter/X Image Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Profile, header & post images</p>
          </Link>
          <Link href="/pinterest-pin-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Pinterest Pin Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Standard pins, idea pins & boards</p>
          </Link>
          <Link href="/snapchat-image-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Snapchat Image Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Snaps, geofilters & stories</p>
          </Link>
          <Link href="/threads-image-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Threads Image Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Feed images & profile photos</p>
          </Link>
        </div>
      </nav>

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imageresizers.net" },
              { "@type": "ListItem", "position": 2, "name": "Instagram Image Sizes", "item": "https://imageresizers.net/instagram-image-sizes" }
            ]
          })
        }}
      />
    </div>
  );
}
