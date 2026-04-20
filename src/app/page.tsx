import ImageResizer from "@/components/ImageResizer";

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

      <ImageResizer />

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
    </div>
  );
}
