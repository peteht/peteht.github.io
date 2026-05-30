import Image from "next/image";
import type { SkillGroup } from "@/types";
import styles from "./skills.module.scss";

const skillGroups: SkillGroup[] = [
  {
    name: "Languages & Frameworks",
    skills: [
      "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Pinia",
      "Node.js", "React Native",
    ],
  },
  {
    name: "Animation & Interaction",
    skills: [
      "GSAP", "CSS animations", "SVG", "Canvas", "HTML5 media APIs",
      "Scroll-linked animations", "Web Animations API",
    ],
  },
  {
    name: "UI & Frontend Craft",
    skills: [
      "Semantic HTML", "Modern CSS", "Responsive layouts", "Core Web Vitals",
      "Web Performance Optimization", "Figma workflows", "Pixel-accurate implementation",
    ],
  },
  {
    name: "Tooling & Infrastructure",
    skills: [
      "REST APIs", "WebSockets", "CI/CD", "Git",
      "Accessibility (WCAG/Section 508)", "AI-assisted development (Copilot, Cursor)",
    ],
  },
  {
    name: "Leadership",
    skills: [
      "Developer mentoring", "Cross-functional collaboration", "Code review",
      "Product planning", "Agile/Scrum",
    ],
  },
];

export default function Skills() {
  return (
    <main className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>

      <p className={styles.intro}>
        Since starting with frames and tables in the long ago age of 2003, I
        have picked up many different skills along the way. Some have been lost
        to the ages (ActionScript 2.0, HTML Emails), and we will not mourn their
        deaths.
      </p>

      <p className={styles.intro}>
        Read my take on web development and the industry in my{" "}
        <a
          href="https://thefwa.com/interviews/aaron-sather-and-pete-rugh"
          target="_blank"
          rel="noopener noreferrer"
        >
          developer interview
        </a>{" "}
        conducted by the FWA.
      </p>

      {skillGroups.map((group) => (
        <section key={group.name} className={styles.group}>
          <h2 className={styles.groupName}>{group.name}</h2>
          <ul className={styles.list}>
            {group.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
      <Image
        src="/carl.jpg"
        alt="Sketch of a dog named Carl"
        width={1352}
        height={1606}
        className={styles.carl} data-era-image="2026"
      />
    </main>
  );
}
