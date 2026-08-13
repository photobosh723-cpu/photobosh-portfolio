"use client";

import { useState } from "react";

type GumletVideoProps = {
  src: string;
  title: string;
  vertical?: boolean;
};

export default function GumletVideo({
  src,
  title,
  vertical = false,
}: GumletVideoProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={[
        "relative w-full overflow-hidden bg-black",
        vertical
          ? "aspect-[9/16] md:mx-auto md:max-w-[420px]"
          : "aspect-video",
      ].join(" ")}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
        allowFullScreen
        referrerPolicy="origin"
        className={`absolute inset-0 block h-full w-full border-0 ${
          active ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{
          margin: 0,
          padding: 0,
        }}
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