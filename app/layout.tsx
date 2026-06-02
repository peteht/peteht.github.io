import type { Metadata } from "next";
import { Oswald, Caveat } from "next/font/google";
import Script from "next/script";
import Nav from "@/components/Nav";
import VideoBackground from "@/components/VideoBackground";
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
  openGraph: {
    title: "Pete Rugh",
    description: "Front end web developer",
    url: "https://peterugh.com",
    siteName: "Pete Rugh",
    images: [
      {
        url: "https://peterugh.com/carl.jpg",
        width: 1200,
        height: 630,
        alt: "Pete Rugh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pete Rugh",
    description: "Front end web developer",
    images: ["https://peterugh.com/carl.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${caveat.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0WMQ73GW10"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0WMQ73GW10');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <VideoBackground src="/ambient-blue.mp4" />
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
            <footer className={styles.footer}>
              made with ❤️ in Salt Lake City
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
