import { useState } from 'react';

export default function Navbar({ lang, setLang, t }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        
        {/* Mobile Left: Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 -ml-2 outline-none">
            <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Center/Left: Logo */}
        <div className="text-lg md:text-xl font-bold uppercase tracking-wide text-red-600 flex-1 text-center md:text-left">
          KU NYI KAL SAL
        </div>

        {/* Desktop Right */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-slate-600 font-semibold text-sm">
            {t.navAbout}
          </a>
          
          <div className="flex items-center gap-2 text-sm select-none cursor-pointer">
            <span 
              onClick={() => setLang('en')} 
              className={lang === 'en' ? 'text-red-600 font-black' : 'text-slate-400 font-bold'}
            >
              EN
            </span>
            <span className="text-slate-300">/</span>
            <span 
              onClick={() => setLang('mm')} 
              className={lang === 'mm' ? 'text-red-600 font-black' : 'text-slate-400 font-bold'}
            >
              MM
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-bold text-slate-600">{t.systemStatus}</span>
          </div>

          <a href="#download" className="bg-red-600 text-white font-bold uppercase px-4 py-2 text-xs md:text-sm rounded-sm shadow-sm">
            {t.navDownload}
          </a>
        </nav>

        {/* Mobile Right */}
        <div className="md:hidden flex items-center">
          <a href="#download" className="bg-red-600 text-white font-bold uppercase px-3 py-1.5 text-xs rounded-sm shadow-sm">
            {t.navDownload}
          </a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-200 flex flex-col p-4 gap-4">
          <a href="#about" className="text-slate-600 font-semibold text-sm border-b border-slate-200 pb-2">
            {t.navAbout}
          </a>
          <div className="flex items-center gap-2 text-sm select-none cursor-pointer border-b border-slate-200 pb-2">
            <span 
              onClick={() => setLang('en')} 
              className={lang === 'en' ? 'text-red-600 font-black' : 'text-slate-400 font-bold'}
            >
              EN
            </span>
            <span className="text-slate-300">/</span>
            <span 
              onClick={() => setLang('mm')} 
              className={lang === 'mm' ? 'text-red-600 font-black' : 'text-slate-400 font-bold'}
            >
              MM
            </span>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-bold text-slate-600">{t.systemStatus}</span>
          </div>
        </div>
      )}
    </header>
  );
}
