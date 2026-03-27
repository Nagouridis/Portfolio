const EXPERIENCE = [
  {
    role: 'Research Assistant',
    org: 'UMBC Biological Sciences Department',
    location: 'Baltimore, MD',
    period: 'Jan 2023 – Present',
    bullets: [
      'Led development of Scope++, an advanced camera & microscopy application built with C++, QT 6, and OpenCV.',
      'Conducted extensive testing & debugging to ensure system reliability in live experimental conditions.',
      'Mentored team members and fostered a collaborative development environment.',
    ],
  },
  {
    role: 'Community Council President',
    org: 'Erickson Hall – UMBC',
    location: 'Baltimore, MD',
    period: 'Sep 2022 – Dec 2022',
    bullets: [
      'Collaborated with hall directors and council members to organize events enhancing resident engagement.',
      'Facilitated regular meetings to surface and address community improvement initiatives.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-24">
      <div className="max-w-5xl mx-auto">

        <p className="font-mono text-green-400 text-xs tracking-widest uppercase mb-2">
          // Experience
        </p>
        <h2 className="text-4xl font-bold text-slate-100 tracking-tight mb-2">
          Where I've Worked
        </h2>
        <div className="w-12 h-0.5 bg-green-400 mb-12" />

        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.role}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-green-400/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-slate-100 font-bold text-lg mb-1">{exp.role}</h3>
                  <p className="font-mono text-green-400 text-sm">{exp.org}</p>
                </div>
                <span className="font-mono text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-3 py-1.5 rounded-md whitespace-nowrap self-start">
                  {exp.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-green-400 mt-0.5 shrink-0">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}