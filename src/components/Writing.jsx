import { writing } from '../data/content';
import Reveal from './Reveal';
import styles from './Writing.module.css';

export default function Writing() {
  return (
    <Reveal as="section" id="writing" aria-labelledby="writing-heading" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow">05 — Writing</p>
          <h2 id="writing-heading" className="section-title">
            Writing
          </h2>
        </div>

        <ul className={styles.list}>
          {writing.map((post) => (
            <li key={post.title}>
              <a href="#" className={styles.row}>
                <span className={styles.title}>{post.title}</span>
                <span className={styles.date}>{post.date}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
