import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Quote, Award, Heart, Shield, Target } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import CTASection from '../components/cta/CTASection';
import founderImg from '../assets/images/founder.jpg';

const FounderMessage = () => {
  return (
    <>
      <Helmet>
        <title>Founder Message - Shankar Dubey | Aavya Enterprises</title>
        <meta name="description" content="Read the message from Shankar Dubey, Founder of Aavya Enterprises, about his vision for financial resolution services and commitment to client welfare." />
      </Helmet>

      <PageBanner
        title="Founder's Message"
        subtitle="A personal message from Shankar Dubey, Founder of Aavya Enterprises."
        breadcrumbs={[{ label: "Founder's Message" }]}
      />

      <section className="relative section-padding bg-white overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Sidebar - Founder Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32">
                <div className="rounded-2xl overflow-hidden shadow-premium-lg mb-6">
                  <img
                    src={founderImg}
                    alt="Shankar Dubey - Founder of Aavya Enterprises"
                    className="w-full h-[400px] object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-poppins font-bold text-navy text-2xl">Shankar Dubey</h3>
                  <p className="text-gold font-inter font-medium mb-4">Founder & Lead Consultant</p>
                  <div className="gold-line-center mb-4" />
                  <div className="flex items-center justify-center gap-4 text-sm font-inter text-gray-500">
                    <span className="flex items-center gap-1"><Award size={14} className="text-gold" /> 10+ Years</span>
                    <span className="flex items-center gap-1"><Shield size={14} className="text-gold" /> 1000+ Clients</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Message Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {/* Quote */}
              <div className="relative mb-10 p-8 bg-gray-50 rounded-2xl border-l-4 border-gold">
                <Quote size={40} className="text-gold/20 absolute top-4 right-4" />
                <p className="font-inter text-navy text-xl leading-relaxed italic">
                  &ldquo;Every financial challenge has a solution. Our commitment is to guide you
                  through difficult times with professionalism, empathy, and unwavering dedication
                  to your financial well-being.&rdquo;
                </p>
                <p className="text-gold font-poppins font-semibold mt-4">— Shankar Dubey</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-poppins font-bold text-navy text-2xl mb-4">Dear Friends,</h2>

                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  Thank you for taking the time to learn about Aavya Enterprises. When I founded this
                  company over a decade ago, it was born from a simple but powerful belief: that everyone
                  deserves access to professional, ethical financial guidance, especially during their
                  most challenging times.
                </p>

                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  Having spent over 10 years in the financial services industry, I have witnessed firsthand
                  the devastating impact that unmanageable debt can have on individuals and families. I have
                  seen how financial stress can affect health, relationships, and overall quality of life.
                  This understanding drives our approach at Aavya Enterprises — we don&apos;t just handle
                  financial cases; we support people through some of the most difficult periods of their lives.
                </p>

                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  Our team is built on a foundation of expertise, empathy, and ethical practice. We believe
                  that financial difficulties should not define a person&apos;s future, and we work tirelessly
                  to help our clients find pathways to financial stability and peace of mind.
                </p>

                <h3 className="font-poppins font-bold text-navy text-xl mb-4 mt-8">Our Approach</h3>

                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  At Aavya Enterprises, we take a holistic approach to financial resolution. We don&apos;t
                  just focus on settling debts — we work to understand your complete financial picture,
                  your goals, and your concerns. This comprehensive understanding allows us to develop
                  solutions that truly serve your best interests.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  {[
                    { icon: Heart, title: 'Empathy First', desc: 'Understanding your situation before proposing solutions.' },
                    { icon: Shield, title: 'Complete Confidentiality', desc: 'Your privacy is sacred and never compromised.' },
                    { icon: Target, title: 'Result-Oriented', desc: 'Focused on achieving the best possible outcome.' },
                    { icon: Award, title: 'Professional Excellence', desc: 'Maintaining the highest standards of service.' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                          {(() => {
                            if (!Icon) return null;
                            const props = { size: 20, className: "text-gold" };
                            if (typeof Icon === 'function') return <Icon {...props} />;
                            if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                            return null;
                          })()}
                        </div>
                        <div>
                          <h4 className="font-poppins font-semibold text-navy text-sm">{item.title}</h4>
                          <p className="text-gray-500 text-xs font-inter">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  I personally oversee our operations and remain involved in complex cases to ensure that
                  every client receives the attention and expertise they deserve. Our success is measured
                  not just by the settlements we achieve, but by the lives we help transform.
                </p>

                <p className="font-inter text-gray-600 leading-relaxed mb-6">
                  If you or someone you know is facing financial challenges, I encourage you to reach out
                  to us. The first step toward resolution is often the hardest, and we are here to make
                  that step as comfortable as possible with a free, confidential consultation.
                </p>

                <p className="font-inter text-gray-600 leading-relaxed mb-2">
                  With warm regards,
                </p>
                <p className="font-poppins font-bold text-navy text-lg">Shankar Dubey</p>
                <p className="font-inter text-gold text-sm">Founder, Aavya Enterprises</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FounderMessage;
