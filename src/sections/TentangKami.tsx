import { motion } from 'framer-motion';
import { Lightbulb, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb size={24} />,
    title: 'Innovation',
    description: 'Selalu mencari solusi kreatif dan teknologi terbaru',
  },
  {
    icon: <Shield size={24} />,
    title: 'Integrity',
    description: 'Transparan dan jujur dalam setiap kolaborasi',
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Reliability',
    description: 'Deliver tepat waktu dengan kualitas terbaik',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Growth',
    description: 'Fokus pada pertumbuhan bisnis klien kami',
  },
];

export default function TentangKami() {
  return (
    <section id="tentang" className="relative py-20 lg:py-32 bg-[#070A12] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(46,233,255,0.08) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Storytelling */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label text-[#2EE9FF] mb-4 block"
            >
              TENTANG KAMI
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-2 font-bold text-[#F2F5FF] mb-6"
            >
              Membangun Masa Depan
              <br />
              <span className="text-[#2EE9FF]">Digital Indonesia</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-[#A7B1C8] leading-relaxed mb-8"
            >
              <p>
                Laratech ID didirikan dengan visi untuk menjadi mitra teknologi terpercaya 
                bagi bisnis di Indonesia. Kami percaya bahwa teknologi yang tepat dapat 
                mengubah cara bisnis beroperasi, berkembang, dan bersaing di era digital.
              </p>
              <p>
                Dengan tim yang terdiri dari engineer berpengalaman dan desainer kreatif, 
                kami telah membantu puluhan perusahaan dari berbagai industri mewujudkan 
                visi digital mereka.
              </p>
            </motion.div>

            {/* Visi & Misi Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div className="p-5 rounded-xl bg-[rgba(11,15,28,0.6)] border-l-2 border-[#2EE9FF]">
                <h4 className="text-[#F2F5FF] font-semibold mb-2">Visi</h4>
                <p className="text-sm text-[#A7B1C8]">
                  Menjadi software house terdepan di Indonesia yang mengubah tantangan 
                  bisnis menjadi solusi digital berdampak.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-[rgba(11,15,28,0.6)] border-l-2 border-[#A855F7]">
                <h4 className="text-[#F2F5FF] font-semibold mb-2">Misi</h4>
                <p className="text-sm text-[#A7B1C8]">
                  Memberikan solusi teknologi berkualitas tinggi dengan pendekatan 
                  kolaboratif dan fokus pada hasil bisnis.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Visual & Values */}
          <div>
            {/* Abstract Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-10"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2EE9FF] to-[#A855F7] opacity-20 blur-3xl rounded-full" />
                
                {/* SVG Abstract */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full relative z-10"
                >
                  <defs>
                    <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2EE9FF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  
                  {/* Central Circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="80"
                    fill="none"
                    stroke="url(#aboutGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                  
                  {/* Orbiting Circles */}
                  <circle cx="200" cy="80" r="20" fill="rgba(46,233,255,0.2)" />
                  <circle cx="320" cy="200" r="15" fill="rgba(168,85,247,0.2)" />
                  <circle cx="200" cy="320" r="25" fill="rgba(46,233,255,0.15)" />
                  <circle cx="80" cy="200" r="18" fill="rgba(168,85,247,0.15)" />
                  
                  {/* Connection Lines */}
                  <line x1="200" y1="120" x2="200" y2="80" stroke="rgba(46,233,255,0.3)" strokeWidth="1" />
                  <line x1="280" y1="200" x2="320" y2="200" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
                  <line x1="200" y1="280" x2="200" y2="320" stroke="rgba(46,233,255,0.3)" strokeWidth="1" />
                  <line x1="120" y1="200" x2="80" y2="200" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
                  
                  {/* Outer Ring */}
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="rgba(46,233,255,0.1)"
                    strokeWidth="0.5"
                    strokeDasharray="10 5"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-[rgba(11,15,28,0.5)] border border-[rgba(46,233,255,0.1)]
                           hover:border-[rgba(46,233,255,0.3)] transition-colors group"
                >
                  <div className="text-[#2EE9FF] mb-2 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h4 className="text-[#F2F5FF] font-semibold text-sm mb-1">{value.title}</h4>
                  <p className="text-xs text-[#A7B1C8]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
