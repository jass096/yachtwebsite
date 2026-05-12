import { AnimatePresence, motion } from 'motion/react';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
  const milestones = [
    { year: '1975', event: 'Founded in Monaco by Édouard Marchetti with a single vessel.' },
    { year: '1981', event: 'Expanded to a three-vessel fleet serving the Mediterranean exclusively.' },
    { year: '1994', event: 'Transatlantic operations launched; inaugural Caribbean season.' },
    { year: '2003', event: 'Pacific programme introduced; Polynesia and New Zealand routes established.' },
    { year: '2012', event: 'Academy programme launched, formalising our sailing education offering.' },
    { year: '2025', event: 'Celebrating fifty years, YORCH continues to define private maritime excellence.' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto'
          }}
        >
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              height: 72,
              backgroundColor: 'rgba(248,246,242,0.92)',
              backdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1px solid rgba(12,12,14,0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 clamp(24px,6vw,80px)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" />
                <line x1="10" y1="7.4" x2="10" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M5 11 Q10 14 15 11" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <line x1="7" y1="16" x2="13" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.28em', color: '#0c0c0e' }}>
                YORCH
              </span>
              <span style={{ color: 'rgba(12,12,14,0.3)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>
                ABOUT
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                padding: '9px 22px',
                fontSize: 10,
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.6)',
                background: 'transparent',
                border: '1px solid rgba(12,12,14,0.1)',
                borderRadius: 100,
                cursor: 'pointer',
                fontFamily: 'var(--font-serif)',
                transition: 'all 0.3s ease'
              }}
            >
              × CLOSE
            </button>
          </div>

          <div style={{ padding: 'clamp(48px,6vw,80px)', display: 'grid', gridTemplateColumns: '0.6fr 1fr', gap: 80 }}>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(48px,6vw,80px)',
                  color: '#0c0c0e',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                  marginBottom: 24
                }}
              >
                FIFTY YEARS AT SEA.
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontSize: '48px', color: '#1c3557', fontWeight: 400, marginBottom: 8 }}>50+</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.6)' }}>
                  YEARS
                </div>
              </div>
              <div>
                <div style={{ fontSize: '48px', color: '#1c3557', fontWeight: 400, marginBottom: 8 }}>3</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.6)' }}>
                  VESSELS
                </div>
              </div>
              <div>
                <div style={{ fontSize: '48px', color: '#1c3557', fontWeight: 400, marginBottom: 8 }}>12</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.6)' }}>
                  COUNTRIES
                </div>
              </div>
              <div>
                <div style={{ fontSize: '48px', color: '#1c3557', fontWeight: 400, marginBottom: 8 }}>1,400+</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.6)' }}>
                  MEMBERS
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 24,
              padding: 'clamp(32px,4vw,48px)',
              borderTop: '1px solid rgba(12,12,14,0.07)'
            }}
          >
            {[
              { title: 'DISCRETION', desc: 'Privacy and confidentiality are paramount.' },
              { title: 'PRECISION', desc: 'Every detail executed to perfection.' },
              { title: 'HERITAGE', desc: 'Five decades of maritime excellence.' },
              { title: 'ADVENTURE', desc: 'The world\'s finest waters await.' }
            ].map((value, i) => (
              <div key={i}>
                <div
                  style={{
                    borderTop: '2px solid #1c3557',
                    paddingTop: 20,
                    marginBottom: 12
                  }}
                >
                  <div
                    style={{
                      fontSize: '12px',
                      letterSpacing: '0.2em',
                      color: '#0c0c0e',
                      marginBottom: 8
                    }}
                  >
                    {value.title}
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
                      lineHeight: 1.6,
                      letterSpacing: '0.15em',
                      color: 'rgba(12,12,14,0.6)'
                    }}
                  >
                    {value.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: 720, padding: 'clamp(32px,4vw,48px)' }}>
            <div
              style={{
                fontSize: '12px',
                letterSpacing: '0.25em',
                color: '#1c3557',
                marginBottom: 24
              }}
            >
              OUR HISTORY
            </div>
            {milestones.map((milestone, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 24,
                  borderBottom: '1px solid rgba(12,12,14,0.08)',
                  padding: '20px 0'
                }}
              >
                <div
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    color: '#1c3557',
                    fontWeight: 400
                  }}
                >
                  {milestone.year}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    lineHeight: 1.8,
                    letterSpacing: '0.15em',
                    color: 'rgba(12,12,14,0.7)'
                  }}
                >
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
