import ImageResizer from "@/components/ImageResizer";
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
    </div>
  );
}
