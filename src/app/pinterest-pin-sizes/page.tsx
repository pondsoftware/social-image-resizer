import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinterest Pin Sizes — Standard, Idea & Board Dimensions | Social Media Image Resizer",
  description:
    "Pinterest image dimensions: standard pin (1000x1500), idea pin (1080x1920), board cover (600x600), and profile photo (165x165). Resize instantly.",
};

export default function PinterestPinSizes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Pinterest Pin Sizes — Standard, Idea & Board Dimensions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Pinterest is a visual-first platform where image dimensions directly impact engagement.
          Using the correct pin sizes ensures your content displays beautifully in the feed and
          gets maximum visibility.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Pinterest Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Standard Pin</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1000 x 1500</span> — 2:3 aspect ratio (recommended)</li>
                <li>This is the optimal size for maximum feed visibility</li>
                <li>Max file size: 20MB</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Idea Pin</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1920</span> — 9:16 full-screen vertical</li>
                <li>Multi-page storytelling format</li>
                <li>Up to 20 pages per idea pin</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Board Cover</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">600 x 600</span> — Square crop</li>
                <li>Displayed as a thumbnail on your profile</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">165 x 165</span> — Circular crop</li>
                <li>Displays small, so use a simple logo or clear headshot</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl border border-rose-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Pinterest Image Optimization Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Use 2:3 aspect ratio:</strong> Pinterest recommends 1000x1500 — taller pins take up more feed space and get more engagement.</li>
            <li><strong>Avoid very long pins:</strong> Pins taller than 2:3 get truncated in the feed and require a tap to see fully.</li>
            <li><strong>Add text overlay:</strong> Pins with clear, readable text overlay perform significantly better than image-only pins.</li>
            <li><strong>Use high contrast and bright colors:</strong> Pinterest&apos;s feed is dense — vibrant images stand out from the grid.</li>
            <li><strong>Idea pins for engagement:</strong> Multi-page idea pins get higher distribution because they increase time spent on content.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="pinterest" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the best Pinterest pin size?</h3>
            <p className="text-gray-600">The best Pinterest pin size is 1000x1500 pixels (2:3 aspect ratio). This is the recommended dimension that takes up optimal space in the Pinterest feed without being truncated.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size are Pinterest Idea Pins?</h3>
            <p className="text-gray-600">Pinterest Idea Pins should be 1080x1920 pixels (9:16 aspect ratio), the same as a full-screen vertical format. You can include up to 20 pages per idea pin.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the Pinterest board cover size?</h3>
            <p className="text-gray-600">Pinterest board covers are 600x600 pixels (square). They display as small thumbnails on your profile, so use a clear, simple image that represents the board content.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use long/tall images on Pinterest?</h3>
            <p className="text-gray-600">While Pinterest supports taller images, pins with an aspect ratio greater than 2:3 will be truncated in the feed. Stick to 1000x1500 for the best results. Very long infographic pins can still work but require users to tap to see the full content.</p>
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best Pinterest pin size?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The best Pinterest pin size is 1000x1500 pixels (2:3 aspect ratio). This is the recommended dimension that takes up optimal space in the Pinterest feed without being truncated."
                }
              },
              {
                "@type": "Question",
                "name": "What size are Pinterest Idea Pins?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinterest Idea Pins should be 1080x1920 pixels (9:16 aspect ratio), the same as a full-screen vertical format. You can include up to 20 pages per idea pin."
                }
              },
              {
                "@type": "Question",
                "name": "What is the Pinterest board cover size?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pinterest board covers are 600x600 pixels (square). They display as small thumbnails on your profile, so use a clear, simple image that represents the board content."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use long/tall images on Pinterest?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While Pinterest supports taller images, pins with an aspect ratio greater than 2:3 will be truncated in the feed. Stick to 1000x1500 for the best results. Very long infographic pins can still work but require users to tap to see the full content."
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
              { "@type": "ListItem", "position": 2, "name": "Pinterest Pin Sizes", "item": "https://imageresizers.net/pinterest-pin-sizes" }
            ]
          })
        }}
      />
    </div>
  );
}
