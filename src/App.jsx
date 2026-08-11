import { useState } from 'react';
import { translations } from './translations';
import Navbar from './components/Navbar';
import OfflineBanner from './components/OfflineBanner';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import UseCases from './components/UseCases';
import LegalWarning from './components/LegalWarning';
import Privacy from './components/Privacy';
import SecurityBadges from './components/SecurityBadges';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  const [lang, setLang] = useState('mm');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <OfflineBanner t={t} />
      <Hero t={t} />
      <MainContent t={t} />
      <UseCases t={t} />
      <LegalWarning t={t} />
      <Privacy t={t} />
      <SecurityBadges t={t} />
      <Footer t={t} />
      <FloatingCallButton t={t} />
    </div>
  );
}

export default App;
