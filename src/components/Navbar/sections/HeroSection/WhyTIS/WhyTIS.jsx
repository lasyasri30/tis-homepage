import {motion} from 'framer-motion'

const features = [
  {
    title: '22-Acre Campus',
    description:
      'A spacious and pollution-free campus designed to provide students with a healthy environment for learning and growth.',
  },
  {
    title: '16+ Sports',
    description:
      'Students have opportunities to participate in a wide range of sports and activities that build teamwork and discipline.',
  },
  {
    title: '6:1 Student-Teacher Ratio',
    description:
      'A supportive learning environment that allows students to receive focused guidance and attention.',
  },
  {
    title: 'Holistic Development',
    description:
      'Academic learning is combined with experiential opportunities that help students develop confidence, creativity and leadership.',
  },
]

function WhyTIS() {
  return (
    <motion.section
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.8}}
      className="bg-slate-100 px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-400">
            Why TIS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            More than education.
            <span className="block text-yellow-600 dark:text-yellow-400">
              A foundation for life.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(feature => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default WhyTIS