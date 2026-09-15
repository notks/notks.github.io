export const showBlog = true;

export const navLinksAll = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export const navLinks = showBlog ? navLinksAll : navLinksAll.filter((l) => l.label !== 'Writing');

export const socials = [
  { label: 'GitHub', href: 'https://github.com/alexrivera' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/alexrivera' },
  { label: 'X', href: 'https://x.com/alexrivera' },
  { label: 'Email', href: 'mailto:alex@example.com' },
];

export const terminalScript = [
  { prompt: '$', cmd: 'whoami' },
  { out: 'alex-rivera — software engineer, san francisco' },
  { prompt: '$', cmd: 'cat stack.json' },
  { out: '{ "backend": ["Go", "Node.js"],' },
  { out: '  "frontend": ["TypeScript", "React"],' },
  { out: '  "infra": ["Kubernetes", "AWS"] }' },
  { prompt: '$', cmd: 'uptime' },
  { out: '7 years shipping production systems' },
  { prompt: '$', cmd: '' },
];

export const projects = [
  {
    name: 'Meridian',
    tagline: 'Real-time sync engine for collaborative apps',
    desc: 'A conflict-free replicated data layer that keeps distributed clients in sync in under 50ms, with automatic reconnection and offline support.',
    tech: ['Go', 'PostgreSQL', 'Redis', 'gRPC', 'Kubernetes'],
    link: '#',
    linkLabel: 'View case study',
    codeLabel: 'Source',
  },
  {
    name: 'Fieldnote',
    tagline: 'A developer notebook, built for speed',
    desc: 'Local-first notes app for engineers with instant full-text search, git-aware snippets, and a keyboard-only workflow.',
    tech: ['TypeScript', 'React', 'Node.js', 'SQLite', 'Electron'],
    link: '#',
    linkLabel: 'View case study',
    codeLabel: 'Source',
  },
];

export const otherProjects = [
  { name: 'Ledger', desc: 'CLI for reconciling multi-currency transactions across payment providers.', tech: 'Rust · SQLite', link: '#' },
  { name: 'Pinboard', desc: 'Minimal self-hosted bookmark manager with full-text search.', tech: 'Next.js · Postgres', link: '#' },
  { name: 'Wavelength', desc: 'Slack bot that summarizes long threads using an LLM.', tech: 'Python · OpenAI', link: '#' },
  { name: 'Driftwood', desc: 'Static site generator focused on build speed.', tech: 'Go', link: '#' },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Nimbus Cloud',
    period: '2023 — Present',
    points: [
      'Led migration of the core billing service to Go, cutting p99 latency 40%.',
      'Built the internal platform 40+ engineers use to ship services with zero-downtime deploys.',
      'Mentored three engineers through promotion to mid-level.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Loop Systems',
    period: '2021 — 2023',
    points: [
      'Designed the event-sourcing pipeline powering real-time analytics for 2M+ daily users.',
      'Owned the public API — versioning, rate limiting, and docs used by 200+ integration partners.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Datastream Labs',
    period: '2019 — 2021',
    points: [
      'Shipped the first version of the customer-facing dashboard in React.',
      'Reduced CI pipeline time from 22 to 6 minutes.',
    ],
  },
];

export const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'Go', 'Python', 'SQL'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Redux'] },
  { label: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'gRPC'] },
  { label: 'Infrastructure', items: ['Docker', 'Kubernetes', 'AWS', 'Terraform'] },
];

export const writing = [
  { title: 'Designing idempotent APIs at scale', date: 'Mar 2026' },
  { title: 'What I learned building a distributed cache', date: 'Nov 2025' },
  { title: 'A minimal case for boring technology', date: 'Jun 2025' },
];

export const about = {
  paragraphs: [
    "I'm a software engineer with seven years building backend systems and the products on top of them. I care most about the boring stuff done well — correctness, latency, and code the next person can read.",
    'Outside of work I write about distributed systems, contribute to a couple of open-source tools, and am slowly learning to sail.',
  ],
};

export const contactEmail = 'alex@example.com';
export const resumeHref = '/CV.pdf';
