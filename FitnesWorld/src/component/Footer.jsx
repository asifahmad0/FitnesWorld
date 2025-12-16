import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-zinc-300">
      {/* Gradient blur */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white">Wiweb</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Building modern, responsive, animated and SEO‑optimized web
              experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Projects</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Persional Trainer</li>
              <li>Dite Cunsulting</li>
              <li>Helth Cunsulting</li>
              <li>Best Equpment</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-zinc-400">
              Get product updates & design tips.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl bg-zinc-900 px-4 py-2 text-sm text-white outline-none ring-1 ring-zinc-800 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="rounded-xl bg-[crimson] px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
              >
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-zinc-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Wiweb. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white"><Github size={18} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
