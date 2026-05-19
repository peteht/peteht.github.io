import Image from "next/image";
import type { Project } from "@/types";
import styles from "./work.module.scss";

const projects: Project[] = [
  {
    name: "Oregon Gridiron",
    url: "www.oregongridiron.com",
    href: "http://www.thefwa.com/site/oregon-gridiron",
    awards: [
      { icon: "fwa.png", href: "http://www.thefwa.com/site/oregon-gridiron" },
      {
        icon: "awwwards.png",
        href: "http://www.awwwards.com/web-design-awards/oregon-gridiron",
      },
      {
        icon: "cssda.png",
        href: "https://www.cssdesignawards.com/sites/oregon-gridiron/23554/",
      },
      {
        icon: "csswinner.png",
        href: "https://www.csswinner.com/details/oregon-gridiron/5919",
      },
      { icon: "adobe.png", href: "https://thefwa.com/cases/oregon-gridiron" },
    ],
    descriptions: [
      "Site created for University of Oregon Recruiting while employed at Super Top Secret.",
      "This site earned a multitude of awards including the Adobe/FWA Cutting Edge Project of the Week, FWA site of the day, Awwwards site of the day, and best in show at AAF Utah.",
    ],
    role: "Front end development and animation.",
  },
  {
    name: "Super Top Secret",
    url: "www.wearetopsecret.com",
    href: "http://www.wearetopsecret.com",
    awards: [
      { icon: "fwa.png", href: "http://www.thefwa.com/site/super-top-secret" },
      {
        icon: "awwwards.png",
        href: "http://www.awwwards.com/web-design-awards/super-top-secret",
      },
      {
        icon: "cssda.png",
        href: "https://www.cssdesignawards.com/sites/super-top-secret/23555/",
      },
      {
        icon: "csswinner.png",
        href: "https://www.csswinner.com/details/super-top-secret/5920",
      },
    ],
    descriptions: [
      "Also known as v3, STS re-imagined their agency and launched this site - showcasing new clients, new work and new capabilities.",
      "This site was recognized many times over, earning a site of the month from CSS Design awards as well as Site of The Day from FWA, Awwwards, and CSS Winner.",
    ],
    role: "Responsive Front end development and animation.",
  },
  {
    name: "Marcus Mariota Road to the Heisman",
    url: "www.mahalomarcus.com",
    href: "#",
    awards: [
      {
        icon: "awwwards.png",
        href: "https://www.awwwards.com/sites/mahalo-marcus",
      },
    ],
    descriptions: [
      "Two weeks prior to Mariota hoisting the Heisman Trophy award, University of Oregon decided they needed a polished interactive editorial to celebrate his historic season. Design to launch in 16 days.",
    ],
    role: "Responsive front end development and animation.",
  },
];

export default function Work() {
  return (
    <main className={styles.work}>
      <h1 className={styles.title}>Selected Work</h1>
      <p className={styles.subtitle}>More examples upon request.</p>

      {projects.map((project) => (
        <article key={project.name} className={styles.project}>
          <h2 className={styles.projectName}>{project.name}</h2>
          <div className={styles.meta}>
            <span className={styles.url}>{project.url}</span>
            <div className={styles.awards}>
              {project.awards.map((award) => (
                <a
                  key={award.icon}
                  href={award.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/${award.icon}`}
                    alt={award.icon.replace(".png", "")}
                    width={40}
                    height={24}
                    className={styles.awardIcon}
                  />
                </a>
              ))}
            </div>
          </div>
          {project.descriptions.map((desc, i) => (
            <p key={i} className={styles.desc}>
              {desc}
            </p>
          ))}
          <p className={styles.role}>{project.role}</p>
        </article>
      ))}
      <Image
        src="/arrow.jpg"
        alt="Sketch of a hand drawn arrow pointing upwards"
        width={786}
        height={882}
        className={styles.arrow} data-era-image="2026"
      />
    </main>
  );
}
