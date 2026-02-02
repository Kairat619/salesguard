import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', label: 'EN', fullName: 'English' },
  { code: 'kz', label: 'KZ', fullName: 'Қазақша' },
  { code: 'ru', label: 'RU', fullName: 'Русский' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <div className="relative" data-testid="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors"
        data-testid="language-switcher-btn"
      >
        <Globe className="w-4 h-4 text-slate-400" />
        <span className="font-inter text-sm font-medium text-white">{currentLang.label}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-700 transition-colors ${
                    language === lang.code ? 'bg-blue-600/20' : ''
                  }`}
                  data-testid={`lang-option-${lang.code}`}
                >
                  <span className={`font-inter text-sm font-semibold ${
                    language === lang.code ? 'text-blue-400' : 'text-white'
                  }`}>
                    {lang.label}
                  </span>
                  <span className={`font-inter text-xs ${
                    language === lang.code ? 'text-blue-300' : 'text-slate-400'
                  }`}>
                    {lang.fullName}
                  </span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
