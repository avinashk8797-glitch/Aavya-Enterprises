import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CallButton = () => {
  return (
    <motion.a
      href="tel:+918271313331"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg hover:bg-gold-300 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
      aria-label="Call us"
    >
      <Phone size={22} className="text-navy" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20" />
      {/* Tooltip */}
      <span className="absolute left-full ml-3 px-3 py-1.5 bg-white text-gray-800 text-xs font-inter font-medium rounded-lg shadow-premium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
        Call Now
      </span>
    </motion.a>
  );
};

export default CallButton;
