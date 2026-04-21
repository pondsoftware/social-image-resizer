import { writeFileSync } from "fs";

const DOMAIN = "https://imageresizers.net";

const urls = [
  "/",
  "/facebook-cover-photo-size",
  "/instagram-image-sizes",
  "/linkedin-image-sizes",
  "/pinterest-pin-sizes",
  "/snapchat-image-sizes",
  "/threads-image-sizes",
  "/tiktok-video-size",
  "/twitter-image-sizes",
  "/youtube-thumbnail-size",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${DOMAIN}${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`Sitemap generated: ${urls.length} URLs`);
