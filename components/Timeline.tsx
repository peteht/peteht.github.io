"use client";

import { useTheme } from "./ThemeProvider";
import type { Era } from "@/types";
import styles from "./Timeline.module.scss";

const MIN_YEAR = 1990;
const CURRENT_YEAR = new Date().getFullYear();
const MAX_YEAR = Math.max(CURRENT_YEAR, 2026);
const RANGE = MAX_YEAR - MIN_YEAR;

const ERA_KEYS: Era[] = ["1990", "1997", "2004", "2008", "2016", "2026"];
const ERA_YEAR_MAP: Record<Era, number> = {
  "1990": 1990, "1997": 1997, "2004": 2004,
  "2008": 2008, "2016": 2016, "2026": CURRENT_YEAR,
};
const ERA_LABEL_MAP: Record<Era, string> = {
  "1990": "1990", "1997": "1997", "2004": "2004",
  "2008": "2008", "2016": "2016", "2026": String(CURRENT_YEAR),
};
const ERA_YEARS = new Set(Object.values(ERA_YEAR_MAP));
const ALL_YEARS = Array.from({ length: RANGE + 1 }, (_, i) => MIN_YEAR + i);

function pct(year: number) {
  return ((year - MIN_YEAR) / RANGE) * 100;
}

export default function Timeline() {
  const { era, setEra } = useTheme();

  return (
    <div className={styles.timeline}>
      <div className={styles.track}>
        <div className={styles.line} />

        <div
          className={styles.indicator}
          style={{ left: `${pct(ERA_YEAR_MAP[era] ?? Number(era))}%` }}
        />

        {ALL_YEARS.map((year) => {
          const eraKey = ERA_KEYS.find((k) => ERA_YEAR_MAP[k] === year);
          const isEra = ERA_YEARS.has(year);
          const isActive = eraKey === era;
          return (
            <div
              key={year}
              className={`${styles.tick} ${isEra ? styles.tickEra : styles.tickMinor}`}
              style={{ left: `${pct(year)}%` }}
              onClick={eraKey ? () => setEra(eraKey) : undefined}
            >
              {isEra && eraKey && (
                <button
                  className={`${styles.label} ${isActive ? styles.labelActive : ""}`}
                  onClick={() => setEra(eraKey)}
                >
                  {ERA_LABEL_MAP[eraKey]}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
