import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";
import { platforms } from "@/data/platforms";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Resize Images for Social Media
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Upload an image, pick a platform and size, preview how it will look,
          and download the perfectly sized version. Supports Instagram, TikTok,
          YouTube, Facebook, X, LinkedIn, Pinterest, and Twitch.
        </p>
        <p className="mt-4 text-base text-gray-600 max-w-2xl">
          Every platform compresses uploads, crops to its own aspect ratio, and
          rejects images outside its size limits. Resizing to the exact pixel
          dimensions a platform expects is the simplest way to keep your photos
          sharp and your text legible — no blurry profile pictures, no cropped
          captions, no awkward letterboxing.
        </p>
      </div>

      <nav className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Platform Size Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/instagram-image-sizes" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">Instagram Image Sizes</h3>
            <p className="text-sm text-gray-500">Feed posts, stories, reels & profile photos</p>
          </Link>
          <Link href="/facebook-cover-photo-size" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">Facebook Cover Photo Size</h3>
            <p className="text-sm text-gray-500">Cover photos, posts & profile pictures</p>
          </Link>
          <Link href="/youtube-thumbnail-size" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">YouTube Thumbnail Size</h3>
            <p className="text-sm text-gray-500">Thumbnails, banners & profile photos</p>
          </Link>
          <Link href="/tiktok-video-size" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">TikTok Video Size</h3>
            <p className="text-sm text-gray-500">Video covers, photo posts & profile photos</p>
          </Link>
          <Link href="/linkedin-image-sizes" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">LinkedIn Image Sizes</h3>
            <p className="text-sm text-gray-500">Profile, banner, post & company logos</p>
          </Link>
          <Link href="/twitter-image-sizes" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">Twitter/X Image Sizes</h3>
            <p className="text-sm text-gray-500">Profile, header, posts & card images</p>
          </Link>
          <Link href="/pinterest-pin-sizes" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">Pinterest Pin Sizes</h3>
            <p className="text-sm text-gray-500">Standard pins, idea pins & board covers</p>
          </Link>
          <Link href="/snapchat-image-sizes" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">Snapchat Image Sizes</h3>
            <p className="text-sm text-gray-500">Snaps, geofilters, stories & ads</p>
          </Link>
          <Link href="/threads-image-sizes" className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-rose-400 hover:shadow-md transition">
            <h3 className="font-semibold text-gray-900 mb-1">Threads Image Sizes</h3>
            <p className="text-sm text-gray-500">Feed images, profile & link previews</p>
          </Link>
        </div>
      </nav>

      <ImageResizer />

      <section className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Resize an Image for Social Media in 4 Steps</h2>
        <ol className="space-y-5 text-gray-700">
          <li className="flex gap-4">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm">1</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Upload your image</h3>
              <p className="text-gray-600">Drag and drop or click to select a JPG, PNG, WebP, or HEIC file. Files are processed in your browser — nothing is uploaded to a server, so even private photos stay private.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm">2</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Pick a platform and size</h3>
              <p className="text-gray-600">Choose the network you&rsquo;re posting to and the exact placement (feed post, story, profile photo, banner). Every preset matches the platform&rsquo;s current published spec.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm">3</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Position the crop</h3>
              <p className="text-gray-600">Drag the crop frame to keep the most important part of your image inside it. The live preview shows exactly what will be saved — no guessing how the platform will crop you.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold text-sm">4</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Download the resized file</h3>
              <p className="text-gray-600">Save a JPG or PNG sized to the exact pixel dimensions you picked. Need the same shot for multiple platforms? Switch presets and download again — your original stays in place.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Social Media Image Size Reference</h2>
        <p className="text-gray-600 mb-6">Quick lookup for the most-used image dimensions on each major platform. Click any platform name for a deeper guide with examples.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Platform</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Placement</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Dimensions (px)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {platforms.flatMap((platform) =>
                platform.sizes.map((size, idx) => (
                  <tr key={`${platform.id}-${size.name}`}>
                    {idx === 0 ? (
                      <td className="px-4 py-3 font-medium text-gray-900 align-top" rowSpan={platform.sizes.length}>
                        {platform.name}
                      </td>
                    ) : null}
                    <td className="px-4 py-3 text-gray-700">{size.name}</td>
                    <td className="px-4 py-3 text-gray-600 tabular-nums">{size.width} &times; {size.height}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500">Specs are pulled from the platforms&rsquo; current help-center documentation. Networks adjust dimensions occasionally — if a size changes, the resizer above will be updated to match.</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size should an Instagram post be?</h3>
            <p className="text-gray-600">The recommended size for Instagram feed posts is 1080x1080 pixels (square), 1080x1350 pixels (portrait, gets more screen space), or 1080x566 pixels (landscape). Stories and Reels should be 1080x1920 pixels.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the best YouTube thumbnail size?</h3>
            <p className="text-gray-600">YouTube thumbnails should be 1280x720 pixels (16:9 aspect ratio) with a minimum width of 640 pixels. Use JPG, PNG, or GIF format under 2MB.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What size is a Facebook cover photo?</h3>
            <p className="text-gray-600">Facebook cover photos display at 820x312 pixels on desktop and 640x360 on mobile. Upload at 820x462 pixels so it looks good on both devices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Why do my images look blurry on social media?</h3>
            <p className="text-gray-600">Social platforms compress uploaded images. To minimize quality loss, upload at the exact recommended dimensions (not larger), use PNG for graphics with text, and avoid re-saving JPGs multiple times.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I resize one image for multiple platforms?</h3>
            <p className="text-gray-600">Yes! Upload your image above, then select different platform presets to download correctly sized versions for each social network.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Are my images uploaded to a server?</h3>
            <p className="text-gray-600">No. The resizer runs entirely in your browser using a canvas. Your image never leaves your device, which makes the tool safe for personal photos, client work, and anything you&rsquo;d rather not hand to a third-party service.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">JPG or PNG — which should I use for social media?</h3>
            <p className="text-gray-600">Use JPG for photographs and any image without sharp text. Use PNG when your image contains text overlays, logos, screenshots, or transparent areas. PNG files are larger but won&rsquo;t pick up the JPG compression artifacts that make small text look smudged.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if my image is smaller than the recommended size?</h3>
            <p className="text-gray-600">The platform will scale it up, which usually looks soft or pixelated. Either find a higher-resolution original, or pick a preset whose dimensions are closer to your image. As a rule of thumb, never resize a photo to more than 1.5&times; its native width.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What size should an Instagram post be?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The recommended size for Instagram feed posts is 1080x1080 pixels (square), 1080x1350 pixels (portrait, gets more screen space), or 1080x566 pixels (landscape). Stories and Reels should be 1080x1920 pixels."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best YouTube thumbnail size?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "YouTube thumbnails should be 1280x720 pixels (16:9 aspect ratio) with a minimum width of 640 pixels. Use JPG, PNG, or GIF format under 2MB."
                }
              },
              {
                "@type": "Question",
                "name": "What size is a Facebook cover photo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Facebook cover photos display at 820x312 pixels on desktop and 640x360 on mobile. Upload at 820x462 pixels so it looks good on both devices."
                }
              },
              {
                "@type": "Question",
                "name": "Why do my images look blurry on social media?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Social platforms compress uploaded images. To minimize quality loss, upload at the exact recommended dimensions (not larger), use PNG for graphics with text, and avoid re-saving JPGs multiple times."
                }
              },
              {
                "@type": "Question",
                "name": "Can I resize one image for multiple platforms?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Upload your image above, then select different platform presets to download correctly sized versions for each social network."
                }
              },
              {
                "@type": "Question",
                "name": "Are my images uploaded to a server?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. The resizer runs entirely in your browser using a canvas. Your image never leaves your device, which makes the tool safe for personal photos, client work, and anything you'd rather not hand to a third-party service."
                }
              },
              {
                "@type": "Question",
                "name": "JPG or PNG — which should I use for social media?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Use JPG for photographs and any image without sharp text. Use PNG when your image contains text overlays, logos, screenshots, or transparent areas. PNG files are larger but won't pick up the JPG compression artifacts that make small text look smudged."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if my image is smaller than the recommended size?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The platform will scale it up, which usually looks soft or pixelated. Either find a higher-resolution original, or pick a preset whose dimensions are closer to your image. As a rule of thumb, never resize a photo to more than 1.5x its native width."
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
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://imageresizers.net" }
            ]
          })
        }}
      />
    </div>
  );
}
