import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTitle = ({
  subtitle,
  title,
  description,
  center = true,
  light = false,
  className = '',
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-inter font-semibold tracking-[0.15em] uppercase rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-poppins font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <div className={`${center ? 'gold-line-center' : 'gold-line'} mb-5`} />
      {description && (
        <p
          className={`font-inter text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
