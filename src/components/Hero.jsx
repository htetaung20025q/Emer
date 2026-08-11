export default function Hero({ t }) {
  return (
    <section className="bg-slate-800 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {t.heroTitle}
        </h1>
        <p className="text-base md:text-lg font-normal text-slate-300 max-w-2xl mx-auto">
          {t.heroSub}
        </p>
      </div>
    </section>
  );
}
