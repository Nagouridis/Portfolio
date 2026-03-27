const PROJECTS = [
  {
    name: 'Scope++',
    description:
      'Advanced camera and microscopy application for biological research. Led a team through design, development, testing, and deployment in a live lab environment.',
    tags: ['C++', 'QT 6', 'OpenCV'],
    github: null,
  },
  {
    name: 'Game Clip Website',
    description:
      'A ReactJS + Vite site that fetches and displays personal game clips from Google Drive using the Drive API. Features an iframe-based video player with a responsive tile grid, deployed on GitHub Pages.',
    tags: ['ReactJS', 'Vite', 'Google Drive API', 'GitHub Pages'],
    github: 'https://github.com/Nagouridis',
  },
  {
    name: 'Campus-LFG',
    description:
      'Campus-oriented platform connecting students for gaming sessions. Built the Node.js backend, designed the SQL database, and developed API routes bridging frontend and backend with real-time data.',
    tags: ['Node.js', 'SQL', 'REST API', 'ReactJS'],
    github: 'https://github.com/Nagouridis',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <p className="font-mono text-green-400 text-xs tracking-widest uppercase mb-2">
          // Projects
        </p>
        <h2 className="text-4xl font-bold text-slate-100 tracking-tight mb-2">
          Things I've Built
        </h2>
        <div className="w-12 h-0.5 bg-green-400 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 flex flex-col hover:border-green-400/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-slate-100 font-bold text-lg">{project.name}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-green-400 transition-colors ml-4 shrink-0"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs bg-green-400/10 text-green-400 border border-green-400/20 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}