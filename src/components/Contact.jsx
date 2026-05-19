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
  { Icon: MailIcon, prefix: 'mailto:', label: 'shresthasaurav71@gmail.com', href: 'mailto:shresthasaurav71@gmail.com' },
  { Icon: SiGithub, prefix: 'github.com/', label: 'SauravStha71', href: 'https://github.com/SauravStha71' },
  { Icon: FaLinkedin, prefix: 'linkedin.com/in/', label: 'SauravShrestha', href: 'https://www.linkedin.com/in/sauravshrestha71/' },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-tag" style={{ marginBottom: 32 }}>&lt;Contact /&gt;</div>
        <div className="eyebrow">/* 05 — contact */</div>
        <h2 className="section-heading" style={{ marginBottom: 48 }}>
          <span className="bracket-red">&lt;</span>Contact<span className="bracket-red"> /&gt;</span>
        </h2>

        <div className="contact-panels" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid var(--border)' }}>
          {/* Left */}
          <div style={{ background: 'var(--ink)', padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--border)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#080808', lineHeight: 1.1, marginBottom: 16 }}>
              Let's work<br />together.
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '0.85rem', color: '#444', lineHeight: 1.8 }}>
              Open to freelance projects, collaborations, and full-time opportunities. Let's build something great.
            </p>
          </div>

          {/* Right */}
          <div style={{ background: 'var(--card)', padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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

        <div className="section-tag" style={{ marginTop: 24 }}>&lt;/Contact&gt;</div>
      </div>
    </section>
  );
}