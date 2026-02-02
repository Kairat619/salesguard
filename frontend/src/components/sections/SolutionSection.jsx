import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Lock, Ban } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SolutionSection = () => {
  const { t } = useLanguage();

  const principles = [
    { icon: Ban, text: t('solution.difficult'), color: 'from-blue-500 to-blue-600' },
    { icon: Shield, text: t('solution.risky'), color: 'from-blue-600 to-indigo-600' },
    { icon: Lock, text: t('solution.traceable'), color: 'from-indigo-600 to-purple-600' },
    { icon: Zap, text: t('solution.notWorthIt'), color: 'from-purple-600 to-blue-600' },
  ];

  return (
    <section 
      id="solution"
      className="section-padding bg-slate-900 relative overflow-hidden"
      data-testid="solution-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text text-blue-400 mb-4 block">{t('solution.label')}</span>
            <h2 className="heading-lg text-white mb-6">
              {t('solution.headline1')}<br />
              <span className="gradient-text">{t('solution.headline2')}</span>
            </h2>
            <p className="body-text text-slate-400 text-lg mb-8">
              {t('solution.description')}{' '}
              <strong className="text-white">{t('solution.highlight')}</strong> {t('solution.forLive')}
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-4 mb-10">
              <span className="px-6 py-3 bg-slate-800 rounded-full font-barlow font-semibold text-white uppercase tracking-wider border border-slate-700">
                {t('solution.tag1')}
              </span>
              <span className="px-6 py-3 bg-slate-800 rounded-full font-barlow font-semibold text-white uppercase tracking-wider border border-slate-700">
                {t('solution.tag2')}
              </span>
              <span className="px-6 py-3 bg-blue-600 rounded-full font-barlow font-semibold text-white uppercase tracking-wider">
                {t('solution.tag3')}
              </span>
            </div>

            <p className="font-inter text-slate-300 text-lg">
              {t('solution.designedTo')}
            </p>
          </motion.div>

          {/* Right Content - Principles */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                  <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-colors feature-card">
                    <div className="w-16 h-16 rounded-xl bg-slate-700/50 flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-red-500 text-xl">✗</span>
                      <span className="font-barlow font-bold text-xl text-white uppercase tracking-tight">
                        {principle.text}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
