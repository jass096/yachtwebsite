export default function Footer() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
      <video
        src="/videos/Ship_cutting_through_sea_202605121713.mp4"
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
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,10,20,0.75) 0%, rgba(5,10,20,0.82) 100%)'
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)'
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: 80
          }}
        >
          <div>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" style={{ marginBottom: 16 }}>
              <circle cx="10" cy="5" r="2.4" stroke="white" strokeWidth="1.5" />
              <line x1="10" y1="7.4" x2="10" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M5 11 Q10 14 15 11" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <line x1="7" y1="16" x2="13" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontSize: '20px',
                letterSpacing: '0.28em',
                color: 'white',
                display: 'block',
                marginBottom: 16
              }}
            >
              YORCH
            </span>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.28em',
                color: 'rgba(255,255,255,0.4)'
              }}
            >
              SINCE 1975. THE SEA IS YOURS.
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '8px',
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.7)',
                marginBottom: 20
              }}
            >
              NAVIGATION
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Journeys', 'Fleet', 'Membership', 'Academy', 'Blog'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: '8px',
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.7)',
                marginBottom: 20
              }}
            >
              SERVICES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Private Charter', 'Corporate Events', 'Race Programme', 'Concierge', 'Press & Media'].map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              fontSize: '8px',
              color: 'rgba(255,255,255,0.25)'
            }}
          >
            © 2025 YORCH PRIVATE YACHT CLUB. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
