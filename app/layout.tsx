import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Nav from "@/components/Nav";
import ThemeProvider from "@/components/ThemeProvider";
import Timeline from "@/components/Timeline";
import OdometerCounter from "@/components/OdometerCounter";
import Guestbook from "@/components/Guestbook";
import "./globals.scss";
import styles from "./layout.module.scss";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
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
    <html lang="en" className={oswald.variable}>
      <body>
        <ThemeProvider>
          <Timeline />
          <div className={styles.site} data-site>
            <header className={styles.header}>
              <h1 className={styles.name}>Pete Rugh</h1>
              <Nav />
            </header>
            {children}
            <div data-era-only="1997">
              <OdometerCounter />
              <Guestbook />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
