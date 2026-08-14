import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

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

import AdminLogin from './pages/AdminLogin'; 
import AdminDashboard from './pages/AdminDashboard';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/admin/me', {
          credentials: 'include'
        });
        if (res.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div className="flex justify-center items-center min-h-screen">Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};

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
  const [activeRegistrationModal, setActiveRegistrationModal] = useState(null);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {location.pathname !== '/about' && (
        <Navbar lang={lang} setLang={setLang} t={t} onOpenChat={() => setIsChatOpen(true)} onOpenRegistration={setActiveRegistrationModal} />
      )}
      
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
            <LearnApp t={t} />
            <HowToUse />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

      <Footer t={t} onOpenLegal={setActiveLegalModal} />
      <FirstAidModal t={t} isOpen={isFirstAidModalOpen} onClose={() => setIsFirstAidModalOpen(false)} />
      <ChatModal t={t} isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <LegalModals t={t} activeModal={activeLegalModal} onClose={() => setActiveLegalModal(null)} />
      <RegistrationModals activeModal={activeRegistrationModal} onClose={() => setActiveRegistrationModal(null)} />
      <PrivacyConsentModal t={t} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;