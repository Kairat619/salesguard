import React from 'react';
import { motion } from 'framer-motion';
import { Users, Laptop, Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PainPointsSection = () => {
  const { t } = useLanguage();

  const painPoints = [
    {
      icon: Users,
      number: '01',
      title: t('painPoints.point1.title'),
      description: t('painPoints.point1.description'),
      details: t('painPoints.point1.details')
    },
    {
      icon: Laptop,
      number: '02',
      title: t('painPoints.point2.title'),
      description: t('painPoints.point2.description'),
      details: t('painPoints.point2.details')
    },
    {
      icon: Shield,
      number: '03',
      title: t('painPoints.point3.title'),
      description: t('painPoints.point3.description'),
      details: t('painPoints.point3.details')
    }
  ];

  return (
    <section 
      className="section-padding bg-slate-900 relative overflow-hidden"
      data-testid="pain-points-section"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-text text-blue-400 mb-4 block">{t('painPoints.label')}</span>
          <h2 className="heading-lg text-white mb-6">
            {t('painPoints.headline1')}<br />
            <span className="text-red-500">{t('painPoints.headline2')}</span>
          </h2>
        </motion.div>

        {/* Pain Points Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 feature-card">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <span className="font-barlow font-bold text-2xl text-white">{point.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-700/50 flex items-center justify-center mb-6 mt-4 ml-auto">
                  <point.icon className="w-7 h-7 text-blue-400" />
                </div>

                {/* Content */}
                <h3 className="font-barlow font-bold text-xl text-white uppercase tracking-tight mb-4">
                  {point.title}
                </h3>
                <p className="font-inter text-slate-400 leading-relaxed mb-6">
                  {point.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {Array.isArray(point.details) && point.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="font-inter text-sm text-slate-500">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
