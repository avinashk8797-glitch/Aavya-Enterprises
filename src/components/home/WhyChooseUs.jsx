import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Clock,
  Users,
  Eye,
  ShieldCheck,
  Scale,
  HeadphonesIcon,
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const reasons = [
  {
    icon: Clock,
    title: '10+ Years Experience',
    desc: 'Over a decade of professional expertise in financial services and debt resolution.',
  },
  {
    icon: Users,
    title: 'Professional Guidance',
    desc: 'Expert team providing personalized financial solutions for every client.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    desc: 'Clear communication and transparent processes from start to finish.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidential Handling',
    desc: 'Complete privacy and confidentiality of all client financial information.',
  },
  {
    icon: Scale,
    title: 'Ethical Practices',
    desc: 'Committed to ethical standards and fair practices in all our dealings.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'Personalized support and regular updates throughout the resolution process.',
  },
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-white relative overflow-x-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-navy/3 blur-3xl -z-10" />

      <div className="container-custom mx-auto relative z-10">
        <SectionTitle
          subtitle="Why Us"
          title="Why Choose Aavya Enterprises"
          description="We bring trust, expertise, and dedication to every client interaction."
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(reasons || []).map((reason, index) => {
            const Icon = reason?.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-navy flex items-center justify-center group-hover:bg-gradient-gold transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold">
                  {(() => {
                    if (!Icon) return null;
                    const props = { size: 28, className: "text-gold group-hover:text-navy transition-colors duration-500" };
                    if (typeof Icon === 'function') return <Icon {...props} />;
                    if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                    return null;
                  })()}
                </div>
                <h3 className="font-poppins font-semibold text-navy text-lg mb-3">
                  {reason?.title}
                </h3>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  {reason?.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
