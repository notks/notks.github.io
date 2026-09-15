import { about } from '../data/content';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
  return (
    <Reveal as="section" id="about" aria-labelledby="about-heading" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">03 — About</p>
          <h2 id="about-heading" className="section-title">
            About
          </h2>
        </div>

        <div className={styles.grid}>
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.portrait}>
            <span className={styles.portraitCaption}>portrait photo placeholder</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
