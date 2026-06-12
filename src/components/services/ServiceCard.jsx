import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="block group"
      >
        <div className="premium-card-gold h-full flex flex-col">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-all duration-300">
            {(() => {
              if (!Icon) return null;
              const props = { size: 28, className: "text-navy group-hover:text-gold transition-colors duration-300" };
              if (typeof Icon === 'function') return <Icon {...props} />;
              if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
              return null;
            })()}
          </div>

          {/* Title */}
          <h3 className="font-poppins font-semibold text-navy text-xl mb-3 group-hover:text-gold transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {service.shortDesc}
          </p>

          {/* Learn More */}
          <div className="flex items-center gap-2 text-navy group-hover:text-gold transition-colors duration-300 font-inter font-semibold text-sm">
            Learn More
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
