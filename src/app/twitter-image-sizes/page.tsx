import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter/X Image Sizes — Profile, Header & Post Dimensions | Social Media Image Resizer",
  description:
    "Twitter/X image dimensions: profile photo (400x400), header photo (1500x500), in-stream photo (1600x900), and card image (1200x628). Resize instantly.",
};

export default function TwitterImageSizes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Twitter/X Image Sizes — Profile, Header & Post Dimensions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Twitter (now X) uses specific image dimensions for profiles, headers, and posts.
          Using the correct sizes ensures your images display without cropping or quality loss
          across desktop and mobile.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Twitter/X Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">400 x 400</span> — Square, displayed as circle</li>
                <li>Displays at 48px in timeline, 200px on profile page</li>
                <li>Max file size: 2MB</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Header Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1500 x 500</span> — 3:1 aspect ratio</li>
                <li>Max file size: 5MB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">In-Stream Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1600 x 900</span> — 16:9 landscape (recommended)</li>
                <li>Minimum: 600x335 pixels</li>
                <li>Max file size: 5MB (photos), 15MB (GIFs)</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Card Image</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 628</span> — Summary card with large image</li>
                <li>Used for link previews and Twitter Cards</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl border border-rose-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Twitter/X Image Optimization Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Profile photos are circular:</strong> Keep your face or logo centered and away from corners — they will be cropped.</li>
            <li><strong>Header safe zone:</strong> Your profile photo overlaps the bottom-left of the header. Avoid placing text or key elements there.</li>
            <li><strong>In-stream images:</strong> Twitter crops images in the timeline to 16:9. Upload at 1600x900 to avoid unexpected cropping.</li>
            <li><strong>Use PNG for graphics with text</strong> — Twitter compresses JPEGs, which can blur text and sharp edges.</li>
            <li><strong>Card images:</strong> Set up Twitter Cards meta tags on your site to control how link previews appear when shared.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="x" />

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size is a Twitter/X profile photo?</h3>
            <p className="text-gray-600">Twitter/X profile photos should be 400x400 pixels. They are displayed as a circle, so keep important content centered. The image appears at 48px in the timeline and up to 200px on the profile page.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the Twitter/X header photo dimensions?</h3>
            <p className="text-gray-600">The Twitter/X header (banner) photo should be 1500x500 pixels with a 3:1 aspect ratio. Keep important content away from the bottom-left where the profile photo overlaps.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the best image size for a tweet?</h3>
            <p className="text-gray-600">The recommended size for in-stream images on Twitter/X is 1600x900 pixels (16:9 aspect ratio). Images are cropped to 16:9 in the timeline, so avoid placing key content near edges.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size should a Twitter Card image be?</h3>
            <p className="text-gray-600">Twitter Card images (summary_large_image) should be 1200x628 pixels. This is the image that appears when someone shares a link to your website on Twitter/X.</p>
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
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What size is a Twitter/X profile photo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Twitter/X profile photos should be 400x400 pixels. They are displayed as a circle, so keep important content centered. The image appears at 48px in the timeline and up to 200px on the profile page."
                }
              },
              {
                "@type": "Question",
                "name": "What are the Twitter/X header photo dimensions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The Twitter/X header (banner) photo should be 1500x500 pixels with a 3:1 aspect ratio. Keep important content away from the bottom-left where the profile photo overlaps."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best image size for a tweet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The recommended size for in-stream images on Twitter/X is 1600x900 pixels (16:9 aspect ratio). Images are cropped to 16:9 in the timeline, so avoid placing key content near edges."
                }
              },
              {
                "@type": "Question",
                "name": "What size should a Twitter Card image be?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Twitter Card images (summary_large_image) should be 1200x628 pixels. This is the image that appears when someone shares a link to your website on Twitter/X."
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
              { "@type": "ListItem", "position": 2, "name": "Twitter/X Image Sizes", "item": "https://imageresizers.net/twitter-image-sizes" }
            ]
          })
        }}
      />
    </div>
  );
}
