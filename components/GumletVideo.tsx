"use client";

import { useState } from "react";

type GumletVideoProps = {
  src: string;
  title: string;
};

export default function GumletVideo({
  src,
  title,
}: GumletVideoProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
        allowFullScreen
        referrerPolicy="origin"
        className={`absolute inset-0 h-full w-full border-0 ${
          active ? "pointer-events-auto" : "pointer-events-none"
        }`}
      />

      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-transparent"
          aria-label={`Play ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 text-2xl text-white backdrop-blur-sm transition-transform duration-300 hover:scale-110">
            ▶
          </span>
        </button>
      )}
    </div>
  );
}