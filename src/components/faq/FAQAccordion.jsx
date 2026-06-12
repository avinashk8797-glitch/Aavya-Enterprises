import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ faqs, defaultOpen = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultOpen);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {(faqs || []).map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <motion.div
            key={faq?.id || index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? 'border-gold/30 shadow-gold bg-white'
                : 'border-gray-200 bg-white hover:border-gold/20'
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span
                className={`font-poppins font-medium text-[15px] pr-4 transition-colors duration-300 ${
                  isOpen ? 'text-gold' : 'text-navy group-hover:text-navy-400'
                }`}
              >
                {faq?.question || ''}
              </span>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? 'bg-gold text-navy rotate-180'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-gold/10'
                }`}
              >
                <ChevronDown size={18} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <div className="w-12 h-0.5 bg-gold/30 rounded-full mb-3" />
                    <p className="font-inter text-gray-600 text-sm leading-relaxed">
                      {faq?.answer || ''}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
