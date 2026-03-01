import { motion } from 'framer-motion';
import { useCountOnView } from '@/hooks/useCounter';
import { Users, Briefcase, Clock, ThumbsUp } from 'lucide-react';

interface StatItemProps {
  end: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

function StatItem({ end, suffix, label, icon, delay }: StatItemProps) {
  const { ref, formattedValue, hasStarted } = useCountOnView<HTMLDivElement>({
    end,
    duration: 2000,
    delay,
    suffix,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-3 p-3 rounded-xl bg-[rgba(46,233,255,0.1)] border border-[rgba(46,233,255,0.2)]">
        {icon}
      </div>
      <div className="text-4xl lg:text-5xl font-bold font-display text-[#F2F5FF] counter-value mb-1">
        {hasStarted ? formattedValue : `0${suffix}`}
      </div>
      <div className="text-sm text-[#A7B1C8]">{label}</div>
    </motion.div>
  );
}

export default function TrustBar() {
  const stats = [
    {
      end: 50,
      suffix: '+',
      label: 'Klien Aktif',
      icon: <Users size={24} className="text-[#2EE9FF]" />,
      delay: 0,
    },
    {
      end: 100,
      suffix: '+',
      label: 'Project Delivered',
      icon: <Briefcase size={24} className="text-[#2EE9FF]" />,
      delay: 100,
    },
    {
      end: 5,
      suffix: '+',
      label: 'Tahun Pengalaman',
      icon: <Clock size={24} className="text-[#2EE9FF]" />,
      delay: 200,
    },
    {
      end: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: <ThumbsUp size={24} className="text-[#2EE9FF]" />,
      delay: 300,
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-[#070A12] border-y border-[rgba(46,233,255,0.1)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(46,233,255,0.03)] via-transparent to-[rgba(46,233,255,0.03)]" />
      
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
