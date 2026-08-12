export default function Footer({ t }) {
  const hotlines = [
    { name: t.police, number: "199" },
    { name: t.hospital, number: "192" },
    { name: t.fire, number: "191" },
    { name: t.redcross, number: "+95 1 383 681" }
  ];

  return (
    <footer className="bg-slate-900 pt-20 pb-12 px-4 md:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Area (Hotlines) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
            {t.hotlineTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {hotlines.map((hotline, idx) => (
              <div key={idx} className="bg-slate-800/40 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-3">
                  {hotline.name}
                </div>
                <div className="text-red-500 font-black text-4xl md:text-5xl">
                  {hotline.number}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Middle Divider */}
        <div className="border-t border-slate-800 my-12"></div>
        
        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm font-medium">
            {t.copyright}
          </div>
          <div className="text-slate-400 text-sm font-medium">
            {t.privacyLink} | {t.termsLink}
          </div>
        </div>

      </div>
    </footer>
  );
}
