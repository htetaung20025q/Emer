import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import demoImage from './image_0f7ac3.jpg';

export default function TryOutPage() {
  const [isSosPending, setIsSosPending] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Disclaimer Banner - CRUCIAL REQUIREMENT */}
      <div className="w-full bg-yellow-400 text-slate-900 font-bold text-center py-4 px-4 shadow-md z-50 sticky top-0">
        ⚠️ သတိပြုရန်: ဤနေရာသည် အက်ပ်အသုံးပြုပုံကို စမ်းသပ်လေ့လာရန် (Interactive Demo) သက်သက်သာဖြစ်ပြီး၊ တကယ့်အရေးပေါ်အခြေအနေတွင် အလုပ်လုပ်မည်မဟုတ်ပါ။
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 md:top-8 md:left-8 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </Link>

        {/* Realistic Phone Mockup Container */}
        <div className="w-[320px] h-[650px] bg-slate-900 rounded-[3rem] border-[12px] border-slate-900 shadow-2xl relative flex flex-col items-center justify-center mt-12 md:mt-0 overflow-hidden">
          
          {/* Hardware Notch */}
          <div className="absolute top-0 w-36 h-7 bg-slate-900 rounded-b-2xl z-30"></div>

          {/* Screen Display */}
          <div className="w-full h-full bg-white rounded-[2rem] relative overflow-hidden">
            
            {/* Top Status Bar Crop Wrapper */}
            <div className="w-full h-full overflow-hidden">
              <img 
                src={demoImage} 
                alt="App Demo Interface" 
                className="w-full h-auto object-cover -mt-8"
              />
            </div>

            {/* Invisible SOS Button Overlay */}
            <button
              onClick={() => setIsSosPending(true)}
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full cursor-pointer z-10 focus:outline-none"
              aria-label="Trigger SOS"
            ></button>

            {/* SOS Pending Notification */}
            {isSosPending && (
              <div className="absolute top-10 left-0 w-full px-4 z-20 animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="bg-red-600 text-white text-sm font-bold text-center py-2.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  SOS Pending...
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
