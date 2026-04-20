import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snapchat Image Sizes — Snap, Geofilter & Story Dimensions | Social Media Image Resizer",
  description:
    "Snapchat image dimensions: snap (1080x1920), geofilter (1080x2340), profile photo (320x320), and story ad (1080x1920). Resize instantly.",
};

export default function SnapchatImageSizes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Snapchat Image Sizes — Snap, Geofilter & Story Dimensions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Snapchat is designed for full-screen vertical content. All snaps, stories, and ads
          use portrait orientation optimized for mobile devices. Using the correct dimensions
          ensures your content fills the screen without letterboxing.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Snapchat Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Snap</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1920</span> — Full-screen vertical (9:16)</li>
                <li>Standard snap and story dimensions</li>
                <li>Max file size: 5MB (images)</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Geofilter</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 2340</span> — Extended vertical for edge-to-edge devices</li>
                <li>Must be PNG with transparent background</li>
                <li>Max file size: 300KB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">320 x 320</span> — Square, displayed as circle (Bitmoji or photo)</li>
                <li>Shows in chat list and friend profiles</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Story Ad</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1920</span> — Full-screen vertical ad creative</li>
                <li>Same dimensions as regular snaps</li>
                <li>Supports swipe-up CTA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Snapchat Image Optimization Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Always use vertical (9:16):</strong> Snapchat is entirely portrait-oriented. Horizontal content will be letterboxed with black bars.</li>
            <li><strong>Geofilter safe zones:</strong> Keep designs in the top and bottom 25% of the canvas — the middle area is where the snap photo/video appears.</li>
            <li><strong>Keep text large and bold:</strong> Snapchat content is viewed quickly on small screens. Use at least 24pt text for readability.</li>
            <li><strong>Profile photos are tiny:</strong> At 320x320 displayed even smaller, use a simple icon or close-up face crop.</li>
            <li><strong>Test on multiple devices:</strong> Geofilter dimensions (1080x2340) account for taller phone screens — check how they display on older 16:9 devices too.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="snapchat" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size is a Snapchat snap?</h3>
            <p className="text-gray-600">Snapchat snaps should be 1080x1920 pixels (9:16 aspect ratio). This is the standard full-screen vertical format used for both photo and video snaps, as well as stories.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the Snapchat geofilter dimensions?</h3>
            <p className="text-gray-600">Snapchat geofilters should be 1080x2340 pixels to support edge-to-edge display on modern phones. They must be PNG format with a transparent background and under 300KB in file size.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size is a Snapchat profile photo?</h3>
            <p className="text-gray-600">Snapchat profile photos (or Bitmoji avatars) are 320x320 pixels. They display as a circle in the chat list and on friend profiles. Keep your image simple and centered.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What dimensions should Snapchat ads be?</h3>
            <p className="text-gray-600">Snapchat story ads use 1080x1920 pixels (9:16), the same as regular snaps. This ensures ads feel native to the platform and fill the entire screen without letterboxing.</p>
          </div>
        </div>
      </section>

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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What size is a Snapchat snap?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Snapchat snaps should be 1080x1920 pixels (9:16 aspect ratio). This is the standard full-screen vertical format used for both photo and video snaps, as well as stories."
                }
              },
              {
                "@type": "Question",
                "name": "What are the Snapchat geofilter dimensions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Snapchat geofilters should be 1080x2340 pixels to support edge-to-edge display on modern phones. They must be PNG format with a transparent background and under 300KB in file size."
                }
              },
              {
                "@type": "Question",
                "name": "What size is a Snapchat profile photo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Snapchat profile photos (or Bitmoji avatars) are 320x320 pixels. They display as a circle in the chat list and on friend profiles. Keep your image simple and centered."
                }
              },
              {
                "@type": "Question",
                "name": "What dimensions should Snapchat ads be?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Snapchat story ads use 1080x1920 pixels (9:16), the same as regular snaps. This ensures ads feel native to the platform and fill the entire screen without letterboxing."
                }
              }
            ]
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
              { "@type": "ListItem", "position": 2, "name": "Snapchat Image Sizes", "item": "https://imageresizers.net/snapchat-image-sizes" }
            ]
          })
        }}
      />
    </div>
  );
}
