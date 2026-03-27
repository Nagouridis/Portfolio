import { useState, useEffect } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Nav() {
  const [activeSection, setActiveSection] = useState('About')

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120
      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.toLowerCase())
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(link)
        }
      })
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0f1e]/80 backdrop-blur border-b border-slate-800 flex items-center justify-between px-8">
      <span className="text-white font-bold text-lg tracking-tight">
        Nicholas <span className="text-green-400">Agouridis</span>
      </span>
      <ul className="flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              onClick={() => scrollTo(link)}
              className={`font-mono text-xs px-3 py-2 rounded transition-all duration-200 cursor-pointer
                ${activeSection === link
                  ? 'text-green-400 bg-green-400/10'
                  : 'text-slate-400 hover:text-green-400 hover:bg-green-400/10'
                }`}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}