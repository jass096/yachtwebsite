import { AnimatePresence, motion } from 'motion/react';

interface JourneysPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
  const destinations = [
    {
      region: 'MEDITERRANEAN',
      title: 'ITALIAN RIVIERA',
      subtitle: 'Monaco to Portofino via the Ligurian coastline',
      duration: '10 days',
      season: 'Summer',
      description: 'Monaco to Portofino via the Ligurian coastline, stopping at hidden coves and exclusive ports along the way.'
    },
    {
      region: 'CARIBBEAN',
      title: 'LESSER ANTILLES',
      subtitle: 'From Antigua through the Grenadines',
      duration: '14 days',
      season: 'Winter',
      description: 'From Antigua through the Grenadines, exploring pristine beaches and secluded anchorages.'
    },
    {
      region: 'PACIFIC',
      title: 'FRENCH POLYNESIA',
      subtitle: 'Tahiti, Moorea, Bora Bora and beyond',
      duration: '21 days',
      season: 'Year-round',
      description: 'Tahiti, Moorea, Bora Bora and beyond—crystal waters and volcanic landscapes await.'
    },
    {
      region: 'ATLANTIC',
      title: 'ARC TRANSATLANTIC',
      subtitle: 'The grand ocean passage from Las Palmas to Barbados',
      duration: '18 days',
      season: 'November',
      description: 'The grand ocean passage from Las Palmas to Barbados—a true test of seamanship.'
    },
    {
      region: 'ADRIATIC',
      title: 'DALMATIAN ISLANDS',
      subtitle: "Croatia's hidden islands and Montenegro's Bay of Kotor",
      duration: '7 days',
      season: 'Spring',
      description: "Croatia's hidden islands and Montenegro's Bay of Kotor—medieval towns and crystal waters."
    },
    {
      region: 'SCANDINAVIA',
      title: 'NORWEGIAN FJORDS',
      subtitle: 'Geirangerfjord, Nærøyfjord, and the Arctic Circle',
      duration: '12 days',
      season: 'Summer',
      description: 'Geirangerfjord, Nærøyfjord, and the Arctic Circle—dramatic landscapes under the midnight sun.'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
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
                JOURNEYS
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

          <div style={{ padding: 'clamp(48px,6vw,80px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(36px,5vw,72px)',
                  color: '#0c0c0e',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                  marginBottom: 32
                }}
              >
                THE WORLD'S FINEST WATERS.<br />
                YOUR ITINERARY.
              </h2>
              <p
                style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.7)',
                  marginBottom: 32
                }}
              >
                From the Mediterranean to the Pacific, our curated voyages span the globe's most extraordinary waters. Each journey is tailored to your preferences, with expert crew and impeccable service.
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
                REQUEST A CUSTOM VOYAGE
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))',
              gap: 2,
              padding: 'clamp(32px,4vw,48px)'
            }}
          >
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card"
                style={{ overflow: 'hidden' }}
              >
                <div
                  style={{
                    height: 200,
                    background: 'linear-gradient(135deg, #1c2d45 0%, #2a4a73 100%)',
                    position: 'relative',
                    padding: 20
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      fontSize: '8px',
                      letterSpacing: '0.35em',
                      color: 'rgba(147,197,253,0.85)'
                    }}
                  >
                    {dest.region}
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 16, right: 16 }}>
                    <h3
                      style={{
                        fontSize: 'clamp(20px,3vw,32px)',
                        color: 'white',
                        fontWeight: 400,
                        marginBottom: 4
                      }}
                    >
                      {dest.title}
                    </h3>
                    <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}>
                      {dest.subtitle}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ display: 'flex', gap: 32, marginBottom: 16 }}>
                    <div>
                      <div
                        style={{
                          fontSize: '8px',
                          letterSpacing: '0.3em',
                          color: 'rgba(12,12,14,0.4)',
                          marginBottom: 2
                        }}
                      >
                        DURATION
                      </div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#0c0c0e' }}>
                        {dest.duration}
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '8px',
                          letterSpacing: '0.3em',
                          color: 'rgba(12,12,14,0.4)',
                          marginBottom: 2
                        }}
                      >
                        SEASON
                      </div>
                      <div style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#0c0c0e' }}>
                        {dest.season}
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: '11px',
                      lineHeight: 1.9,
                      letterSpacing: '0.15em',
                      color: 'rgba(12,12,14,0.7)',
                      marginBottom: 24,
                      textTransform: 'lowercase'
                    }}
                  >
                    {dest.description}
                  </p>
                  <button
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.2em',
                      color: '#1c3557',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      paddingBottom: 2,
                      borderBottom: '1px solid transparent',
                      transition: 'border-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = '#1c3557'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'transparent'; }}
                  >
                    REQUEST ITINERARY
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
