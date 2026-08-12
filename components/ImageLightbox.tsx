"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageItem = {
  type?: "image" | "video";
  src: string;
  alt: string;
  thumbnail?: string;
};

type ImageLightboxProps = {
  images: ImageItem[];
  initialIndex: number;
};

export default function ImageLightbox({
  images,
  initialIndex,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentImage = images[currentIndex];

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const openLightbox = () => {
    setCurrentIndex(initialIndex);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  const previousImage = () => {
    if (hasPrevious) {
      setCurrentIndex((index) => index - 1);
    }
  };

  const nextImage = () => {
    if (hasNext) {
      setCurrentIndex((index) => index + 1);
    }
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, currentIndex]);

  const thumbnailSrc = currentImage.thumbnail || currentImage.src;

  return (
    <>
      {/* COVER / THUMBNAIL */}
      <button
        type="button"
        onClick={openLightbox}
        className="relative block h-full w-full cursor-zoom-in text-left"
        aria-label={`Open ${images[initialIndex].alt}`}
      >
        <Image
          src={thumbnailSrc}
          alt={images[initialIndex].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/20">
          <span className="rounded-full border border-white/30 bg-black/30 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
            View
          </span>
        </div>
      </button>

      {/* LIGHTBOX */}
      {open && (
        <Lightbox
          image={currentImage}
          onClose={closeLightbox}
          onPrevious={previousImage}
          onNext={nextImage}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          currentIndex={currentIndex}
          total={images.length}
        />
      )}
    </>
  );
}

type LightboxProps = {
  image: ImageItem;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  currentIndex: number;
  total: number;
};

function Lightbox({
  image,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  currentIndex,
  total,
}: LightboxProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;
    const minimumSwipeDistance = 50;

    if (Math.abs(distance) < minimumSwipeDistance) return;

    if (distance > 0) {
      onNext();
    } else {
      onPrevious();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5 md:p-10"
      onClick={onClose}
    >
      {/* CLOSE */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-2xl text-white transition-colors hover:bg-white/10"
        aria-label="Close"
      >
        ×
      </button>

      {/* PREVIOUS */}
      {hasPrevious && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-3xl text-white backdrop-blur-sm transition-all hover:bg-white/10 md:flex"
          aria-label="Previous"
        >
          ←
        </button>
      )}

      {/* NEXT */}
      {hasNext && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 z-30 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-3xl text-white backdrop-blur-sm transition-all hover:bg-white/10 md:flex"
          aria-label="Next"
        >
          →
        </button>
      )}

      {/* MEDIA */}
      <div
        className="relative flex h-[85vh] w-full max-w-7xl touch-pan-y items-center justify-center"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {image.type === "video" ? (
          <div className="relative aspect-video w-full max-w-6xl overflow-hidden rounded-lg">
            <iframe
              key={image.src}
              src={image.src}
              title={image.alt}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
              allowFullScreen
            />
          </div>
        ) : (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        )}
      </div>

      {/* COUNTER */}
      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
        {currentIndex + 1} / {total}
      </div>

      {/* MOBILE HINT */}
      <div className="absolute bottom-6 left-6 z-30 text-[9px] uppercase tracking-[0.2em] text-white/30 md:hidden">
        Swipe
      </div>
    </div>
  );
}