"use client";

import { useTheme } from "./ThemeProvider";
import type { Era } from "@/types";
import styles from "./Timeline.module.scss";

const LABELS: Record<Era, string> = {
  "1990": "1990",
  "1997": "1997",
  "2008": "2008",
  "2016": "2016",
  "today": "Today",
};

export default function Timeline() {
  const { era, setEra, eras } = useTheme();

  return (
    <div className={styles.timeline}>
      {eras.map((e) => (
        <button
          key={e}
          onClick={() => setEra(e)}
          className={era === e ? styles.active : styles.btn}
        >
          {LABELS[e]}
        </button>
      ))}
    </div>
  );
}
