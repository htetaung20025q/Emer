export default function OfflineBanner({ t, onOpenFirstAid }) {
  return (
    <div className="bg-slate-100 border-b border-slate-200 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
          <span className="font-bold text-slate-800 text-sm md:text-base">{t.offlineAvailable}</span>
          <span className="text-slate-600 text-xs md:text-sm">{t.offlineDesc}</span>
        </div>
        <button 
          onClick={onOpenFirstAid}
          className="border-2 border-slate-800 text-slate-800 font-bold text-xs uppercase px-4 py-2 rounded-sm bg-white outline-none"
        >
          {t.saveOffline}
        </button>
      </div>
    </div>
  );
}
