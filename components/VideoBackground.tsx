"use client";

import { useEffect, useRef } from "react";

export default function VideoBackground({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — silently fail, video stays hidden
    });
  }, []);

  return (
    <video
      ref={ref}
      data-era-only="2016"
      autoPlay
      muted
      loop
      playsInline
      src={src}
    />
  );
}
