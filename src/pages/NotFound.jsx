import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  const popularPages = [
    { label: 'Home', path: '/' },
    { label: 'Our Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'About Us', path: '/about' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Aavya Enterprises</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Aavya Enterprises homepage." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gradient-navy relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
        </div>

        <div className="container-custom mx-auto px-4 relative z-10 text-center py-20">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="mb-8"
          >
            <h1 className="font-poppins font-black text-[120px] md:text-[180px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-gold/40 to-gold/10">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-4">
              Page Not Found
            </h2>
            <p className="font-inter text-gray-300 text-lg mb-10 max-w-md mx-auto">
              The page you are looking for might have been removed, renamed, or is temporarily unavailable.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="/" className="btn-primary">
              <Home size={18} />
              Back to Home
            </Link>
            <button onClick={() => window.history.back()} className="btn-secondary">
              <ArrowLeft size={18} />
              Go Back
            </button>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 text-sm font-inter mb-4">
              Or try one of these popular pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.label}
                  to={page.path}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-gold hover:border-gold/30 transition-all duration-200 text-sm font-inter"
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
