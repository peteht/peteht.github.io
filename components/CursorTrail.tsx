"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

interface TrailDot {
  x: number;
  y: number;
  id: number;
  el: HTMLDivElement;
}

export default function CursorTrail() {
  const { era } = useTheme();
  const trailRef = useRef<TrailDot[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    if (era !== "1997") return;

    const TRAIL_LENGTH = 12;
    const cursors = ["🌟", "⭐", "✨", "💫", "🌟", "⭐", "✨", "💫", "🌟", "⭐", "✨", "💫"];

    function onMove(e: MouseEvent) {
      const id = counterRef.current++;
      const el = document.createElement("div");
      el.textContent = cursors[id % cursors.length];
      el.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        pointer-events: none;
        font-size: 1rem;
        transform: translate(-50%, -50%);
        transition: opacity 0.4s ease, transform 0.4s ease;
        opacity: 1;
        z-index: 99999;
        user-select: none;
      `;
      document.body.appendChild(el);

      const dot: TrailDot = { x: e.clientX, y: e.clientY, id, el };
      trailRef.current.push(dot);

      if (trailRef.current.length > TRAIL_LENGTH) {
        const old = trailRef.current.shift();
        if (old) old.el.remove();
      }

      requestAnimationFrame(() => {
        el.style.opacity = "0";
        el.style.transform = "translate(-50%, -50%) scale(1.5)";
      });

      setTimeout(() => {
        el.remove();
        trailRef.current = trailRef.current.filter((d) => d.id !== id);
      }, 400);
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      trailRef.current.forEach((d) => d.el.remove());
      trailRef.current = [];
    };
  }, [era]);

  return null;
}
