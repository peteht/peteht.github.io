import Image from "next/image";
import type { SkillGroup } from "@/types";
import styles from "./skills.module.scss";

const skillGroups: SkillGroup[] = [
  {
    name: "Development",
    skills: [
      "JavaScript", "TypeScript", "React", "Next.js", "Vue", "Pinia",
      "Node.js", "React Native", "WebSockets", "REST APIs", "CSS", "SVG",
      "Canvas", "HTML5", "Animation", "Web Performance Optimization", "CI/CD",
    ],
  },
  {
    name: "Leadership",
    skills: [
      "Dev Team Leadership", "Developer Mentoring", "Product Planning & Ownership",
      "Cross-functional Team Management", "Dev Pipeline Ownership", "Agile/Scrum",
      "Accessibility (WCAG/Section 508)",
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
        className={styles.carl} data-era-image
      />
    </main>
  );
}
