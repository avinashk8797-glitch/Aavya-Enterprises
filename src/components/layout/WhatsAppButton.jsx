import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918271313331"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-800 text-xs font-inter font-medium rounded-lg shadow-premium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
