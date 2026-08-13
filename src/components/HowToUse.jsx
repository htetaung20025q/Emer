import React from 'react';

export default function HowToUse() {
  const steps = [
    {
      number: '01.',
      title: 'အကောင့်ဖွင့်ပြီး မှတ်ပုံတင်ပါ',
      desc: 'အက်ပ်ကို ဒေါင်းလုဒ်လုပ်ပြီး သင့်ဖုန်းနံပါတ် သို့မဟုတ် အီးမေးလ်ဖြင့် မှတ်ပုံတင်ပါ။'
    },
    {
      number: '02.',
      title: 'ကိုယ်ရေးအချက်အလက် ဖြည့်သွင်းပါ (Complete Profile)',
      desc: 'သွေးအမျိုးအစား၊ အသက်နှင့် အရေးပေါ်ဆက်သွယ်ရန် နံပါတ်များကို ဖြည့်သွင်းပါ။'
    },
    {
      number: '03.',
      title: 'မြေပုံကို ကြည့်ရှုပါ (View Map)',
      desc: 'မြေပုံပေါ်တွင် သင့်တည်နေရာနှင့် အနီးနားရှိ အရေးပေါ်ဌာနများကို ကြည့်ရှုပါ။'
    },
    {
      number: '04.',
      title: 'SOS ပို့ရန် (Initiate SOS)',
      desc: 'အရေးပေါ်အခြေအနေတွင် SOS ခလုတ်ကို ၃ စက္ကန့်ကြာ ဖိနှိပ်ပါ။'
    },
    {
      number: '05.',
      title: 'အကူအညီအမျိုးအစား ရွေးချယ်ပါ',
      desc: 'ဆေးဘက်ဆိုင်ရာ၊ မီးဘေး၊ သို့မဟုတ် ရဲအကူအညီ လိုအပ်သည်ကို ရွေးချယ်ပါ။'
    },
    {
      number: '06.',
      title: 'လမ်းညွှန်ချက်များကို လေ့လာပါ',
      desc: 'အော့ဖ်လိုင်း ရှင်းလင်းအကူအညီ လမ်းညွှန်ချက်များကို ဖတ်ရှုပါ။'
    },
    {
      number: '07.',
      title: 'စေတနာ့ဝန်ထမ်း ရှာဖွေပါ',
      desc: 'အနီးနားရှိ စေတနာ့ဝန်ထမ်းများကို မြေပုံပေါ်တွင် ရှာဖွေပါ။'
    },
    {
      number: '08.',
      title: 'အကူအညီပေးသူများနှင့် ချိတ်ဆက်ပါ',
      desc: 'အကူအညီပေးသူများနှင့် တိုက်ရိုက် စကားပြောပါ သို့မဟုတ် ဖုန်းခေါ်ဆိုပါ။'
    }
  ];

  const leftColumnSteps = steps.filter((_, i) => i % 2 === 0);
  const rightColumnSteps = steps.filter((_, i) => i % 2 !== 0);

  const renderStep = (step) => (
    <div key={step.number} className="relative pl-12 md:pl-16 flex w-full">
      {/* Marker */}
      <div className="absolute left-[19px] md:left-[27px] top-8 w-4 h-4 bg-blue-400 rounded-full ring-4 ring-slate-50 z-10 shadow-sm"></div>
      
      {/* Card */}
      <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow p-5 md:p-6 flex items-stretch gap-4 md:gap-6">
        
        {/* Text Area */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center font-black tracking-widest text-sm mb-3 border border-blue-100 shadow-sm">
            {step.number.replace('.', '')}
          </div>
          <h4 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-2">{step.title}</h4>
          <p className="text-slate-500 text-sm md:text-sm leading-relaxed">{step.desc}</p>
        </div>

        {/* Image Area */}
        <div className="w-16 sm:w-20 md:w-24 bg-slate-100 rounded-xl shrink-0 border border-slate-200 flex flex-col p-1.5 md:p-2 shadow-inner h-full min-h-[100px]">
          <div className="w-full h-full bg-white rounded-md shadow-sm flex flex-col gap-1 md:gap-1.5 p-1 md:p-1.5">
            <div className="w-1/3 h-1 bg-slate-300 rounded-full mx-auto"></div>
            <div className="w-full h-8 bg-slate-100 rounded"></div>
            <div className="w-full flex-1 bg-slate-100 rounded"></div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            How to use the app <span className="block text-xl md:text-2xl text-slate-500 mt-2 font-semibold tracking-normal font-sans">(အက်ပ်အသုံးပြုပုံ)</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column */}
          <div className="relative flex flex-col gap-6 md:gap-8">
            {/* Dashed Timeline */}
            <div className="absolute left-[26px] md:left-[34px] top-8 bottom-8 w-px border-l-2 border-dashed border-slate-300 z-0"></div>
            {leftColumnSteps.map(renderStep)}
          </div>

          {/* Right Column */}
          <div className="relative flex flex-col gap-6 md:gap-8 mt-4 lg:mt-0">
            {/* Dashed Timeline */}
            <div className="absolute left-[26px] md:left-[34px] top-8 bottom-8 w-px border-l-2 border-dashed border-slate-300 z-0"></div>
            {rightColumnSteps.map(renderStep)}
          </div>

        </div>
      </div>
    </section>
  );
}
