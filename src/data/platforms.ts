export interface PlatformSize {
  name: string;
  width: number;
  height: number;
}

export interface Platform {
  id: string;
  name: string;
  color: string;
  sizes: PlatformSize[];
}

export const platforms: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    color: "#E1306C",
    sizes: [
      { name: "Post (Square)", width: 1080, height: 1080 },
      { name: "Post (Portrait)", width: 1080, height: 1350 },
      { name: "Post (Landscape)", width: 1080, height: 566 },
      { name: "Story / Reel", width: 1080, height: 1920 },
      { name: "Profile Photo", width: 320, height: 320 },
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    color: "#000000",
    sizes: [
      { name: "Video Cover", width: 1080, height: 1920 },
      { name: "Profile Photo", width: 200, height: 200 },
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    color: "#FF0000",
    sizes: [
      { name: "Thumbnail", width: 1280, height: 720 },
      { name: "Channel Banner", width: 2560, height: 1440 },
      { name: "Profile Photo", width: 800, height: 800 },
    ],
  },
  {
    id: "facebook",
    name: "Facebook",
    color: "#1877F2",
    sizes: [
      { name: "Post (Landscape)", width: 1200, height: 630 },
      { name: "Post (Square)", width: 1200, height: 1200 },
      { name: "Cover Photo", width: 820, height: 312 },
      { name: "Profile Photo", width: 170, height: 170 },
      { name: "Event Cover", width: 1200, height: 628 },
    ],
  },
  {
    id: "x",
    name: "X (Twitter)",
    color: "#000000",
    sizes: [
      { name: "Post Image", width: 1200, height: 675 },
      { name: "Header Photo", width: 1500, height: 500 },
      { name: "Profile Photo", width: 400, height: 400 },
    ],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    color: "#0A66C2",
    sizes: [
      { name: "Post Image", width: 1200, height: 627 },
      { name: "Cover Photo", width: 1584, height: 396 },
      { name: "Profile Photo", width: 400, height: 400 },
      { name: "Company Logo", width: 300, height: 300 },
    ],
  },
  {
    id: "pinterest",
    name: "Pinterest",
    color: "#E60023",
    sizes: [
      { name: "Pin (Standard)", width: 1000, height: 1500 },
      { name: "Pin (Long)", width: 1000, height: 2100 },
      { name: "Profile Photo", width: 165, height: 165 },
    ],
  },
  {
    id: "twitch",
    name: "Twitch",
    color: "#9146FF",
    sizes: [
      { name: "Profile Photo", width: 256, height: 256 },
      { name: "Offline Banner", width: 1920, height: 1080 },
      { name: "Panel", width: 320, height: 300 },
    ],
  },
];
