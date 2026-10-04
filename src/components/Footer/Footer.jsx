function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 px-6 py-14 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">TULAS</h2>

          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Tulas International School, Dehradun, provides a learning
            environment focused on academic excellence, holistic development
            and opportunities for students to grow with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>

          <ul className="mt-4 space-y-3 text-slate-400">
            <li>
              <a
                href="#home"
                className="transition hover:text-yellow-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-yellow-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#academics"
                className="transition hover:text-yellow-400"
              >
                Academics
              </a>
            </li>

            <li>
              <a
                href="#admissions"
                className="transition hover:text-yellow-400"
              >
                Admissions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold">Contact</h3>

          <p className="mt-4 leading-7 text-slate-400">
            Tulas International School
            <br />
            Dehradun, Uttarakhand
            <br />
            India
          </p>

          <a
            href="https://tis.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-yellow-400 transition hover:text-yellow-300"
          >
            Visit Official Website →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 Tulas International School. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer