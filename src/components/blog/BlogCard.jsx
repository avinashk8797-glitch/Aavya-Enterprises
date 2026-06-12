import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, User } from 'lucide-react';

const BlogCard = ({ blog, index = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return '';
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    } catch {
      return '';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${blog?.slug || ''}`} className="block group">
        <div className="premium-card overflow-hidden p-0 h-full flex flex-col">
          {/* Image Placeholder */}
          <div className="h-48 bg-gradient-navy relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-20 h-20 rounded-full border-2 border-gold/40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-gold/90 text-navy text-xs font-inter font-semibold rounded-full">
                {blog?.category || ''}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-3 text-gray-400 text-xs font-inter">
              <span className="flex items-center gap-1">
                <User size={12} />
                {blog?.author || ''}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {blog?.readTime || ''}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-poppins font-semibold text-navy text-lg mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
              {blog?.title || ''}
            </h3>

            {/* Excerpt */}
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
              {blog?.excerpt || ''}
            </p>

            {/* Date & Read More */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-gray-400 text-xs font-inter">
                {formatDate(blog?.date)}
              </span>
              <span className="flex items-center gap-1 text-navy group-hover:text-gold transition-colors duration-300 font-inter font-semibold text-sm">
                Read More
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
