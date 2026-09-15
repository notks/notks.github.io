export const wordmark = 'Kemal Selimbašić';

export const showBlog = false;

export const navLinksAll = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export const navLinks = showBlog ? navLinksAll : navLinksAll.filter((l) => l.label !== 'Writing');

export const socials = [
  { label: 'GitHub', href: 'https://github.com/notks' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/kemalselimbasic' },
  { label: 'Email', href: 'mailto:kemal.selimbasic@hotmail.com' },
];

export const heroEyebrow = 'Full-Stack Software Engineer';
export const heroHeading = 'Engineering zero-to-one platforms that scale.';
export const heroBody =
  'Remote-first Full-Stack Engineer with 4+ years shipping production systems in Java, Spring Boot, React, and TypeScript. Building mission-critical apps, data traceability workflows, and LLM-powered tools.';

export const terminalScript = [
  { prompt: '$', cmd: 'whoami' },
  { out: 'kemal selimbasic — software engineer, tuzla bih' },
  { prompt: '$', cmd: 'cat stack.json' },
  { out: '{ "backend": ["Java", "Spring Boot", "Node.js"],' },
  { out: '  "frontend": ["React", "TypeScript", "Next.js"],' },
  { out: '  "ai": ["LLMs", "RAG", "vector DBs"],' },
  { out: '  "infra": ["Docker", "AWS", "PostgreSQL"] }' },
  { prompt: '$', cmd: 'uptime' },
  { out: '4+ years shipping production systems' },
  { prompt: '$', cmd: '' },
];

export const projects = [
  {
    name: 'Vigil AI',
    tagline: 'Enterprise AI security platform',
    desc: 'A browser extension and policy backend that analyzes prompts before they are sent to AI tools — detecting sensitive information and security risks, applying configurable policies, and automatically allowing, sanitizing, or blocking each prompt. Supports major AI tools including ChatGPT and Gemini.',
    tech: ['Chrome Extension', 'TypeScript', 'React', 'LLMs'],
    link: 'https://chromewebstore.google.com/detail/vigil/mpmhpdffloeegpocjgojngpggmlemcpj',
    linkLabel: 'Chrome Web Store',
    hasLinks: true,
    hasCode: false,
    inDev: false,
    image: '/vigil.png',
    slotHint: 'Vigil AI screenshot',
  },
  {
    name: 'Contexta',
    tagline: 'AI context engine for tender intelligence',
    desc: 'Combines document processing, retrieval, semantic search, and AI reasoning to extract tender requirements, match them against verified company evidence, flag missing capabilities or documentation, and generate auditable recommendations.',
    tech: ['Python', 'FastAPI', 'RAG', 'Vector DB', 'React'],
    link: '#',
    code: '#',
    linkLabel: 'View case study',
    codeLabel: 'Source',
    hasLinks: false,
    hasCode: false,
    inDev: true,
    image: '/contexta2.png',
    slotHint: 'Contexta screenshot',
  },
];

export const otherProjectsNote =
  "Earlier self-taught builds, from before my first industry role — kept here because they're how I learned to ship.";

export const otherProjects = [
  { name: 'Pizza Shop', desc: 'E-commerce web app for ordering pizzas online.', tech: 'Laravel · React', link: 'https://github.com/notks/pizza-shop' },
  { name: 'Grade Book', desc: 'Online grade book where students and teachers track grades together.', tech: 'Node.js · Express · MongoDB', link: 'https://github.com/notks/grade-book' },
  { name: 'RTC Chat', desc: 'Real-time text chat over websockets.', tech: 'Node.js · WebSockets', link: 'https://github.com/notks/rtc-chat' },
  { name: 'Grade Tracker', desc: 'Grade tracker built for students at my high school.', tech: 'Laravel', link: 'https://github.com/notks/grade-tracker' },
  { name: 'URL Shortener', desc: 'The first Laravel app I ever built.', tech: 'Laravel', link: 'https://github.com/notks/url-shortener' },
];

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Surge',
    period: 'Jul 2022 — Present',
    points: [
      'Joined as an early hire and led full-stack engineering, accelerating product launches by 30%.',
      'Launched 3 production platforms from 0 to 1, supporting a leading EU fashion sustainability position.',
      'Implemented a Hyperledger blockchain integration for full traceability of records across platform workflows.',
      'Built authentication, RBAC, and third-party integrations, achieving 40% efficiency gains.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Invoice Ninja',
    period: 'Feb 2022 — Jul 2022',
    points: [
      'Rewrote the application from Flutter to React, increasing performance by 50%.',
      'Delivered Laravel and React features that improved scalability while maintaining high code quality.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'BITConex',
    period: 'Dec 2021 — Feb 2022',
    points: [
      'Shipped and maintained production code for a major German telecommunications client at scale.',
      'Authored technical documentation that improved maintainability and team onboarding.',
    ],
  },
];

export const skillGroups = [
  { label: 'Languages', items: ['Java', 'TypeScript', 'Python', 'SQL'] },
  { label: 'Backend', items: ['Spring Boot', 'FastAPI', 'Node.js', 'REST APIs'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Material UI'] },
  { label: 'AI & LLMs', items: ['OpenAI API', 'RAG', 'Vector databases'] },
];

export const writing = [
  { title: 'Designing idempotent APIs at scale', date: 'Mar 2026' },
  { title: 'What I learned building a distributed cache', date: 'Nov 2025' },
  { title: 'A minimal case for boring technology', date: 'Jun 2025' },
];

export const contactEmail = 'kemal.selimbasic@hotmail.com';
export const resumeHref = '/CV.pdf';
export const resumeDownloadName = 'Kemal-Selimbasic-CV.pdf';
