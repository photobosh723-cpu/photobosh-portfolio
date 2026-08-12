"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export default function LazyVideo({
  src,
  poster,
  className = "",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px 0px",
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        controls
        controlsList="nodownload"
        playsInline
        preload="none"
        className={className}
      />

      {/* Click area — فوق الفيديو فقط، بعيد عن الـcontrols */}
      <button
  type="button"
  aria-label="Play or pause video"
  onClick={togglePlay}
  className="absolute left-0 top-0 w-full outline-none focus:outline-none"
  style={{
    height: "calc(100% - 70px)",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    outline: "none",
    boxShadow: "none",
    WebkitTapHighlightColor: "transparent",
  }}
/>
    </div>
  );
}