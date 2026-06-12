import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Award, Users, Shield } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import StatsCard from '../components/common/StatsCard';
import CTASection from '../components/cta/CTASection';
import stats from '../data/stats';
import aboutTeam from '../assets/images/about-team.png';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We maintain the highest ethical standards in all our interactions and transactions.' },
  { icon: Users, title: 'Client First', desc: 'Your interests and well-being are at the center of everything we do.' },
  { icon: Eye, title: 'Transparency', desc: 'Clear, honest communication throughout the entire process.' },
  { icon: Heart, title: 'Empathy', desc: 'We understand the emotional weight of financial difficulties.' },
  { icon: Award, title: 'Excellence', desc: 'We strive for the best possible outcomes in every case.' },
  { icon: Target, title: 'Commitment', desc: 'Dedicated to seeing each case through to successful resolution.' },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>About Us - Aavya Enterprises | Professional Financial Services</title>
        <meta name="description" content="Learn about Aavya Enterprises - a trusted financial services company with 10+ years of experience in loan settlement, EMI recovery, and insurance consulting." />
      </Helmet>

      <PageBanner
        title="About Aavya Enterprises"
        subtitle="A trusted name in financial resolution services for over a decade."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Company Story */}
      <section className="relative section-padding bg-white overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-inter font-semibold tracking-[0.15em] uppercase rounded-full mb-4">
                Our Story
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-navy mb-6 leading-tight">
                Dedicated to Your <span className="text-gradient-gold">Financial Well-being</span>
              </h2>
              <div className="gold-line mb-6" />

              <p className="font-inter text-gray-600 leading-relaxed mb-4">
                Founded by <strong className="text-navy">Shankar Dubey</strong>, Aavya Enterprises was
                established with a clear mission: to provide professional, ethical, and effective
                financial resolution services to individuals and businesses across India.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed mb-4">
                With over 10 years of experience in the financial services industry, we have developed
                deep expertise in loan settlement negotiations, EMI recovery management, and insurance
                consulting. Our team understands the stress and uncertainty that financial difficulties
                can cause, and we are committed to providing compassionate, professional support.
              </p>
              <p className="font-inter text-gray-600 leading-relaxed">
                Today, Aavya Enterprises is recognized as a trusted name in financial consulting,
                having successfully assisted over 1,000 clients in navigating their financial
                challenges with dignity and confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-premium-lg">
                <img
                  src={aboutTeam || 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'}
                  alt="Aavya Enterprises professional team"
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative section-padding bg-gray-50 overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="premium-card-gold"
            >
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-5">
                <Target size={28} className="text-gold" />
              </div>
              <h3 className="font-poppins font-bold text-navy text-2xl mb-4">Our Mission</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                To provide accessible, professional, and ethical financial resolution services
                that empower individuals and businesses to overcome financial challenges. We are
                committed to delivering personalized solutions that restore financial stability
                and peace of mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="premium-card-gold"
            >
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-5">
                <Eye size={28} className="text-gold" />
              </div>
              <h3 className="font-poppins font-bold text-navy text-2xl mb-4">Our Vision</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                To become India&apos;s most trusted financial resolution services provider, known
                for integrity, professionalism, and genuine commitment to client welfare. We
                envision a future where financial difficulties don&apos;t define people&apos;s
                lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative section-padding bg-white overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(stats || []).map((stat, index) => (
              <StatsCard key={stat?.id || index} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative section-padding bg-gray-50 overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
            description="The principles that guide every interaction and decision at Aavya Enterprises."
          />

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(values || []).map((val, index) => {
              const Icon = val?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                    {(() => {
                      if (!Icon) return null;
                      const props = { size: 28, className: "text-gold group-hover:text-navy transition-colors duration-500" };
                      if (typeof Icon === 'function') return <Icon {...props} />;
                      if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                      return null;
                    })()}
                  </div>
                  <h3 className="font-poppins font-semibold text-navy text-lg mb-2">{val?.title || ''}</h3>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{val?.desc || ''}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
