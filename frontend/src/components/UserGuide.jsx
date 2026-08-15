import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UserGuide({ t, lang }) {
  // We've adapted the user guide topics to include image mockups for the sticky scroll feature
  const topics = [
    {
      id: 'getting_started',
      category: t?.ugCatBasics || "Basics",
      title: t?.ugGettingStarted || "Getting Started",
      content: t?.ugGettingStartedContent || "Welcome to the Ku Nyi Kal Sal app. This application is designed to help you quickly access emergency services and resources. To get started, make sure your phone's location services are enabled.",
      imgUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'sos_alerts',
      category: t?.ugCatFeatures || "Features",
      title: t?.ugSosAlerts || "Sending SOS Alerts",
      content: t?.ugSosAlertsContent || "To send an SOS alert, press the large red button on the home screen. This will instantly broadcast your live location to emergency responders and notify your pre-configured emergency contacts.",
      imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'first_aid',
      category: t?.ugCatResources || "Resources",
      title: t?.ugFirstAid || "First Aid Guidelines",
      content: t?.ugFirstAidContent || "You can access life-saving first aid instructions even when offline. Navigate to the First Aid section to read step-by-step guides for choking, bleeding, and CPR.",
      imgUrl: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=300&auto=format&fit=crop'
    },
    {
      id: 'privacy',
      category: t?.ugCatSecurity || "Security",
      title: t?.ugPrivacy || "Data & Privacy",
      content: t?.ugPrivacyContent || "We take your privacy seriously. Your location is only shared when you explicitly trigger an SOS. All communications with medical professionals are end-to-end encrypted.",
      imgUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop'
    }
  ];

  const [activeImage, setActiveImage] = useState(topics[0].imgUrl);

  return (
    <div className="bg-white min-h-[calc(100vh-80px)] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        

        {/* Sticky Scroll Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative items-start">
          
          {/* Mobile-only sticky preview */}
          <div className="md:hidden sticky top-[70px] z-30 bg-white/95 backdrop-blur py-4 flex justify-center border-b border-slate-100 shadow-sm mb-8 rounded-b-3xl">
            <div className="w-40 h-[280px] bg-slate-900 rounded-[2rem] border-[6px] border-slate-900 shadow-lg relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-0 w-20 h-4 bg-slate-900 rounded-b-lg z-20"></div>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={activeImage}
                  alt="App Mockup"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-cover absolute inset-0 z-10"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Left Column (Scrolling Text) */}
          <div className="flex flex-col pb-32">
            {topics.map((topic) => (
              <motion.div 
                key={topic.id}
                className="min-h-[50vh] flex flex-col justify-center border-l-2 border-slate-100 pl-8 md:pl-12 py-12 relative"
                onViewportEnter={() => setActiveImage(topic.imgUrl)}
                viewport={{ amount: 0.5, margin: "-10% 0px -10% 0px" }}
              >
                {/* Active Marker */}
                <motion.div 
                  className={`absolute left-[-9px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ring-4 ring-white transition-colors duration-500 ${activeImage === topic.imgUrl ? 'bg-red-600' : 'bg-slate-200'}`}
                ></motion.div>
                
                <div className={`font-black text-sm uppercase tracking-wider mb-3 transition-colors duration-500 ${activeImage === topic.imgUrl ? 'text-red-600' : 'text-slate-400'}`}>
                  {topic.category}
                </div>
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${activeImage === topic.imgUrl ? 'text-slate-900' : 'text-slate-300'}`}>
                  {topic.title}
                </h3>
                <p className={`text-lg leading-relaxed transition-colors duration-500 ${activeImage === topic.imgUrl ? 'text-slate-600' : 'text-slate-400'}`}>
                  {topic.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column (Sticky Mockup for Desktop) */}
          <div className="hidden md:flex flex-col items-center justify-center sticky top-24 h-[calc(100vh-8rem)]">
            <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-900 shadow-2xl relative overflow-hidden flex flex-col items-center">
              {/* Phone Notch */}
              <div className="absolute top-0 w-36 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={activeImage}
                  alt="App Mockup"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover absolute inset-0 z-10"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
