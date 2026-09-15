import { experience } from '../data/content';
import Reveal from './Reveal';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <Reveal as="section" id="experience" aria-labelledby="experience-heading" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">02 — Experience</p>
          <h2 id="experience-heading" className="section-title">
            Experience
          </h2>
        </div>

        <div className={styles.list}>
          {experience.map((job) => (
            <div key={job.company} className={styles.row}>
              <p className={styles.period}>{job.period}</p>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company}</p>
                <ul className={styles.points}>
                  {job.points.map((point) => (
                    <li key={point} className={styles.point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
