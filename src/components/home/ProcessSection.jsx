import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageSquare,
  ClipboardCheck,
  Search,
  FileText,
  CheckCircle2,
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'Free confidential assessment of your financial situation and obligations.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessment',
    desc: 'Detailed review of all debts, income, and available resolution options.',
  },
  {
    icon: Search,
    title: 'Evaluation',
    desc: 'Thorough analysis to determine the optimal resolution strategy.',
  },
  {
    icon: FileText,
    title: 'Planning',
    desc: 'Development of a customized settlement and resolution plan.',
  },
  {
    icon: CheckCircle2,
    title: 'Resolution',
    desc: 'Professional execution of the plan with ongoing monitoring and support.',
  },
];

const ProcessSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-gradient-navy relative overflow-x-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <SectionTitle
          subtitle="How It Works"
          title="Our Resolution Process"
          description="A structured, transparent approach to resolving your financial challenges."
          light
        />

        <div ref={ref} className="relative mt-12">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {(steps || []).map((step, index) => {
              const Icon = step?.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:border-gold/40 group-hover:bg-gold/10 transition-all duration-500">
                      {(() => {
                        if (!Icon) return null;
                        const props = { size: 32, className: "text-gold" };
                        if (typeof Icon === 'function') return <Icon {...props} />;
                        if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                        return null;
                      })()}
                    </div>
                    <div className="absolute -top-3 -right-1 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center font-poppins font-bold text-navy text-sm shadow-gold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-poppins font-semibold text-white text-lg mb-2">
                    {step?.title}
                  </h3>
                  <p className="font-inter text-gray-400 text-sm leading-relaxed">
                    {step?.desc}
                  </p>

                  {/* Connector Arrow - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-2 text-gold/40">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
