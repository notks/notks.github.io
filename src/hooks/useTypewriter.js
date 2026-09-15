import { useEffect, useRef, useState } from 'react';

const CHAR_INTERVAL_MS = 45;

function lineLength(line) {
  return (line.cmd ?? line.out ?? '').length;
}

export function useTypewriter(script, { static: isStatic = false } = {}) {
  const totalRef = useRef(script.reduce((n, l) => n + lineLength(l) + 1, 0));
  const total = totalRef.current;
  const [typed, setTyped] = useState(isStatic ? total : 0);

  useEffect(() => {
    if (isStatic) {
      setTyped(total);
      return undefined;
    }
    setTyped(0);
    const id = setInterval(() => {
      setTyped((t) => (t >= total ? 0 : t + 1));
    }, CHAR_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isStatic, total]);

  let budget = typed;
  const lines = [];
  for (const line of script) {
    const full = line.cmd ?? line.out ?? '';
    if (budget <= 0) break;
    const shown = full.slice(0, budget);
    budget -= full.length + 1;
    lines.push({
      prompt: line.prompt ?? '',
      text: shown,
      isCmd: line.cmd !== undefined,
      cursor: budget <= 0,
    });
  }
  if (!lines.length) lines.push({ prompt: '$', text: '', isCmd: true, cursor: true });

  return lines;
}
