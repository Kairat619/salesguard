import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const CTA_LINK = 'https://live-sales-inventory-main.vercel.app';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.problem'), href: '#problem', key: 'problem' },
    { label: t('nav.solution'), href: '#solution', key: 'solution' },
    { label: t('nav.howItWorks'), href: '#how-it-works', key: 'how-it-works' },
    { label: t('nav.benefits'), href: '#benefits', key: 'benefits' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            data-testid="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="font-barlow font-bold text-xl text-white tracking-tight hidden sm:block">
              SALES<span className="text-blue-500">GUARD</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="font-inter text-sm text-slate-300 hover:text-white transition-colors"
                data-testid={`nav-link-${link.key}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              asChild
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
              data-testid="nav-demo-btn"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                {t('nav.requestDemo')}
              </a>
            </Button>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold btn-shine"
              data-testid="nav-trial-btn"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                {t('nav.startTrial')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="font-inter text-slate-300 hover:text-white px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.key}`}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 px-4 mt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 w-full"
                  data-testid="mobile-demo-btn"
                >
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                    {t('nav.requestDemo')}
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-500 text-white w-full"
                  data-testid="mobile-trial-btn"
                >
                  <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
                    {t('nav.startTrial')}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
