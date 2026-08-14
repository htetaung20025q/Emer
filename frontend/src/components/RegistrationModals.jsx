import { useEffect, useState } from 'react';
import DonorRegistrationForm from './forms/DonorRegistrationForm';
import BloodRequestForm from './forms/BloodRequestForm';

export default function RegistrationModals({ activeModal, onClose }) {
  // activeModal can be 'volunteer', 'user', or null
  const [formLang, setFormLang] = useState('mm');

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      // Reset language to default when opening a new modal
      setFormLang('mm');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModal]);

  if (!activeModal) return null;

  const isVolunteer = activeModal === 'volunteer';
  const modalTitle = isVolunteer 
    ? (formLang === 'mm' ? "စေတနာ့ဝန်ထမ်း သွေးလှူရှင် မှတ်ပုံတင်ခြင်း" : "Volunteer Blood Donor Registration")
    : (formLang === 'mm' ? "အရေးပေါ် သွေးတောင်းခံခြင်း" : "Emergency Blood Request");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 overflow-hidden">
        
        {/* Header */}
        <div className={`p-5 sm:p-6 text-white ${isVolunteer ? 'bg-slate-900' : 'bg-red-600'} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0`}>
          <h2 className="text-xl sm:text-2xl font-black flex-1 pr-8 sm:pr-0">
            {modalTitle}
          </h2>
          
          <div className="flex items-center gap-4">
            {/* Language Toggle switch */}
            <div className="flex bg-black/20 p-1 rounded-lg">
              <button 
                onClick={() => setFormLang('mm')}
                className={`px-3 py-1.5 text-sm font-bold rounded-md transition-colors ${formLang === 'mm' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'}`}
              >
                မြန်မာ
              </button>
              <button 
                onClick={() => setFormLang('en')}
                className={`px-3 py-1.5 text-sm font-bold rounded-md transition-colors ${formLang === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-white/80 hover:text-white'}`}
              >
                English
              </button>
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 sm:static sm:top-auto sm:right-auto p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-8 overflow-y-auto">
          {isVolunteer ? (
            <DonorRegistrationForm lang={formLang} onClose={onClose} />
          ) : (
            <BloodRequestForm lang={formLang} onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}
