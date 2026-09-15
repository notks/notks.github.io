import { terminalScript } from '../data/content';
import { useTypewriter } from '../hooks/useTypewriter';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import styles from './Terminal.module.css';

export default function Terminal() {
  const reducedMotion = usePrefersReducedMotion();
  const lines = useTypewriter(terminalScript, { static: reducedMotion });

  return (
    <div className={styles.card}>
      <div className={styles.titleBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.path}>~/alex-rivera</span>
      </div>
      <div className={styles.body}>
        {lines.map((line, i) => (
          <div className={styles.line} key={i}>
            <span className={styles.prompt}>{line.prompt}</span>
            <span className={line.isCmd ? styles.textCmd : styles.textOut}>
              {line.text}
              {line.cursor && !reducedMotion && <span className={styles.cursor} />}
              {line.cursor && reducedMotion && <span className={styles.cursorStatic} />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
