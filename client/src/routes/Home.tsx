import HeroSection from '../components/home/HeroSection';
import ClientsStrip from '../components/home/ClientsStrip';
import WhatWeDoFlipGrid from '../components/home/WhatWeDoFlipGrid';
import SampleCarousel from '../components/home/SampleCarousel';
import StatsStrip from '../components/home/StatsStrip';
import CallToActionStrip from '../components/home/CallToActionStrip';
import SectionHeading from '../components/shared/SectionHeading';
import HowWeWorkTimeline from '../components/home/HowWeWorkTimeline';

const Home = () => {
  return (
    <div className="space-y-8">
      <HeroSection />
      <ClientsStrip />
      <SectionHeading title="What We Do" subtitle="End-to-end production for print and digital titles" />
      <WhatWeDoFlipGrid />
      <HowWeWorkTimeline />
      <SectionHeading title="Featured Samples" subtitle="Curated previews from recent engagements" />
      <SampleCarousel />
      <StatsStrip />
      <CallToActionStrip />
    </div>
  );
};

export default Home;
