import { useEffect, useRef } from 'react';

export default function RippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ripplesRef = useRef<HTMLDivElement[]>([]);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const activeRipplesRef = useRef<{ element: HTMLDivElement; age: number }[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ripplePoolSize = 80;
    const ripples: HTMLDivElement[] = [];

    for (let i = 0; i < ripplePoolSize; i++) {
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        backdrop-filter: url(#liquid-trail) blur(1px);
        box-shadow: inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(147,197,253,0.15);
      `;
      container.appendChild(ripple);
      ripples.push(ripple);
    }

    ripplesRef.current = ripples;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (lastPointRef.current) {
        const dx = x - lastPointRef.current.x;
        const dy = y - lastPointRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 25) {
          const inactiveRipple = ripplesRef.current.find(
            (r) => !activeRipplesRef.current.some((ar) => ar.element === r)
          );

          if (inactiveRipple) {
            inactiveRipple.style.left = `${x}px`;
            inactiveRipple.style.top = `${y}px`;
            inactiveRipple.style.transform = 'translate(-50%, -50%)';
            inactiveRipple.style.opacity = '1';
            activeRipplesRef.current.push({ element: inactiveRipple, age: 0 });
          }

          lastPointRef.current = { x, y };
        }
      } else {
        lastPointRef.current = { x, y };
      }
    };

    let animationFrameId: number;

    const animate = () => {
      const ageIncrement = 0.012;

      activeRipplesRef.current = activeRipplesRef.current.filter((ripple) => {
        ripple.age += ageIncrement;

        if (ripple.age >= 1) {
          ripple.element.style.opacity = '0';
          return false;
        }

        const size = 20 + ripple.age * (300 - 20);
        const opacity = 1 - Math.pow(ripple.age, 1.2);

        ripple.element.style.width = `${size}px`;
        ripple.element.style.height = `${size}px`;
        ripple.element.style.opacity = `${opacity}`;

        return true;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      ripples.forEach((r) => r.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 30,
        pointerEvents: 'none'
      }}
    >
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="liquid-trail">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
