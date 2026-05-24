import { SiGithub } from 'react-icons/si';
import { HiGlobeAlt } from 'react-icons/hi';

const PROJECTS = [
  {
    num: '01',
    title: 'Video Editor Portfolio',
    desc: 'A cinematic, editorial style portfolio website for a video editor built using React and Tailwind CSS, featuring smooth scroll triggered animations, hover to play video cards, and an asymmetric Behance inspired layout. Integrated Cloudinary for a dynamic media library, optimized video delivery, and a premium fast loading user experience.',
    tech: ['React', 'Tailwind CSS', 'Cloudinary'],
    repo: 'https://www.dipenmaharjan.com/',
    isWebsite: true,
  },
  {
    num: '02',
    title: 'To-Do App',
    desc: 'A responsive task management application built using React Native, TypeScript, and Tailwind CSS, featuring task creation, editing, deletion, and priority based organization. Integrated React Native AsyncStorage for persistent local data storage, ensuring seamless offline access and a smooth, reliable user experience.',
    tech: ['React Native', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/SauravStha71/ToDoList',
  },
  {
    num: '03',
    title: 'SMS System',
    desc: 'Designed a dynamic SMS management system with reusable table components to efficiently display user and billing data. Implemented search and pagination features for improved data navigation and usability. Built a clean, responsive UI using React and Tailwind CSS for an optimized user experience.',
    tech: ['React', 'Tailwind CSS'],
    hideLink: true,
  },
  {
    num: '04',
    title: 'MD Meeting Schedule',
    desc: 'Meeting Management System is a full-stack web application for NEA with role-based access (Admin, GM, PA, MD). Built with React and Node.js, it enables meeting scheduling, management, dashboards, and automated SMS notifications with secure JWT authentication.',
    tech: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js'],
    hideLink: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-tag" style={{ marginBottom: 32 }}>&lt;Projects /&gt;</div>
        <div className="eyebrow">/* 02 — projects */</div>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          <span className="bracket-red">&lt;</span>Projects<span className="bracket-red"> /&gt;</span>
        </h2>
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
              {!p.hideLink && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="github-link">
                  {p.isWebsite ? (
                    <>
                      <HiGlobeAlt size={13} />
                      View Website
                    </>
                  ) : (
                    <>
                      <SiGithub size={13} />
                      View on GitHub
                    </>
                  )}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="section-tag" style={{ marginTop: 32 }}>&lt;/Projects&gt;</div>
      </div>
    </section>
  );
}