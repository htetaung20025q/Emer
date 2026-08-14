export default function PhoneMockup({ t }) {
  return (
    <div className="border-[6px] border-slate-800 rounded-[2.5rem] w-full max-w-[260px] md:max-w-[300px] aspect-[1/2.1] bg-slate-50 relative overflow-hidden flex flex-col shadow-2xl p-1 mx-auto pointer-events-auto">
      
      {/* Notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-800 rounded-b-3xl z-30 flex justify-center items-center">
        <div className="w-12 h-1.5 bg-slate-900 rounded-full mt-1"></div>
      </div>

      <div className="w-full h-full z-10 rounded-[2rem] overflow-hidden flex flex-col relative bg-slate-100">
        
        {/* Map Background Simulation */}
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{
          backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
          backgroundSize: '16px 16px'
        }}></div>

        {/* Status Bar */}
        <div className="w-full h-12 bg-white/90 backdrop-blur-sm z-20 flex justify-between items-end px-6 pb-2 text-[10px] font-bold text-slate-800 relative shadow-sm">
          <span>9:41</span>
          <div className="flex gap-1 items-end pb-0.5">
            <div className="w-3 h-2.5 bg-slate-800 rounded-[2px]"></div>
            <div className="w-4 h-2.5 bg-slate-800 rounded-[2px]"></div>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-white px-4 py-3 shadow-sm z-10 flex items-center justify-between relative">
          <div className="font-black text-red-600 text-xs tracking-wider">KHU NYI KAL SAL</div>
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main App Content */}
        <div className="flex-1 flex flex-col p-4 relative z-10 gap-4">
          
          {/* Location Card */}
          <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
               <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <div>
               <div className="text-[10px] font-bold text-slate-400 uppercase">Current Location</div>
               <div className="text-[11px] font-semibold text-slate-800 mt-0.5">16.7984° N, 96.1495° E</div>
             </div>
          </div>

          {/* SOS Button Area */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-red-100/50 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="w-28 h-28 rounded-full bg-red-600 shadow-xl shadow-red-600/30 flex items-center justify-center text-white font-black text-3xl tracking-widest cursor-pointer hover:scale-105 transition-transform border-4 border-red-500">
                SOS
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-slate-900 rounded-xl p-4 text-white shadow-lg">
             <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">Responders Notified</div>
             <div className="flex items-center gap-3">
               <div className="flex -space-x-2">
                 <div className="w-7 h-7 rounded-full bg-slate-700 border-2 border-slate-900"></div>
                 <div className="w-7 h-7 rounded-full bg-slate-600 border-2 border-slate-900"></div>
                 <div className="w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-900"></div>
               </div>
               <div className="text-[11px] font-medium text-slate-200">+12 nearby units</div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
