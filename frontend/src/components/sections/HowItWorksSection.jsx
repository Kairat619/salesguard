import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  FileText, 
  Users, 
  Link2, 
  Bell, 
  LayoutDashboard,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: TrendingDown,
      number: '01',
      title: t('howItWorks.feature1.title'),
      description: t('howItWorks.feature1.description'),
      highlight: t('howItWorks.feature1.highlight'),
      color: 'blue'
    },
    {
      icon: FileText,
      number: '02',
      title: t('howItWorks.feature2.title'),
      description: t('howItWorks.feature2.description'),
      highlight: t('howItWorks.feature2.highlight'),
      details: t('howItWorks.feature2.details'),
      color: 'green'
    },
    {
      icon: Users,
      number: '03',
      title: t('howItWorks.feature3.title'),
      description: t('howItWorks.feature3.description'),
      highlight: t('howItWorks.feature3.highlight'),
      color: 'purple'
    },
    {
      icon: Link2,
      number: '04',
      title: t('howItWorks.feature4.title'),
      description: t('howItWorks.feature4.description'),
      highlight: t('howItWorks.feature4.highlight'),
      color: 'orange'
    },
    {
      icon: Bell,
      number: '05',
      title: t('howItWorks.feature5.title'),
      description: t('howItWorks.feature5.description'),
      highlight: t('howItWorks.feature5.highlight'),
      color: 'red'
    },
    {
      icon: LayoutDashboard,
      number: '06',
      title: t('howItWorks.feature6.title'),
      description: t('howItWorks.feature6.description'),
      highlight: t('howItWorks.feature6.highlight'),
      color: 'cyan'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    green: 'bg-green-500/10 border-green-500/30 text-green-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    red: 'bg-red-500/10 border-red-500/30 text-red-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  };

  return (
    <section 
      id="how-it-works"
      className="section-padding bg-white relative overflow-hidden"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="label-text text-blue-600 mb-4 block">{t('howItWorks.label')}</span>
          <h2 className="heading-lg text-slate-900 mb-6">
            {t('howItWorks.headline1')}<br />
            <span className="text-blue-600">{t('howItWorks.headline2')}</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="bg-slate-50 rounded-2xl p-8 h-full border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 feature-card">
                {/* Number */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colorClasses[feature.color]} border mb-6`}>
                  <span className="font-barlow font-bold text-sm">{feature.number}</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 border border-slate-100">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="font-barlow font-bold text-lg text-slate-900 uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Details (if any) */}
                {feature.details && Array.isArray(feature.details) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.details.map((detail) => (
                      <span key={detail} className="px-3 py-1 bg-slate-200 rounded-full text-xs font-medium text-slate-700">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlight */}
                <div className="flex items-start gap-2 mt-auto pt-4 border-t border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="font-inter font-medium text-sm text-slate-800">
                    {feature.highlight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
