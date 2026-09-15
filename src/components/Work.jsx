import { projects, otherProjects } from '../data/content';
import Reveal from './Reveal';
import styles from './Work.module.css';

export default function Work() {
  return (
    <Reveal as="section" id="work" aria-labelledby="work-heading" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">01 — Work</p>
          <h2 id="work-heading" className="section-title">
            Selected Work
          </h2>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.name} className={styles.card}>
              <div className={styles.media}>
                <span className={styles.mediaCaption}>product screenshot — {project.name}</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.desc}>{project.desc}</p>
                <ul className={styles.techList}>
                  {project.tech.map((t) => (
                    <li key={t} className={styles.techPill}>
                      {t}
                    </li>
                  ))}
                </ul>
                <div className={styles.linkRow}>
                  <a href={project.link} className={styles.primaryLink}>
                    {project.linkLabel} →
                  </a>
                  <a href={project.link} className={styles.secondaryLink}>
                    {project.codeLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.otherWrap}>
          <p className="mono-label-upper">Other Projects</p>
          <ul className={styles.otherList}>
            {otherProjects.map((op) => (
              <li key={op.name}>
                <a href={op.link} className={styles.otherRow}>
                  <span className={styles.otherLeft}>
                    <span className={styles.otherName}>{op.name}</span>
                    <span className={styles.otherDesc}>{op.desc}</span>
                  </span>
                  <span className={styles.otherTech}>{op.tech}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
