import ImageResizer from "@/components/ImageResizer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Video & Image Dimensions — Complete Size Guide | Social Media Image Resizer",
  description:
    "TikTok video dimensions are 1080x1920 pixels (9:16 portrait). Learn about video covers, profile photos, and best practices for TikTok's full-screen format.",
};

export default function TikTokVideoSize() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          TikTok Video & Image Dimensions — Complete Size Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          TikTok is designed for full-screen vertical content. All videos and images should use the
          9:16 portrait aspect ratio at 1080x1920 pixels for the sharpest display.
        </p>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">TikTok Image Dimensions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Video / Cover Image</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">1080 x 1920</span> — Full-screen vertical (9:16)</li>
                <li>This is used for video covers and photo posts</li>
                <li>Max video file size: 287.6 MB (mobile), 500 MB (desktop)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Profile Photo</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><span className="font-mono bg-gray-100 px-2 py-0.5 rounded">200 x 200</span> — Square, displayed as circle</li>
                <li>Keep face/logo centered and away from edges</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-3">TikTok Format Best Practices</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><strong className="text-white">Always use vertical (9:16):</strong> Horizontal or square content gets letterboxed with black bars, reducing engagement significantly.</li>
            <li><strong className="text-white">Safe zone for text:</strong> Keep important text within the center 720x1280 area — the bottom 150px is covered by the caption/UI and the top by the status bar.</li>
            <li><strong className="text-white">Video covers matter:</strong> Choose a cover frame that&apos;s visually compelling — it&apos;s what appears on your profile grid.</li>
            <li><strong className="text-white">High resolution:</strong> Upload at 1080x1920 minimum. Lower resolution content is de-prioritized by the algorithm.</li>
            <li><strong className="text-white">Photo carousels:</strong> TikTok photo mode uses the same 1080x1920 dimensions per slide.</li>
          </ul>
        </div>
      </div>

      <ImageResizer defaultPlatform="tiktok" />

      <div className="mt-8 text-center">
        <a href="/" className="text-rose-600 hover:underline text-sm">
          ← Back to all platforms
        </a>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "TikTok Image Resizer",
            "description": "Resize images and video covers to TikTok's 1080x1920 portrait format.",
            "url": "https://imageresizers.net/tiktok-video-size",
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
