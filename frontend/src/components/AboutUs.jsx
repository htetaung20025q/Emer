import React from 'react';

export default function AboutUs() {
  return (
    <>
      <div className="bg-white min-h-[calc(100vh-80px)] font-sans text-slate-800 flex flex-col items-center pt-16 pb-24 px-6 md:px-12 relative border-t border-slate-200">
        
        {/* Main Content */}
        <div className="max-w-3xl w-full text-center mt-8 md:mt-12">
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            About Us
          </h1>
          
          {/* Subtitle / Quote */}
          <div className="text-xl md:text-2xl italic text-slate-500 font-light mb-8">
            "No one can measure the value of a single human life."
          </div>
          
          {/* Divider */}
          <hr className="border-t-2 border-red-600 w-16 mx-auto mb-10" />
          
          {/* Main Content Text */}
          <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-slate-600">
            <p>
              In every emergency situation, every second counts. Each moment can mean the difference between life and death.
            </p>
            
            <p>
              Why was the <strong>KU NYI KAL SAL</strong> Application created? Because we believe everyone should have a ready-to-use tool in their pocket for critical moments.
            </p>
            
            <p>
              Our mission is to ensure every user stays safe and receives the help they need as quickly as possible, completely free of charge.
            </p>
            
            <p>
              This App includes essential features like SOS Alert, Location Sharing, Contact Relatives, and offline Medical Info — all designed to be simple and accessible for everyone.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 flex flex-col items-center gap-3">
            <div className="text-lg md:text-xl font-bold text-red-600 tracking-wider uppercase">
              Be prepared to help
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-800">
              ကူညီဖို့ အသင့်ပါ
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
