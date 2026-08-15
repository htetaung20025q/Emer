import React, { useState } from 'react';

// EN နှင့် MM နှစ်မျိုးလုံး ပါဝင်သော Data Structure
const learnAppData = [
  { 
    id: 1, 
    category: { EN: 'BASICS', MM: 'အခြေခံ' }, 
    title: { EN: 'Getting Started', MM: 'စတင်အသုံးပြုခြင်း' }, 
    desc: { 
      EN: "Welcome to the Ku Nyi Kal Sal app. This application is designed to help you quickly access emergency services and resources. To get started, make sure your phone's location services are enabled.",
      MM: "ကူညီကယ်ဆယ် အက်ပ်မှ ကြိုဆိုပါတယ်။ ဤအက်ပ်သည် အရေးပေါ် ဝန်ဆောင်မှုများနှင့် အရင်းအမြစ်များကို အမြန်ဆုံး ရယူနိုင်ရန် ဖန်တီးထားခြင်းဖြစ်ပါသည်။ စတင်ရန် သင့်ဖုန်း၏ တည်နေရာပြစနစ် (Location) ကို ဖွင့်ထားပေးပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=Getting+Started+Poster' 
  },
  { 
    id: 2, 
    category: { EN: 'FEATURES', MM: 'လုပ်ဆောင်ချက်များ' }, 
    title: { EN: 'Sending SOS Alerts', MM: 'အရေးပေါ်အချက်ပြခြင်း' }, 
    desc: { 
      EN: "Learn how to trigger the emergency SOS. Press the main button for 3 seconds to alert your emergency contacts and nearby volunteers.",
      MM: "အရေးပေါ်အခြေအနေတွင် SOS အချက်ပြနည်းကို လေ့လာပါ။ ပင်မခလုတ်ကို ၃ စက္ကန့်ကြာ ဖိနှိပ်ထားခြင်းဖြင့် သင့်မိသားစုဝင်များနှင့် အနီးနားရှိ လုပ်အားပေးများထံ အကြောင်းကြားနိုင်ပါသည်။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=SOS+Alerts+Poster' 
  },
  { 
    id: 3, 
    category: { EN: 'FEATURES', MM: 'လုပ်ဆောင်ချက်များ' }, 
    title: { EN: 'Location Tracking', MM: 'တည်နေရာခြေရာခံခြင်း' }, 
    desc: { 
      EN: "Understand how the app tracks your location during an active emergency to guide responders directly to you.",
      MM: "အရေးပေါ်အခြေအနေဖြစ်ပွားနေစဉ်အတွင်း ကယ်ဆယ်ရေးအဖွဲ့များ သင့်ထံ တိုက်ရိုက်ရောက်ရှိလာနိုင်စေရန် အက်ပ်မှ သင့်တည်နေရာကို မည်သို့ပေးပို့သည်ကို လေ့လာပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=Location+Tracking+Poster' 
  },
  { 
    id: 4, 
    category: { EN: 'RESOURCES', MM: 'လမ်းညွှန်များ' }, 
    title: { EN: 'First Aid Guidelines', MM: 'ရှေးဦးသူနာပြု လမ်းညွှန်' }, 
    desc: { 
      EN: "Access offline first aid instructions for common emergencies like burns, cuts, and CPR.",
      MM: "မီးလောင်ခြင်း၊ ပြတ်ရှဒဏ်ရာရခြင်းနှင့် CPR ပြုလုပ်ခြင်းစသည့် အရေးပေါ်အခြေအနေများအတွက် အင်တာနက်မလိုဘဲ ဖတ်ရှုနိုင်သော ရှေးဦးသူနာပြုလမ်းညွှန်များကို ရယူပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=First+Aid+Poster' 
  },
  { 
    id: 5, 
    category: { EN: 'RESOURCES', MM: 'လမ်းညွှန်များ' }, 
    title: { EN: 'Emergency Contacts', MM: 'အရေးပေါ် ဆက်သွယ်ရန်များ' }, 
    desc: { 
      EN: "How to add and manage your primary emergency contacts who will be notified instantly.",
      MM: "အရေးပေါ်အခြေအနေတွင် ချက်ချင်းအကြောင်းကြားနိုင်ရန် သင့်မိသားစု သို့မဟုတ် မိတ်ဆွေများ၏ ဖုန်းနံပါတ်များကို မည်သို့ထည့်သွင်းရမည်ကို လေ့လာပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=Emergency+Contacts+Poster' 
  },
  { 
    id: 6, 
    category: { EN: 'PARTNERS', MM: 'ပူးပေါင်းပါဝင်ရန်' }, 
    title: { EN: 'Join as Volunteer', MM: 'လုပ်အားပေးအဖြစ် ပါဝင်ရန်' }, 
    desc: { 
      EN: "Are you medically trained? Learn how to verify your account and start receiving alerts to help nearby patients.",
      MM: "သင်သည် ဆေးဘက်ဆိုင်ရာ အတွေ့အကြုံရှိသူဖြစ်ပါသလား? သင့်အကောင့်ကို အတည်ပြုပြီး အနီးနားရှိ လူနာများကို ကူညီရန် အသိပေးချက်များ စတင်လက်ခံပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=Volunteer+Poster' 
  },
  { 
    id: 7, 
    category: { EN: 'SECURITY', MM: 'လုံခြုံရေး' }, 
    title: { EN: 'Data & Privacy', MM: 'အချက်အလက် လုံခြုံရေး' }, 
    desc: { 
      EN: "Read about our encryption methods and how we protect your sensitive medical and location data.",
      MM: "ကျွန်ုပ်တို့၏ အက်ပ်သည် သင့်တည်နေရာနှင့် ကျန်းမာရေးဆိုင်ရာ အရေးကြီးအချက်အလက်များကို မည်သို့လုံခြုံစွာ သိမ်းဆည်းထားသည်ကို ဖတ်ရှုပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=Data+Privacy+Poster' 
  },
  { 
    id: 8, 
    category: { EN: 'SETTINGS', MM: 'ဆက်တင်များ' }, 
    title: { EN: 'App Preferences', MM: 'အက်ပ် အပြင်အဆင်များ' }, 
    desc: { 
      EN: "Customize your notification sounds, language (EN/MM), and display settings.",
      MM: "အသိပေးချက် အသံများ၊ ဘာသာစကား (မြန်မာ/English) နှင့် အခြား အက်ပ်အပြင်အဆင်များကို စိတ်ကြိုက်ပြောင်းလဲပါ။"
    }, 
    imgUrl: 'https://via.placeholder.com/800x400/f87171/ffffff?text=App+Settings+Poster' 
  },
];

export default function LearnApp({ lang }) {
  
  // ဤနေရာတွင် 'en', 'mm' စသဖြင့် အသေးလာလည်း Error မတက်စေရန် ကာကွယ်ထားပါသည်
  const activeLang = lang?.toUpperCase() === 'MM' ? 'MM' : 'EN';
  
  const [activeItem, setActiveItem] = useState(learnAppData[0]);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto mt-2 border-t border-gray-200">
        
        {/* Left Sidebar (25% Width) */}
        <div className="w-full md:w-1/4 py-6 border-b md:border-b-0 md:border-r border-gray-200">
          <ul className="px-4">
            {learnAppData.map((item) => (
              <li key={item.id} className="mb-2">
                <button
                  onClick={() => setActiveItem(item)}
                  className={`w-full text-left px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    activeItem.id === item.id 
                      ? 'bg-red-50 text-red-600' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {/* ပြင်ဆင်ထားသော activeLang ကို အသုံးပြုထားပါသည် */}
                  {item.title[activeLang]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content Area (75% Width) */}
        <div className="w-full md:w-3/4 py-6 px-6 md:px-12">
          {/* Category Name */}
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
            {activeItem.category[activeLang]}
          </span>
          
          {/* Main Title */}
          <h1 className="text-3xl font-bold text-slate-900 mt-2 mb-6">
            {activeItem.title[activeLang]}
          </h1>
          
          {/* Poster Image Template */}
          <div className="w-full mb-6 rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <img 
              src={activeItem.imgUrl} 
              alt={activeItem.title.EN} 
              className="w-full h-auto object-cover max-h-96"
            />
          </div>

          {/* Description Text */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {activeItem.desc[activeLang]}
          </p>
        </div>

      </div>
    </div>
  );
}