import React from 'react';
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import PainPointsSection from './sections/PainPointsSection';
import ConsequencesSection from './sections/ConsequencesSection';
import SolutionSection from './sections/SolutionSection';
import HowItWorksSection from './sections/HowItWorksSection';
import BenefitsSection from './sections/BenefitsSection';
import SocialProofSection from './sections/SocialProofSection';
import PhilosophySection from './sections/PhilosophySection';
import TargetUsersSection from './sections/TargetUsersSection';
import CTASection from './sections/CTASection';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import BackToTopBadge from './sections/BackToTopBadge';

const LandingPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PainPointsSection />
      <ConsequencesSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <SocialProofSection />
      <PhilosophySection />
      <TargetUsersSection />
      <CTASection />
      <Footer />
      <BackToTopBadge />
    </main>
  );
};

export default LandingPage;
