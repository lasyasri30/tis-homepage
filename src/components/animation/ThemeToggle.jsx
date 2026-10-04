import {useState} from 'react'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition hover:bg-white/10"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

export default ThemeToggle