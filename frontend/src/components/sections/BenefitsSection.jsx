import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Workflow, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const CTA_LINK = 'https://live-sales-inventory-main.vercel.app';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Eye,
      title: t('benefits.benefit1.title'),
      description: t('benefits.benefit1.description'),
    },
    {
      icon: Workflow,
      title: t('benefits.benefit2.title'),
      description: t('benefits.benefit2.description'),
    },
    {
      icon: ShieldCheck,
      title: t('benefits.benefit3.title'),
      description: t('benefits.benefit3.description'),
    },
    {
      icon: DollarSign,
      title: t('benefits.benefit4.title'),
      description: t('benefits.benefit4.description'),
    },
  ];

  return (
    <section 
      id="benefits"
      className="section-padding bg-slate-900 relative overflow-hidden"
      data-testid="benefits-section"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Image Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 hidden lg:block">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768796373708-e1b62a0f2900?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text text-blue-400 mb-4 block">{t('benefits.label')}</span>
            <h2 className="heading-lg text-white mb-6">
              {t('benefits.headline1')}<br />
              <span className="gradient-text">{t('benefits.headline2')}</span>
            </h2>

            {/* Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-barlow font-bold text-lg text-white uppercase tracking-tight mb-2">
                      {benefit.title}
                    </h3>
                    <p className="font-inter text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 text-lg btn-shine"
                data-testid="benefits-cta-btn"
              >
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  {t('benefits.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual (Mobile visible) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1768796373708-e1b62a0f2900?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
              alt="Organized logistics"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
