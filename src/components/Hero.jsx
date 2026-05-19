import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 57 }}>
      {/* Faint { } watermark */}
      <div className="code-watermark" aria-hidden="true">
        {'{ }'}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 60, alignItems: 'center' }}
             className="hero-grid">

          {/* Left / Text side */}
          <div>
            {/* Eyebrow */}
            <div className="eyebrow fade-up">
              /* Frontend Developer */
            </div>

            {/* Heading */}
            <h1 className="fade-up-delay-1"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, lineHeight: 1, letterSpacing: '-3px', fontSize: 'clamp(3.5rem, 10vw, 7rem)', marginBottom: 8 }}>
              Saurav<br />
              <span style={{ color: 'var(--accent)' }}>Shrestha.</span>
            </h1>
            <span className="cursor-blink fade-up-delay-1" aria-hidden="true" />

            {/* CTA Buttons */}
            <div className="fade-up-delay-2" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 36, marginBottom: 28 }}>
              <button className="btn-primary" onClick={() => scrollTo('#projects')}>
                view_projects()
              </button>
              <button className="btn-ghost" onClick={() => scrollTo('#contact')}>
                get_in_touch()
              </button>
            </div>

            {/* Social Pills */}
            <div className="fade-up-delay-3" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://github.com/SauravStha71" target="_blank" rel="noreferrer" className="social-pill">
                <SiGithub size={14} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sauravshrestha71/" target="_blank" rel="noreferrer" className="social-pill">
                <FaLinkedin size={14} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right / Code Window */}
          <div className="fade-up-delay-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="code-window" style={{ width: '100%' }}>
              <div className="code-window-chrome">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
                <span className="code-window-tab">developer.js</span>
              </div>
              <div className="code-window-body">
                <div>
                  <span className="syn-keyword">const </span>
                  <span style={{ color: 'var(--ink)' }}>developer </span>
                  <span className="syn-punc">= </span>
                  <span className="syn-punc">{'{'}</span>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <span className="syn-prop">name</span>
                  <span className="syn-punc">: </span>
                  <span className="syn-string">"Saurav Shrestha"</span>
                  <span className="syn-punc">,</span>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <span className="syn-prop">role</span>
                  <span className="syn-punc">: </span>
                  <span className="syn-string">"Frontend Developer"</span>
                  <span className="syn-punc">,</span>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <span className="syn-prop">stack</span>
                  <span className="syn-punc">: [</span>
                  <span className="syn-string">"React"</span>
                  <span className="syn-punc">, </span>
                  <span className="syn-string">"TypeScript"</span>
                  <span className="syn-punc">, </span>
                  <span className="syn-string">"Tailwind"</span>
                  <span className="syn-punc">],</span>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <span className="syn-prop">available</span>
                  <span className="syn-punc">: </span>
                  <span className="syn-bool">true</span>
                  <span className="syn-punc">,</span>
                </div>
                <div><span className="syn-punc">{'};'}</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr !important; }
        }
        @media (max-width: 767px) {
          .hero-grid > div:last-child { justify-content: flex-start !important; }
          .code-window { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
