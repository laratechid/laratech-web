import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const categories = ['Semua', 'Web', 'Mobile', 'Enterprise'];

const projects = [
  {
    id: 1,
    title: 'SiapKerja Platform',
    description: 'Job portal enterprise dengan fitur ATS & HR analytics untuk manajemen rekrutmen yang efisien.',
    category: 'Web',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    gradient: 'from-[#2EE9FF] to-[#00B8D4]',
  },
  {
    id: 2,
    title: 'LogiTrack System',
    description: 'Real-time fleet & logistik management untuk 500+ kendaraan dengan tracking GPS dan optimasi rute.',
    category: 'Enterprise',
    tech: ['Go', 'Docker', 'Kubernetes', 'Redis'],
    gradient: 'from-[#A855F7] to-[#7C3AED]',
  },
  {
    id: 3,
    title: 'MediConnect App',
    description: 'Platform telemedicine dengan video call & rekam medis digital untuk klinik dan pasien.',
    category: 'Mobile',
    tech: ['React Native', 'Firebase', 'WebRTC'],
    gradient: 'from-[#10B981] to-[#059669]',
  },
];

export default function Portofolio() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects = activeCategory === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portofolio" className="relative py-20 lg:py-32 bg-[#070A12] overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(46,233,255,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label text-[#2EE9FF] mb-4 block"
            >
              PORTOFOLIO
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display-2 font-bold text-[#F2F5FF]"
            >
              Proyek <span className="text-[#2EE9FF]">Terpilih</span>
            </motion.h2>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#2EE9FF] text-[#070A12]'
                    : 'bg-[rgba(11,15,28,0.8)] text-[#A7B1C8] border border-[rgba(46,233,255,0.2)] hover:border-[#2EE9FF] hover:text-[#F2F5FF]'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="portfolio-card group"
              >
                {/* Thumbnail */}
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[rgba(7,10,18,0.3)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(7,10,18,0.8)] opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 flex items-center justify-center">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#2EE9FF] text-[#070A12] 
                                     font-semibold rounded-xl transform translate-y-4 group-hover:translate-y-0
                                     transition-transform duration-300">
                      Lihat Detail
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-[rgba(46,233,255,0.1)] 
                                   text-[#2EE9FF] border border-[rgba(46,233,255,0.2)]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#F2F5FF] mb-2 group-hover:text-[#2EE9FF] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#A7B1C8] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
