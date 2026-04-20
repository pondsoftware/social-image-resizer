import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YouTube Thumbnail Size — 1280x720 Dimensions Guide | Social Media Image Resizer",
  description:
    "YouTube thumbnail dimensions are 1280x720 pixels (16:9 aspect ratio). Learn best practices for text readability, mobile preview, and click-through optimization.",
};

export default function YouTubeThumbnailSize() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          YouTube Thumbnail Size — 1280x720 Dimensions Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          YouTube thumbnails are the single biggest factor in click-through rate. The ideal
          dimensions are 1280x720 pixels with a 16:9 aspect ratio and a maximum file size of 2MB.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">YouTube Image Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Thumbnail</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1280 x 720</span> — 16:9 aspect ratio</li>
                <li>Minimum width: 640 pixels</li>
                <li>Max file size: 2MB</li>
                <li>Formats: JPG, PNG, GIF</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Channel Banner</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">2560 x 1440</span> — Full banner (TV)</li>
                <li>Safe area for text: 1546 x 423 (center)</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">800 x 800</span> — Displays at 98px in comments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-xl border border-red-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Thumbnail Best Practices</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Text readability:</strong> Use large, bold text (3-5 words max). It must be legible at 168x94px — the size shown in suggestions on mobile.</li>
            <li><strong>Mobile preview:</strong> 70% of YouTube views are on mobile. Check your thumbnail at small sizes before uploading.</li>
            <li><strong>High contrast:</strong> Bright backgrounds with dark text (or vice versa) stand out in feeds.</li>
            <li><strong>Faces and emotion:</strong> Thumbnails with expressive faces consistently get higher CTR.</li>
            <li><strong>Avoid clutter:</strong> One focal point, one emotion, minimal text. The title handles context.</li>
            <li><strong>Don&apos;t duplicate the title:</strong> Your thumbnail and title should complement, not repeat each other.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="youtube" />

      <nav className="mt-10 border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Other Platform Guides</h2>
          <Link href="/" className="text-sm text-rose-600 hover:underline">
            ← All platforms
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link href="/instagram-image-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Instagram Image Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Feed, stories, reels & profile</p>
          </Link>
          <Link href="/facebook-cover-photo-size" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Facebook Cover Photo Size</p>
            <p className="text-xs text-gray-500 mt-0.5">Cover photos, posts & profile</p>
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
            "name": "YouTube Thumbnail Resizer",
            "description": "Resize images to the perfect YouTube thumbnail size — 1280x720 pixels.",
            "url": "https://imageresizers.net/youtube-thumbnail-size",
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
              { "@type": "ListItem", "position": 2, "name": "YouTube Thumbnail Size", "item": "https://imageresizers.net/youtube-thumbnail-size" }
            ]
          })
        }}
      />
    </div>
  );
}
