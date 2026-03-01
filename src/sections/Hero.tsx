import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Rocket } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-10%']);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#070A12]"
    >
      {/* Layer 1: Background with gradient overlay */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#0B0F1C] via-[#070A12] to-[#0a0e1a]"
        />
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(46,233,255,0.3) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </motion.div>

      {/* Layer 2: Dot Grid Pattern */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.08]"
        style={{
          backgroundImage: `
            radial-gradient(circle, #2EE9FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* Layer 3: Hexagon Geometric Shapes */}
      <svg
        className="absolute inset-0 z-[2] w-full h-full pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2EE9FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Hexagon 1 */}
        <polygon
          points="100,50 150,25 200,50 200,100 150,125 100,100"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="1"
          className="opacity-40"
          style={{ transform: 'translate(5vw, 15vh)' }}
        />
        {/* Hexagon 2 */}
        <polygon
          points="80,40 120,20 160,40 160,80 120,100 80,80"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="1"
          className="opacity-30"
          style={{ transform: 'translate(75vw, 60vh)' }}
        />
        {/* Hexagon 3 */}
        <polygon
          points="60,30 90,15 120,30 120,60 90,75 60,60"
          fill="none"
          stroke="url(#hexGradient)"
          strokeWidth="0.5"
          className="opacity-20"
          style={{ transform: 'translate(15vw, 70vh)' }}
        />
        {/* Connection lines */}
        <line x1="200" y1="75" x2="580" y2="340" stroke="rgba(46,233,255,0.1)" strokeWidth="0.5" />
        <line x1="580" y1="340" x2="120" y2="525" stroke="rgba(46,233,255,0.1)" strokeWidth="0.5" />
      </svg>

      {/* Layer 4: Glowing Orbs */}
      <div 
        className="absolute z-[3] w-32 h-32 rounded-full"
        style={{
          top: '20%',
          right: '15%',
          background: 'radial-gradient(circle, rgba(46,233,255,0.4) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div 
        className="absolute z-[3] w-24 h-24 rounded-full"
        style={{
          bottom: '25%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
          filter: 'blur(15px)',
          transform: `translate(${-mousePosition.x * 0.15}px, ${-mousePosition.y * 0.15}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Content Layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="w-full px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <span className="section-label text-[#2EE9FF]">
                  Software House & IT Consulting
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-display-1 font-bold text-[#F2F5FF] mb-6 leading-[1.05]"
              >
                Kami Tidak Hanya{' '}
                <span className="text-[#2EE9FF]">Membuat Software.</span>
                <br />
                Kami Membangun{' '}
                <span className="gradient-text">Fondasi Digital</span> Bisnis Anda.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg lg:text-xl text-[#A7B1C8] mb-8 max-w-xl leading-relaxed"
              >
                Laratech ID hadir sebagai mitra teknologi yang mengubah tantangan bisnis 
                Anda menjadi solusi digital yang terukur, scalable, dan berdampak nyata.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection('kontak')}
                  className="btn-primary flex items-center gap-2 group"
                >
                  Konsultasi Gratis
                  <ArrowRight 
                    size={18} 
                    className="transition-transform group-hover:translate-x-1" 
                  />
                </button>
                <button
                  onClick={() => scrollToSection('portofolio')}
                  className="btn-outline"
                >
                  Lihat Portofolio
                </button>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(11,15,28,0.8)] border border-[rgba(46,233,255,0.2)]">
                  <Star size={16} className="text-[#2EE9FF]" />
                  <span className="text-sm text-[#F2F5FF]">50+ Klien Aktif</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(11,15,28,0.8)] border border-[rgba(46,233,255,0.2)]">
                  <Rocket size={16} className="text-[#2EE9FF]" />
                  <span className="text-sm text-[#F2F5FF]">100+ Project Delivered</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="glass-card p-8 ml-auto max-w-md">
                <h3 className="text-lg font-semibold text-[#F2F5FF] mb-4">
                  Dipercaya oleh
                </h3>
                {/* Client Logos Placeholder */}
                <div className="flex gap-4 mb-6">
                  {['Finova', 'Logix', 'MediConnect', 'TechFlow'].map((client, i) => (
                    <div
                      key={client}
                      className="w-14 h-14 rounded-xl bg-[rgba(46,233,255,0.1)] border border-[rgba(46,233,255,0.2)] 
                               flex items-center justify-center text-xs font-mono text-[#A7B1C8]"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {client.slice(0, 2)}
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gradient-to-r from-[#2EE9FF] to-transparent mb-4" />
                <p className="text-[#A7B1C8] text-sm leading-relaxed mb-4">
                  Kami telah mengirimkan 40+ platform di berbagai industri: fintech, 
                  logistik, kesehatan, dan e-commerce.
                </p>
                <button
                  onClick={() => scrollToSection('layanan')}
                  className="text-[#2EE9FF] text-sm font-medium hover:underline"
                >
                  Lihat layanan kami →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#A7B1C8]">Scroll untuk eksplor</span>
          <div className="w-6 h-10 rounded-full border-2 border-[rgba(46,233,255,0.3)] flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#2EE9FF]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
