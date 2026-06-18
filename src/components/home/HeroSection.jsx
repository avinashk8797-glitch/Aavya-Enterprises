import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, Shield, Award } from 'lucide-react';
import heroBg from '../../assets/hero-building1.png';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/70"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>

      <div className=" container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-start min-h-screen">
          {/* Content */}
          <div className="max-w-5xl pt-28 pb-16">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            >
              <Shield size={16} className="text-gold" />
              <span className="text-white/80 text-xs font-inter font-medium tracking-wide">
                Trusted by 1000+ Clients Across India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.15] mb-6"
            >
              Professional{' '}
              <span className="text-gradient-gold">Loan Settlement</span>,
              Recovery &{' '}
              <span className="text-gradient-gold">Financial Resolution</span>{' '}
              Services
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-inter text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              Helping Individuals and Businesses Navigate Financial Challenges
              Through Structured Settlement, Recovery, and Financial Support
              Services.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+918271313331" className="btn-secondary text-base px-8 py-4">
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/918271313331"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-poppins font-semibold rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 text-base"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <Award size={18} className="text-gold" />
                <span className="text-white/70 text-sm font-inter">
                  10+ Years Experience
                </span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-gold" />
                <span className="text-white/70 text-sm font-inter">
                  100% Confidential
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
