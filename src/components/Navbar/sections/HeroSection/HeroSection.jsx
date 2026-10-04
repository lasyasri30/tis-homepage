function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-slate-100 px-6 py-20 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-400">
            Tulas International School • Dehradun
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Inspiring Minds.
            <span className="block text-yellow-600 dark:text-yellow-400">
              Building Futures.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Empowering students with knowledge, confidence and opportunities
            to grow into tomorrow's global leaders.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-slate-900 px-7 py-3 font-semibold text-white transition hover:bg-yellow-500 dark:bg-yellow-400 dark:text-slate-950 dark:hover:bg-yellow-300"
            >
              Explore TIS
            </a>

            <a
              href="#admissions"
              className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white dark:hover:text-slate-950"
            >
              Admissions
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200 shadow-2xl dark:bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning in a classroom"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection