import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const footerLinks = {
  layanan: [
    { label: 'Custom Software', href: '#layanan' },
    { label: 'Web Development', href: '#layanan' },
    { label: 'Mobile App', href: '#layanan' },
    { label: 'IT Consulting', href: '#layanan' },
  ],
  perusahaan: [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Teknologi', href: '#teknologi' },
    { label: 'Kontak', href: '#kontak' },
  ],
};

const socialLinks = [
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/laratech-id', label: 'LinkedIn' },
  { icon: <Github size={20} />, href: 'https://github.com/laratech-id', label: 'GitHub' },
  { icon: <Twitter size={20} />, href: 'https://twitter.com/laratech-id', label: 'Twitter' },
  { icon: <Instagram size={20} />, href: 'https://instagram.com/laratech-id', label: 'Instagram' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-[#070A12] border-t border-[rgba(46,233,255,0.1)]">
      <div className="w-full px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-2xl font-bold font-display text-[#F2F5FF]">
                  Laratech
                </span>
                <span className="text-2xl font-bold font-display text-[#2EE9FF]">
                  ID
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2EE9FF] animate-dot-pulse ml-1" />
              </div>

              {/* Tagline */}
              <p className="text-[#A7B1C8] mb-6 max-w-sm">
                Engineering the Future, One Solution at a Time.
                Mitra teknologi terpercaya untuk transformasi digital bisnis Anda.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-[rgba(11,15,28,0.8)] border border-[rgba(46,233,255,0.2)]
                             flex items-center justify-center text-[#A7B1C8] 
                             hover:text-[#2EE9FF] hover:border-[#2EE9FF] transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Layanan Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[#F2F5FF] font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#A7B1C8] hover:text-[#2EE9FF] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Perusahaan Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#F2F5FF] font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#A7B1C8] hover:text-[#2EE9FF] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-[rgba(46,233,255,0.1)]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#A7B1C8]">
              © 2025 Laratech ID. All rights reserved.
            </p>
            <p className="text-sm text-[#A7B1C8] flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Indonesia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
