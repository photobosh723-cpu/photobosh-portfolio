"use client";

import { useEffect, useRef } from "react";

const SCROLL_KEY = "home-scroll-position";

export default function HomeScrollRestore() {
  const restored = useRef(false);

  useEffect(() => {
    if (restored.current) return;
    restored.current = true;

    const saved = sessionStorage.getItem(SCROLL_KEY);
    const y = saved ? parseInt(saved, 10) : 0;

    if (!Number.isNaN(y) && y > 0) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: y, behavior: "instant" });
      });
    }
  }, []);

  useEffect(() => {
    const save = () => {
      sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
    };

    window.addEventListener("scroll", save, { passive: true });

    return () => {
      save();
      window.removeEventListener("scroll", save);
    };
  }, []);

  return null;
}