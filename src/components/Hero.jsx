import { socials, heroEyebrow, heroHeading, heroBody } from '../data/content';
import Terminal from './Terminal';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.eyebrow} style={{ animationDelay: '0s' }}>
              {heroEyebrow}
            </p>
            <h1 className={styles.heading} style={{ animationDelay: '0.05s' }}>
              {heroHeading}
            </h1>
            <p className={styles.body} style={{ animationDelay: '0.1s' }}>
              {heroBody}
            </p>
            <div className={styles.buttonRow} style={{ animationDelay: '0.15s' }}>
              <a href="#work" className={styles.primaryButton}>
                View Work
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get in Touch
              </a>
            </div>
            <div className={styles.socialRow} style={{ animationDelay: '0.2s' }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className={styles.socialLink}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
