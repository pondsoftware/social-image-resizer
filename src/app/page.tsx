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
    </div>
  );
}
