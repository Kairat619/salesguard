import React from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  ShoppingBag, 
  Store, 
  Users, 
  Rocket, 
  Building2,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const TargetUsersSection = () => {
  const { t } = useLanguage();

  const targetUsers = [
    { icon: Video, label: t('targetUsers.user1') },
    { icon: ShoppingBag, label: t('targetUsers.user2') },
    { icon: Store, label: t('targetUsers.user3') },
    { icon: Users, label: t('targetUsers.user4') },
    { icon: Rocket, label: t('targetUsers.user5') },
    { icon: Building2, label: t('targetUsers.user6') },
  ];

  return (
    <section 
      className="section-padding bg-white relative overflow-hidden"
      data-testid="target-users-section"
    >
      {/* Background Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden lg:block">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/6953825/pexels-photo-6953825.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white" />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Mobile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden"
          >
            <img
              src="https://images.pexels.com/photos/6953825/pexels-photo-6953825.jpeg"
              alt="Live streaming seller"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Spacer for desktop */}
          <div className="hidden lg:block" />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-text text-blue-600 mb-4 block">{t('targetUsers.label')}</span>
            <h2 className="heading-lg text-slate-900 mb-8">
              {t('targetUsers.headline1')}<br />
              <span className="text-blue-600">{t('targetUsers.headline2')}</span>
            </h2>

            {/* Target Users List */}
            <div className="space-y-5">
              {targetUsers.map((user, index) => (
                <motion.div
                  key={user.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 bg-slate-50 rounded-xl px-6 py-4 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <user.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex items-center gap-3 flex-1">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="font-inter font-medium text-slate-800">{user.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-10 p-6 bg-blue-600 rounded-2xl text-center"
            >
              <p className="font-barlow font-bold text-xl text-white uppercase tracking-tight">
                {t('targetUsers.tagline')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;
