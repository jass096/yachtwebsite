import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import RippleTrail from './components/RippleTrail';
import MenuToggle from './components/MenuToggle';
import StaggeredMenu from './components/StaggeredMenu';
import FleetOverlay from './components/FleetOverlay';
import BrandManifesto from './components/BrandManifesto';
import Experiences from './components/Experiences';
import YachtSpecs from './components/YachtSpecs';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import Academy from './components/Academy';
import ConciergeForm from './components/ConciergeForm';
import Faq from './components/Faq';
import PressStrip from './components/PressStrip';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Blog from './components/Blog';
import JourneysPage from './components/JourneysPage';
import MembershipPage from './components/MembershipPage';
import AboutPage from './components/AboutPage';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [journeysOpen, setJourneysOpen] = useState(false);
  const [membershipPageOpen, setMembershipPageOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onBlogOpen={() => setBlogOpen(true)}
        onFleetOpen={() => setFleetOpen(true)}
        onJourneysOpen={() => setJourneysOpen(true)}
        onMembershipOpen={() => setMembershipPageOpen(true)}
        onAboutOpen={() => setAboutOpen(true)}
      />
      <Hero fleetOpen={fleetOpen} menuOpen={menuOpen} />
      <RippleTrail />
      <MenuToggle isOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
      <StaggeredMenu isOpen={menuOpen} onToggle={() => setMenuOpen(false)} onFleetOpen={() => setFleetOpen(true)} />
      <FleetOverlay isOpen={fleetOpen} onClose={() => setFleetOpen(false)} />
      
      <div style={{ position: 'relative', zIndex: 25 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          <BrandManifesto />
          <Experiences />
          <YachtSpecs />
          <Testimonials />
          <Membership />
          <Academy />
          <ConciergeForm />
          <Faq />
          <PressStrip />
          <Footer />
        </div>
      </div>
      
      <CookieConsent />
      
      <AnimatePresence mode="wait">
        {blogOpen && <Blog isOpen={blogOpen} onClose={() => setBlogOpen(false)} />}
        {journeysOpen && <JourneysPage isOpen={journeysOpen} onClose={() => setJourneysOpen(false)} />}
        {membershipPageOpen && <MembershipPage isOpen={membershipPageOpen} onClose={() => setMembershipPageOpen(false)} />}
        {aboutOpen && <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
