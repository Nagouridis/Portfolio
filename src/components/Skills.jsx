const LANGUAGES = ['C++', 'C', 'Python', 'JavaScript', 'SQL']
const FRAMEWORKS = ['ReactJS', 'NodeJS', 'QT 6', 'OpenCV']
const OS_LIST = ['Windows 10/11', 'Linux', 'macOS']

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-24">
      <div className="max-w-5xl mx-auto">

        <p className="font-mono text-green-400 text-xs tracking-widest uppercase mb-2">
          // Skills
        </p>
        <h2 className="text-4xl font-bold text-slate-100 tracking-tight mb-2">
          Technical Toolkit
        </h2>
        <div className="w-12 h-0.5 bg-green-400 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-green-400/40 transition-colors">
            <h3 className="font-mono text-green-400 text-xs tracking-widest uppercase mb-5">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="font-mono text-sm bg-green-400/10 text-green-400 border border-green-400/20 px-3 py-1.5 rounded-md"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-green-400/40 transition-colors">
            <h3 className="font-mono text-green-400 text-xs tracking-widest uppercase mb-5">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {FRAMEWORKS.map((fw) => (
                <span
                  key={fw}
                  className="font-mono text-sm bg-green-400/10 text-green-400 border border-green-400/20 px-3 py-1.5 rounded-md"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-green-400/40 transition-colors">
            <h3 className="font-mono text-green-400 text-xs tracking-widest uppercase mb-5">
              Operating Systems
            </h3>
            <div className="flex flex-wrap gap-2">
              {OS_LIST.map((os) => (
                <span
                  key={os}
                  className="font-mono text-sm bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-md"
                >
                  {os}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-green-400/40 transition-colors">
            <h3 className="font-mono text-green-400 text-xs tracking-widest uppercase mb-5">
              Education
            </h3>
            <p className="text-slate-100 font-bold text-lg mb-1">B.S. Computer Science</p>
            <p className="text-slate-400 text-sm mb-3">University of Maryland Baltimore County</p>
            <span className="font-mono text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-3 py-1.5 rounded-md">
              May 2025
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}