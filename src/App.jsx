import { useState } from 'react';
import { translations } from './translations';
import Navbar from './components/Navbar';
import OfflineBanner from './components/OfflineBanner';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import UseCases from './components/UseCases';
import LegalWarning from './components/LegalWarning';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import FirstAidModal from './components/FirstAidModal';

function App() {
  const [lang, setLang] = useState('mm');
  const [isFirstAidModalOpen, setIsFirstAidModalOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <OfflineBanner t={t} onOpenFirstAid={() => setIsFirstAidModalOpen(true)} />
      <Hero t={t} />
      <MainContent t={t} />
      <UseCases t={t} />
      <LegalWarning t={t} />
      <Privacy t={t} />
      <Footer t={t} />
      <FloatingCallButton t={t} />
      <FirstAidModal t={t} isOpen={isFirstAidModalOpen} onClose={() => setIsFirstAidModalOpen(false)} />
    </div>
  );
}

export default App;
