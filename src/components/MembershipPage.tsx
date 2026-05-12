import { AnimatePresence, motion } from 'motion/react';

interface MembershipPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
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
                MEMBERSHIP
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

          <div style={{ padding: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(32px,4vw,48px)' }}>
            <h2
              style={{
                fontSize: 'clamp(40px,5vw,72px)',
                color: '#0c0c0e',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                marginBottom: 24
              }}
            >
              JOIN THE CIRCLE.
            </h2>
            <p
              style={{
                fontSize: '11px',
                lineHeight: 1.9,
                letterSpacing: '0.15em',
                color: 'rgba(12,12,14,0.7)',
                marginBottom: 32,
                maxWidth: 600
              }}
            >
              Membership at YORCH grants access to an exclusive world of maritime excellence. Choose the tier that aligns with your aspirations.
            </p>
            <button
              style={{
                background: '#1c3557',
                color: 'white',
                padding: '14px 36px',
                fontSize: '10px',
                letterSpacing: '0.25em',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              APPLY NOW
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
              gap: 24,
              padding: 'clamp(32px,4vw,48px)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
              style={{ padding: 40 }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(12,12,14,0.4)',
                  marginBottom: 8
                }}
              >
                SIGNATURE
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: '#1c3557',
                  marginBottom: 16
                }}
              >
                ENTRY LEVEL
              </div>
              <div
                style={{
                  fontSize: '40px',
                  color: '#0c0c0e',
                  fontWeight: 400,
                  marginBottom: 24
                }}
              >
                $24,000
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(12,12,14,0.4)', marginBottom: 24 }}>
                / YEAR
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 24px',
                  fontSize: '10px',
                  lineHeight: 2,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.7)'
                }}
              >
                <li>• DEDICATED BERTH ACCESS</li>
                <li>• RACE ENTRY DISCOUNTS</li>
                <li>• CONCIERGE HOTLINE</li>
                <li>• 2 GUEST PASSES / YEAR</li>
              </ul>
              <button
                style={{
                  width: '100%',
                  background: '#1c3557',
                  color: 'white',
                  padding: '12px',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  borderRadius: '2px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                APPLY
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                background: '#1c3557',
                color: 'white',
                padding: 40,
                borderRadius: '3px',
                boxShadow: '0 8px 48px rgba(28,53,87,0.3)'
              }}
            >
              <div
                style={{
                  background: 'rgba(147,197,253,0.2)',
                  color: 'white',
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  padding: '4px 12px',
                  borderRadius: '2px',
                  marginBottom: 16,
                  display: 'inline-block'
                }}
              >
                MOST POPULAR
              </div>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: 8
                }}
              >
                COMMODORE
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: 16
                }}
              >
                FULL ACCESS
              </div>
              <div
                style={{
                  fontSize: '40px',
                  color: 'white',
                  fontWeight: 400,
                  marginBottom: 24
                }}
              >
                $48,000
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', marginBottom: 24 }}>
                / YEAR
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 24px',
                  fontSize: '10px',
                  lineHeight: 2,
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.7)'
                }}
              >
                <li>• UNLIMITED BERTH ACCESS</li>
                <li>• RACE PROGRAM INCLUDED</li>
                <li>• 24/7 CONCIERGE</li>
                <li>• 10 GUEST PASSES / YEAR</li>
              </ul>
              <button
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: 'white',
                  padding: '12px',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  borderRadius: '2px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                APPLY
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
              style={{ padding: 40 }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(12,12,14,0.4)',
                  marginBottom: 8
                }}
              >
                FOUNDERS' CIRCLE
              </div>
              <div
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.25em',
                  color: '#1c3557',
                  marginBottom: 16
                }}
              >
                INVITATION ONLY
              </div>
              <div
                style={{
                  fontSize: '40px',
                  color: '#0c0c0e',
                  fontWeight: 400,
                  marginBottom: 24
                }}
              >
                BY INVITATION
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 24px',
                  fontSize: '10px',
                  lineHeight: 2,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.7)'
                }}
              >
                <li>• EXCLUSIVE VESSEL ACCESS</li>
                <li>• GLOBAL CONCIERGE</li>
                <li>• PRIVATE EVENTS</li>
                <li>• UNLIMITED GUESTS</li>
              </ul>
              <button
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#1c3557',
                  padding: '12px',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  borderRadius: '2px',
                  border: '1px solid #1c3557',
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                ENQUIRE
              </button>
            </motion.div>
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
              { label: 'PRIVATE BERTHS', desc: 'Dedicated access across all marinas' },
              { label: 'CAPTAIN ON CALL', desc: '24/7 professional crew availability' },
              { label: 'RACE ENTRIES', desc: 'Priority access to regattas' },
              { label: 'PROVISIONING', desc: 'Curated cuisine and supplies' }
            ].map((perk, i) => (
              <div key={i}>
                <div style={{ fontSize: '24px', color: '#1c3557', marginBottom: 8, fontWeight: 400 }}>
                  {i + 1}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.2em',
                    color: '#0c0c0e',
                    marginBottom: 4
                  }}
                >
                  {perk.label}
                </div>
                <div
                  style={{
                    fontSize: '9px',
                    lineHeight: 1.6,
                    letterSpacing: '0.15em',
                    color: 'rgba(12,12,14,0.5)'
                  }}
                >
                  {perk.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
