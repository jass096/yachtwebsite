import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface StaggeredMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onFleetOpen: () => void;
}

export default function StaggeredMenu({ isOpen, onToggle, onFleetOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const prelayer1Ref = useRef<HTMLDivElement>(null);
  const prelayer2Ref = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(prelayer1Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0)
        .to(prelayer2Ref.current, { x: 0, duration: 0.6, ease: 'power4.out' }, 0.08)
        .to(panelRef.current, { x: 0, duration: 0.8, ease: 'power4.out' }, 0.15)
        .to([prelayer1Ref.current, prelayer2Ref.current], { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)
        .to(
          navItemsRef.current.filter(Boolean),
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out',
            stagger: 0.06
          },
          0.6
        )
        .to(socialsRef.current, { opacity: 1, duration: 0.4 }, 0.8);
    } else if (timelineRef.current) {
      const tl = timelineRef.current;
      tl.reverse();
    }
  }, [isOpen]);

  const handleNavClick = (index: number) => {
    if (index === 1) {
      onFleetOpen();
    }
    onToggle();
  };

  return (
    <>
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" style={{ transform: 'translateX(100%)' }} />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" style={{ transform: 'translateX(100%)' }} />

      <div ref={panelRef} className="menu-panel staggered-menu" style={{ transform: 'translateX(100%)' }}>
        <ul className="menu-nav">
          {['HOME', 'OUR FLEET', 'MEMBERSHIP', 'REGATTAS & EVENTS', 'ACADEMY', 'CONTACT'].map((item, i) => (
            <li key={item} ref={(el) => { navItemsRef.current[i] = el; }} style={{ overflow: 'hidden', marginBottom: '0.2rem' }}>
              <a
                onClick={() => handleNavClick(i)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1rem',
                  fontFamily: 'inherit',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  color: '#0c0c0e',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#1c3557'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#0c0c0e'; }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div ref={socialsRef} className="menu-socials" style={{ opacity: 0, borderTop: '1px solid rgba(12,12,14,0.08)', paddingTop: '1.5rem' }}>
          <span className="menu-socials-title" style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: '#1c3557', marginBottom: '0.75rem', display: 'block' }}>FOLLOW</span>
          <div className="menu-socials-links" style={{ display:  '1.5rem' }}>
            <a href="#" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', textDecoration: 'none', transition: 'color 0.3s' }}>INSTAGRAM</a>
            <a href="#" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', textDecoration: 'none', transition: 'color 0.3s' }}>FACEBOOK</a>
            <a href="#" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)', textDecoration: 'none', transition: 'color 0.3s' }}>TWITTER</a>
          </div>
        </div>
      </div>
    </>
  );
}
