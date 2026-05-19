const EDUCATION = [
  {
    year: '2021 – 2025',
    degree: 'Bachelor of Science in Computer Science & Information Technology',
    school: 'Tribhuvan University, Kathmandu, Nepal',
  },
  {
    year: '2019 – 2021',
    degree: '+2 Science (Computer Science)',
    school: 'Higher Secondary Board, Nepal',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        {/* Opening tag */}
        <div className="section-tag" style={{ marginBottom: 32 }}>&lt;Education /&gt;</div>

        {/* Eyebrow */}
        <div className="eyebrow">/* 04 — education */</div>

        {/* Heading */}
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          <span className="bracket-red">&lt;</span>Education<span className="bracket-red"> /&gt;</span>
        </h2>

        {/* 2-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}
             className="edu-grid">
          {EDUCATION.map((e, i) => (
            <div key={i} className="edu-card">
              <div className="edu-year">{e.year}</div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-todo">{'// TODO: Replace with actual data'}</div>
            </div>
          ))}
        </div>

        {/* Closing tag */}
        <div className="section-tag" style={{ marginTop: 32 }}>&lt;/Education&gt;</div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
