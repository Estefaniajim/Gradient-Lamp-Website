export function Intro() {
  return (
    <section className="flex flex-col md:flex-row md:items-start md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Gradient Lamp
      </h1>
      <div className="flex flex-col mt-5 md:mt-0 md:pl-8 md:max-w-xl">
        <h4 className="text-lg text-left">
          A manual, mood-responsive lighting experience inspired by Seattle winters
        </h4>
        <h5 className="text-lg text-left mt-4">
          By Yan Zhang & Estefania Jimenez
        </h5>
      </div>
    </section>
  );
}
