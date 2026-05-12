import { motion } from 'motion/react';

export default function Academy() {
  const modules = [
    { number: '01', title: 'OCEAN NAVIGATION', progress: 75 },
    { number: '02', title: 'METEOROLOGY', progress: 60 },
    { number: '03', title: 'SEAMANSHIP', progress: 85 },
    { number: '04', title: 'RACE TACTICS', progress: 50 },
    { number: '05', title: 'ENGINEERING SYSTEMS', progress: 40 },
    { number: '06', title: 'LEADERSHIP AT SEA', progress: 70 }
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/Yacht_on_steel-blue_water_202605121728.mp4"
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
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
        }}
      >
        <div style={{ marginBottom: 60 }}>
          <div
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              color: 'rgba(147,197,253,0.85)',
              marginBottom: 16
            }}
          >
            YORCH ACADEMY
          </div>
          <h2
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.9,
              color: 'white',
              maxWidth: 600
            }}
          >
            MASTER THE<br />
            SEA.<br />
            <em>
              MASTER<br />
              YOURSELF.
            </em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 16,
            marginTop: 48
          }}
        >
          {modules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-mid"
              style={{ padding: '28px 28px 24px', borderRadius: '4px' }}
            >
              <div
                style={{
                  fontSize: '64px',
                  color: 'rgba(255,255,255,0.08)',
                  lineHeight: 1,
                  marginBottom: -8
                }}
              >
                {module.number}
              </div>
              <div
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'rgba(147,197,253,0.6)',
                  marginBottom: 10
                }}
              >
                MODULE
              </div>
              <div
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  color: 'white',
                  marginBottom: 8
                }}
              >
                {module.title}
              </div>
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    height: '2px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '1px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${module.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1 }}
                    style={{
                      height: '100%',
                      background: '#1c3557'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
