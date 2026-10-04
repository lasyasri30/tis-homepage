import {motion} from 'framer-motion'

const facilities = [
  {
    title: '22-Acre Campus',
    description:
      'A spacious and pollution-free campus that provides students with a comfortable environment to learn, explore and grow.',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Sports & Activities',
    description:
      'With opportunities across 16+ sports, students can develop teamwork, discipline, confidence and an active lifestyle.',
    image:
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Learning Environment',
    description:
      'Purposeful spaces and experiences encourage collaboration, creativity, curiosity and learning beyond the classroom.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
  },
]

function Campus() {
  return (
    <motion.section
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.8}}
      className="bg-white px-6 py-24 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-400">
              Campus & Facilities
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A place to learn, explore and grow.
            </h2>
          </div>

          <p className="max-w-md text-lg leading-8 text-slate-600 dark:text-slate-300">
            From academics and sports to everyday campus life, TIS provides
            experiences that support students beyond the classroom.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {facilities.map(facility => (
            <article
              key={facility.title}
              className="group overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold">{facility.title}</h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  {facility.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Campus