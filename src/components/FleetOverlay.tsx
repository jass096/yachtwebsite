import { AnimatePresence, motion } from 'motion/react';
import FleetVideo from './FleetVideo';

interface FleetOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FleetOverlay({ isOpen, onClose }: FleetOverlayProps) {
  const fleetItems = [
    {
      videoSrc: '/videos/White_superyacht_cruising_blue_w…_202605121714.mp4',
      name: 'OCEAN ECLIPSE',
      specs: [
        { label: 'LENGTH', value: '162FT' },
        { label: 'CRUISING SPEED', value: '14 KNOTS' },
        { label: 'GUESTS', value: 'UP TO 12' },
        { label: 'CABINS', value: '7 STATEROOMS' }
      ],
      delay: 0
    },
    {
      videoSrc: '/videos/black-sovereign.mp4',
      name: 'BLACK SOVEREIGN',
      specs: [
        { label: 'LENGTH', value: '138FT' },
        { label: 'TOP SPEED', value: '19 KNOTS' },
        { label: 'HULL', value: 'STEEL & ALUMINIUM' },
        { label: 'ENGINES', value: '2×MTU 12V 4000' }
      ],
      delay: 0.12
    },
    {
      videoSrc: '/videos/azure-horizon.mp4',
      name: 'AZURE HORIZON',
      specs: [
        { label: 'LENGTH', value: '120FT' },
        { label: 'RANGE', value: '4100NM' },
        { label: 'GUESTS', value: '8+12 CREW' },
        { label: 'DECK', value: 'SUN DECK WITH JACUZZI' }
      ],
      delay: 0.24
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          {fleetItems.map((item) => (
            <FleetVideo
              key={item.name}
              videoSrc={item.videoSrc}
              name={item.name}
              specs={item.specs}
              delay={item.delay}
              isOpen={isOpen}
            />
          ))}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 32,
              right: 32,
              zIndex: 120,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '100px',
              padding: '12px 28px',
              color: 'white',
              background: 'transparent',
              fontSize: '10px',
              letterSpacing: '0.22em',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            CLOSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
