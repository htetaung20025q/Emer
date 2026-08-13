export default function LearnApp({ t }) {
  return (
    <section id="learn-app" className="bg-slate-50 py-20 md:py-32 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between relative gap-12 lg:gap-4 mt-8 md:mt-12">
          
          {/* Left Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12 lg:gap-32 z-30 order-2 lg:order-1">
            
            {/* Feature 1 */}
            <div className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-slate-100 lg:border-none">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 lg:mx-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.f1Title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.f1Desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-slate-100 lg:border-none">
              <div className="w-12 h-12 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center mb-4 lg:mx-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.f2Title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.f2Desc}</p>
            </div>
            
          </div>

          {/* Center iPhone Mockup */}
          <div className="w-full sm:w-2/3 lg:w-1/3 flex justify-center z-20 order-1 lg:order-2 relative">
            
            {/* Dotted Arrows Overlay (Anchored to center of phone for pixel-perfect targeting) */}
            <svg className="hidden lg:block absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1 -translate-y-1 overflow-visible z-40 text-slate-400 pointer-events-none">
              <defs>
                <marker id="arrowTarget" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>
              
              {/* Top-Left to SOS Button (Center is approx 0, -120) */}
              <path d="M -300 -180 Q -150 -180 -15 -130" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" markerEnd="url(#arrowTarget)" />
              
              {/* Bottom-Left to Location Card (Center is approx 0, 10) */}
              <path d="M -300 120 Q -150 120 -15 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" markerEnd="url(#arrowTarget)" />
              
              {/* Top-Right to FIRST AID Button (Right Grid Item, approx +40, 100) */}
              <path d="M 300 -120 Q 150 -120 50 85" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" markerEnd="url(#arrowTarget)" />

              {/* Bottom-Right to VOLUNTEERS Button (Left Grid Item, approx -40, 100) */}
              <path d="M 300 180 Q 150 180 -35 110" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6,6" markerEnd="url(#arrowTarget)" />
            </svg>

            <div className="w-[300px] h-[620px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-200">
              {/* iPhone Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-30"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden flex flex-col relative">
                {/* Header UI */}
                <div className="bg-red-600 pt-10 pb-6 px-4 text-center rounded-b-3xl shadow-md z-20">
                  <h4 className="text-white font-black tracking-widest uppercase text-xl">KU NYI KAL SAL</h4>
                  <p className="text-red-100 text-xs font-semibold uppercase mt-1 tracking-wider">Emergency Mode</p>
                </div>
                
                {/* Dashboard Elements */}
                <div className="flex-1 p-4 flex flex-col gap-4 mt-2">
                  <div className="w-full h-40 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center p-4">
                    <div className="w-24 h-24 rounded-full bg-red-100 border-4 border-white shadow flex items-center justify-center animate-pulse">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                        SOS
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-slate-800 rounded-2xl shadow-sm p-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex shrink-0 items-center justify-center text-green-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Location</div>
                      <div className="text-white text-sm font-semibold truncate w-32">Yangon, Myanmar</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"/></svg>
                      </div>
                      <div className="text-[10px] font-bold text-slate-700 uppercase">Volunteers</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center gap-2">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      </div>
                      <div className="text-[10px] font-bold text-slate-700 uppercase">First Aid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12 lg:gap-32 z-30 lg:text-right order-3">
            
            {/* Feature 3 */}
            <div className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-slate-100 lg:border-none flex flex-col lg:items-end">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 lg:mx-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.f3Title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.f3Desc}</p>
            </div>

            {/* Feature 4 */}
            <div className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-slate-100 lg:border-none flex flex-col lg:items-end">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 lg:mx-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.f4Title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.f4Desc}</p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
