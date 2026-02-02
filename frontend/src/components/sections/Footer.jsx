import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CTA_LINK = 'https://live-sales-inventory-main.vercel.app';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-slate-950 border-t border-slate-800 py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            data-testid="footer-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="font-barlow font-bold text-xl text-white tracking-tight">
              SALES<span className="text-blue-500">GUARD</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-slate-400 hover:text-white transition-colors"
              data-testid="footer-privacy"
            >
              {t('footer.privacy')}
            </a>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-slate-400 hover:text-white transition-colors"
              data-testid="footer-terms"
            >
              {t('footer.terms')}
            </a>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm text-slate-400 hover:text-white transition-colors"
              data-testid="footer-contact"
            >
              {t('footer.contact')}
            </a>
          </div>

          {/* Copyright */}
          <p className="font-inter text-sm text-slate-500">
            © {currentYear} SalesGuard. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
