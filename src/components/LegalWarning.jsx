export default function LegalWarning({ t }) {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-red-50 border-l-8 border-red-600 p-8 md:p-12 shadow-sm rounded-r-lg">
          <h2 className="text-2xl md:text-3xl font-black text-red-600 uppercase mb-4 tracking-wide">
            {t.legalTitle}
          </h2>
          <p className="text-base md:text-lg text-slate-800 font-medium leading-relaxed">
            {t.legalDesc}
          </p>
        </div>
      </div>
    </section>
  );
}
