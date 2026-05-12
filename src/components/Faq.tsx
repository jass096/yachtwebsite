import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'HOW DOES MEMBERSHIP WORK?',
      answer: 'YORCH offers three membership tiers: Signature, Commodore, and Founders\' Circle. Each tier provides increasing levels of access to our fleet, concierge services, and exclusive events. Memberships are annual and renewable.'
    },
    {
      question: 'WHAT VESSELS ARE IN THE FLEET?',
      answer: 'Our fleet consists of three exceptional vessels: Ocean Eclipse (28m refined cruiser), Black Sovereign (32m performance yacht), and Azure Horizon (25m long-range explorer). Each vessel is maintained to the highest standards.'
    },
    {
      question: 'CAN I CHARTER FOR CORPORATE EVENTS?',
      answer: 'Yes, we specialize in corporate charters and events. From board meetings to client entertainment, our team can curate bespoke experiences that align with your business objectives and brand.'
    },
    {
      question: 'IS YORCH AVAILABLE INTERNATIONALLY?',
      answer: 'Our vessels operate across the Mediterranean, Caribbean, and Pacific regions. We can arrange voyages to virtually any destination worldwide with advance notice and proper planning.'
    },
    {
      question: 'HOW DO I JOIN THE RACING PROGRAMME?',
      answer: 'The racing programme is available to Commodore tier members and above. It includes participation in regattas, professional coaching, and access to competitive racing events throughout the season.'
    },
    {
      question: 'WHAT DOES THE CONCIERGE SERVICE COVER?',
      answer: 'Our 24/7 concierge service handles everything from provisioning and berthing to customs clearance and special requests. No detail is too small for our dedicated team.'
    }
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        maxWidth: 800,
        margin: '0 auto',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ width: '40px', height: '1px', background: '#1c3557' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: '#1c3557' }}>
            FAQ
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
          WHAT YOU NEED TO KNOW.
        </h2>
      </div>

      {faqs.map((faq, i) => (
        <div key={i}>
          <div
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: '24px 0',
              borderBottom: '1px solid rgba(12,12,14,0.08)'
            }}
          >
            <span
              style={{
                fontSize: '12px',
                letterSpacing: '0.12em',
                color: openIndex === i ? '#0c0c0e' : 'rgba(12,12,14,0.6)'
              }}
            >
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: '18px', color: 'rgba(12,12,14,0.4)' }}
            >
              ↓
            </motion.span>
          </div>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontSize: '10px',
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                  padding: '0 0 24px'
                }}
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
