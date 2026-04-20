import ImageResizer from "@/components/ImageResizer";
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

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-8">
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

      <div className="mt-8 text-center">
        <a href="/" className="text-blue-600 hover:underline text-sm">
          ← Back to all platforms
        </a>
      </div>

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
    </div>
  );
}
