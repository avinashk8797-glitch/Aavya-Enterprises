import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Aavya Enterprises</title>
        <meta name="description" content="Read the disclaimer for Aavya Enterprises' website and services." />
      </Helmet>

      <PageBanner
        title="Disclaimer"
        subtitle="Important information regarding our services and website content."
        breadcrumbs={[{ label: 'Disclaimer' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-poppins font-bold text-navy text-2xl mb-4">General Disclaimer</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              The information provided on the Aavya Enterprises website is for general informational
              purposes only. While we strive to keep the information up to date and accurate, we make
              no representations or warranties of any kind, express or implied, about the completeness,
              accuracy, reliability, suitability, or availability of the information contained on the website.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">Professional Advice Disclaimer</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              The content on this website does not constitute legal, financial, or professional advice.
              Our services are advisory and facilitative in nature. Clients are encouraged to seek
              independent professional advice where appropriate. Any reliance you place on the information
              on this website is strictly at your own risk.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">No Guarantee of Results</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Aavya Enterprises does not guarantee specific outcomes, settlement amounts, or resolution
              timelines. Every financial situation is unique, and results may vary based on individual
              circumstances, creditor policies, regulatory changes, and other factors. Past results
              do not guarantee future outcomes.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">Third-Party Links</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Our website may contain links to third-party websites. These links are provided for
              your convenience and do not signify endorsement. We have no control over the content,
              privacy policies, or practices of any third-party websites and assume no responsibility for them.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">Testimonials Disclaimer</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Testimonials displayed on our website reflect individual experiences and may not be
              representative of all client outcomes. Results vary depending on individual financial
              situations and other factors.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">Contact</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-4">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="font-inter text-gray-700"><strong>Aavya Enterprises</strong></p>
              <p className="font-inter text-gray-600">Email: aavyaenterprises0103@gmail.com</p>
              <p className="font-inter text-gray-600">Phone: +91 8271313331</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;
