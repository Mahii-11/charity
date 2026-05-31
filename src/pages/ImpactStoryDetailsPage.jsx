import { Link, Navigate, useParams } from "react-router";
import { IMPACT_STORIES } from "../data/impactStories";

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-emerald-100/90 bg-white/80 p-4 shadow-sm backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}

export default function ImpactStoryDetailsPage() {
  const { slug } = useParams();
  const story = IMPACT_STORIES.find((item) => item.slug === slug);

  if (!story) {
    return <Navigate to="/" replace />;
  }

  const relatedStories = IMPACT_STORIES.filter((item) => item.slug !== story.slug);

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-80 w-80 rounded-full bg-teal-100/25 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/85 px-4 py-2 text-sm font-semibold text-emerald-800 transition-all hover:border-emerald-200 hover:bg-white"
        >
          <span aria-hidden>←</span>
          Back to Home
        </Link>

        <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-emerald-100/80 bg-white/80 p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:p-7">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className={[
                  "inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold",
                  story.accentColor,
                ].join(" ")}
              >
                {story.category}
              </span>
              <span className="text-sm font-medium text-slate-500">{story.timeline}</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {story.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {story.excerpt}
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-emerald-100/80">
              <img
                src={story.image}
                alt={story.title}
                className="h-64 w-full object-cover sm:h-80"
              />
            </div>

            <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              {story.fullStory.map((paragraph, index) => (
                <p key={`${story.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl border border-emerald-100/90 bg-gradient-to-br from-white to-emerald-50/60 p-5 shadow-sm sm:p-6">
              <h2 className="text-lg font-semibold text-slate-900">Impact Snapshot</h2>
              <div className="mt-4 grid gap-3">
                <StatCard label="Location" value={story.location} />
                <StatCard label="Lives Reached" value={story.livesImpacted} />
                <StatCard label="Support Delivered" value={story.raised} />
                <StatCard label="Implementation Partner" value={story.partner} />
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-sm sm:p-6">
              <h3 className="text-lg font-semibold text-slate-900">Explore More Stories</h3>
              <div className="mt-4 space-y-3">
                {relatedStories.map((item) => (
                  <Link
                    key={item.id}
                    to={`/impact-stories/${item.slug}`}
                    className="block rounded-2xl border border-emerald-100/90 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-emerald-200"
                  >
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{item.location}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-emerald-600 p-5 text-white shadow-sm sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-100">
                Keep this impact growing
              </p>
              <p className="mt-2 text-xl font-semibold">Be part of the next story.</p>
              <Link
                to="/#donate"
                className="mt-4 inline-flex items-center rounded-xl bg-white/95 px-4 py-2 text-sm font-semibold text-emerald-700 transition-all hover:bg-white"
              >
                Donate Today
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
