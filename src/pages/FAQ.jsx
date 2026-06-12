import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';
import SectionTitle from '../components/common/SectionTitle';
import FAQAccordion from '../components/faq/FAQAccordion';
import CTASection from '../components/cta/CTASection';
import faqs from '../data/faqs';

const FAQ = () => {
  const categories = [...new Set(faqs.map((f) => f.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>FAQ - Aavya Enterprises | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to frequently asked questions about loan settlement, EMI recovery, financial services, and the processes at Aavya Enterprises." />
      </Helmet>

      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and processes."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionTitle
            subtitle="Got Questions?"
            title="We've Got Answers"
            description="Browse through our comprehensive FAQ section to learn more about our services."
          />

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-5 py-2 rounded-full text-sm font-inter font-medium transition-all duration-300 ${
                activeCategory === 'All'
                  ? 'bg-navy text-white shadow-premium'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-inter font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-navy text-white shadow-premium'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={filtered} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQ;
