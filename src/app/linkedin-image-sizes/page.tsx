import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Image Sizes — Profile, Banner & Post Dimensions | Social Media Image Resizer",
  description:
    "LinkedIn image dimensions for profile photos (400x400), cover banners (1584x396), post images (1200x627), and company logos (300x300). Resize instantly.",
};

export default function LinkedInImageSizes() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          LinkedIn Image Sizes — Profile, Banner & Post Dimensions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          LinkedIn has specific image dimensions for personal profiles, company pages, and post
          content. Using the correct sizes ensures your professional presence looks polished across
          devices.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">LinkedIn Image Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">400 x 400</span> — Square, displayed as circle</li>
                <li>Recommended: upload at 400x400 minimum</li>
                <li>Max file size: 8MB</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Cover / Banner Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1584 x 396</span> — Personal profile banner</li>
                <li>Company page banner: 1128 x 191</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Post Image</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 627</span> — Landscape post (1.91:1)</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 1200</span> — Square post (best engagement)</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 1500</span> — Portrait post (most feed space)</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Company Logo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">300 x 300</span> — Square logo for company page</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-xl border border-rose-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">LinkedIn Image Tips</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Profile photos:</strong> Use a professional headshot with good lighting. The circular crop means corners are hidden — keep your face centered.</li>
            <li><strong>Banner safe zone:</strong> Your profile photo overlaps the bottom-left corner of the banner on desktop. Keep text and key visuals in the right two-thirds.</li>
            <li><strong>Post images:</strong> Square and portrait posts get more engagement because they take up more feed space. Landscape is best for link previews.</li>
            <li><strong>Use PNG for logos and graphics</strong> — LinkedIn compresses JPEGs noticeably on company pages.</li>
            <li><strong>Article cover images:</strong> Use 1200x627 for LinkedIn article headers — they also serve as the link preview image when shared.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="linkedin" />

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
            "name": "LinkedIn Image Resizer",
            "description": "Resize images for LinkedIn profiles, banners, posts, and company pages.",
            "url": "https://imageresizers.net/linkedin-image-sizes",
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
              { "@type": "ListItem", "position": 2, "name": "LinkedIn Image Sizes", "item": "https://imageresizers.net/linkedin-image-sizes" }
            ]
          })
        }}
      />
    </div>
  );
}
