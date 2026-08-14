export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col items-center pt-24 pb-24 px-6 md:px-12">
      <div className="max-w-2xl w-full text-center mt-8 md:mt-12">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          About Us
        </h1>
        
        {/* Subtitle / Quote */}
        <div className="text-xl md:text-2xl italic text-slate-500 font-light mb-8">
          "No one can measure the value of a single human life."
        </div>
        
        {/* Divider */}
        <hr className="border-t border-slate-200 w-24 mx-auto mb-10" />
        
        {/* Main Content */}
        <div className="flex flex-col gap-6 text-[1.125rem] md:text-lg leading-[1.8] text-slate-700">
          <p>
            In every emergency situation, every second counts. Each moment can mean the difference between life and death.
          </p>
          
          <p>
            Why was this KU NYI KAL SAL Application created? Because we believe everyone should have a ready-to-use tool in their pocket for critical moments.
          </p>
          
          <p>
            Our mission is to ensure every user stays safe and receives the help they need as quickly as possible.
          </p>
          
          <p>
            This App includes essential features like SOS Alert, Location Sharing, Contact Relatives, and Medical Info. All designed to be simple and accessible for everyone.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="text-lg md:text-xl font-medium text-slate-600 tracking-wide uppercase">
            Be prepared to help
          </div>
          <div className="text-xl md:text-2xl font-bold text-slate-800">
            ကူညီဖို့ အသင့်ပါ
          </div>
        </div>

      </div>
    </div>
  );
}
