import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import services from '../../data/services';
import { sendFormRef } from '../../services/emailService';

const ContactForm = ({ compact = false }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const result = await sendFormRef(formRef.current);
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={compact ? '' : 'premium-card'}
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="font-poppins font-bold text-navy text-2xl mb-2">
            Get Free Consultation
          </h3>
          <p className="font-inter text-gray-500 text-sm">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
          <div className="gold-line mt-3" />
        </div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="form-input"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
            Service Required
          </label>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select a service</option>
              {(services || []).map((s, index) => (
                <option key={s?.id || index} value={s?.title || ''}>
                  {s?.title || ''}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-inter font-medium text-gray-700 mb-1.5">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Briefly describe your financial situation..."
            className="form-textarea"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg"
          >
            <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
            <p className="text-green-700 text-sm font-inter">
              Thank you! Your message has been sent successfully. We&apos;ll contact you within 24 hours.
            </p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <AlertCircle size={18} className="text-red-600 flex-shrink-0" />
            <p className="text-red-700 text-sm font-inter">
              Something went wrong. Please try again or contact us directly at +91 8271313331.
            </p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
