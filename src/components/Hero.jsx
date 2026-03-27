import { useState, useEffect } from 'react'
import profilePic from '/profile.png'

const FULL_TEXT = 'Software Engineer'

export default function Hero() {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(FULL_TEXT.slice(0, i + 1))
      i++
      if (i >= FULL_TEXT.length) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 py-32 flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <p className="font-mono text-green-400 text-sm tracking-widest mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
            &gt; Hello, world!
          </p>

          <h1 className="text-6xl font-bold text-slate-100 tracking-tight leading-tight mb-4 opacity-0 animate-[fadeUp_0.8s_ease_0.25s_forwards]">
            Nicholas <br />
            <span className="text-green-400">Agouridis</span>
          </h1>

          <p className="font-mono text-slate-500 text-xl mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-green-400 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
          </p>

          <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-10 opacity-0 animate-[fadeUp_0.8s_ease_0.55s_forwards]">
            CS graduate from UMBC with hands-on experience in object-oriented programming,
            research, and web development. I love building tools that solve
            real problems, from microscopy software used in biology labs, to campus
            platforms that connect students.
          </p>

          <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeUp_0.8s_ease_0.65s_forwards]">
            
              <a
                href="https://github.com/Nagouridis"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-md bg-green-400 text-[#0a0f1e] font-bold hover:bg-green-300 transition-colors"
              >
                GitHub ↗
              </a>
              
              <a
                href="https://www.linkedin.com/in/nicholas-agouridis-5a8b48201"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm px-5 py-2.5 rounded-md border border-green-400 text-green-400 hover:bg-green-400/10 transition-colors"
              >
                LinkedIn ↗
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="font-mono text-sm px-5 py-2.5 rounded-md border border-slate-600 text-slate-400 hover:border-slate-400 hover:text-slate-200 transition-colors"
              >
                Resume ↓
              </a>
          </div>
        </div>

        <div className="flex-shrink-0 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]">
          <img
            src={profilePic}
            alt="Nicholas Agouridis"
            className="w-72 h-96 object-cover object-top rounded-2xl"
          />
        </div>

      </div>
    </section>
  )
}