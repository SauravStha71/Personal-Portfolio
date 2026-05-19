import {
  SiJavascript, SiTypescript, SiReact, SiTailwindcss,
  SiMysql, SiMongodb, SiPostgresql, SiGit, SiGithub,
  SiNetlify, SiVercel, SiFigma, SiCanva,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    skills: [
      { label: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { label: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { label: 'React',        Icon: SiReact,       color: '#61DAFB' },
      { label: 'React Native', Icon: SiReact,       color: '#58D8A3' },
      { label: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { label: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
      { label: 'MongoDB',    Icon: SiMongodb,    color: '#47A248' },
      { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { label: 'Git',     Icon: SiGit,     color: '#F05032' },
      { label: 'GitHub',  Icon: SiGithub,  color: '#FFFFFF' },
      { label: 'VS Code', Icon: VscVscode, color: '#007ACC' },
      { label: 'Netlify', Icon: SiNetlify, color: '#00C7B7' },
      { label: 'Vercel',  Icon: SiVercel,  color: '#FFFFFF' },
      { label: 'Figma',   Icon: SiFigma,   color: '#F24E1E' },
      { label: 'Canva',   Icon: SiCanva,   color: '#00C4CC' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">

        <div className="section-tag" style={{ marginBottom: 28 }}>&lt;Skills /&gt;</div>
        <div className="eyebrow">/* 01 — skills */</div>
        <h2 className="section-heading" style={{ marginBottom: 52 }}>
          <span className="bracket-red">&lt;</span>Skills<span className="bracket-red"> /&gt;</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
  {SKILL_CATEGORIES.map(({ category, skills }, ri) => (
    <div key={category} style={{ paddingTop: ri > 0 ? 20 : 0, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        {category}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        {skills.map(({ label, Icon, color }) => (
          <span key={label} className="skill-tag">
            <Icon size={18} color={color} />
            {label}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

        <div className="section-tag" style={{ marginTop: 28 }}>&lt;/Skills&gt;</div>
      </div>
    </section>
  );
}
