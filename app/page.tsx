import HeroSection from '@/components/sections/HeroSection';
import DualPillarsSection from '@/components/sections/DualPillarsSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import FeaturedTreatmentsSection from '@/components/sections/FeaturedTreatmentsSection';
import DoctorsSection from '@/components/sections/DoctorsSection';
import GalleryTeaserSection from '@/components/sections/GalleryTeaserSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import BookingCTASection from '@/components/sections/BookingCTASection';

export default function HomePage() {
  return (
    <>
      {/* Section 1.2 — Hero */}
      <HeroSection />

      {/* Section 1.3 — Dual Service Pillars */}
      <DualPillarsSection />

      {/* Section 1.4 — Why Choose Smilefix */}
      <WhyChooseSection />

      {/* Section 1.5 — Featured Treatments Showcase */}
      <FeaturedTreatmentsSection />

      {/* Section 1.6 — Meet the Doctors */}
      <DoctorsSection />

      {/* Section 1.7 — Before / After Gallery Teaser */}
      <GalleryTeaserSection />

      {/* Section 1.8 — Patient Testimonials */}
      <TestimonialsSection />

      {/* Section 1.9 — FAQ Accordion */}
      <FAQSection />

      {/* Section 1.10 — Booking / Contact CTA Strip */}
      <BookingCTASection />
    </>
  );
}
