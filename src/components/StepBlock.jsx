export default function StepBlock({ stepNumber, title, description, isLast, t }) {
  const stepLabel = t[`mockupStep${stepNumber}`];

  return (
    <div className={`relative pl-10 md:pl-12 ${isLast ? '' : 'mb-12 md:mb-16'}`}>
      {/* Red Dot on the timeline perfectly aligned with the w-0.5 line at left-10 */}
      <div className="absolute left-[3px] top-8 w-4 h-4 rounded-full bg-red-600 z-10 border-2 border-white ring-4 ring-slate-50"></div>
      
      <div className="bg-white shadow-sm border border-slate-100 rounded-xl p-6 md:p-8">
        <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-red-600 mb-2">
          {stepLabel}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
          {title}
        </h2>
        <p className="text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
