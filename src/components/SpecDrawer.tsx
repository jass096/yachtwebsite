import { AnimatePresence, motion } from 'motion/react';
import { yachts } from '../data/yachts';

interface SpecDrawerProps {
  yachtId: string | null;
  onClose: () => void;
}

export default function SpecDrawer({ yachtId, onClose }: SpecDrawerProps) {
  const yacht = yachts.find((y) => y.id === yachtId);

  return (
    <AnimatePresence>
      {yachtId && yacht && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)'
            }}
          />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '440px',
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto'
            }}
          >
            <div style={{ padding: 40 }}>
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  background: 'none',
                  border: '1px solid rgba(12,12,14,0.15)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  fontSize: '18px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  color: '#0c0c0e'
                }}
              >
                ×
              </button>

              <h2
                style={{
                  fontSize: 'clamp(24px,3vw,36px)',
                  fontWeight: 400,
                  color: '#0c0c0e',
                  marginBottom: 8,
                  letterSpacing: '-0.01em'
                }}
              >
                {yacht.name}
              </h2>
              <p
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  color: 'rgba(12,12,14,0.5)',
                  marginBottom: 32
                }}
              >
                {yacht.tagline}
              </p>

              {yacht.fullSpecs.map((category, i) => (
                <div key={i} style={{ marginBottom: 32 }}>
                  <h3
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.3em',
                      color: '#1c3557',
                      marginBottom: 16,
                      paddingBottom: 8,
                      borderBottom: '1px solid rgba(12,12,14,0.08)'
                    }}
                  >
                    {category.category}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {category.specs.map((spec, j) => (
                      <div key={j}>
                        <div
                          style={{
                            fontSize: '8px',
                            letterSpacing: '0.25em',
                            color: 'rgba(12,12,14,0.4)',
                            marginBottom: 4
                          }}
                        >
                          {spec.label}
                        </div>
                        <div
                          style={{
                            fontSize: '11px',
                            letterSpacing: '0.1em',
                            color: '#0c0c0e'
                          }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
