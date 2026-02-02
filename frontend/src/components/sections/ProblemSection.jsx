import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, EyeOff, FileWarning, TrendingDown, Users, XCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: TrendingDown, text: t('problem.problems.p1'), color: 'text-red-500' },
    { icon: FileWarning, text: t('problem.problems.p2'), color: 'text-orange-500' },
    { icon: EyeOff, text: t('problem.problems.p3'), color: 'text-yellow-500' },
    { icon: Users, text: t('problem.problems.p4'), color: 'text-red-400' },
    { icon: AlertTriangle, text: t('problem.problems.p5'), color: 'text-orange-400' },
    { icon: XCircle, text: t('problem.problems.p6'), color: 'text-red-600' },
  ];

  return (
    <section 
      id="problem"
      className="section-padding bg-slate-50 relative overflow-hidden"
      data-testid="problem-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-text text-red-500 mb-4 block">{t('problem.label')}</span>
          <h2 className="heading-lg text-slate-900 mb-6">
            {t('problem.headline1')}<br />
            <span className="text-red-500">{t('problem.headline2')}</span>
          </h2>
          <p className="body-text text-slate-600 max-w-2xl mx-auto text-lg">
            {t('problem.subheadline')} <strong className="text-red-600">{t('problem.internalLeakage')}</strong>. 
            {t('problem.bleeding')}
          </p>
        </motion.div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-red-200 transition-colors feature-card"
            >
              <div className={`w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="font-inter font-medium text-slate-800">{problem.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 bg-red-50 border border-red-200 rounded-2xl px-8 py-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
            <div className="text-left">
              <p className="font-barlow font-bold text-xl text-slate-900 uppercase tracking-tight">
                {t('problem.warning')}
              </p>
              <p className="font-inter text-red-600">{t('problem.warningDetail')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
