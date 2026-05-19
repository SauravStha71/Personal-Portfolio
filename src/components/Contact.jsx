import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const CONTACTS = [
  {
    Icon: MailIcon,
    prefix: 'mailto:',
    label: 'saurav@email.com',
    href: 'mailto:saurav@email.com',
  },
  {
    Icon: SiGithub,
    prefix: 'github.com/',
    label: 'SauravStha71',
    href: 'https://github.com/SauravStha71',
  },
  {
    Icon: FaLinkedin,
    prefix: 'linkedin.com/in/',
    label: 'sauravshrestha',
    href: 'https://linkedin.com/in/sauravshrestha',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper" style={{ borderTop: '1px solid var(--border)', padding: 0 }}>
      <div className="container" style={{ paddingTop: 80, paddingBottom: 0 }}>
        {/* Opening tag */}
        <div className="section-tag" style={{ marginBottom: 32 }}>&lt;Contact /&gt;</div>

        {/* Eyebrow */}
        <div className="eyebrow">/* 05 — contact */</div>

        {/* Heading */}
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          <span className="bracket-red">&lt;</span>Contact<span className="bracket-red"> /&gt;</span>
        </h2>
      </div>

      {/* Two-panel layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--border)' }}
           className="contact-panels">

        {/* Left — light inverted panel */}
        <div style={{
          background: 'var(--ink)',
          padding: 'clamp(40px, 8vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid var(--border)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#080808',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Let's work<br />together.
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.9rem', color: '#444', lineHeight: 1.8 }}>
            Open to freelance projects, collaborations, and full-time opportunities. Let's build something great.
          </p>
        </div>

        {/* Right — dark contact rows */}
        <div style={{ background: 'var(--card)', padding: 'clamp(40px, 8vw, 80px)' }}>
          {CONTACTS.map(({ Icon, prefix, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-row"
               style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
              <span className="contact-icon"><Icon /></span>
              <div>
                <div className="contact-prefix">{prefix}</div>
                <div className="contact-label">{label}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Closing tag inside container after panels */}
      <div className="container" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="section-tag">&lt;/Contact&gt;</div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-panels { grid-template-columns: 1fr !important; }
          .contact-panels > div:first-child { border-right: none !important; border-bottom: 1px solid var(--border); }
        }
      `}</style>
    </section>
  );
}
