"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./OdometerCounter.module.scss";

const STORAGE_KEY = "visitor-count";
const PAD = 7;

function initCount(): number {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const n = parseInt(stored, 10);
    if (!isNaN(n)) return n;
  }
  return Math.floor(Math.random() * 1000) + 8000;
}

export default function OdometerCounter() {
  const [count, setCount] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const next = initCount() + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    setCount(next);
  }, [pathname]);

  const display = count === null ? "0000000" : String(count).padStart(PAD, "0");

  return (
    <div className={styles.wrap}>
      <p className={styles.label}>You are visitor number</p>
      <div className={styles.odometer}>
        {display.split("").map((digit, i) => (
          <span key={i} className={styles.digit}>{digit}</span>
        ))}
      </div>
    </div>
  );
}
