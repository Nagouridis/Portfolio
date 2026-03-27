export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold tracking-tight">
          Nicholas <span className="text-green-400">Agouridis</span>
        </span>
        <p className="font-mono text-slate-600 text-xs">
          © {new Date().getFullYear()} · Built with React & Tailwind
        </p>
      </div>
    </footer>
  )
}