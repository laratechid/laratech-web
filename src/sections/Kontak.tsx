import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, Mail, MessageCircle } from 'lucide-react';

export default function Kontak() {
  return (
    <section id="kontak" className="relative py-20 lg:py-32 bg-[#0B0F1C] overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(46,233,255,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label text-[#2EE9FF] mb-4 block"
            >
              KONTAK
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-2 font-bold text-[#F2F5FF] mb-4"
            >
              Siap Memulai
              <br />
              <span className="text-[#2EE9FF]">Proyek Bersama Kami?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#A7B1C8] mb-8 max-w-md"
            >
              Ceritakan kebutuhan bisnis Anda. Tim kami siap membantu menemukan 
              solusi yang tepat.
            </motion.p>

            {/* WhatsApp CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <a
                href="https://wa.me/6282231817173?text=Halo%20Laratech%20ID%2C%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital%20kami"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full lg:w-auto"
              >
                <MessageCircle size={24} />
                Chat WhatsApp
              </a>
            </motion.div>

            {/* Email Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <a
                href="mailto:laratech.company@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(46,233,255,0.3)] 
                         text-[#A7B1C8] rounded-xl hover:border-[#2EE9FF] hover:text-[#F2F5FF] transition-all"
              >
                <Mail size={18} />
                laratech.company@gmail.com
              </a>
            </motion.div>

            {/* Separator */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-[#A7B1C8] mb-6"
            >
              {/* atau hubungi kami via */}
            </motion.p>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-[#A7B1C8]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(46,233,255,0.1)] flex items-center justify-center">
                  <MapPin size={18} className="text-[#2EE9FF]" />
                </div>
                <span>Kab Nganjuk, Kec Bagor</span>
              </div>

              <div className="flex items-center gap-3 text-[#A7B1C8]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(46,233,255,0.1)] flex items-center justify-center">
                  <Clock size={18} className="text-[#2EE9FF]" />
                </div>
                <span>Senin–Jumat, 09.00–18.00 WIB</span>
              </div>

              <div className="flex items-center gap-3 text-[#A7B1C8]">
                <div className="w-10 h-10 rounded-lg bg-[rgba(46,233,255,0.1)] flex items-center justify-center">
                  <Briefcase size={18} className="text-[#2EE9FF]" />
                </div>
                <a 
                  href="https://linkedin.com/in/sholeh-bakti-abadi-76888b175" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#2EE9FF] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-[rgba(46,233,255,0.2)] shadow-card"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.72953484772!2d111.88242!3d-7.604384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784baa203533c9%3A0xbb7003a4b58bc7e1!2sLaratech%20id!5e0!3m2!1sen!2sid!4v1772338739367!5m2!1sen!2sid"
              width="100%"
              height="550"
              style={{ border: 0, filter: 'grayscale(40%) invert(0%) contrast(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laratech ID Location"
              className="bg-[#0B0F1C]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
