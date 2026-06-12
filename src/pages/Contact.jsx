import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';
import contactOffice from '../assets/images/contact-office.png';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 8271313331'],
    link: 'tel:+918271313331',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['aavyaenterprises0103@gmail.com'],
    link: 'mailto:aavyaenterprises0103@gmail.com',
    color: 'bg-red-50 text-red-500',
  },
  {
    icon: MapPin,
    title: 'Office Address',
    details: ['First Floor, Aarohi Height,', 'Ghat Road, Lower Chutia,', 'Ranchi – 834010'],
    link: 'https://maps.google.com/?q=First+Floor+Aarohi+Height+Ghat+Road+Lower+Chutia+Ranchi+834010',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday – Saturday', '10:00 AM – 7:00 PM'],
    link: null,
    color: 'bg-purple-50 text-purple-600',
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Aavya Enterprises | Get Free Consultation</title>
        <meta name="description" content="Contact Aavya Enterprises for a free, confidential financial consultation. Visit our Ranchi office or reach out via phone, email, or WhatsApp." />
      </Helmet>

      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for a free, confidential consultation about your financial situation."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact Details Cards */}
      <section className="relative section-padding bg-white overflow-x-hidden">
        <div className="container-custom mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactDetails.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="premium-card text-center group block h-full"
                    >
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {(() => {
                          if (!Icon) return null;
                          const props = { size: 24 };
                          if (typeof Icon === 'function') return <Icon {...props} />;
                          if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                          return null;
                        })()}
                      </div>
                      <h3 className="font-poppins font-semibold text-navy text-lg mb-2">{item.title}</h3>
                      {item.details.map((d, j) => (
                        <p key={j} className="text-gray-600 text-sm font-inter">{d}</p>
                      ))}
                    </a>
                  ) : (
                    <div className="premium-card text-center h-full">
                      <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${item.color} flex items-center justify-center`}>
                        {(() => {
                          if (!Icon) return null;
                          const props = { size: 24 };
                          if (typeof Icon === 'function') return <Icon {...props} />;
                          if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                          return null;
                        })()}
                      </div>
                      <h3 className="font-poppins font-semibold text-navy text-lg mb-2">{item.title}</h3>
                      {item.details.map((d, j) => (
                        <p key={j} className="text-gray-600 text-sm font-inter">{d}</p>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/918271313331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-poppins font-semibold rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a href="tel:+918271313331" className="btn-navy">
              <Phone size={20} />
              Call Us Now
            </a>
            <a href="mailto:aavyaenterprises0103@gmail.com" className="btn-secondary">
              <Mail size={20} />
              Send Email
            </a>
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-6">
              <GoogleMap />
              <div className="rounded-2xl overflow-hidden shadow-premium">
                <img
                  src={contactOffice}
                  alt="Aavya Enterprises office"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
