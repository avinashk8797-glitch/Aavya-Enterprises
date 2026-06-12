import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Clock,
} from 'lucide-react';
import services from '../../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Founder Message', path: '/founder-message' },
    { label: 'Our Process', path: '/process' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const serviceLinks = services.slice(0, 6).map((s) => ({
    label: s.title,
    path: `/services/${s.slug}`,
  }));

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <span className="font-poppins font-bold text-navy text-2xl">A</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl leading-tight">Aavya</h3>
                <p className="text-gold text-[10px] font-inter tracking-[0.25em] uppercase">
                  Enterprises
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm font-inter leading-relaxed mb-6">
              Professional Loan Settlement, EMI Recovery, Financial Support &
              Insurance Consulting Services. Trusted by clients across India for
              over 10 years.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918271313331"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="tel:+918271313331"
                className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300"
                aria-label="Call Us"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:aavyaenterprises0103@gmail.com"
                className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold text-sm font-inter flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-gold text-sm font-inter flex items-center gap-2 group transition-colors duration-200"
                  >
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-gold hover:text-gold-300 text-sm font-inter font-medium flex items-center gap-2 mt-2 transition-colors duration-200"
                >
                  View All Services
                  <ArrowUpRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=First+Floor+Aarohi+Height+Ghat+Road+Lower+Chutia+Ranchi+834010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-gold transition-colors duration-200 group"
              >
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm font-inter leading-relaxed">
                  First Floor, Aarohi Height,
                  <br />
                  Ghat Road, Lower Chutia,
                  <br />
                  Ranchi – 834010
                </span>
              </a>
              <a
                href="tel:+918271313331"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-200"
              >
                <Phone size={18} className="flex-shrink-0 text-gold" />
                <span className="text-sm font-inter">+91 8271313331</span>
              </a>
              <a
                href="mailto:aavyaenterprises0103@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-200"
              >
                <Mail size={18} className="flex-shrink-0 text-gold" />
                <span className="text-sm font-inter break-all">
                  aavyaenterprises0103@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={18} className="flex-shrink-0 text-gold" />
                <span className="text-sm font-inter">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm font-inter text-center md:text-left">
              © {currentYear} Aavya Enterprises. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-500 hover:text-gold text-sm font-inter transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-gray-500 hover:text-gold text-sm font-inter transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/disclaimer"
                className="text-gray-500 hover:text-gold text-sm font-inter transition-colors duration-200"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
