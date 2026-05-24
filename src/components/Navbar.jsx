import { useState, useEffect } from 'react';

const links = [
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 57 }}>
          {/* Logo */}
          <a href="#hero" onClick={e => { e.preventDefault(); handleNav('#hero'); }}
             style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
            SS<span style={{ color: 'var(--accent)' }}></span>
          </a>

          {/* Desktop Links — hidden below 768px via global CSS */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}
               className="hidden-mobile">
            {links.map(l => (
              <a key={l.label} href={l.href}
                 onClick={e => { e.preventDefault(); handleNav(l.href); }}
                 className="nav-link">
                <span className="prefix">./</span>{l.label}
              </a>
            ))}
          </div>

          {/* Hamburger — shown below 768px via global CSS */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="hamburger-btn show-mobile"
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--accent)' : 'var(--ink)', transition: 'transform 0.25s, background 0.25s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--accent)' : 'var(--ink)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.25s, background 0.25s' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: menuOpen ? 'var(--accent)' : 'var(--ink)', transition: 'transform 0.25s, background 0.25s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href}
             onClick={e => { e.preventDefault(); handleNav(l.href); }}
             className="nav-link" style={{ fontSize: 14 }}>
            <span className="prefix">./</span>{l.label}
          </a>
        ))}
      </div>
    </>
  );
}
