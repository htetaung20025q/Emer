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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t.hotlineTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotlines.map((hotline, idx) => (
              <div key={idx} className="bg-slate-800/50 border-l-2 border-red-600 p-6 flex flex-col justify-center">
                <div className="text-white font-medium mb-3">
                  {hotline.name}
                </div>
                <div className="text-red-500 text-3xl font-bold tracking-widest">
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
