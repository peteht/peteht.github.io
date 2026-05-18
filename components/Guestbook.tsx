"use client";

import { useState } from "react";
import styles from "./Guestbook.module.scss";

export default function Guestbook() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.guestbook}>
      <h3 className={styles.title}>✨ Sign my Guestbook! ✨</h3>
      {submitted ? (
        <p className={styles.thanks}>Thanks for signing!! You rock!! 🌟</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input className={styles.input} type="text" placeholder="Your name" required />
          <textarea className={styles.textarea} placeholder="Leave a message!" required />
          <button className={styles.btn} type="submit">Sign it!</button>
        </form>
      )}
    </div>
  );
}
