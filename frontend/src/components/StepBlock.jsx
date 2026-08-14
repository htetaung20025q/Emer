export default function StepBlock({ stepNumber, title, description, isLast, t }) {
  const stepLabel = t[`mockupStep${stepNumber}`];

  return (
    <div className={`relative pl-10 md:pl-12 ${isLast ? '' : 'mb-10 md:mb-12'}`}>
      {/* Red Dot on the timeline perfectly aligned with the w-0.5 line at left-10 */}
      <div className="absolute left-[2px] top-[14px] w-4 h-4 rounded-full bg-red-600 z-10 ring-4 ring-white shadow-sm"></div>
      
      <div className="pt-2 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-sm font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-md tracking-widest">
            0{stepNumber}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-slate-800 uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <p className="text-base text-slate-600 leading-relaxed ml-1">
          {description}
        </p>
      </div>
    </div>
  );
}
