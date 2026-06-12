import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import CallButton from '../components/layout/CallButton';

const MainLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </div>
  );
};

export default MainLayout;
