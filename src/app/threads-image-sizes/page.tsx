import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Threads Image Sizes — Feed, Profile & Link Preview Dimensions | Social Media Image Resizer",
  description:
    "Threads image dimensions: profile photo (320x320), feed image (1080x1350), feed square (1080x1080), and link preview (1200x628). Resize instantly.",
};

export default function ThreadsImageSizes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Threads Image Sizes — Feed, Profile & Link Preview Dimensions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Threads by Meta uses image dimensions similar to Instagram but optimized for its
          text-first feed format. Using the correct sizes ensures your images display sharp
          and take up maximum space in the timeline.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Threads Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">320 x 320</span> — Synced from Instagram, displayed as circle</li>
                <li>Shows next to every post in the feed</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Feed Image (Portrait)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1350</span> — 4:5 aspect ratio (recommended)</li>
                <li>Takes up maximum vertical space in the feed</li>
                <li>Best for photos and visual content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Feed Image (Square)</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1080</span> — 1:1 aspect ratio</li>
                <li>Standard square format, works well for most content</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Link Preview</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 628</span> — Open Graph image for shared links</li>
                <li>Appears when posting a URL in a thread</li>
                <li>Set via og:image meta tag on your website</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl border border-rose-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Threads Image Optimization Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Use portrait (4:5) for maximum impact:</strong> Like Instagram, portrait images take up more screen real estate in the Threads feed.</li>
            <li><strong>Profile photo syncs from Instagram:</strong> Your Threads profile photo comes from your linked Instagram account — update it there to change it on both platforms.</li>
            <li><strong>Up to 10 images per post:</strong> Threads supports carousel posts with up to 10 images, all sharing the same aspect ratio within the post.</li>
            <li><strong>Export at 1080px wide:</strong> This matches the display resolution — uploading larger images may trigger unnecessary compression.</li>
            <li><strong>Link previews use og:image:</strong> To control how links appear on Threads, set the Open Graph image meta tag on your website to 1200x628.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="threads" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the best image size for Threads?</h3>
            <p className="text-gray-600">The recommended image size for Threads is 1080x1350 pixels (4:5 portrait aspect ratio). This takes up the most vertical space in the feed and gives your content maximum visibility.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size is a Threads profile photo?</h3>
            <p className="text-gray-600">Threads profile photos are 320x320 pixels, displayed as a circle. Your profile photo is synced from your linked Instagram account, so changes must be made on Instagram.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Threads support carousel posts?</h3>
            <p className="text-gray-600">Yes, Threads supports carousel posts with up to 10 images. All images in a carousel should use the same aspect ratio. Both 1080x1080 (square) and 1080x1350 (portrait) work well.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How do link previews work on Threads?</h3>
            <p className="text-gray-600">When you share a URL on Threads, it pulls the Open Graph image (og:image) from the linked website. For best results, set your og:image to 1200x628 pixels on your site.</p>
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
          <Link href="/snapchat-image-sizes" className="block bg-white rounded-lg border border-gray-200 px-4 py-3 hover:border-rose-400 hover:shadow-sm transition">
            <p className="font-medium text-gray-900 text-sm">Snapchat Image Sizes</p>
            <p className="text-xs text-gray-500 mt-0.5">Snaps, geofilters & stories</p>
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
                "name": "What is the best image size for Threads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The recommended image size for Threads is 1080x1350 pixels (4:5 portrait aspect ratio). This takes up the most vertical space in the feed and gives your content maximum visibility."
                }
              },
              {
                "@type": "Question",
                "name": "What size is a Threads profile photo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Threads profile photos are 320x320 pixels, displayed as a circle. Your profile photo is synced from your linked Instagram account, so changes must be made on Instagram."
                }
              },
              {
                "@type": "Question",
                "name": "Does Threads support carousel posts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Threads supports carousel posts with up to 10 images. All images in a carousel should use the same aspect ratio. Both 1080x1080 (square) and 1080x1350 (portrait) work well."
                }
              },
              {
                "@type": "Question",
                "name": "How do link previews work on Threads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When you share a URL on Threads, it pulls the Open Graph image (og:image) from the linked website. For best results, set your og:image to 1200x628 pixels on your site."
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
              { "@type": "ListItem", "position": 2, "name": "Threads Image Sizes", "item": "https://imageresizers.net/threads-image-sizes" }
            ]
          })
        }}
      />
    </div>
  );
}
