export default function Hero({ t, onOpenFirstAid, onNavigateGuide, onNavigateLearn }) {
  return (
    <section className="bg-slate-900 text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-xl font-medium text-slate-300 max-w-2xl mb-10">
          {t.heroSub}
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <button 
            onClick={onNavigateGuide}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-base tracking-wider uppercase px-8 py-4 rounded-full shadow-lg transition-colors outline-none flex items-center justify-center w-full sm:w-auto"
          >
            {t.userGuide}
          </button>
          <button 
            onClick={onNavigateLearn}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm md:text-base tracking-wider uppercase px-8 py-4 rounded-full shadow-lg transition-colors outline-none flex items-center justify-center w-full sm:w-auto border border-slate-700"
          >
            {t.learnApp}
          </button>
        </div>
      </div>
    </section>
  );
}
