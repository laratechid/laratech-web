import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Lightbulb, 
  Layers, 
  Cloud 
} from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Custom Software Development',
    description: 'Dari ide ke produk nyata. Kami rancang sistem yang tumbuh bersama bisnis Anda.',
    features: ['ERP Systems', 'CRM Solutions', 'Business Automation'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Website bukan sekadar tampilan. Kami bangun pengalaman digital yang mengkonversi.',
    features: ['Company Profile', 'E-commerce', 'Web Applications'],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile App Development',
    description: 'Aplikasi mobile yang disukai pengguna dan dipercaya enterprise.',
    features: ['iOS & Android', 'React Native', 'Flutter'],
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'IT Consulting',
    description: 'Keputusan teknologi yang salah mahal harganya. Kami bantu Anda memilih yang tepat.',
    features: ['Tech Strategy', 'Architecture Review', 'Digital Transformation'],
  },
  {
    icon: <Layers size={32} />,
    title: 'System Integration',
    description: 'Satukan semua sistem Anda dalam satu ekosistem yang harmonis dan efisien.',
    features: ['API Development', 'Third-party Integration', 'Data Sync'],
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud Solutions',
    description: 'Infrastruktur cloud yang scalable, aman, dan hemat biaya operasional.',
    features: ['AWS & GCP', 'Cloud Migration', 'DevOps'],
  },
];

export default function Layanan() {
  return (
    <section id="layanan" className="relative py-20 lg:py-32 bg-[#0B0F1C] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46,233,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46,233,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
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
            LAYANAN KAMI
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-2 font-bold text-[#F2F5FF] mb-4"
          >
            Solusi <span className="text-[#2EE9FF]">End-to-End</span>
            <br />
            untuk Bisnis Anda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A7B1C8]"
          >
            Dari discovery hingga deployment, kami hadir untuk setiap tahap 
            perjalanan digital Anda.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              {/* Icon */}
              <div className="mb-5 text-[#2EE9FF] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#F2F5FF] mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#A7B1C8] mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 rounded-full bg-[rgba(46,233,255,0.1)] 
                             text-[#2EE9FF] border border-[rgba(46,233,255,0.2)]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
