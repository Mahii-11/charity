export default function ImpactStoryDetailsSkeleton() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-28 sm:pt-32 animate-pulse">
      {/* background blur */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-120px] h-80 w-80 rounded-full bg-teal-100/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* back button skeleton */}
        <div className="h-9 w-40 rounded-full bg-slate-200" />

        <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* LEFT CONTENT */}
          <article className="rounded-3xl border border-emerald-100/50 bg-white p-5 sm:p-7 space-y-5">

            {/* badge */}
            <div className="flex gap-3">
              <div className="h-6 w-24 rounded-full bg-slate-200" />
              <div className="h-6 w-28 rounded-full bg-slate-200" />
            </div>

            {/* title */}
            <div className="space-y-3">
              <div className="h-8 w-full rounded-lg bg-slate-200" />
              <div className="h-8 w-3/4 rounded-lg bg-slate-200" />
            </div>

            {/* excerpt */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-5/6 bg-slate-200 rounded" />
              <div className="h-4 w-2/3 bg-slate-200 rounded" />
            </div>

            {/* image */}
            <div className="h-64 sm:h-80 w-full rounded-2xl bg-slate-200" />

            {/* paragraphs */}
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-slate-200 rounded" />
              ))}
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-5">

            {/* stats */}
            <div className="rounded-3xl border border-emerald-100/50 bg-white p-5 sm:p-6 space-y-4">
              <div className="h-6 w-40 bg-slate-200 rounded" />

              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 w-full rounded-2xl bg-slate-200"
                />
              ))}
            </div>

            {/* related */}
            <div className="rounded-3xl border border-emerald-100/50 bg-white p-5 sm:p-6 space-y-4">
              <div className="h-6 w-44 bg-slate-200 rounded" />

              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-16 w-full rounded-2xl bg-slate-200" />
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-slate-200 h-32 w-full" />
          </aside>
        </div>
      </div>
    </section>
  );
}