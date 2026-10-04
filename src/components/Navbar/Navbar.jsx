import ThemeToggle from '../animation/ThemeToggle'

function Navbar() {
  return (
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-8 py-5 text-slate-900 shadow-md dark:bg-slate-900 dark:text-white">

      <a href="#home" className="text-2xl font-bold">
        TULAS
      </a>

      <ul className="flex gap-8">
        <li>
          <a href="#home" className="transition hover:text-yellow-400">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="transition hover:text-yellow-400">
            About
          </a>
        </li>

        <li>
          <a href="#academics" className="transition hover:text-yellow-400">
            Academics
          </a>
        </li>

        <li>
          <a href="#admissions" className="transition hover:text-yellow-400">
            Admissions
          </a>
        </li>

        <li>
          <a href="#contact" className="transition hover:text-yellow-400">
            Contact
          </a>
        </li>
      </ul>

      <ThemeToggle />
    </nav>
  )
}

export default Navbar