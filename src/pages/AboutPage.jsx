const CORE_VALUES = [
  {
    title: "Human Dignity First",
    text: "Every program is designed around people, not just numbers. We listen before we act and co-create with communities.",
  },
  {
    title: "Evidence-Led Impact",
    text: "We combine field insight with measurable outcomes so every donation can be traced to real, meaningful change.",
  },
  {
    title: "Local Partnership",
    text: "Our strongest results come from working with local educators, health workers, youth leaders, and civil society groups.",
  },
  {
    title: "Accountability by Design",
    text: "Transparent reporting, regular reviews, and independent checks are embedded into our operations from day one.",
  },
];

const TIMELINE = [
  {
    year: "2016",
    title: "Founded With One Core Idea",
    text: "HopeBridge started with a small volunteer group committed to making giving more transparent and community-led.",
  },
  {
    year: "2019",
    title: "Scaled Multi-District Programs",
    text: "We expanded into health, education, and water initiatives while building local implementation partnerships.",
  },
  {
    year: "2022",
    title: "Digital Transparency Rollout",
    text: "Program tracking and donor reporting systems were upgraded to provide faster and clearer impact visibility.",
  },
  {
    year: "Today",
    title: "Integrated NGO Platform",
    text: "We now operate as a cross-functional NGO with field teams, technical experts, and governance advisors.",
  },
];

const LEADERSHIP = [
  {
    name: "Ayesha Rahman",
    role: "Executive Director",
    bio: "Leads strategy, public partnerships, and organizational growth with over 14 years in development leadership.",
  },
  {
    name: "Nafiz Karim",
    role: "Head of Programs",
    bio: "Drives implementation quality across water, education, and healthcare portfolios with field-first operations.",
  },
  {
    name: "Tahmina Islam",
    role: "Director, Governance & Finance",
    bio: "Oversees compliance, risk controls, and sustainable financial planning for long-term institutional resilience.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-24 sm:pt-28">
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-900 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            About HopeBridge
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Long-Term Social Impact With Trust, Data, and Community
            Leadership
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            HopeBridge is a mission-driven NGO focused on improving outcomes in
            education, healthcare, and safe water access for underserved
            communities. We bring together donors, local partners, and technical
            teams to deliver measurable and lasting impact.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-bold text-emerald-300">120K+</p>
              <p className="mt-1 text-sm text-slate-300">People Reached</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-bold text-emerald-300">38</p>
              <p className="mt-1 text-sm text-slate-300">Programs Completed</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-bold text-emerald-300">16</p>
              <p className="mt-1 text-sm text-slate-300">District Partnerships</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10">
        <article className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Our Mission
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Turn generosity into structured, sustainable change.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We design and deliver high-quality social programs that solve urgent
            needs today while building systems that continue to serve communities
            tomorrow. Our model blends field execution, local partnership, and
            transparent monitoring.
          </p>
        </article>

        <article className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-7 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Our Vision
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            A future where every community can thrive with dignity.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            We imagine resilient communities where children stay in school,
            families access quality healthcare, and safe water is never a
            privilege. We work toward this through collaborative and scalable
            intervention models.
          </p>
        </article>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-slate-900">Core Values</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Our values shape how we plan, execute, report, and build trust with
            every stakeholder.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {CORE_VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-emerald-100 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {TIMELINE.map((item) => (
            <article
              key={item.year}
              className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-emerald-700">{item.year}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-bold text-slate-900">Leadership Team</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Experienced professionals guiding strategy, governance, and
            high-quality delivery across all programs.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {LEADERSHIP.map((person) => (
              <article
                key={person.name}
                className="rounded-2xl border border-emerald-100 bg-slate-50/50 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-emerald-700">
                  {person.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
            Governance & Transparency
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            We hold ourselves to the same standards we expect from partners.
          </h2>
          <p className="mt-4 max-w-3xl text-emerald-50">
            Program audits, periodic reporting, and risk controls are part of
            our operating model. We believe long-term trust is earned through
            consistency, openness, and measurable results.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-white/20 px-3 py-1">
              Annual Program Reviews
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1">
              Donor Transparency Reports
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1">
              Independent Financial Oversight
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
