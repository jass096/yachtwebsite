import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuToggle({ isOpen, onToggle }: MenuToggleProps) {
  const menuLabelRef = useRef<HTMLDivElement>(null);
  const closeLabelRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (menuLabelRef.current && closeLabelRef.current) {
      if (isOpen) {
        gsap.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' });
        gsap.to(closeLabelRef.current, { y: 0, duration: 0.4, ease: 'power3.inOut' });
      } else {
        gsap.to(menuLabelRef.current, { y: 0, duration: 0.4, ease: 'power3.inOut' });
        gsap.to(closeLabelRef.current, { y: '100%', duration: 0.4, ease: 'power3.inOut' });
      }
    }
  }, [isOpen]);

  return (
    <button
      onClick={onToggle}
      className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
      style={{
        position: 'fixed',
        top: '18px',
        right: '20px',
        zIndex: 41,
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '0 20px',
        height: '52px',
        borderRadius: '100px',
        background: 'rgba(248,246,242,0.82)',
        backdropFilter: 'blur(48px) saturate(210%)',
        WebkitBackdropFilter: 'blur(48px) saturate(210%)',
        border: '1px solid rgba(255,255,255,0.95)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.09), 0 2px 0 rgba(255,255,255,0.75) inset',
        color: '#0c0c0e',
        fontFamily: 'inherit',
        fontSize: '0.68rem',
        letterSpacing: '0.22em',
        cursor: 'pointer',
        textTransform: 'uppercase',
        transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1), background 0.3s ease'
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(248,246,242,0.97)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(248,246,242,0.82)'; }}
    >
      <div className="menu-toggle-label" style={{ position: 'relative', overflow: 'hidden', height: '1em', width: '3.2em' }}>
        <span ref={menuLabelRef} style={{ display: 'block', position: 'absolute', left: 0, width: '100%', textAlign: 'center' }}>MENU</span>
        <span ref={closeLabelRef} style={{ display: 'block', position: 'absolute', left: 0, width: '100%', textAlign: 'center', transform: 'translateY(100%)' }}>CLOSE</span>
      </div>
      <span className="menu-toggle-icon" ref={iconRef} style={{ display: 'inline-block', fontSize: '1.2rem', lineHeight: 1, transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' }}>+</span>
    </button>
  );
}
