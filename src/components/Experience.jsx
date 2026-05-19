const EXPERIENCE = [
  {
    lineNum: '01',
    period: '2024 – Present',
    company: 'Freelance',
    role: 'Frontend Developer',
    desc: 'Designing and developing responsive web applications for clients across various industries. Focused on delivering clean React interfaces, pixel-perfect Tailwind CSS implementations, and performant TypeScript codebases.',
  },
  {
    lineNum: '02',
    period: '2023 – 2024',
    company: 'Academic Projects',
    role: 'React Developer',
    desc: 'Built full-stack applications as part of university coursework — including an SMS system, meeting scheduler, and e-commerce prototype — using React, PostgreSQL, and MongoDB.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Opening tag */}
        <div className="section-tag" style={{ marginBottom: 32 }}>&lt;Experience /&gt;</div>

        {/* Eyebrow */}
        <div className="eyebrow">/* 03 — experience */</div>

        {/* Heading */}
        <h2 className="section-heading" style={{ marginBottom: 52 }}>
          <span className="bracket-red">&lt;</span>Experience<span className="bracket-red"> /&gt;</span>
        </h2>

        {/* Entries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ display: 'flex', gap: 40, paddingBottom: 48, borderBottom: i < EXPERIENCE.length - 1 ? '1px solid var(--border)' : 'none', paddingTop: i > 0 ? 48 : 0 }}
                 className="exp-row">
              {/* Gutter */}
              <div className="exp-gutter">
                <span className="exp-linenum">{e.lineNum}</span>
                <span className="exp-period">{e.period}</span>
                <span className="exp-company">{e.company}</span>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div className="exp-todo">{'// TODO: Replace with actual data'}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing tag */}
        <div className="section-tag" style={{ marginTop: 32 }}>&lt;/Experience&gt;</div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .exp-row { flex-direction: column !important; gap: 16px !important; }
          .exp-gutter { border-right: none !important; border-bottom: 1px solid var(--border); padding-right: 0 !important; padding-bottom: 16px; min-width: unset !important; }
        }
      `}</style>
    </section>
  );
}
