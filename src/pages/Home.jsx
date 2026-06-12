import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import FounderSection from '../components/home/FounderSection';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialSlider from '../components/testimonials/TestimonialSlider';
import FAQAccordion from '../components/faq/FAQAccordion';
import BlogCard from '../components/blog/BlogCard';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import CTASection from '../components/cta/CTASection';
import SectionTitle from '../components/common/SectionTitle';
import ErrorBoundary from '../components/common/ErrorBoundary';
import faqs from '../data/faqs';
import blogs from '../data/blogs';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aavya Enterprises - Professional Loan Settlement & Financial Services</title>
        <meta
          name="description"
          content="Aavya Enterprises provides professional loan settlement, EMI recovery, financial support, and insurance consulting services. 10+ years experience. Free consultation."
        />
      </Helmet>

      {/* 1. Hero Section */}
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      {/* 2. Trust / Stats Section */}
      <ErrorBoundary>
        <TrustSection />
      </ErrorBoundary>

      {/* 3. Founder Section */}
      <ErrorBoundary>
        <FounderSection />
      </ErrorBoundary>

      {/* 4. Services Preview */}
      <ErrorBoundary>
        <ServicesPreview />
      </ErrorBoundary>

      {/* 5. Why Choose Us */}
      <ErrorBoundary>
        <WhyChooseUs />
      </ErrorBoundary>

      {/* 6. Process Section */}
      <ErrorBoundary>
        <ProcessSection />
      </ErrorBoundary>

      {/* 7. Testimonials */}
      <ErrorBoundary>
        <section className="relative section-padding bg-gray-50 overflow-x-hidden">
          <div className="container-custom mx-auto relative z-10">
            <SectionTitle
              subtitle="Testimonials"
              title="What Our Clients Say"
              description="Trusted by individuals and businesses across India for professional financial resolution services."
            />
            <TestimonialSlider />
          </div>
        </section>
      </ErrorBoundary>

      {/* 8. FAQ Section */}
      <ErrorBoundary>
        <section className="relative section-padding bg-white overflow-x-hidden">
          <div className="container-custom mx-auto relative z-10">
            <SectionTitle
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our services and processes."
            />
            <div className="max-w-3xl mx-auto">
              <FAQAccordion faqs={faqs?.slice(0, 8) || []} />
            </div>
          </div>
        </section>
      </ErrorBoundary>

      {/* CTA */}
      <ErrorBoundary>
        <CTASection />
      </ErrorBoundary>

      {/* 9. Blog Preview */}
      <ErrorBoundary>
        <section className="relative section-padding bg-gray-50 overflow-x-hidden">
          <div className="container-custom mx-auto relative z-10">
            <SectionTitle
              subtitle="Latest Insights"
              title="From Our Blog"
              description="Stay informed with our latest articles on financial management and debt resolution."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(blogs?.slice(0, 3) || []).map((blog, index) => (
                <BlogCard key={blog?.id || index} blog={blog} index={index} />
              ))}
            </div>
          </div>
        </section>
      </ErrorBoundary>

      {/* 10. Contact Section */}
      <ErrorBoundary>
        <section className="relative section-padding bg-white overflow-x-hidden">
          <div className="container-custom mx-auto relative z-10">
            <SectionTitle
              subtitle="Get in Touch"
              title="Contact Us Today"
              description="Reach out for a free, confidential consultation. We're here to help."
            />
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <div>
                <GoogleMap />
              </div>
            </div>
          </div>
        </section>
      </ErrorBoundary>
    </>
  );
};

export default Home;
