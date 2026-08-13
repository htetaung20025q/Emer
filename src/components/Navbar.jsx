import { useState } from 'react';

export default function Navbar({ lang, setLang, t, onOpenChat, onNavigateHome, onOpenRegistration }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full border-b border-slate-100">
      <div className="w-full px-4 md:px-8 py-3 flex justify-between items-center">
        
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
        <button onClick={onNavigateHome} className="text-lg md:text-xl font-bold uppercase tracking-wide text-red-600 flex-1 text-left ml-3 md:ml-0 hover:text-red-700 transition-colors">
          KHU NYI KAL SAL
        </button>

        {/* Desktop Right */}
        <nav className="hidden md:flex items-center gap-6">
          
          {/* Be Our Partner Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPartnerDropdownOpen(true)}
            onMouseLeave={() => setIsPartnerDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 text-sm font-semibold text-slate-800 cursor-pointer py-2">
              {t.beOurPartner}
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            {isPartnerDropdownOpen && (
              <div className="absolute top-full right-0 w-40 bg-white shadow-lg rounded-lg border border-slate-100 overflow-hidden py-1">
                <button onClick={() => { onOpenRegistration('volunteer'); setIsPartnerDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                  {t.volunteer}
                </button>
                <button onClick={() => { onOpenRegistration('user'); setIsPartnerDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
                  {t.userMenu}
                </button>
              </div>
            )}
          </div>



          {/* Language Toggle */}
          <div className="flex items-center text-sm py-2">
            <span 
              onClick={() => setLang('en')}
              className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-red-600 font-bold' : 'text-slate-400 font-medium hover:text-slate-600'}`}
            >
              EN
            </span>
            <span className="text-gray-300 mx-2 select-none">/</span>
            <span 
              onClick={() => setLang('mm')}
              className={`cursor-pointer transition-colors ${lang === 'mm' ? 'text-red-600 font-bold' : 'text-slate-400 font-medium hover:text-slate-600'}`}
            >
              MM
            </span>
          </div>
          
          <a href="#download" className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold tracking-wide uppercase px-5 py-2.5 rounded-full shadow transition-colors outline-none ml-2">
            {t.navDownload}
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-50 border-t border-slate-200 flex flex-col p-4 gap-4">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-4">
            <div className="text-xs uppercase text-slate-500 font-bold mb-1">{t.beOurPartner}</div>
            <button onClick={() => { onOpenRegistration('volunteer'); setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-slate-700 hover:text-red-600">{t.volunteer}</button>
            <button onClick={() => { onOpenRegistration('user'); setIsMenuOpen(false); }} className="text-left text-sm font-semibold text-slate-700 hover:text-red-600">{t.userMenu}</button>
          </div>
          


          <div className="flex items-center gap-2">
            <div className="text-xs uppercase text-slate-500 font-bold mr-2">Language:</div>
            <div className="flex items-center text-sm">
              <span 
                onClick={() => { setLang('en'); setIsMenuOpen(false); }}
                className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-red-600 font-bold' : 'text-slate-400 font-medium hover:text-slate-600'}`}
              >
                EN
              </span>
              <span className="text-gray-300 mx-2 select-none">/</span>
              <span 
                onClick={() => { setLang('mm'); setIsMenuOpen(false); }}
                className={`cursor-pointer transition-colors ${lang === 'mm' ? 'text-red-600 font-bold' : 'text-slate-400 font-medium hover:text-slate-600'}`}
              >
                MM
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
