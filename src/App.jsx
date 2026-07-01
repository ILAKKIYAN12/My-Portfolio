import React, { useEffect, useRef, useState } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Menu, X,
  Code2, Brain, PenTool, GraduationCap, ArrowUpRight, Sparkles, Award,
} from 'lucide-react';
import profile from './assets/profile.jpg';

/* ---------- scroll-reveal hook ---------- */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- data ---------- */
const NAV_LINKS = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

const SKILLS = [
  { name: 'Python', level: 90 },
  { name: 'C++', level: 80 },
  { name: 'SQL', level: 75 },
  { name: 'Machine Learning', level: 85 },
];

const ROLES = [
  { icon: Brain, title: 'ML Engineer', desc: 'Builds and trains models that turn raw data into real decisions.' },
  { icon: Code2, title: 'Frontend Developer', desc: 'Ships fast, clean interfaces with React and modern tooling.' },
  { icon: PenTool, title: 'UI/UX Designer', desc: 'Designs experiences people actually enjoy using.' },
];

const PROJECTS = [
  {
    title: 'Deepfake Detection',
    tag: 'Latest · ML',
    desc: 'A deep-learning system that flags manipulated video and image media, built to spot the visual artifacts deepfake generators leave behind.',
    stack: ['Python', 'Deep Learning', 'Computer Vision'],
    link: 'https://github.com/ILAKKIYAN12/Deepfake-Detection',
  },
  {
    title: 'Sugarcane Growth Analyzer — Tamil Nadu',
    tag: 'Latest · ML + Agritech',
    desc: 'District-wise sugarcane advisory tool: pulls live weather data, maps soil type, and generates AI-driven fertilizer schedules and a full growth timeline from planting to harvest.',
    stack: ['Python', 'Weather API', 'AI Analysis'],
    link: 'https://github.com/ILAKKIYAN12',
  },
  {
    title: 'Sri Lucky Saran Snacks',
    tag: 'Brand / Product',
    desc: 'A product and brand build for a snacks business, covering identity and digital presence from the ground up.',
    stack: ['Branding', 'Design'],
    link: 'https://github.com/ILAKKIYAN12',
  },
];

const ACHIEVEMENTS = [
  {
    title: '10+ Coursera Certifications',
    excerpt: 'Completed 10+ professional certifications on Coursera spanning machine learning, data science, and software development.',
    tag: 'Certifications',
  },
  {
    title: 'Certified by CSC',
    excerpt: 'Completed structured programming training in C, C++, and Python at CSC, a dedicated programming learning center.',
    tag: 'Certification',
  },
  {
    title: 'Hands-On Project Portfolio',
    excerpt: '10+ real-world projects built end-to-end — from ML models to shipped products — applying certifications into practice.',
    tag: 'Achievement',
  },
];

/* ---------- nav ---------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight text-white">
          ILAKKIYAN<span className="text-volt-bright">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-slate-300">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-volt-bright transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-900 border-t border-white/5 px-6 py-4 flex flex-col gap-4 font-mono text-sm">
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="text-slate-300">
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 bg-grid overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-volt/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center w-full relative">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-volt-bright border border-volt-dim rounded-full px-3 py-1 mb-6">
              <Sparkles size={12} /> Available for opportunities
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-white">
              Ilakkiyan S S —<br /><br/>
               <span className="text-gradient">Think Build  </span><br />
                <span className="text-gradient">Impact..</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-slate-400 text-lg max-w-xl leading-relaxed">
              ML Engineer, Frontend Developer and UI/UX Designer. I turn ideas into
              working systems — from deep learning models to interfaces people
              actually enjoy using. 10+ projects shipped, always building the next one.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-volt text-white font-medium text-sm shadow-glow hover:bg-volt-bright transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-white/15 text-slate-200 text-sm hover:border-volt-bright hover:text-volt-bright transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-5">
              <a href="https://github.com/ILAKKIYAN12" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-volt-bright transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ilakkiyan-s-s-346529330/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-volt-bright transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ilakkiyanikn2007@gmail.com" className="text-slate-400 hover:text-volt-bright transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="justify-self-center">
          <div className="relative w-72 sm:w-80 mx-auto animate-float">
            <div className="absolute -inset-5 rounded-[2rem] border border-dashed border-volt-dim animate-spin-slow" />
            <div className="absolute -inset-3 rounded-[1.8rem] bg-volt/20 blur-2xl" />
            <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-volt-bright rounded-tl-lg" />
            <span className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-volt-bright rounded-tr-lg" />
            <span className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-volt-bright rounded-bl-lg" />
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-volt-bright rounded-br-lg" />

            <div className="relative rounded-[1.6rem] overflow-hidden border border-white/10 shadow-glow bg-ink-800">
              <img src={profile} alt="Ilakkiyan S S" className="w-full h-[24rem] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 font-mono text-[11px] text-volt-bright/90 flex items-center justify-between">
                <span>// ilakkiyan.dev</span>
                <span className="w-2 h-2 rounded-full bg-volt-bright animate-pulse" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- about ---------- */
function About() {
  return (
    <section id="about" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs text-volt-bright mb-3">— About</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-snug">
              I think before I build — that's the whole approach.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-400 leading-relaxed">
              I'm a smarter thinker, not just a faster coder. I care about understanding
              a problem properly before reaching for a framework — whether that's
              spotting the pattern a model needs to learn, or the friction a user
              feels in three seconds on a screen. That mindset has taken me across
              ML, frontend, and design — 10+ projects in, each one sharper than the last.
            </p>
            <div className="mt-8 flex flex-col gap-4 font-mono text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-volt-bright shrink-0" />
                <span><span className="text-slate-200">Sri Krishna College of Technology</span> — College</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-volt-bright shrink-0" />
                <span><span className="text-slate-200">Sri Venkateshwara Vidhyalaya Higher Secondary School</span> — School</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-ink-800/50 p-6 hover:border-volt-dim hover:bg-ink-800 transition-colors">
                <r.icon size={22} className="text-volt-bright mb-4" />
                <h3 className="font-display font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- skills ---------- */
function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-white/5 bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs text-volt-bright mb-3">— Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-12">
            Tools I think in.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          {SKILLS.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <div>
                <div className="flex justify-between font-mono text-sm mb-2">
                  <span className="text-slate-200">{s.name}</span>
                  <span className="text-volt-bright">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-volt-dim to-volt-bright transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- projects ---------- */
function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs text-volt-bright mb-3">— Projects</p>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
              Selected work.
            </h2>
            <span className="font-mono text-sm text-slate-500">10+ projects shipped</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group h-full flex flex-col rounded-2xl border border-white/10 bg-ink-800/50 p-6 hover:border-volt-bright/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-volt-bright">{p.tag}</span>
                  <ArrowUpRight size={16} className="text-slate-500 group-hover:text-volt-bright transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-full bg-ink-700 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- achievements ---------- */
function Achievements() {
  return (
    <section id="achievements" className="py-28 border-t border-white/5 bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs text-volt-bright mb-3">— Achievements</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mb-12">
            Certifications & achievements.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div className="h-full flex flex-col rounded-2xl border border-white/10 p-6 hover:border-volt-dim hover:bg-ink-800/50 transition-colors">
                <Award size={20} className="text-volt-bright mb-4" />
                <span className="font-mono text-[11px] text-volt-bright mb-2">{a.tag}</span>
                <h3 className="font-display font-semibold text-white mb-2 leading-snug">{a.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{a.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-28 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs text-volt-bright mb-3">— Contact</p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-white leading-tight">
            Let's build something worth thinking about.
          </h2>
          <p className="mt-5 text-slate-400 max-w-lg mx-auto">
            Open to opportunities in ML, frontend and product design. Reach out — I read every message.
          </p>

          <a
            href="mailto:ilakkiyanikn2007@gmail.com"
            className="mt-9 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-volt text-white font-medium shadow-glow hover:bg-volt-bright transition-colors"
          >
            <Mail size={18} /> ilakkiyanikn2007@gmail.com
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a href="https://github.com/ILAKKIYAN12" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-volt-bright transition-colors flex items-center gap-2 font-mono text-sm">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ilakkiyan-s-s-346529330/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-volt-bright transition-colors flex items-center gap-2 font-mono text-sm">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-3 items-center justify-between font-mono text-xs text-slate-600">
        <span>© {new Date().getFullYear()} Ilakkiyan S S. Built with React & Tailwind.</span>
        <span>Designed with intent, not defaults.</span>
      </footer>
    </section>
  );
}

/* ---------- app ---------- */
export default function App() {
  return (
    <div className="font-body">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}