import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.homeWrap}>
        <article className={styles.home}>
          <p className={styles.bio}>
            Hi I'm Pete! I'm a senior front-end engineer with 15 years of
            experience building polished, high-performance web applications
            across government, gaming, enterprise, and agency environments. I
            own features end to end, move fast across tech stacks, and pick up
            new domains quickly. My toolkit includes JavaScript, TypeScript,
            React, Next.js, Vue, Node.js, and React Native, plus the full range
            of front-end primitives: WebSockets, REST APIs, CSS, SVG, Canvas,
            and animation.
          </p>
          <p className={styles.bio}>
            I also lead. I've driven cross-functional collaboration with PMs,
            designers, and backend engineers, championed accessibility as a
            genuine engineering requirement, and brought real-world experience
            into the classroom as an adjunct professor at the University of
            Utah. Whether I'm shipping a feature, mentoring a team, or helping
            shape product direction, I care about work that's technically solid
            and actually useful.
          </p>
          <nav className={styles.links}>
            <a href="/work">Work</a>
            <a href="/skills">Skills</a>
          </nav>
        </article>
      </main>
      <Image
        src="/dog.jpg"
        alt="Sketched wolf with red fiery eyes"
        width={1813}
        height={1409}
        className={styles.wolf}
        data-era-image="2026"
      />
    </>
  );
}
