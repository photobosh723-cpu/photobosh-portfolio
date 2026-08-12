"use client";

import { useEffect } from "react";

export default function ProjectScrollReset() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}