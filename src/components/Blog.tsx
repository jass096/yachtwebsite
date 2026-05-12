import { AnimatePresence, motion } from 'motion/react';

interface BlogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Blog({ isOpen, onClose }: BlogProps) {
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
                JOURNAL
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

          <div style={{ padding: 'clamp(48px,6vw,80px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 480, marginBottom: 0 }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                  padding: 'clamp(48px,6vw,80px)',
                  color: 'white'
                }}
              >
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.35em',
                    marginBottom: 16,
                    color: 'rgba(147,197,253,0.85)'
                  }}
                >
                  FEATURED
                </div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', marginBottom: 24, color: 'rgba(255,255,255,0.6)' }}>
                  FEBRUARY 2025
                </div>
                <div style={{ width: '24px', height: '1px', background: 'rgba(255,255,255,0.3)', marginBottom: 24 }} />
                <h2
                  style={{
                    fontSize: 'clamp(28px,3.5vw,48px)',
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    marginBottom: 24
                  }}
                >
                  THE AMALFI CORRIDOR
                </h2>
                <p
                  style={{
                    fontSize: '11px',
                    lineHeight: 1.9,
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.7)',
                    maxWidth: 340
                  }}
                >
                  A journey through Italy's most exclusive coastline aboard Ocean Eclipse.
                </p>
              </div>
              <div style={{ background: 'white', padding: 'clamp(48px,6vw,80px)' }}>
                <p
                  style={{
                    fontStyle: 'italic',
                    fontSize: '14px',
                    lineHeight: 1.8,
                    color: 'rgba(12,12,14,0.7)',
                    marginBottom: 32
                  }}
                >
                  "The Amalfi Coast isn't just a destination—it's a state of mind. And when you arrive by sea, the transition is seamless."
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    color: '#1c3557',
                    textDecoration: 'none',
                    borderBottom: '1px solid #1c3557',
                    paddingBottom: 2
                  }}
                >
                  CONTINUE READING →
                </a>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 24,
                padding: 'clamp(40px,5vw,64px)'
              }}
            >
              {[
                { title: 'ON STILL WATER', date: 'JANUARY 2025', category: 'REFLECTIONS' },
                { title: 'THE AEGEAN REWRITTEN', date: 'DECEMBER 2024', category: 'VOYAGES' },
                { title: 'HULL DESIGN IN THE AGE OF SILENCE', date: 'NOVEMBER 2024', category: 'ENGINEERING' },
                { title: 'SUNSET SERIES', date: 'OCTOBER 2024', category: 'PHOTOGRAPHY' }
              ].map((article, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card"
                  style={{ overflow: 'hidden' }}
                >
                  <div
                    style={{
                      height: 180,
                      background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                      position: 'relative',
                      padding: 16
                    }}
                  >
                    <div
                      style={{
                        fontSize: '8px',
                        letterSpacing: '0.35em',
                        color: 'rgba(147,197,253,0.85)',
                        marginBottom: 8
                      }}
                    >
                      {article.category}
                    </div>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
                      ARTICLE {i + 1}
                    </div>
                  </div>
                  <div style={{ padding: 24, background: 'white' }}>
                    <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', marginBottom: 8 }}>
                      {article.date}
                    </div>
                    <h3
                      style={{
                        fontSize: '16px',
                        letterSpacing: '0.05em',
                        color: '#0c0c0e',
                        marginBottom: 12
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '10px',
                        lineHeight: 1.8,
                        letterSpacing: '0.15em',
                        color: 'rgba(12,12,14,0.6)',
                        marginBottom: 16
                      }}
                    >
                      Exploring the intersection of luxury and maritime excellence.
                    </p>
                    <a
                      href="#"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.2em',
                        color: '#1c3557',
                        textDecoration: 'none'
                      }}
                    >
                      READ MORE →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
