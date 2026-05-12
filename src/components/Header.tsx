import { useEffect, useRef } from 'react';

interface HeaderProps {
  menuOpen: boolean;
  onBlogOpen: () => void;
  onFleetOpen: () => void;
  onJourneysOpen: () => void;
  onMembershipOpen: () => void;
  onAboutOpen: () => void;
}

export default function Header({
  menuOpen,
  onBlogOpen,
  onFleetOpen,
  onJourneysOpen,
  onMembershipOpen,
  onAboutOpen
}: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pillRef.current) {
        if (window.scrollY > 50) {
          pillRef.current.classList.add('scrolled');
        } else {
          pillRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'JOURNEYS', onClick: onJourneysOpen },
    { label: 'FLEET', onClick: onFleetOpen },
    { label: 'MEMBERSHIP', onClick: onMembershipOpen },
    { label: 'ABOUT US', onClick: onAboutOpen },
    { label: 'BLOG', onClick: onBlogOpen }
  ];

  return (
    <div ref={pillRef} className="navbar-pill">
      <div
        style={{
          borderRight: '1px solid rgba(12,12,14,0.08)',
          padding: '0 20px 0 14px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="5" r="2.4" stroke="#1c3557" strokeWidth="1.5" />
          <line x1="10" y1="7.4" x2="10" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M5 11 Q10 14 15 11" stroke="#1c3557" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="7" y1="16" x2="13" y2="16" stroke="#1c3557" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: '16px', letterSpacing: '0.28em', color: '#0c0c0e' }}>YORCH</span>
      </div>

      {navLinks.map((link) => (
        <a
          key={link.label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            link.onClick();
          }}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(12,12,14,0.55)',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#0c0c0e'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(12,12,14,0.55)'; }}
        >
          {link.label}
        </a>
      ))}

      <button
        style={{
          flexShrink: 0,
          background: '#1c3557',
          borderRadius: '100px',
          padding: '9px 22px',
          fontSize: '10px',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          letterSpacing: '0.18em',
          transform: menuOpen ? 'translateX(calc(-1 * clamp(280px, 40vw, 440px)))' : 'none',
          transition: 'background 0.3s ease, transform 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#253f63'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = '#1c3557'; }}
      >
        JOIN THE CLUB
      </button>
    </div>
  );
}
