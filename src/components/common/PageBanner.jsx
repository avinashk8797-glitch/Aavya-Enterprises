import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

const PageBanner = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="relative min-h-[340px] md:min-h-[400px] flex items-center overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy -z-10" />
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent -z-10" />

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-400 hover:text-gold transition-colors duration-200 text-sm font-inter"
          >
            <Home size={14} />
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-gray-600" />
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm font-inter"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gold text-sm font-inter font-medium">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-poppins font-bold text-3xl md:text-5xl text-white mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter text-gray-300 text-lg max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative Gold Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-gold rounded-full mt-6"
        />
      </div>
    </section>
  );
};

export default PageBanner;
