import { useState } from 'react';

export default function UserGuide({ t, lang }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTopic, setActiveTopic] = useState('getting_started');

  // Hardcoded topics for the documentation
  const topics = [
    {
      id: 'getting_started',
      category: t.ugCatBasics || "Basics",
      title: t.ugGettingStarted || "Getting Started",
      content: t.ugGettingStartedContent || "Welcome to the Ku Nyi Kal Sal app. This application is designed to help you quickly access emergency services and resources. To get started, make sure your phone's location services are enabled."
    },
    {
      id: 'sos_alerts',
      category: t.ugCatFeatures || "Features",
      title: t.ugSosAlerts || "Sending SOS Alerts",
      content: t.ugSosAlertsContent || "To send an SOS alert, press the large red button on the home screen. This will instantly broadcast your live location to emergency responders and notify your pre-configured emergency contacts."
    },
    {
      id: 'first_aid',
      category: t.ugCatResources || "Resources",
      title: t.ugFirstAid || "First Aid Guidelines",
      content: t.ugFirstAidContent || "You can access life-saving first aid instructions even when offline. Navigate to the First Aid section to read step-by-step guides for choking, bleeding, and CPR."
    },
    {
      id: 'privacy',
      category: t.ugCatSecurity || "Security",
      title: t.ugPrivacy || "Data & Privacy",
      content: t.ugPrivacyContent || "We take your privacy seriously. Your location is only shared when you explicitly trigger an SOS. All communications with medical professionals are end-to-end encrypted."
    }
  ];

  // Filter topics based on search query
  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group filtered topics by category for the sidebar
  const categories = filteredTopics.reduce((acc, topic) => {
    if (!acc[topic.category]) acc[topic.category] = [];
    acc[topic.category].push(topic);
    return acc;
  }, {});

  const currentTopicData = topics.find(t => t.id === activeTopic) || topics[0];

  return (
    <div className="bg-white min-h-[calc(100vh-80px)] border-t border-slate-200">
      
      {/* Top Search Bar */}
      <div className="bg-slate-50 border-b border-slate-200 sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-800">{t.userGuide}</h1>
          <div className="relative w-full max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder={t.ugSearchPlaceholder || "Search documentation..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-shadow"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-64 lg:w-72 border-r border-slate-200 bg-white p-4 sm:p-6 shrink-0 h-auto md:min-h-[calc(100vh-140px)] overflow-y-auto">
          {Object.keys(categories).length > 0 ? (
            Object.keys(categories).map((catName) => (
              <div key={catName} className="mb-6">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{catName}</h3>
                <ul className="flex flex-col gap-1">
                  {categories[catName].map((topic) => (
                    <li key={topic.id}>
                      <button 
                        onClick={() => setActiveTopic(topic.id)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${activeTopic === topic.id ? 'bg-red-50 text-red-700 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
                      >
                        {topic.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-500 italic">No topics found.</p>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 sm:p-10 lg:p-12 bg-white">
          <div className="max-w-3xl">
            {currentTopicData ? (
              <>
                <div className="text-sm font-semibold text-red-600 mb-2">{currentTopicData.category}</div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">{currentTopicData.title}</h2>
                <div className="prose prose-slate prose-red max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {currentTopicData.content}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-20 text-slate-500">
                <h2 className="text-2xl font-semibold mb-2">Topic not found</h2>
                <p>Please select a topic from the sidebar.</p>
              </div>
            )}
          </div>
        </main>
        
      </div>
    </div>
  );
}
