import Reveal from "./Reveal";
import Navigation from "./Navigation";

/* ──────────────────────────────────────────────
   PROJECTS — Replace these placeholder entries
   with your real client projects when ready.
   Only the fields below need to be updated:
   number, category, title, description, image
─────────────────────────────────────────────── */
const projects = [
  {
    number: "01",
    category: "Web Design",
    title: "Lumen Studio",
    description:
      "A digital presence crafted for a creative studio — built around clarity, character, and the moments that make a brand memorable.",
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    number: "02",
    category: "AI Automation",
    title: "Atlas Workflows",
    description:
      "An intelligent operations system that quietly removed repetitive work and kept customer journeys moving end to end.",
    image:
      "https://images.pexels.com/photos/986774/pexels-photo-986774.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    number: "03",
    category: "Web Design",
    title: "Noir Atelier",
    description:
      "An editorial e-commerce experience for a design house — where every detail reinforced the brand's quiet confidence.",
    image:
      "https://images.pexels.com/photos/10339603/pexels-photo-10339603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090909] text-[#f1eee7] selection:bg-[#c8b18b] selection:text-black">

      {/* NAVIGATION */}
      <Navigation />

      {/* HERO */}
      <section id="top" className="relative min-h-screen w-full overflow-hidden">
        {/* Full-bleed background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-visual.png"
          alt="Glowup Tech — Build. Automate. Elevate."
          className="absolute inset-0 h-full w-full object-contain select-none"
          draggable={false}
        />

        {/* Dark overlays for readability — gradient at top for nav, base for contrast */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="relative border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
          {/* Section label */}
          <Reveal>
            <div className="mb-20 flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-[#c8b18b] md:mb-28">
              <span className="h-px w-10 bg-[#c8b18b]/60" />
              What we do
            </div>
          </Reveal>

          {/* 01 — Web Design */}
          <Reveal>
            <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[120px_1fr] md:gap-20 md:pt-20">
              <span className="text-[13px] tracking-[0.1em] text-[#c8b18b]">01</span>

              <div className="min-h-[280px] md:min-h-[380px]">
                <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-white/35">
                  Web Design
                </p>

                <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#f1eee7]">
                  Websites that make businesses
                  <br />
                  <span className="text-white/35">look exceptional online.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          {/* 02 — AI Automation */}
          <Reveal delay={150}>
            <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:mt-28 md:grid-cols-[120px_1fr] md:gap-20 md:pt-20">
              <span className="text-[13px] tracking-[0.1em] text-[#c8b18b]">02</span>

              <div className="min-h-[280px] md:min-h-[380px]">
                <p className="mb-6 text-[11px] uppercase tracking-[0.28em] text-white/35">
                  AI Automation
                </p>

                <h2 className="max-w-4xl text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#f1eee7]">
                  Intelligent systems that remove
                  <br />
                  repetitive work and help businesses
                  <br />
                  <span className="text-white/35">operate smarter.</span>
                </h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="mx-auto max-w-[1500px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-[#c8b18b]">
                Selected work
              </p>

              <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.06em]">
                Work that
                <br />
                <span className="text-white/30">speaks first.</span>
              </h2>
            </div>

            <p className="max-w-sm text-[15px] leading-relaxed text-white/40">
              A selection of projects we&apos;ve crafted. Each one designed to
              change how a business is perceived.
            </p>
          </div>
        </Reveal>

        <div className="space-y-24 md:space-y-40">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 100}>
              <article className="group grid gap-8 md:gap-16">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-white/35">
                  <span>{project.number}</span>
                  <span className="text-[#c8b18b]">{project.category}</span>
                </div>

                {/* Large project image */}
                <div className="relative overflow-hidden border border-white/10 bg-[#101010]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    className="aspect-[16/10] w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Project info */}
                <div className="flex flex-col justify-between gap-6 border-t border-white/10 pt-6 md:flex-row md:items-end md:pt-8">
                  <div className="max-w-2xl">
                    <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#f1eee7]">
                      {project.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/45">
                      {project.description}
                    </p>
                  </div>

                  <span className="group/link flex shrink-0 cursor-pointer items-center gap-3 text-sm text-[#c8b18b] transition">
                    View project
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">
                      →
                    </span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-4 pb-4 md:px-6">
        <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] bg-[#e9e5dc] text-[#0a0a0a]">
          <div className="absolute right-[-10%] top-[-30%] h-[70%] w-[50%] rounded-full bg-[#c8b18b]/30 blur-[100px]" />

          <div className="relative px-7 py-24 md:px-16 md:py-36">
            <p className="mb-8 text-[11px] uppercase tracking-[0.28em] text-black/45">
              Start a project
            </p>

            <h2 className="max-w-6xl text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.83] tracking-[-0.075em]">
              Have a project
              <br />
              in mind?
            </h2>

            <div className="mt-16 flex flex-col justify-between gap-8 border-t border-black/15 pt-6 md:flex-row md:items-end">
              <p className="max-w-md text-[16px] leading-relaxed text-black/50">
                Tell us what you&apos;re building. We&apos;ll take it from there.
              </p>

              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-lg font-medium"
              >
                Start a conversation
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <footer className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 px-2 py-8 text-[10px] uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <span>Glowup Tech</span>
          <span>Build. Automate. Elevate.</span>
          <span>© 2026</span>
        </footer>
      </section>
    </main>
  );
}
