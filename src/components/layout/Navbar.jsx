import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import navigation from '../../data/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy/95 backdrop-blur-xl shadow-premium-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <span className="font-poppins font-bold text-navy text-xl">A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-poppins font-bold text-white text-lg leading-tight tracking-wide">
                  Aavya
                </h1>
                <p className="text-gold text-[10px] font-inter tracking-[0.2em] uppercase -mt-0.5">
                  Enterprises
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`nav-link px-3 py-2 flex items-center gap-1 ${
                      isActive(item.path) ? 'nav-link-active' : ''
                    }`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-xl shadow-premium-lg border border-gray-100 overflow-hidden"
                        >
                          <div className="p-2">
                            {item.dropdown.map((dropItem) => {
                              const Icon = dropItem.icon;
                              return (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.path}
                                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-700 hover:bg-navy/5 hover:text-navy transition-all duration-200 group/item"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center group-hover/item:bg-gold/10 transition-colors duration-200">
                                    {(() => {
                                      if (!Icon) return null;
                                      const props = { size: 16, className: "text-navy group-hover/item:text-gold transition-colors duration-200" };
                                      if (typeof Icon === 'function') return <Icon {...props} />;
                                      if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                                      return null;
                                    })()}
                                  </div>
                                  <span className="text-sm font-inter font-medium">
                                    {dropItem.label}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918271313331"
                className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors duration-300 text-sm font-inter"
              >
                <Phone size={16} />
                <span className="hidden xl:inline">+91 8271313331</span>
              </a>
              <Link to="/contact" className="btn-primary text-xs px-6 py-2.5">
                Free Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-white hover:text-gold transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-navy z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <span className="font-poppins font-bold text-navy text-xl">A</span>
                    </div>
                    <div>
                      <h2 className="font-poppins font-bold text-white text-lg leading-tight">Aavya</h2>
                      <p className="text-gold text-[10px] font-inter tracking-[0.2em] uppercase -mt-0.5">Enterprises</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center">
                        <Link
                          to={item.path}
                          className={`flex-1 py-3 px-4 rounded-lg font-inter font-medium text-sm transition-all duration-200 ${
                            isActive(item.path)
                              ? 'text-gold bg-gold/10'
                              : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </Link>
                        {item.dropdown && (
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.label ? null : item.label
                              )
                            }
                            className="p-3 text-gray-400 hover:text-white transition-colors"
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {item.dropdown && activeDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 py-2 space-y-1">
                              {item.dropdown.map((dropItem) => {
                                const Icon = dropItem.icon;
                                return (
                                  <Link
                                    key={dropItem.label}
                                    to={dropItem.path}
                                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-gray-400 hover:text-gold hover:bg-gold/5 transition-all duration-200 text-sm"
                                  >
                                    {(() => {
                                      if (!Icon) return null;
                                      const props = { size: 14 };
                                      if (typeof Icon === 'function') return <Icon {...props} />;
                                      if (typeof Icon === 'object' && typeof Icon.render === 'function') return Icon.render(props, null);
                                      return null;
                                    })()}
                                    <span>{dropItem.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+918271313331"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-inter hover:bg-white/10 transition-all duration-200"
                  >
                    <Phone size={16} />
                    +91 8271313331
                  </a>
                  <a
                    href="https://wa.me/918271313331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 rounded-lg text-white text-sm font-inter hover:bg-green-700 transition-all duration-200"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us
                  </a>
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center text-xs py-3"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
