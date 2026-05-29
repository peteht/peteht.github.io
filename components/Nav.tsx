"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.scss";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      {links.map(({ href, label }, i) => (
        <span key={href} className={styles.item}>
          {i > 0 && <span className={styles.sep} data-sep>/</span>}
          <Link
            href={href}
            className={pathname === href ? styles.active : styles.link}
            data-active={pathname === href || undefined}
          >
            {label}
          </Link>
        </span>
      ))}
    </nav>
  );
}
