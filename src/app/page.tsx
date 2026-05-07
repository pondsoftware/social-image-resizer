import ImageResizer from "@/components/ImageResizer";
import Link from "next/link";

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

      <section className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Choose the Right Size for Each Platform</h2>
        <p className="text-gray-600 mb-6">
          Every social network crops, scales, and compresses images differently. Picking the wrong dimensions
          means your post arrives blurry, gets letterboxed with black bars, or has the most important part of
          your photo cut off. Here&rsquo;s a quick reference for each major platform.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Instagram (Feed, Story, Reel)</h3>
        <p className="text-gray-600 mb-4">
          Instagram supports three feed aspect ratios: 1:1 (1080&times;1080) for classic squares, 4:5
          (1080&times;1350) for portrait posts that take up the most screen real estate, and 1.91:1
          (1080&times;566) for landscape. Stories and Reels are vertical 9:16 at 1080&times;1920. Keep important
          subjects within the center 1080&times;1350 zone so nothing gets cropped when Instagram generates the
          square feed thumbnail.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Facebook (Cover, Post, Profile)</h3>
        <p className="text-gray-600 mb-4">
          Facebook cover photos display at 820&times;312 on desktop and 640&times;360 on mobile, so upload at
          820&times;462 to look correct on both. Shared posts work best at 1200&times;630 (1.91:1) — the same
          dimensions Facebook uses for link previews. Profile pictures crop to a circle at 170&times;170, but
          upload a 320&times;320 square so the high-DPI version stays sharp.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Twitter/X, LinkedIn, and Pinterest</h3>
        <p className="text-gray-600 mb-4">
          Twitter/X in-stream images render at 1600&times;900 (16:9) but the timeline preview crops to roughly
          1200&times;675, so center your subject. LinkedIn feed posts use 1200&times;627 for shared links and
          1200&times;1500 for portrait single-image posts; the company banner is 1128&times;191. Pinterest
          rewards tall pins — 1000&times;1500 (2:3) is the sweet spot, and idea pins are 1080&times;1920. Wider
          than 2:3 and Pinterest crops the bottom in feeds.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">YouTube Thumbnails and TikTok</h3>
        <p className="text-gray-600 mb-4">
          YouTube thumbnails are 1280&times;720 (16:9) at a minimum 640px wide and a 2MB cap; JPG, PNG, and GIF
          are accepted. Channel banners need a 2560&times;1440 source so the safe area renders cleanly across
          phone, tablet, TV, and desktop. TikTok video covers are 1080&times;1920 (9:16) — the same as Reels and
          Stories — and TikTok now supports 1080&times;1350 photo carousels with the same crop rules as
          Instagram portrait.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Resizing Mistakes to Avoid</h2>
        <p className="text-gray-600 mb-4">
          Most quality complaints aren&rsquo;t about the platform — they&rsquo;re about how the image was
          prepared before upload. A few patterns account for almost all of them:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-4">
          <li>
            <strong>Uploading larger than the recommended size.</strong> Every platform downscales — and their
            algorithms are tuned for noise, not sharpness. Resize to the exact target dimensions before
            uploading and you&rsquo;ll keep crisp text and clean edges.
          </li>
          <li>
            <strong>Using JPG for graphics with text or sharp edges.</strong> JPG compression smears anything
            with hard contrast lines (logos, screenshots, infographics). Use PNG for graphics and reserve JPG
            for photographs.
          </li>
          <li>
            <strong>Re-saving the same JPG over and over.</strong> Each save introduces additional
            compression. Always re-export from your original source rather than editing and re-saving the
            uploaded copy.
          </li>
          <li>
            <strong>Ignoring aspect ratio.</strong> Forcing a 16:9 image into a 1:1 slot stretches faces or
            cuts off heads. Crop intentionally before resizing — don&rsquo;t let the platform decide.
          </li>
          <li>
            <strong>Forgetting safe zones.</strong> Profile pictures crop to a circle and cover photos crop
            differently on mobile vs. desktop. Keep critical subject matter at least 10% inside the canvas
            edge.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Frequently Asked Questions</h2>
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
