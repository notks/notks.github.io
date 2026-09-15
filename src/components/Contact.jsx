import { socials, contactEmail } from '../data/content';
import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <Reveal as="section" id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <div className={styles.inner}>
        <p className="eyebrow">Get in touch</p>
        <h2 id="contact-heading" className={styles.heading}>
          Let's build something worth shipping.
        </h2>
        <a href={`mailto:${contactEmail}`} className={styles.email}>
          {contactEmail}
        </a>
        <div className={styles.socialRow}>
          {socials.map((s) => (
            <a key={s.label} href={s.href} className={styles.socialLink}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
