import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import FounderMessage from '../pages/FounderMessage';
import ServicesOverview from '../pages/ServicesOverview';
import ServicePage from '../pages/ServicePage';
import Process from '../pages/Process';
import Testimonials from '../pages/Testimonials';
import FAQ from '../pages/FAQ';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions';
import Disclaimer from '../pages/Disclaimer';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="founder-message" element={<FounderMessage />} />
        <Route path="services" element={<ServicesOverview />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="process" element={<Process />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
