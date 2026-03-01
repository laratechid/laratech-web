import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CTO',
    company: 'PT Maju Logistik',
    avatar: 'BS',
    quote: 'Laratech ID mengubah sistem logistik kami yang manual menjadi platform digital yang menghemat 40% biaya operasional dalam 6 bulan.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    role: 'CEO',
    company: 'HealthFirst Clinic',
    avatar: 'SW',
    quote: 'Tim Laratech ID tidak hanya deliver tepat waktu, mereka juga proaktif memberi saran teknis yang kami tidak pikirkan sebelumnya.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Reza Firmansyah',
    role: 'Product Manager',
    company: 'StartupKu',
    avatar: 'RF',
    quote: 'Kualitas kode mereka bersih, dokumentasinya lengkap, dan komunikasinya transparan dari awal sampai launch.',
    rating: 5,
  },
];

export default function Testimoni() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#070A12] overflow-hidden">
      {/* Background Quote Mark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-10 text-[#2EE9FF]"
      >
        <Quote size={300} strokeWidth={1} />
      </motion.div>

      {/* Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(168,85,247,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 w-full px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label text-[#2EE9FF] mb-4 block"
          >
            TESTIMONI
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-2 font-bold text-[#F2F5FF] mb-4"
          >
            Apa Kata <span className="text-[#2EE9FF]">Mereka</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#A7B1C8]"
          >
            Jangan percaya kata kami—ini yang dikatakan klien setelah 
            berkolaborasi bersama kami.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="quote-card hover:border-l-4 transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#2EE9FF] text-[#2EE9FF]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#F2F5FF] leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2EE9FF] to-[#A855F7] 
                              flex items-center justify-center text-[#070A12] font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-[#F2F5FF] font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-[#A7B1C8] text-xs">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
