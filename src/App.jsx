import { useEffect, useMemo, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
      {children}
    </span>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-cyan-300/90">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "group rounded-2xl border border-white/10 bg-white/[0.04] p-6",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur transition",
        "hover:border-cyan-400/30 hover:bg-white/[0.06]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const data = useMemo(
    () => ({
      name: "Alexander Chiper",
      role: "Aspiring Software Engineer",
      tagline:
        "Aspiring Software Engineer focused on building scalable full-stack applications with real-world impact.",
      location: "Dublin, Ireland",
      dob: "28/05/2005",
      linkedinText: "Alexander Chiper",
      linkedinUrl:
        "https://www.linkedin.com/search/results/all/?keywords=Alexander%20Chiper",
      githubText: "Alexchiper1",
      githubUrl: "https://github.com/Alexchiper1",
      phone: "0876063786",
      cvUrl: "/Alexander_Chiper_CS_CV.pdf", // put in /public
      photoUrl: "/profile.jpg", // put in /public

      highlights: [
        "Software Engineer Intern @ NomadÉire",
        "Web Admin & Technical Support @ Vitalie Maintenance",
      ],

      experience: [
        {
          title: "Software Engineer Intern",
          org: "NomadÉire / Nomad Hub",
          dates: "Current",
          bullets: [
            "Building and improving production features in a team environment.",
            "Working across the stack with a focus on clean, maintainable delivery.",
            "Using Git workflows and shipping updates quickly and safely.",
          ],
        },
        {
          title: "Web Administrator & Technical Support",
          org: "Vitalie Maintenance",
          dates: "Current",
          bullets: [
            "Managing and maintaining the business website and technical updates.",
            "Improving reliability, UX, and online presence.",
            "Providing ongoing technical support and troubleshooting.",
          ],
        },
      ],

      projects: [
        {
          name: "SiteSync – Workforce Management System",
          desc:
            "Major full-stack project for workforce management: task assignment, secure clock-in/out, and progress tracking.",
          stack: ["React", "Node.js", "Express", "MongoDB"],
          github: "https://github.com/Alexchiper1/SiteSync",
          live: null,
          featured: true,
          bullets: [
            "Role-based system for managers and employees",
            "Geolocation validation for secure clock-in/out",
            "Photo upload workflow for task completion tracking",
          ],
        },
        {
          name: "MoodRegulatorJournal",
          desc:
            "AI-powered mood journaling web app that analyses entries with sentiment analysis and visualises trends.",
          stack: ["Node.js", "Express", "SQLite", "Chart.js", "Sentiment.js"],
          github: "https://github.com/Alexchiper1/MoodRegulatorJournal",
          live: null,
        },
        {
          name: "Holiday Booking System",
          desc:
            "Holiday booking + customer management system with full CRUD functionality and database-backed workflows.",
          stack: ["Java", "MySQL", "HTML/CSS", "JavaScript", "PHP"],
          github: "https://github.com/xZeuDen/WDSS",
          live: null,
        },
        {
          name: "Coffee Shop System",
          desc:
            "Console-based coffee shop management system with interactive menus and automated reporting using OOP.",
          stack: ["Java", "OOP"],
          github: "https://github.com/Alexchiper1/Coffee-Shops",
          live: null,
        },
      ],

      skills: [
        { group: "Languages", items: ["Java", "JavaScript", "Python", "C","SQL"] },
        { group: "Frontend", items: ["HTML", "CSS", "React"] },
        { group: "Backend", items: ["Node.js", "Express"] },
        { group: "Databases", items: ["MongoDB", "MySQL", "SQLite"] },
        { group: "Tools", items: ["Git", "GitHub", "Vercel", "Netlify"] },
      ],
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 ring-1 ring-white/10">
              <span className="text-sm font-bold">AC</span>
            </span>
            <span className="font-semibold tracking-tight">{data.name}</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href={data.cvUrl}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-semibold text-[#070B14] shadow-lg shadow-cyan-500/10 transition hover:opacity-95"
              download
            >
              Download CV
            </a>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex flex-col gap-3">
                  {LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                    >
                      {l.label}
                    </a>
                  ))}
                  <a
                    href={data.cvUrl}
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-center text-sm font-semibold text-[#070B14]"
                    download
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <main id="top" className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              {data.location}
            </p>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="block text-white">Hi, I’m</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text text-transparent">
                {data.name}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-white/75">{data.tagline}</p>


            <div className="mt-6 flex flex-wrap gap-2">
              {data.highlights.map((h) => (
                <Chip key={h}>{h}</Chip>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={data.cvUrl}
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-[#070B14] shadow-lg shadow-cyan-500/10 transition hover:opacity-95"
                download
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                View Projects
              </a>
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/0 px-6 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-white"
              >
                GitHub: {data.githubText}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Card>
                <p className="text-sm font-semibold text-white">Current</p>
                <p className="mt-2 text-white/75">
                  Software Engineer Intern @ NomadÉire
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold text-white">Current Focus</p>
                <p className="mt-2 text-white/75">
                  Software Engineer
                </p>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                <img
                  src={data.photoUrl}
                  alt="Alexander Chiper"
                  className="aspect-square w-full rounded-2xl object-cover"
                />
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/70">Role</p>
                  <p className="mt-1 font-semibold">{data.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip>DOB: {data.dob}</Chip>
                    <Chip>TU860</Chip>
                    <Chip>Software Engineer</Chip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ABOUT */}
        <Section id="about" eyebrow="ABOUT" title="A quick intro">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Card>
                <p className="text-white/80">
                  I’m a 3rd-year Computing (IT) student in TU Dublin (TU860) with hands-on
                  experience building and maintaining real systems. I enjoy turning ideas into clean,
                  reliable software — especially full-stack apps with strong UX and solid data.
                </p>
                <p className="mt-4 text-white/70">
                  My goal is to become a software engineer building scalable, high-impact systems and
                  continuously improving through real-world development experience.
                </p>
              </Card>
            </div>
            <div className="lg:col-span-5">
              <Card>
                <p className="text-sm font-semibold text-white">Quick details</p>
                <ul className="mt-4 space-y-3 text-white/75">
                  <li className="flex justify-between gap-3">
                    <span className="text-white/55">Course</span>
                    <span>TU860 (Computing IT)</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span className="text-white/55">Year</span>
                    <span>3rd Year</span>
                  </li>
                  <li className="flex justify-between gap-3">
                    <span className="text-white/55">DOB</span>
                    <span>{data.dob}</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        <Divider />

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="EXPERIENCE" title="Where I’ve worked">
          <div className="grid gap-6 lg:grid-cols-2">
            {data.experience.map((x) => (
              <Card key={x.title + x.org}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-white">{x.title}</p>
                    <p className="mt-1 text-sm text-white/70">{x.org}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {x.dates}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/75">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Divider />

        {/* PROJECTS */}
        <Section id="projects" eyebrow="PROJECTS" title="Things I’ve built">
          <div className="grid gap-6 lg:grid-cols-3">
            {data.projects.map((p) => (
              <Card
                key={p.name}
                className={p.featured ? "lg:col-span-3" : ""}
              >
                {p.featured && (
                  <p className="text-xs font-semibold text-cyan-300">
                    MAJOR PROJECT • FEATURED
                  </p>
                )}

                <p className="mt-2 text-base font-semibold text-white">{p.name}</p>
                <p className="mt-2 text-sm text-white/75">{p.desc}</p>

                {p.bullets?.length ? (
                  <ul className="mt-4 list-disc pl-5 text-sm text-white/75 space-y-1">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  >
                    GitHub
                  </a>

                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Divider />

        {/* SKILLS */}
        <Section id="skills" eyebrow="SKILLS" title="Tech I use">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.skills.map((g) => (
              <Card key={g.group}>
                <p className="text-sm font-semibold text-white">{g.group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Divider />

        {/* CONTACT */}
        <Section id="contact" eyebrow="CONTACT" title="Let’s talk">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="text-white/80">
                Socials and Contact
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${data.email}`}
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-[#070B14] transition hover:opacity-95"
                >
                  Email me
                </a>

                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  GitHub
                </a>

                <a
                  href={data.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/0 px-6 py-3 text-sm font-semibold text-white/75 transition hover:bg-white/5 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>

            </Card>

            <Card>
              <p className="text-sm font-semibold text-white">Downloads</p>

              <a
                href={data.cvUrl}
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-[#070B14] transition hover:opacity-95"
                download
              >
                Download CV (PDF)
              </a>
            </Card>
          </div>
        </Section>

        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-6xl px-4 text-sm text-white/55 sm:px-6 lg:px-8">
            © {new Date().getFullYear()} {data.name}
          </div>
        </footer>
      </main>
    </div>
  );
}