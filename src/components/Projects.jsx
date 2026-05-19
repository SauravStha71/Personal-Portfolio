import { SiGithub } from 'react-icons/si';

const PROJECTS = [
  {
    num: '01',
    title: 'Video Editor Portfolio',
    desc: 'A cinematic, editorial-style portfolio website for a video editor. Features smooth scroll-triggered animations, hover-to-play video cards, and an asymmetric grid layout with a premium Behance-like user experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    repo: 'https://github.com/SauravStha71',
  },
  {
    num: '02',
    title: 'To-Do App',
    desc: 'A fully type-safe task management application with persistent local storage, drag-and-drop reordering, priority tagging, and a clean minimal UI built with TypeScript for robust state management.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/SauravStha71',
  },
  {
    num: '03',
    title: 'SMS System',
    desc: 'A student management system featuring real-time data tables, role-based access control, and full CRUD operations backed by a PostgreSQL relational database with a clean React dashboard interface.',
    tech: ['React', 'PostgreSQL', 'Tailwind CSS'],
    repo: 'https://github.com/SauravStha71',
  },
  {
    num: '04',
    title: 'MD Meeting Schedule',
    desc: 'A meeting scheduling platform for executives with calendar integrations, MongoDB persistence, conflict detection, and a responsive TypeScript React interface supporting multi-timezone scheduling.',
    tech: ['React', 'TypeScript', 'MongoDB'],
    repo: 'https://github.com/SauravStha71',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Opening tag */}
        <div className="section-tag" style={{ marginBottom: 32 }}>&lt;Projects /&gt;</div>

        {/* Eyebrow */}
        <div className="eyebrow">/* 02 — projects */</div>

        {/* Heading */}
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          <span className="bracket-red">&lt;</span>Projects<span className="bracket-red"> /&gt;</span>
        </h2>

        {/* 2×2 Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: 'var(--border)' }}
             className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.num} className="project-card">
              <div className="project-num">{p.num}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
              <a href={p.repo} target="_blank" rel="noreferrer" className="github-link">
                <span className="git-label">git clone</span>
                <SiGithub size={13} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        {/* Closing tag */}
        <div className="section-tag" style={{ marginTop: 32 }}>&lt;/Projects&gt;</div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
