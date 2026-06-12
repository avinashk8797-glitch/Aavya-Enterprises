import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const CTASection = ({
  title = 'Ready to Resolve Your Financial Challenges?',
  subtitle = 'Get a free, confidential consultation with our expert team. Let us help you find the best path forward.',
  showButtons = true,
  variant = 'default',
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`relative overflow-x-hidden ${
        variant === 'light' ? 'bg-gray-50' : ''
      }`}
    >
      {variant !== 'light' && (
        <>
          <div className="absolute inset-0 bg-gradient-navy -z-10" />
          <div className="absolute inset-0 opacity-20 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
          </div>
        </>
      )}

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight ${
              variant === 'light' ? 'text-navy' : 'text-white'
            }`}
          >
            {title}
          </h2>
          <p
            className={`font-inter text-lg mb-10 leading-relaxed ${
              variant === 'light' ? 'text-gray-600' : 'text-gray-300'
            }`}
          >
            {subtitle}
          </p>

          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>
              <a href="tel:+918271313331" className={variant === 'light' ? 'btn-navy' : 'btn-secondary'}>
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="https://wa.me/918271313331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 text-white font-poppins font-semibold rounded-lg transition-all duration-300 ease-out hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
