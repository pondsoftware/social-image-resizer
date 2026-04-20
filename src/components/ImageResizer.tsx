"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { platforms, Platform, PlatformSize } from "@/data/platforms";
import JSZip from "jszip";

interface ImageResizerProps {
  defaultPlatform?: string;
}

export default function ImageResizer({ defaultPlatform }: ImageResizerProps) {
  const initialPlatform = platforms.find((p) => p.id === defaultPlatform) || platforms[0];

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageEl, setImageEl] = useState<HTMLImageElement | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(initialPlatform);
  const [selectedSize, setSelectedSize] = useState<PlatformSize>(initialPlatform.sizes[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Drag offset for repositioning
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const loadImage = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    const img = new Image();
    img.onload = () => {
      setImageEl(img);
      setOffsetX(0);
      setOffsetY(0);
    };
    img.src = url;
  }, []);

  const handleFileDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) loadImage(file);
    },
    [loadImage]
  );

  const selectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
    setSelectedSize(platform.sizes[0]);
    setOffsetX(0);
    setOffsetY(0);
  };

  const selectSize = (size: PlatformSize) => {
    setSelectedSize(size);
    setOffsetX(0);
    setOffsetY(0);
  };

  // Preview rendering
  useEffect(() => {
    if (!imageEl || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale canvas to fit in preview while maintaining aspect ratio
    const maxPreviewWidth = 500;
    const maxPreviewHeight = 400;
    const scaleX = maxPreviewWidth / selectedSize.width;
    const scaleY = maxPreviewHeight / selectedSize.height;
    const scale = Math.min(scaleX, scaleY, 1);
    canvas.width = selectedSize.width * scale;
    canvas.height = selectedSize.height * scale;

    // Calculate how to fit the image into the target dimensions (cover)
    const imgAspect = imageEl.naturalWidth / imageEl.naturalHeight;
    const targetAspect = selectedSize.width / selectedSize.height;

    let drawWidth: number, drawHeight: number;
    if (imgAspect > targetAspect) {
      drawHeight = selectedSize.height;
      drawWidth = imageEl.naturalWidth * (selectedSize.height / imageEl.naturalHeight);
    } else {
      drawWidth = selectedSize.width;
      drawHeight = imageEl.naturalHeight * (selectedSize.width / imageEl.naturalWidth);
    }

    const baseX = (selectedSize.width - drawWidth) / 2;
    const baseY = (selectedSize.height - drawHeight) / 2;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      imageEl,
      (baseX + offsetX) * scale,
      (baseY + offsetY) * scale,
      drawWidth * scale,
      drawHeight * scale
    );
  }, [imageEl, selectedSize, offsetX, offsetY]);

  // Mouse drag for repositioning
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      ox: offsetX,
      oy: offsetY,
    };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setOffsetX(dragStart.current.ox + dx);
    setOffsetY(dragStart.current.oy + dy);
  }, []);

  const handleMouseUp = useCallback(() => {
    dragStart.current = null;
  }, []);

  // Touch events for mobile drag repositioning
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    dragStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      ox: offsetX,
      oy: offsetY,
    };
  };

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!dragStart.current) return;
    e.preventDefault(); // Prevent scrolling while dragging
    const touch = e.touches[0];
    const dx = touch.clientX - dragStart.current.x;
    const dy = touch.clientY - dragStart.current.y;
    setOffsetX(dragStart.current.ox + dx);
    setOffsetY(dragStart.current.oy + dy);
  }, []);

  const handleTouchEnd = useCallback(() => {
    dragStart.current = null;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const previewEl = previewRef.current;
    if (!previewEl) return;
    previewEl.addEventListener("touchmove", handleTouchMove, { passive: false });
    previewEl.addEventListener("touchend", handleTouchEnd);
    return () => {
      previewEl.removeEventListener("touchmove", handleTouchMove);
      previewEl.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchMove, handleTouchEnd]);

  const renderToCanvas = (size: PlatformSize): HTMLCanvasElement => {
    const exportCanvas = document.createElement("canvas");
    exportCanvas.width = size.width;
    exportCanvas.height = size.height;
    const ctx = exportCanvas.getContext("2d")!;

    const imgAspect = imageEl!.naturalWidth / imageEl!.naturalHeight;
    const targetAspect = size.width / size.height;

    let drawWidth: number, drawHeight: number;
    if (imgAspect > targetAspect) {
      drawHeight = size.height;
      drawWidth = imageEl!.naturalWidth * (size.height / imageEl!.naturalHeight);
    } else {
      drawWidth = size.width;
      drawHeight = imageEl!.naturalHeight * (size.width / imageEl!.naturalWidth);
    }

    const baseX = (size.width - drawWidth) / 2;
    const baseY = (size.height - drawHeight) / 2;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, size.width, size.height);
    ctx.drawImage(imageEl!, baseX + offsetX, baseY + offsetY, drawWidth, drawHeight);

    return exportCanvas;
  };

  const downloadResized = () => {
    if (!imageEl) return;
    const exportCanvas = renderToCanvas(selectedSize);

    exportCanvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${selectedPlatform.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${selectedSize.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${selectedSize.width}x${selectedSize.height}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
      },
      "image/jpeg",
      0.95
    );
  };

  const downloadAllSizes = async () => {
    if (!imageEl) return;
    setIsExporting(true);

    try {
      const zip = new JSZip();
      const platformName = selectedPlatform.name.toLowerCase().replace(/[^a-z0-9]/g, "-");

      for (const size of selectedPlatform.sizes) {
        const canvas = renderToCanvas(size);
        const blob = await new Promise<Blob | null>((resolve) =>
          canvas.toBlob(resolve, "image/jpeg", 0.95)
        );
        if (blob) {
          const fileName = `${platformName}-${size.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${size.width}x${size.height}.jpg`;
          zip.file(fileName, blob);
        }
      }

      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${platformName}-all-sizes.zip`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      {!imageUrl && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleFileDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition ${
            isDragging
              ? "border-rose-500 bg-rose-50"
              : "border-gray-300 hover:border-rose-400 hover:bg-gray-50"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) =>
              e.target.files?.[0] && loadImage(e.target.files[0])
            }
            className="hidden"
          />
          <svg
            className="w-12 h-12 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-lg font-medium text-gray-700">
            Drop an image here or click to browse
          </p>
        </div>
      )}

      {imageUrl && imageEl && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar — Platform / Size selection */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Platform
              </h3>
              <div className="space-y-1">
                {platforms.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => selectPlatform(p)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                      selectedPlatform.id === p.id
                        ? "bg-rose-100 text-rose-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">
                Size
              </h3>
              <div className="space-y-1">
                {selectedPlatform.sizes.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => selectSize(s)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      selectedSize.name === s.name
                        ? "bg-rose-100 text-rose-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="block">{s.name}</span>
                    <span className="text-xs opacity-70">
                      {s.width} x {s.height}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                if (imageUrl) URL.revokeObjectURL(imageUrl);
                setImageUrl(null);
                setImageEl(null);
              }}
              className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition"
            >
              Load Different Image
            </button>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selectedPlatform.name} — {selectedSize.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {selectedSize.width} x {selectedSize.height}px
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={downloadAllSizes}
                    disabled={isExporting}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isExporting ? "Exporting..." : "Download All Sizes"}
                  </button>
                  <button
                    onClick={downloadResized}
                    className="px-4 py-2 bg-rose-600 text-white rounded-lg text-sm font-medium hover:bg-rose-700 transition"
                  >
                    Download
                  </button>
                </div>
              </div>
              <div
                ref={previewRef}
                className="flex justify-center bg-gray-100 rounded-lg p-4 cursor-move touch-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <canvas
                  ref={canvasRef}
                  className="max-w-full rounded shadow-sm"
                  style={{ imageRendering: "auto" }}
                />
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Drag to reposition your image within the frame
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Size Reference */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Social Media Image Size Cheat Sheet (2024)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 pr-4 font-medium text-gray-600">
                  Platform
                </th>
                <th className="text-left py-2 pr-4 font-medium text-gray-600">
                  Type
                </th>
                <th className="text-left py-2 font-medium text-gray-600">
                  Dimensions
                </th>
              </tr>
            </thead>
            <tbody>
              {platforms.flatMap((p) =>
                p.sizes.map((s, i) => (
                  <tr
                    key={`${p.id}-${s.name}`}
                    className="border-b border-gray-100"
                  >
                    <td className="py-2 pr-4 text-gray-900">
                      {i === 0 ? p.name : ""}
                    </td>
                    <td className="py-2 pr-4 text-gray-600">{s.name}</td>
                    <td className="py-2 text-gray-600 font-mono text-xs">
                      {s.width} x {s.height}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
