import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import FAQAccordion from '../components/faq/FAQAccordion';
import ContactForm from '../components/contact/ContactForm';
import CTASection from '../components/cta/CTASection';
import services from '../data/services';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!service) return <Navigate to="/404" replace />;

  const Icon = service?.icon;
  const related = services.filter((s) => service?.relatedServices?.includes(s?.slug));

  return (
    <>
      <Helmet>
        <title>{service.title} - Aavya Enterprises</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      {/* Service Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                    {(() => {
                      if (!Icon) return null;
                      const props = { size: 32, className: "text-gold" };
                      if (typeof Icon === 'function') return <Icon {...props} />;
                      if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                      return null;
                    })()}
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-navy text-2xl">{service.title}</h2>
                    <p className="text-gray-500 font-inter text-sm">Professional Resolution Services</p>
                  </div>
                </div>

                {service.longDesc.split('\n\n').map((para, i) => (
                  <p key={i} className="font-inter text-gray-600 leading-relaxed mb-4">
                    {para.trim()}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Sidebar Form */}
            <div>
              <div className="sticky top-32">
                <div className="premium-card-gold">
                  <h3 className="font-poppins font-bold text-navy text-xl mb-2">
                    Inquire About This Service
                  </h3>
                  <p className="text-gray-500 text-sm font-inter mb-4">
                    Get a free consultation for {service.title.toLowerCase()}.
                  </p>
                  <div className="gold-line mb-5" />
                  <ContactForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="Advantages"
            title="Key Benefits"
            description={`Why choose our ${service.title.toLowerCase()} services.`}
          />

          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-card"
              >
                <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-gray-700 text-sm leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="Eligibility"
            title="Who Can Benefit"
            description="Our services are designed for individuals and businesses facing these situations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {(service?.whoCanBenefit || []).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-poppins font-bold text-sm">{i + 1}</span>
                </div>
                <span className="font-inter text-gray-700 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-navy">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="How It Works"
            title="Our Process"
            description={`Step-by-step approach to ${service.title.toLowerCase()}.`}
            light
          />

          <div ref={processRef} className="max-w-4xl mx-auto space-y-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-5 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-bold text-navy text-lg">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-white text-lg mb-1">{step.step}</h3>
                  <p className="font-inter text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom mx-auto">
            <SectionTitle
              subtitle="FAQ"
              title="Frequently Asked Questions"
              description={`Common questions about our ${service.title.toLowerCase()} services.`}
            />
            <div className="max-w-3xl mx-auto">
              <FAQAccordion faqs={service.faqs.map((f, i) => ({ id: i, question: f.q, answer: f.a }))} />
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom mx-auto">
            <SectionTitle
              subtitle="Explore More"
              title="Related Services"
              description="Other services that may help with your financial situation."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {related.map((rel) => {
                const RelIcon = rel.icon;
                return (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.slug}`}
                    className="premium-card-gold group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors duration-300">
                      {(() => {
                        if (!RelIcon) return null;
                        const props = { size: 24, className: "text-navy group-hover:text-gold transition-colors duration-300" };
                        if (typeof RelIcon === 'function') return <RelIcon {...props} />;
                        if (typeof RelIcon === 'object' && typeof RelIcon.render === 'function') return RelIcon.render(props, null);
                        return null;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-navy text-base mb-1 group-hover:text-gold transition-colors duration-300">
                        {rel.title}
                      </h3>
                      <p className="text-gray-500 text-xs font-inter line-clamp-2">{rel.shortDesc}</p>
                      <span className="inline-flex items-center gap-1 text-navy text-xs font-inter font-semibold mt-2 group-hover:text-gold transition-colors duration-300">
                        Learn More <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};

export default ServicePage;
