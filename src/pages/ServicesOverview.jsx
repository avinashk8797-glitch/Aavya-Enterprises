import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import ServiceCard from '../components/services/ServiceCard';
import CTASection from '../components/cta/CTASection';
import services from '../data/services';

const ServicesOverview = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Aavya Enterprises | Loan Settlement & Financial Services</title>
        <meta name="description" content="Explore our comprehensive range of financial services including loan settlement, EMI recovery, health insurance consulting, and more." />
      </Helmet>

      <PageBanner
        title="Our Services"
        subtitle="Comprehensive financial resolution services tailored to your specific needs."
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="What We Offer"
            title="Professional Financial Services"
            description="From loan settlements to insurance consulting, we provide end-to-end financial support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesOverview;
