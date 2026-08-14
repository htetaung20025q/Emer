import StepBlock from './StepBlock';
import PhoneMockup from './PhoneMockup';

export default function MainContent({ t }) {
  const steps = [
    {
      id: 1,
      title: t.step1Title,
      description: t.step1Desc
    },
    {
      id: 2,
      title: t.step2Title,
      description: t.step2Desc
    },
    {
      id: 3,
      title: t.step3Title,
      description: t.step3Desc
    },
    {
      id: 4,
      title: t.step4Title,
      description: t.step4Desc
    }
  ];

  return (
    <main className="max-w-7xl mx-auto py-12 md:py-24 px-4 md:px-8">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-10 md:gap-16 relative">
        
        {/* Right Column: Phone Mockup (Top on Mobile, Right and Sticky on Desktop) */}
        <div className="md:col-span-5 md:col-start-8 order-1 md:order-2 relative md:sticky md:top-24 z-20 self-start w-full flex justify-center">
          <PhoneMockup t={t} />
        </div>

        {/* Left Column: Timeline UI */}
        <div className="md:col-span-7 md:col-start-1 order-2 md:order-1 relative z-10 pt-4 md:pt-0">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 tracking-tight">
            {t.flowTitle}
          </h2>

          {/* Continuous vertical line */}
          <div className="absolute left-[10px] top-[90px] bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
          {/* Mobile continuous vertical line */}
          <div className="absolute left-[10px] top-[74px] bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
          
          <div className="flex flex-col relative pt-2">
            {steps.map((step, index) => (
              <StepBlock 
                key={step.id} 
                stepNumber={step.id} 
                title={step.title} 
                description={step.description}
                isLast={index === steps.length - 1} 
                t={t}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
