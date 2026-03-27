export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24">
      <div className="max-w-5xl mx-auto">

        <p className="font-mono text-green-400 text-xs tracking-widest uppercase mb-2">
          // Contact
        </p>
        <h2 className="text-4xl font-bold text-slate-100 tracking-tight mb-2">
          Get In Touch
        </h2>
        <div className="w-12 h-0.5 bg-green-400 mb-12" />

        <p className="text-slate-400 text-base leading-relaxed max-w-xl mb-10">
          I'm actively looking for software engineer roles. Feel free to reach out
          by email or phone, I'd love to connect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
            <a
              href="mailto:agouridisnds@gmail.com"
              className="bg-[#0f172a] border border-slate-800 rounded-xl px-6 py-5 flex items-center gap-4 hover:border-green-400/40 transition-colors group"
            >

            <span className="font-mono text-green-400 text-lg">@</span>
            <div>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-slate-100 text-sm group-hover:text-green-400 transition-colors">
                agouridisinds@gmail.com
              </p>
            </div>
          </a>

            <a
              href="tel:3012782529"
              className="bg-[#0f172a] border border-slate-800 rounded-xl px-6 py-5 flex items-center gap-4 hover:border-green-400/40 transition-colors group"
            >
          
            <span className="font-mono text-green-400 text-lg">#</span>
            <div>
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-slate-100 text-sm group-hover:text-green-400 transition-colors">
                (301) 278-2529
              </p>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}