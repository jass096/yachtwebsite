import { motion } from 'motion/react';

export default function Membership() {
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
            MEMBERSHIP
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
          SELECT YOUR TIER.
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
            style={{ padding: 32 }}
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
                marginBottom: 4
              }}
            >
              $24,000
            </div>
            <div
              style={{
                fontSize: '9px',
                color: 'rgba(12,12,14,0.4)',
                marginBottom: 24
              }}
            >
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
              APPLY NOW
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card-accent"
            style={{ padding: 32 }}
          >
            <div
              style={{
                background: '#1c3557',
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
                color: 'rgba(12,12,14,0.4)',
                marginBottom: 8
              }}
            >
              COMMODORE
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.25em',
                color: '#1c3557',
                marginBottom: 16
              }}
            >
              FULL ACCESS
            </div>
            <div
              style={{
                fontSize: '40px',
                color: '#1c3557',
                fontWeight: 400,
                marginBottom: 4
              }}
            >
              $48,000
            </div>
            <div
              style={{
                fontSize: '9px',
                color: 'rgba(12,12,14,0.4)',
                marginBottom: 24
              }}
            >
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
              <li>• UNLIMITED BERTH ACCESS</li>
              <li>• RACE PROGRAM INCLUDED</li>
              <li>• 24/7 CONCIERGE</li>
              <li>• 10 GUEST PASSES / YEAR</li>
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
              APPLY NOW
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="card"
            style={{ padding: 32 }}
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

        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{ position: 'relative' }}>
            <video
              src="/videos/Water_surface_animation_luxury_b…_202605121729.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 32,
                background: 'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)'
              }}
            >
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.3em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: 8
                }}
              >
                OCEAN ECLIPSE — MAIN SALON
              </div>
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: 280,
                  marginBottom: 20
                }}
              >
                WHERE SOPHISTICATION MEETS THE SEA. EVERY DETAIL DESIGNED FOR DISCERNING TASTES.
              </p>
              <button
                className="glass-mid"
                style={{
                  padding: '12px 28px',
                  color: 'white',
                  fontSize: '9px',
                  letterSpacing: '0.2em',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  borderRadius: '2px'
                }}
              >
                APPLY FOR MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
