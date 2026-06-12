import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageSquare,
  ClipboardCheck,
  Search,
  FileText,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/cta/CTASection';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    desc: 'Your journey begins with a completely free and confidential consultation. We take the time to understand your financial situation, listen to your concerns, and assess your obligations. This initial conversation is critical in determining the best approach for your specific circumstances.',
    details: [
      'No-obligation discussion of your financial situation',
      'Assessment of all outstanding debts and obligations',
      'Understanding your goals and constraints',
      'Preliminary advice on available options',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Detailed Assessment',
    desc: 'Our team conducts a thorough review of all your financial documents, loan agreements, and credit reports. We analyze interest rates, outstanding amounts, penalty charges, and payment histories to build a comprehensive picture of your financial landscape.',
    details: [
      'Review of all loan agreements and statements',
      'Analysis of interest rates and penalty structures',
      'Income and expense evaluation',
      'Credit report assessment',
    ],
  },
  {
    icon: Search,
    title: 'Strategy Evaluation',
    desc: 'Based on the assessment, we evaluate multiple resolution strategies and identify the most effective approach for your situation. We consider factors like creditor relationships, legal implications, and timeline requirements to develop an optimal plan.',
    details: [
      'Multiple strategy options considered',
      'Risk-benefit analysis for each approach',
      'Timeline and cost projections',
      'Legal compliance verification',
    ],
  },
  {
    icon: FileText,
    title: 'Action Planning',
    desc: 'We develop a detailed action plan with clear milestones, expected outcomes, and communication schedules. You are fully informed about each step before we proceed, ensuring transparency and alignment with your expectations.',
    details: [
      'Detailed settlement or resolution plan',
      'Clear milestone definitions',
      'Communication protocol establishment',
      'Client approval before proceeding',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Resolution & Closure',
    desc: 'Our experienced negotiators engage with creditors to execute the plan. We handle all communications, negotiate settlement terms, and manage the entire process through to successful completion and documentation.',
    details: [
      'Professional creditor negotiations',
      'Settlement agreement finalization',
      'Payment arrangement management',
      'Closure documentation and certificates',
    ],
  },
];

const Process = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <Helmet>
        <title>Our Process - Aavya Enterprises | How We Work</title>
        <meta name="description" content="Learn about Aavya Enterprises' structured 5-step process for loan settlement and financial resolution — from free consultation to successful closure." />
      </Helmet>

      <PageBanner
        title="Our Process"
        subtitle="A transparent, structured approach to resolving your financial challenges."
        breadcrumbs={[{ label: 'Process' }]}
      />

      <section className="relative section-padding bg-white overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <SectionTitle
            subtitle="Step by Step"
            title="How We Work"
            description="Our proven 5-step process ensures thorough, professional resolution of your financial challenges."
          />

          <div ref={ref} className="max-w-4xl mx-auto space-y-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="premium-card-gold flex flex-col md:flex-row gap-6"
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-navy flex items-center justify-center">
                        {(() => {
                          if (!Icon) return null;
                          const props = { size: 32, className: "text-gold" };
                          if (typeof Icon === 'function') return <Icon {...props} />;
                          if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                          return null;
                        })()}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center font-poppins font-bold text-navy text-sm shadow-gold">
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-poppins font-bold text-navy text-xl mb-3">{step.title}</h3>
                    <p className="font-inter text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                          <span className="font-inter text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact" className="btn-primary text-base">
              Start Your Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Process;
