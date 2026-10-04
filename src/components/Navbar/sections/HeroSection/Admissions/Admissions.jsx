import {motion} from 'framer-motion'

function Admissions() {
  return (
    <motion.section
      id="admissions"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.8}}
      className="bg-yellow-400 px-6 py-24 text-slate-950"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-700">
            Admissions
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Begin your journey at Tulas International School.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-800">
            Discover an environment where academic excellence, experiential
            learning and holistic development come together.
          </p>
        </div>

        <a
          href="https://tis.edu.in/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
        >
          Explore Admissions →
        </a>
      </div>
    </motion.section>
  )
}

export default Admissions