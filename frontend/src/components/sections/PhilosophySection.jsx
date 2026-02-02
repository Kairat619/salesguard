import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Scale } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="section-padding bg-slate-900 relative overflow-hidden"
      data-testid="philosophy-section"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="label-text text-blue-400 mb-4 block">{t('philosophy.label')}</span>
          
          {/* Main Philosophy */}
          <div className="glass rounded-3xl p-10 md:p-16 mb-12">
            <div className="flex justify-center gap-8 mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
              >
                <Brain className="w-10 h-10 text-blue-400" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center"
              >
                <Scale className="w-10 h-10 text-blue-400" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="heading-lg text-white mb-8">
                {t('philosophy.headline1')}<br />
                <span className="gradient-text">{t('philosophy.headline2')}</span>
              </h2>
              
              <p className="font-inter text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                {t('philosophy.subheadline')}
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12">
                <div className="bg-slate-800/50 rounded-xl px-8 py-6 border border-red-500/30">
                  <p className="font-inter text-slate-400 mb-2">{t('philosophy.dontRelyOn')}</p>
                  <p className="font-barlow font-bold text-2xl text-red-400 uppercase tracking-tight">
                    {t('philosophy.goodPeople')}
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-xl px-8 py-6 border border-green-500/30">
                  <p className="font-inter text-slate-400 mb-2">{t('philosophy.relyOn')}</p>
                  <p className="font-barlow font-bold text-2xl text-green-400 uppercase tracking-tight">
                    {t('philosophy.goodSystems')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
