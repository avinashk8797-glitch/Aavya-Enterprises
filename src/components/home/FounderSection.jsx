import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import founderImg from '../../assets/images/founder.jpg';

const FounderSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-x-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -z-10" />

      <div className="container-custom mx-auto relative z-10">
        <SectionTitle
          subtitle="Leadership"
          title="Meet Our Founder"
          description="A visionary leader with over a decade of experience in financial services."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-premium-lg">
              <img
                src={founderImg || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600'}
                alt="Shankar Dubey - Founder of Aavya Enterprises"
                className="w-full h-[500px] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-poppins font-bold text-white text-2xl">Shankar Dubey</h3>
                <p className="text-gold font-inter text-sm">Founder & Lead Consultant</p>
              </div>
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Quote */}
            <div className="relative mb-8">
              <Quote size={40} className="text-gold/20 absolute -top-2 -left-2" />
              <p className="font-inter text-gray-700 text-lg leading-relaxed italic pl-8 border-l-4 border-gold">
                &ldquo;Every financial challenge has a solution. Our commitment is to guide you through
                difficult times with professionalism, empathy, and unwavering dedication to your
                financial well-being.&rdquo;
              </p>
            </div>

            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              <strong className="text-navy">Shankar Dubey</strong> is the Founder of Aavya
              Enterprises and brings over <strong className="text-navy">10 years of experience</strong>{' '}
              in financial services, loan settlements, EMI recovery, and debt resolution
              support.
            </p>

            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              His deep understanding of the financial landscape, combined with a genuine
              commitment to helping clients navigate challenging situations, has made Aavya
              Enterprises a trusted name in financial consulting and resolution services.
            </p>

            <p className="font-inter text-gray-600 leading-relaxed mb-8">
              Under his leadership, Aavya Enterprises has successfully assisted over
              1,000 clients in resolving their financial challenges with professionalism
              and confidentiality.
            </p>

            <Link to="/founder-message" className="btn-primary">
              Read Full Message
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
