import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Play, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

const CTA_LINK = 'https://live-sales-inventory-main.vercel.app';

const HeroSection = () => {
  const { t } = useLanguage();

  const features = [
    t('hero.feature1'),
    t('hero.feature2'),
    t('hero.feature3'),
    t('hero.feature4'),
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1627915589334-14a3c3e3a741?crop=entropy&cs=srgb&fm=jpg&q=85')`,
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="label-text text-blue-400">{t('hero.badge')}</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="heading-xl text-white mb-6 leading-[1.1]">
              {t('hero.headline1')}
              <br />
              <span className="gradient-text">{t('hero.headline2')}</span>
            </h1>

            {/* Subheadline */}
            <p className="body-text text-slate-400 text-lg md:text-xl mb-8 max-w-xl">
              {t('hero.subheadline')}
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-inter text-slate-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 text-lg btn-shine animate-pulse-glow"
                data-testid="hero-demo-btn"
              >
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  {t('hero.requestDemo')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg"
                data-testid="hero-trial-btn"
              >
                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                  <Play className="w-5 h-5 mr-2" />
                  {t('hero.startTrial')}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Floating Dashboard Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="glass rounded-2xl p-6 shadow-2xl"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="label-text text-slate-400">{t('hero.dashboard')}</span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="label-text text-slate-500 mb-1">{t('hero.totalStock')}</p>
                    <p className="font-barlow text-2xl font-bold text-white">12,847</p>
                    <p className="text-xs text-green-400">+2.4% {t('hero.today')}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="label-text text-slate-500 mb-1">{t('hero.orders')}</p>
                    <p className="font-barlow text-2xl font-bold text-white">3,429</p>
                    <p className="text-xs text-blue-400">{t('hero.liveTracking')}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="label-text text-slate-500 mb-1">{t('hero.lossRate')}</p>
                    <p className="font-barlow text-2xl font-bold text-green-400">0.3%</p>
                    <p className="text-xs text-green-400">-89% {t('hero.fromAvg')}</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4">
                    <p className="label-text text-slate-500 mb-1">{t('hero.alerts')}</p>
                    <p className="font-barlow text-2xl font-bold text-white">0</p>
                    <p className="text-xs text-slate-400">{t('hero.allClear')}</p>
                  </div>
                </div>

                {/* Activity Log */}
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="label-text text-slate-500 mb-3">{t('hero.recentActivity')}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-slate-400">{t('hero.stockVerified')} - SKU#4521</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-slate-400">{t('hero.orderSynced')} - #ORD8834</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <span className="text-slate-400">{t('hero.auditComplete')} - Host A</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
