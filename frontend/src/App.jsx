import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import UseCases from './components/UseCases';
import HowToUse from './components/HowToUse';
import AboutUs from './components/AboutUs';
import Privacy from './components/Privacy';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import FirstAidModal from './components/FirstAidModal';
import ChatModal from './components/ChatModal';
import UserGuide from './components/UserGuide';
import LegalModals from './components/LegalModals';
import PrivacyConsentModal from './components/PrivacyConsentModal';
import TryOutPage from './pages/TryOutPage';

function MainApp() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'en';
  });
  
  useEffect(() => {
    localStorage.setItem('preferredLanguage', lang);
  }, [lang]);

  const [isFirstAidModalOpen, setIsFirstAidModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const [activeLegalModal, setActiveLegalModal] = useState(null);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar lang={lang} setLang={setLang} t={t} onOpenChat={() => setIsChatOpen(true)} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero t={t} onOpenFirstAid={() => setIsFirstAidModalOpen(true)} />
            <MainContent t={t} />
            <UseCases t={t} />
            <Privacy t={t} />
            <DownloadApp t={t} />
          </>
        } />
        <Route path="/guide" element={<UserGuide t={t} lang={lang} />} />
        <Route path="/learn" element={
          <>
            <HowToUse />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer t={t} onOpenLegal={setActiveLegalModal} />
      <FirstAidModal t={t} isOpen={isFirstAidModalOpen} onClose={() => setIsFirstAidModalOpen(false)} />
      <ChatModal t={t} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <LegalModals t={t} activeModal={activeLegalModal} onClose={() => setActiveLegalModal(null)} />
      <PrivacyConsentModal t={t} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/try-out" element={<TryOutPage />} />
      </Routes>
    </Router>
  );
}

export default App;