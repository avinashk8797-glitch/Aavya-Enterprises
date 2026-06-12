import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const StatsCard = ({ icon: Icon, value, suffix = '', label, description, index = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const CountUpComponent = CountUp.default || CountUp.CountUp || CountUp;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 md:p-8 text-center group hover:shadow-gold hover:border-gold/20 transition-all duration-500"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
        {(() => {
          if (!Icon) return null;
          const props = { size: 26, className: "text-gold" };
          if (typeof Icon === 'function') {
            return <Icon {...props} />;
          }
          if (typeof Icon === 'object' && typeof Icon.render === 'function') {
            return Icon.render(props, null);
          }
          return null;
        })()}
      </div>
      <div className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-2">
        {inView ? (
          <CountUpComponent end={value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        <span className="text-gold">{suffix}</span>
      </div>
      <h3 className="font-poppins font-semibold text-navy text-sm mb-1">{label}</h3>
      {description && (
        <p className="text-gray-500 text-xs font-inter">{description}</p>
      )}
    </motion.div>
  );
};

export default StatsCard;
