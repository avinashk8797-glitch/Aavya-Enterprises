import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import testimonials from '../../data/testimonials';

const TestimonialSlider = ({ showTitle = true }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper !pb-14"
      >
        {(testimonials || []).map((t, index) => (
          <SwiperSlide key={t?.id || index}>
            <div className="premium-card h-full flex flex-col">
              {/* Quote Icon */}
              <Quote size={32} className="text-gold/20 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < (t?.rating || 0)
                        ? 'text-gold fill-gold'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t?.feedback || ''}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-poppins font-bold text-sm">
                    {getInitials(t?.name)}
                  </span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-navy text-sm">
                    {t?.name || ''}
                  </h4>
                  <p className="text-gray-500 text-xs font-inter">{t?.role || ''}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlider;
