import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, BarChart3, ShieldCheck, Target, Rocket } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SocialProofSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t('socialProof.stat1.value'), label: t('socialProof.stat1.label'), icon: TrendingUp },
    { value: t('socialProof.stat2.value'), label: t('socialProof.stat2.label'), icon: Users },
    { value: t('socialProof.stat3.value'), label: t('socialProof.stat3.label'), icon: Target },
    { value: t('socialProof.stat4.value'), label: t('socialProof.stat4.label'), icon: ShieldCheck },
    { value: t('socialProof.stat5.value'), label: t('socialProof.stat5.label'), icon: BarChart3 },
    { value: t('socialProof.stat6.value'), label: t('socialProof.stat6.label'), icon: Rocket },
  ];

  return (
    <section 
      className="section-padding bg-slate-50 relative overflow-hidden"
      data-testid="social-proof-section"
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
          <span className="label-text text-green-600 mb-4 block">{t('socialProof.label')}</span>
          <h2 className="heading-lg text-slate-900 mb-6">
            {t('socialProof.headline1')}<br />
            <span className="text-blue-600">{t('socialProof.headline2')}</span>
          </h2>
          <p className="body-text text-slate-600 text-lg max-w-2xl mx-auto">
            {t('socialProof.subheadline')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 feature-card"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-barlow font-bold text-3xl text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="font-inter text-sm text-slate-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Style Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200 max-w-3xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="font-inter text-xl text-slate-700 italic mb-6 leading-relaxed">
              "{t('socialProof.quote')}
              <span className="font-bold text-red-600 not-italic"> {t('socialProof.quoteHighlight')}</span>
              {t('socialProof.quoteEnd')}"
            </blockquote>
            <p className="font-barlow font-semibold text-slate-900 uppercase tracking-wider">
              {t('socialProof.quoteAuthor')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
