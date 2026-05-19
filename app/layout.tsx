import type { Metadata } from "next";
import { Oswald, Caveat } from "next/font/google";
import Nav from "@/components/Nav";
import ThemeProvider from "@/components/ThemeProvider";
import Timeline from "@/components/Timeline";
import OdometerCounter from "@/components/OdometerCounter";
import Guestbook from "@/components/Guestbook";
import CursorTrail from "@/components/CursorTrail";
import "./globals.scss";
import styles from "./layout.module.scss";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Pete Rugh",
  description: "Front end web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${caveat.variable}`}>
      <body>
        <ThemeProvider>
          <CursorTrail />
          <Timeline />
          <div className={styles.site} data-site>
            <header className={styles.header}>
              <h1 className={styles.name}>Pete Rugh</h1>
            </header>
            <Nav />
            <div data-era-only="1997">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/construction.gif" alt="Under construction" />
            </div>
            {children}
            <div data-era-only="1997">
              <OdometerCounter />
              <Guestbook />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/construction.gif" alt="Under construction" />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
