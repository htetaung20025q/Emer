import React from 'react';

export default function LearnApp() {
  const features = [
    {
      id: 1,
      title: 'အော့ဖ်လိုင်း ရှေးဦးသူနာပြုစုနည်း',
      desc: 'အင်တာနက်မရှိလည်း အသက်ကယ်နိုင်ပါသည်။ အရေးပေါ်အခြေအနေများအတွက် ရှေးဦးသူနာပြုစုနည်းများကို အချိန်မရွေး ဖတ်ရှုနိုင်ပါသည်။',
      iconColor: 'text-red-600',
      bgColor: 'bg-red-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'အရေးပေါ်ဌာနစုံသို့ ဆက်သွယ်ရန်',
      desc: 'ဆေးဘက်ဆိုင်ရာသာမက ရဲတပ်ဖွဲ့နှင့် မီးသတ်ဌာနများဆီသို့ပါ တစ်နေရာတည်းမှ အမြန်ဆုံး အကူအညီတောင်းခံနိုင်ပါသည်။',
      iconColor: 'text-slate-800',
      bgColor: 'bg-slate-200',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'သွေးလှူဒါန်းမှု ကွန်ရက်',
      desc: 'အသက်တစ်ချောင်းကို ကယ်တင်ပါ။ သွေးလိုအပ်သူများနှင့် သွေးလှူဒါန်းလိုသူများကို လွယ်ကူလျင်မြန်စွာ ချိတ်ဆက်ပေးပါသည်။',
      iconColor: 'text-rose-600',
      bgColor: 'bg-rose-100',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C12 2 4 9.5 4 15a8 8 0 0016 0c0-5.5-8-13-8-13z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'စေတနာ့ဝန်ထမ်းများ',
      desc: 'သင်တစ်ယောက်တည်း မဟုတ်ပါ။ အကူအညီလိုအပ်ချိန်တွင် အနီးစပ်ဆုံးရှိ စေတနာ့ဝန်ထမ်းအဖွဲ့များနှင့် ချက်ချင်း ချိတ်ဆက်ပေးပါသည်။',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'ကြိုတင်သတိပေးချက်',
      desc: 'ဘေးအန္တရာယ်ကို ကြိုတင်ရှောင်ရှားပါ။ သဘာဝဘေးအန္တရာယ် သတိပေးချက်များကို အချိန်နှင့်တပြေးညီ ရယူပါ။',
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-100',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold mb-4">
            Ku Nyi Kal Sal ၏ အဓိကလုပ်ဆောင်ချက်များ
          </h2>
          <p className="text-slate-600 text-lg">
            အရေးပေါ်အခြေအနေများတွင် သင်နှင့် သင့်မိသားစု လုံခြုံရေးအတွက် မရှိမဖြစ် လိုအပ်မည့် အသက်ကယ်ဝန်ဆောင်မှုများ
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${feature.bgColor} ${feature.iconColor}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}