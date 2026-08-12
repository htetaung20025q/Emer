export default function FirstAidModal({ t, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl rounded-none">
        
        {/* Header */}
        <div className="bg-red-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-wide">{t.firstAidTitle}</h2>
          <button onClick={onClose} className="outline-none focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Body Area */}
        <div className="p-6 md:p-8 overflow-y-auto flex flex-col gap-8">
          
          <div className="border-b border-slate-200 pb-6 last:border-0">
            <h3 className="text-red-700 font-bold text-lg mb-2">{t.faCPRTitle}</h3>
            <p className="text-slate-800 leading-relaxed text-base">{t.faCPRDesc}</p>
          </div>

          <div className="border-b border-slate-200 pb-6 last:border-0">
            <h3 className="text-red-700 font-bold text-lg mb-2">{t.faBleedingTitle}</h3>
            <p className="text-slate-800 leading-relaxed text-base">{t.faBleedingDesc}</p>
          </div>

          <div className="border-b border-slate-200 pb-6 last:border-0">
            <h3 className="text-red-700 font-bold text-lg mb-2">{t.faBurnsTitle}</h3>
            <p className="text-slate-800 leading-relaxed text-base">{t.faBurnsDesc}</p>
          </div>

          <div className="border-b border-slate-200 pb-6 last:border-0">
            <h3 className="text-red-700 font-bold text-lg mb-2">{t.faChokingTitle}</h3>
            <p className="text-slate-800 leading-relaxed text-base">{t.faChokingDesc}</p>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 p-4 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-red-600 text-white px-6 py-2 font-bold outline-none rounded-none"
          >
            {t.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
