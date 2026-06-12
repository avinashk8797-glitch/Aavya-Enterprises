import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import CTASection from '../components/cta/CTASection';

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials - Aavya Enterprises</title>
        <meta name="description" content="Read what our clients say about Aavya Enterprises' loan settlement, EMI recovery, and financial consulting services." />
      </Helmet>

      <PageBanner
        title="Client Testimonials"
        subtitle="Real stories from real clients who trusted us with their financial challenges."
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="Client Voices"
            title="What Our Clients Say"
            description="Hear from individuals and businesses who have experienced our professional financial resolution services."
          />
          <TestimonialSlider />
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Testimonials;
