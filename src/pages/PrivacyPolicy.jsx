import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/common/PageBanner';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Aavya Enterprises</title>
        <meta name="description" content="Read the privacy policy of Aavya Enterprises. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="font-inter text-gray-500 text-sm mb-8">Last Updated: January 1, 2025</p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4">1. Introduction</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Aavya Enterprises (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our services.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">2. Information We Collect</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-inter text-gray-600">
              <li>Personal information (name, email address, phone number)</li>
              <li>Financial information provided during consultation</li>
              <li>Communication records between you and our team</li>
              <li>Website usage data (cookies, IP address, browser type)</li>
              <li>Information provided through contact forms</li>
            </ul>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">3. How We Use Your Information</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-4">We use the collected information for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-inter text-gray-600">
              <li>Providing our financial services and consultations</li>
              <li>Communicating with you about your inquiries and cases</li>
              <li>Improving our website and services</li>
              <li>Sending relevant information about our services</li>
              <li>Legal compliance and regulatory requirements</li>
            </ul>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">4. Data Security</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. All client
              financial information is handled with the highest level of confidentiality.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">5. Information Sharing</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share
              information only with your explicit consent or as required by law. Any information shared
              with creditors during the settlement process is done only with your authorization.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">6. Cookies</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-6">
              Our website may use cookies to enhance your browsing experience. You can choose to disable
              cookies through your browser settings, though this may affect some functionality of our website.
            </p>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">7. Your Rights</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 font-inter text-gray-600">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Lodge a complaint with relevant authorities</li>
            </ul>

            <h2 className="font-poppins font-bold text-navy text-2xl mb-4 mt-10">8. Contact Us</h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-4">
              For questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="font-inter text-gray-700"><strong>Aavya Enterprises</strong></p>
              <p className="font-inter text-gray-600">First Floor, Aarohi Height, Ghat Road</p>
              <p className="font-inter text-gray-600">Lower Chutia, Ranchi – 834010</p>
              <p className="font-inter text-gray-600 mt-2">Email: aavyaenterprises0103@gmail.com</p>
              <p className="font-inter text-gray-600">Phone: +91 8271313331</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
