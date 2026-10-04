import {motion} from 'framer-motion'

const programs = [
  {
    number: '01',
    title: 'CBSE Curriculum',
    description:
      'A structured academic programme designed to build strong foundations, critical thinking and a love for learning.',
  },
  {
    number: '02',
    title: 'Experiential Learning',
    description:
      'Students learn through projects, activities, technology and real-world experiences that connect classroom learning with life.',
  },
  {
    number: '03',
    title: 'Grades IV–XII',
    description:
      'A learning journey that supports students from Grade IV through Grade XII while preparing them for higher education and future opportunities.',
  },
]

function Academics() {
  return (
    <motion.section
      id="academics"
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.8}}
      className="bg-slate-100 px-6 py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-400">
            Academics
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Learning designed for every stage.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            TIS combines academic learning with experiential opportunities,
            technology and a student-focused approach to help learners grow
            with confidence.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map(program => (
            <article
              key={program.number}
              className="group rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-800"
            >
              <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                {program.number}
              </span>

              <h3 className="mt-10 text-2xl font-bold">
                {program.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {program.description}
              </p>

              <div className="mt-8 h-1 w-10 bg-yellow-400 transition-all duration-300 group-hover:w-20" />
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Academics