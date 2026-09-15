import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useScrollReveal();
  const classes = ['reveal', visible ? 'reveal-visible' : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
