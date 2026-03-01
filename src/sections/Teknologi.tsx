import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9l3 3-3 3" />
        <path d="M13 15h4" />
      </svg>
    ),
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  },
  {
    title: 'Backend',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    technologies: ['Node.js', 'Go', 'Python', 'Laravel', 'GraphQL'],
  },
  {
    title: 'DevOps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    technologies: ['Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Linux'],
  },
  {
    title: 'Database & Cloud',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'GCP'],
  },
];

export default function Teknologi() {
  return (
    <section id="teknologi" className="relative py-20 lg:py-32 bg-[#0B0F1C] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, #2EE9FF 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label text-[#2EE9FF] mb-4 block"
          >
            STACK TEKNOLOGI
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-2 font-bold text-[#F2F5FF] mb-4"
          >
            Modern <span className="text-[#2EE9FF]">Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A7B1C8]"
          >
            Kami memilih teknologi berdasarkan performa, keamanan, 
            dan kemudahan maintenance jangka panjang.
          </motion.p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[rgba(11,15,28,0.8)] border border-[rgba(46,233,255,0.15)]
                       hover:border-[rgba(46,233,255,0.4)] transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[rgba(46,233,255,0.1)] text-[#2EE9FF]
                              group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#F2F5FF]">{category.title}</h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[rgba(46,233,255,0.05)] 
                             text-[#A7B1C8] text-sm border border-[rgba(46,233,255,0.1)]
                             hover:border-[rgba(46,233,255,0.3)] hover:text-[#F2F5FF] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#A7B1C8] text-sm mb-4">
            Tidak menemukan teknologi yang Anda cari?
          </p>
          <span className="text-[#2EE9FF] text-sm">
            Kami adaptable dan siap belajar stack baru sesuai kebutuhan proyek Anda.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
