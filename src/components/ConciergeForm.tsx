import { motion } from 'motion/react';

export default function ConciergeForm() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: '24px', height: '1px', background: '#1c3557' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#1c3557' }}>
            PRIVATE CONCIERGE
          </span>
          <div style={{ width: '24px', height: '1px', background: '#1c3557' }} />
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
          CHARTER A<br />
          MOMENT.
        </h2>
      </div>

      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          background: 'white',
          border: '1px solid rgba(12,12,14,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: '4px',
          padding: 'clamp(32px,5vw,56px)'
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label
              style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: 6,
                display: 'block'
              }}
            >
              FULL NAME
            </label>
            <input
              type="text"
              style={{
                width: '100%',
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: 6,
                display: 'block'
              }}
            >
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              style={{
                width: '100%',
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          <div>
            <label
              style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: 6,
                display: 'block'
              }}
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              style={{
                width: '100%',
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                fontFamily: 'inherit'
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: 6,
                display: 'block'
              }}
            >
              PREFERRED VESSEL
            </label>
            <select
              style={{
                width: '100%',
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                fontFamily: 'inherit'
              }}
            >
              <option>OCEAN ECLIPSE</option>
              <option>BLACK SOVEREIGN</option>
              <option>AZURE HORIZON</option>
              <option>NO PREFERENCE</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: 6,
              display: 'block'
            }}
          >
            DESTINATION OR REGION
          </label>
          <input
            type="text"
            style={{
              width: '100%',
              background: 'rgba(12,12,14,0.04)',
              border: '1px solid rgba(12,12,14,0.1)',
              color: '#0c0c0e',
              fontSize: '11px',
              letterSpacing: '0.12em',
              padding: '14px 16px',
              borderRadius: '2px',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: 6,
              display: 'block'
            }}
          >
            PREFERRED DATES
          </label>
          <input
            type="text"
            placeholder="Please specify or note flexibility"
            style={{
              width: '100%',
              background: 'rgba(12,12,14,0.04)',
              border: '1px solid rgba(12,12,14,0.1)',
              color: '#0c0c0e',
              fontSize: '11px',
              letterSpacing: '0.12em',
              padding: '14px 16px',
              borderRadius: '2px',
              fontFamily: 'inherit'
            }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: 6,
              display: 'block'
            }}
          >
            ADDITIONAL REQUESTS
          </label>
          <textarea
            rows={4}
            placeholder="Share any particular wishes or requirements..."
            style={{
              width: '100%',
              background: 'rgba(12,12,14,0.04)',
              border: '1px solid rgba(12,12,14,0.1)',
              color: '#0c0c0e',
              fontSize: '11px',
              letterSpacing: '0.12em',
              padding: '14px 16px',
              borderRadius: '2px',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          style={{
            width: '100%',
            background: '#1c3557',
            color: 'white',
            padding: '16px',
            fontSize: '10px',
            letterSpacing: '0.25em',
            borderRadius: '2px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            marginTop: 8
          }}
        >
          SUBMIT REQUEST
        </motion.button>

        <div
          style={{
            fontSize: '8px',
            letterSpacing: '0.2em',
            color: 'rgba(12,12,14,0.35)',
            textAlign: 'center',
            marginTop: 16
          }}
        >
          ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENTIALITY.
        </div>
      </div>
    </section>
  );
}
