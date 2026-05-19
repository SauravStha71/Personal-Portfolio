const EXPERIENCE = [
  {
    lineNum: '01',
    period: 'March 2025 – June 2025',
    company: 'Nepal Electricity Authority',
    role: 'Frontend Intern',
    desc: 'Developed and deployed web based systems, including an MD-Schedule Management System and SMS platform, using the MERN stack to build secure and user friendly solutions. Enhanced operational efficiency while strengthening expertise in full-stack development, database management, and system optimization.',
  },
  {
    lineNum: '02',
    period: 'October 2025 – May 2026',
    company: 'Krizmatic Digital Solutions',
    role: 'Digital Marketing Analyst and Strategist',
    desc: 'Worked as a Digital Marketing Analyst and Strategist, creating data driven marketing campaigns and optimizing online presence through SEO, social media, and audience analytics. Improved brand engagement and campaign performance while strengthening skills in digital strategy, market analysis, and content optimization.',
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
                <div className="exp-role">{e.role}</div>
                <div className="exp-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing tag */}
        <div className="section-tag" style={{ marginTop: 32 }}>&lt;/Experience&gt;</div>
      </div>

    </section>
  );
}
