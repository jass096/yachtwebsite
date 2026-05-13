import { motion } from 'motion/react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) 0'
      }}
    >
      <div style={{ padding: '0 clamp(24px,6vw,96px)', marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: '40px', height: '1px', background: '#1c3557' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#1c3557' }}>
            MEMBER VOICES
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
          THOSE WHO KNOW.
        </h2>
      </div>

      <div
        className="testimonial-rail scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 20,
          padding: '0 clamp(24px,6vw,96px)'
        }}
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="card"
            style={{
              flexShrink: 0,
              width: 'clamp(280px,30vw,380px)',
              padding: 36
            }}
          >
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '12px',
                lineHeight: 1.9,
                color: 'rgba(12,12,14,0.7)',
                marginBottom: 28
              }}
            >
              {testimonial.quote}
            </p>
            <div
              style={{
                width: '24px',
                height: '1px',
                background: '#1c3557',
                marginBottom: 20
              }}
            />
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: '#0c0c0e',
                marginBottom: 4
              }}
            >
              {testimonial.name}
            </div>
            <div
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.4)'
              }}
            >
              {testimonial.role} · {testimonial.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
