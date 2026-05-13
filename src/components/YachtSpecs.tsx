import { useState } from 'react';
import { motion } from 'motion/react';
import { yachts } from '../data/yachts';
import SpecDrawer from './SpecDrawer';

export default function YachtSpecs() {
  const [selectedYacht, setSelectedYacht] = useState<string | null>(null);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: '40px', height: '1px', background: '#1c3557' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#1c3557' }}>
            THE FLEET
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            color: '#0c0c0e',
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: '-0.01em'
          }}
        >
          THREE VESSELS.<br />
          ONE STANDARD.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16
        }}
      >
        {yachts.map((yacht, i) => (
          <motion.div
            key={yacht.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="yacht-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '4px',
              border: '1px solid rgba(12,12,14,0.06)',
              background: 'white',
              transition: 'transform 0.5s cubic-bezier(0.19,1,0.22,1), box-shadow 0.5s cubic-bezier(0.19,1,0.22,1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ aspectRatio: '9/16', overflow: 'hidden', position: 'relative', border: i === 0 ? '2px solid red' : 'none' }}>
              <video
                className="yacht-card-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-luxury)'
                }}
              >
                <source src={`/videos/${yacht.video}`} type="video/mp4" />
              </video>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  background: 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)'
                }}
              >
                YACHT {i + 1}
              </div>
              <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 4
                  }}
                >
                  {yacht.tagline}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    letterSpacing: '0.08em',
                    color: 'white'
                  }}
                >
                  {yacht.name}
                </div>
              </div>
            </div>

            <div style={{ padding: '24px 24px 28px', background: 'white' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px 4px',
                  marginBottom: 20
                }}
              >
                {yacht.quickSpecs.slice(0, 4).map((spec, j) => (
                  <div key={j}>
                    <div
                      style={{
                        fontSize: '8px',
                        letterSpacing: '0.25em',
                        color: 'rgba(12,12,14,0.38)',
                        marginBottom: 2
                      }}
                    >
                      {spec.split(' ')[0]}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        letterSpacing: '0.1em',
                        color: '#1c3557',
                        fontWeight: 400
                      }}
                    >
                      {spec.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setSelectedYacht(yacht.id)}
                  style={{
                    background: '#1c3557',
                    color: 'white',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(12,12,14,0.5)',
                    color: 'rgba(12,12,14,0.5)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  FULL SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        style={{
          display: 'block',
          margin: '48px auto 0',
          background: '#1c3557',
          color: 'white',
          padding: '14px 40px',
          fontSize: '10px',
          letterSpacing: '0.22em',
          borderRadius: '2px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit'
        }}
      >
        COMPARE ALL THREE
      </button>

      <SpecDrawer yachtId={selectedYacht} onClose={() => setSelectedYacht(null)} />
    </section>
  );
}
