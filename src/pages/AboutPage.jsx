import { useEffect, useState } from "react";
import { getAboutHeroData, getAboutMissionVision, getCOREVALUES, getLeaderShip, getTimeLine } from "../services/api";
import AboutPageSkeleton from "../loaders/AboutPageSkeleton";









export default function AboutPage() {
  const [core, setCore] = useState([]);
  const [timeLine, setTimeLine] = useState([]);
  const [leader, setLeader] = useState([]);
  const  [aboutHeroData, setAboutHeroData] = useState([])
  const [missionVisionData, setMissionVisionData] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);

      const [
        hero,
        mission,
        coreValues,
        timeline,
        leaders
      ] = await Promise.all([
        getAboutHeroData(),
        getAboutMissionVision(),
        getCOREVALUES(),
        getTimeLine(),
        getLeaderShip(),
      ]);

      setAboutHeroData(hero?.[0] || null);
      setMissionVisionData(mission);
      setCore(coreValues);
      setTimeLine(timeline);
      setLeader(leaders);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);



if (loading) {
  return <AboutPageSkeleton />;
}




  return (
    <div className="bg-white pt-16">
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-900 py-20 sm:py-24">
        <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            {aboutHeroData?.badge}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
           {aboutHeroData?.title?.line1}
           <br />
           {aboutHeroData?.title?.line2}
           <br />
           {aboutHeroData?.title?.line3}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {aboutHeroData?.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutHeroData?.stats?.map((stat, i) => (
              <div
               key={i}
               className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-bold text-emerald-300">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </div>
            ))}
           
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10">
        <article className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            {missionVisionData?.mission?.label}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
           {missionVisionData?.mission?.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
           {missionVisionData?.mission?.text}
          </p>
        </article>

        <article className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-7 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
           {missionVisionData?.vision?.label}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
           {missionVisionData?.vision?.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {missionVisionData?.vision?.text}
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
            {core.map((value) => (
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
          {timeLine.map((item) => (
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
            {leader.map((person) => (
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
