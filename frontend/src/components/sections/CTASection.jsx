import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck, Play, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const CTA_LINK = 'https://live-sales-inventory-main.vercel.app';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section 
      className="section-padding bg-slate-950 relative overflow-hidden"
      data-testid="cta-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto container-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="label-text text-blue-400 mb-6 block">{t('cta.label')}</span>
          
          <h2 className="heading-xl text-white mb-6">
            {t('cta.headline1')}<br />
            <span className="gradient-text">{t('cta.headline2')}</span>
          </h2>

          <p className="font-inter text-xl text-slate-400 max-w-2xl mx-auto mb-6">
            {t('cta.subheadline')}
          </p>

          {/* Protection Points */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-5 py-2 bg-slate-800 rounded-full font-inter text-slate-300 border border-slate-700">
              {t('cta.protect1')}
            </span>
            <span className="px-5 py-2 bg-slate-800 rounded-full font-inter text-slate-300 border border-slate-700">
              {t('cta.protect2')}
            </span>
            <span className="px-5 py-2 bg-slate-800 rounded-full font-inter text-slate-300 border border-slate-700">
              {t('cta.protect3')}
            </span>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-7 text-lg btn-shine animate-pulse-glow"
              data-testid="cta-risk-assessment-btn"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5 mr-2" />
                {t('cta.riskAssessment')}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-7 text-lg"
              data-testid="cta-demo-btn"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                <Play className="w-5 h-5 mr-2" />
                {t('cta.requestDemo')}
              </a>
            </Button>
          </motion.div>

          {/* Talk to Experts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group"
              data-testid="cta-experts-link"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-inter font-medium">{t('cta.talkExperts')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
