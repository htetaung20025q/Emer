import { useState, useEffect } from 'react';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import MainContent from './components/MainContent';
import UseCases from './components/UseCases';
import LearnApp from './components/LearnApp';
import HowToUse from './components/HowToUse';
import AboutUs from './components/AboutUs';

import Privacy from './components/Privacy';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import FirstAidModal from './components/FirstAidModal';
import ChatModal from './components/ChatModal';
import UserGuide from './components/UserGuide';
import LegalModals from './components/LegalModals';
import RegistrationModals from './components/RegistrationModals';
import PrivacyConsentModal from './components/PrivacyConsentModal';

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'en';
  });
  
  useEffect(() => {
    localStorage.setItem('preferredLanguage', lang);
  }, [lang]);

  const [isFirstAidModalOpen, setIsFirstAidModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [activeLegalModal, setActiveLegalModal] = useState(null);
  const [activeRegistrationModal, setActiveRegistrationModal] = useState(null);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {currentView !== 'about' && (
        <Navbar lang={lang} setLang={setLang} t={t} onOpenChat={() => setIsChatOpen(true)} onNavigateHome={() => setCurrentView('home')} onOpenRegistration={setActiveRegistrationModal} />
      )}
      
      {currentView === 'home' && (
        <>
          <Hero t={t} onOpenFirstAid={() => setIsFirstAidModalOpen(true)} onNavigateGuide={() => setCurrentView('guide')} onNavigateLearn={() => setCurrentView('learn')} />
          <MainContent t={t} />

          <UseCases t={t} />
          <Privacy t={t} />
          <DownloadApp t={t} />
        </>
      )}

      {currentView === 'guide' && (
        <UserGuide t={t} lang={lang} />
      )}

      {currentView === 'learn' && (
        <>
          <LearnApp t={t} />
          <HowToUse />
        </>
      )}

      {currentView === 'about' && (
        <AboutUs />
      )}

      <Footer t={t} onOpenLegal={setActiveLegalModal} onNavigateAbout={() => { setCurrentView('about'); window.scrollTo(0, 0); }} />
      <FirstAidModal t={t} isOpen={isFirstAidModalOpen} onClose={() => setIsFirstAidModalOpen(false)} />
      <ChatModal t={t} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <LegalModals t={t} activeModal={activeLegalModal} onClose={() => setActiveLegalModal(null)} />
      <RegistrationModals activeModal={activeRegistrationModal} onClose={() => setActiveRegistrationModal(null)} />
      <PrivacyConsentModal t={t} />
    </div>
  );
}

export default App;
