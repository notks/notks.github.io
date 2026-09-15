import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>© {year} Alex Rivera. Built with care.</p>
    </footer>
  );
}
