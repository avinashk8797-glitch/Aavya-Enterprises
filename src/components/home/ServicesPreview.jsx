import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import ServiceCard from '../services/ServiceCard';
import services from '../../data/services';

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-x-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl -z-10" />

      <div className="container-custom mx-auto relative z-10">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Professional Services"
          description="Comprehensive financial resolution services tailored to your specific needs and circumstances."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(services || []).map((service, index) => (
            <ServiceCard key={service?.id || index} service={service} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-navy">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
