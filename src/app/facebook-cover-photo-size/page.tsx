import ImageResizer from "@/components/ImageResizer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facebook Cover Photo Size — Desktop & Mobile Dimensions | Social Media Image Resizer",
  description:
    "Facebook cover photo dimensions: 820x312 on desktop, 640x360 on mobile. Learn about safe zones, recommended upload size (820x462), and how to avoid cropping.",
};

export default function FacebookCoverPhotoSize() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Facebook Cover Photo Size — Desktop & Mobile Dimensions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Facebook displays cover photos differently on desktop and mobile, which means your image
          will be cropped depending on the device. Understanding the safe zones prevents important
          content from being cut off.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Facebook Image Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Cover Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">820 x 312</span> — Desktop display</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">640 x 360</span> — Mobile display</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">820 x 462</span> — Recommended upload (safe for both)</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Event Cover</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 628</span> — Event cover image</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Post Images</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 630</span> — Link preview / landscape post</li>
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1200 x 1200</span> — Square post</li>
              </ul>
              <h3 className="font-medium text-gray-900 mb-2 mt-4">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">170 x 170</span> — Circular crop on desktop</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Cover Photo Safe Zones</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>Desktop crops vertically:</strong> The top and bottom edges are trimmed on desktop. Keep critical content in the vertical center.</li>
            <li><strong>Mobile crops horizontally:</strong> Left and right edges are trimmed on mobile. Keep text and faces away from the left/right 90px.</li>
            <li><strong>Upload at 820x462:</strong> This gives enough margin for both crops without losing content.</li>
            <li><strong>Profile photo overlap:</strong> On desktop, your profile photo overlaps the bottom-left of the cover. Don&apos;t put important elements there.</li>
            <li><strong>Use PNG for text/logos</strong> — Facebook compresses JPEG covers heavily.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="facebook" />

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
            "name": "Facebook Cover Photo Resizer",
            "description": "Resize images for Facebook cover photos, posts, and profile pictures with correct dimensions.",
            "url": "https://imageresizers.net/facebook-cover-photo-size",
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
