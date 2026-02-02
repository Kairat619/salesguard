import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Heart, Scale, Building2, TrendingDown, DollarSign } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ConsequencesSection = () => {
  const { t } = useLanguage();

  const consequences = [
    { icon: DollarSign, text: t('consequences.c1'), delay: 0 },
    { icon: Heart, text: t('consequences.c2'), delay: 0.1 },
    { icon: Scale, text: t('consequences.c3'), delay: 0.2 },
    { icon: Building2, text: t('consequences.c4'), delay: 0.3 },
    { icon: TrendingDown, text: t('consequences.c5'), delay: 0.4 },
    { icon: Flame, text: t('consequences.c6'), delay: 0.5 },
  ];

  const timeline = [
    { year: t('consequences.year1'), quote: t('consequences.quote1') },
    { year: t('consequences.year2'), quote: t('consequences.quote2') },
    { year: t('consequences.year3'), quote: t('consequences.quote3') },
  ];

  return (
    <section 
      className="section-padding bg-slate-50 relative overflow-hidden"
      data-testid="consequences-section"
    >
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-text text-orange-500 mb-4 block">{t('consequences.label')}</span>
          <h2 className="heading-lg text-slate-900 mb-6">
            {t('consequences.headline1')}<br />
            <span className="text-red-500">{t('consequences.headline2')}</span>
          </h2>
          <p className="body-text text-slate-600 text-lg">
            {t('consequences.subheadline')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 transform -translate-x-1/2" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`flex items-center gap-8 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <span className="font-barlow font-bold text-slate-400 uppercase tracking-wider">
                    {item.year}
                  </span>
                  <p className="font-inter text-xl text-slate-700 italic mt-2">
                    {item.quote}
                  </p>
                </div>
                <div className="relative z-10 w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-red-600 border-4 border-slate-50 shadow-lg" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Then Discovery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-barlow font-bold text-2xl text-slate-900 uppercase tracking-tight mb-8">
            {t('consequences.discover')}
          </p>
        </motion.div>

        {/* Consequences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {consequences.map((item) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.4 }}
              className="bg-white rounded-xl p-5 border border-red-100 shadow-md flex items-center gap-4 hover:border-red-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-red-500" />
              </div>
              <span className="font-inter text-slate-700">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 shadow-xl shadow-red-600/20">
            <p className="font-barlow font-bold text-2xl text-white uppercase tracking-tight mb-2">
              {t('consequences.warning')}
            </p>
            <p className="font-inter text-red-100 text-lg">
              {t('consequences.warningDetail')} <strong className="text-white">{t('consequences.systemFailure')}</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
