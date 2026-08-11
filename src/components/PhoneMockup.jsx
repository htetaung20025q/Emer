export default function PhoneMockup({ t }) {
  return (
    <div className="border-4 border-slate-200 rounded-[2.5rem] w-full max-w-[260px] md:max-w-[300px] aspect-[1/2] bg-white relative overflow-hidden flex flex-col shadow-xl p-2 mx-auto pointer-events-auto">
      
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-200 rounded-b-2xl z-30 flex justify-center items-center">
        <div className="w-8 h-1 bg-slate-400 rounded-full mt-1"></div>
      </div>

      <div className="w-full h-full z-10 rounded-[2rem] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" 
          alt="Map App" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
