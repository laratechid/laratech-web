import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'layanan', label: 'Layanan' },
  { id: 'portofolio', label: 'Portofolio' },
  { id: 'teknologi', label: 'Teknologi' },
  { id: 'kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll spy
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;
    
    // Update navbar background
    setIsScrolled(scrollPosition > 50);

    // Find active section
    for (const link of navLinks) {
      const element = document.getElementById(link.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(link.id);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(7,10,18,0.85)] backdrop-blur-xl border-b border-[rgba(46,233,255,0.1)]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-1 group"
            >
              <span className="text-xl lg:text-2xl font-bold font-display text-[#F2F5FF] group-hover:text-[#2EE9FF] transition-colors">
                Laratech
              </span>
              <span className="text-xl lg:text-2xl font-bold font-display text-[#2EE9FF]">
                ID
              </span>
              <span className="w-2 h-2 rounded-full bg-[#2EE9FF] animate-dot-pulse ml-1" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'text-[#2EE9FF]'
                      : 'text-[#A7B1C8] hover:text-[#F2F5FF]'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#2EE9FF]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection('kontak')}
                className="px-5 py-2.5 bg-gradient-to-r from-[#2EE9FF] to-[#00B8D4] text-[#070A12] text-sm font-semibold rounded-xl 
                         transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
              >
                Mulai Proyek
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#F2F5FF] hover:text-[#2EE9FF] transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="mx-4 mt-2 p-6 rounded-2xl bg-[rgba(11,15,28,0.95)] backdrop-blur-xl border border-[rgba(46,233,255,0.2)]">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left py-2 text-lg font-medium transition-colors ${
                      activeSection === link.id
                        ? 'text-[#2EE9FF]'
                        : 'text-[#A7B1C8] hover:text-[#F2F5FF]'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => scrollToSection('kontak')}
                  className="mt-4 w-full py-3 bg-gradient-to-r from-[#2EE9FF] to-[#00B8D4] text-[#070A12] font-semibold rounded-xl"
                >
                  Mulai Proyek
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
