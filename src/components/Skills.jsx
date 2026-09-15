import { skillGroups } from '../data/content';
import Reveal from './Reveal';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Reveal as="section" id="skills" aria-labelledby="skills-heading" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">04 — Skills</p>
          <h2 id="skills-heading" className="section-title">
            Skills
          </h2>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="mono-label-upper">{group.label}</p>
              <ul className={styles.chipList}>
                {group.items.map((item) => (
                  <li key={item} className={styles.chip}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
