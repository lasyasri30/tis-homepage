import {motion} from 'framer-motion'

function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.8}}
      className="bg-white px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-400">
            About TIS
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Shaping confident learners and future leaders.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Tulas International School, Dehradun, was established in 2012
            under the Rishabh Educational Trust. The school provides a
            learning environment focused on academic excellence and the
            holistic development of every student.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            With a focus on experiential learning, technology and opportunities
            beyond the classroom, TIS encourages students to develop
            confidence, curiosity and the skills needed to become responsible
            global citizens.
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection