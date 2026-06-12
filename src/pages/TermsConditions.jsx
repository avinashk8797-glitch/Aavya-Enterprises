import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Aavya Enterprises</title>
        <meta name="description" content="Read the terms and conditions for using Aavya Enterprises' website and services." />
      </Helmet>

      <PageBanner
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-500 text-sm mb-8">Last Updated: January 1, 2025</p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4">1. Acceptance of Terms</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              By accessing and using the Aavya Enterprises website and services, you acknowledge that you
              have read, understood, and agree to be bound by these Terms and Conditions. If you do not
              agree to these terms, please do not use our services.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">2. Services Description</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Aavya Enterprises provides financial consulting services including loan settlement negotiations,
              EMI recovery support, insurance consulting, and related financial advisory services. Our services
              are advisory and facilitative in nature.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">3. Client Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-inter text-gray-600">
              <li>Provide accurate and complete financial information</li>
              <li>Respond to communications in a timely manner</li>
              <li>Disclose all relevant debts and financial obligations</li>
              <li>Inform us of any changes in your financial situation</li>
              <li>Make payments as agreed in settlement plans</li>
              <li>Not provide false or misleading information</li>
            </ul>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">4. No Guarantee of Outcomes</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              While we strive to achieve the best possible outcomes for our clients, Aavya Enterprises
              does not guarantee specific settlement amounts, interest rate reductions, or resolution
              timelines. Results may vary based on individual circumstances, creditor policies, and
              other factors beyond our control.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">5. Fees and Payments</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Our fee structure will be clearly communicated before the commencement of services.
              All fees are subject to the terms agreed upon in the service agreement. We do not
              charge hidden fees or undisclosed costs.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">6. Confidentiality</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              We maintain strict confidentiality of all client information. Financial details,
              personal information, and case specifics are not shared with unauthorized parties.
              Our confidentiality obligations survive the termination of our engagement.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">7. Intellectual Property</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              All content on the Aavya Enterprises website, including text, graphics, logos, and
              images, is the property of Aavya Enterprises and is protected by intellectual property
              laws. You may not reproduce, distribute, or use our content without prior written consent.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">8. Limitation of Liability</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              To the maximum extent permitted by law, Aavya Enterprises shall not be liable for any
              indirect, incidental, special, or consequential damages arising from the use of our
              services or website.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">9. Governing Law</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              These Terms and Conditions are governed by and construed in accordance with the laws
              of India. Any disputes shall be subject to the exclusive jurisdiction of the courts
              in Ranchi, Jharkhand.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">10. Contact Information</h2>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
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

export default TermsConditions;
