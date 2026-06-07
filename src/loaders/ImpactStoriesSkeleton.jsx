export default function ImpactStoriesSkeleton() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        
        {/* heading skeleton */}
        <div className="max-w-2xl space-y-3">
          <div className="h-8 w-2/3 bg-slate-200/70 rounded" />
          <div className="h-4 w-full bg-slate-200/60 rounded" />
          <div className="h-4 w-5/6 bg-slate-200/60 rounded" />
        </div>

        {/* slider skeleton */}
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-3xl border border-emerald-100 bg-white/40 p-6">
          <div className="flex gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <ImpactCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function ImpactCardSkeleton() {
  return (
    <article
      className={[
        "relative w-[320px] sm:w-[360px] lg:w-[420px]",
        "rounded-2xl border border-emerald-100/60 bg-white/60 backdrop-blur",
        "overflow-hidden animate-pulse",
      ].join(" ")}
    >
      <div className="p-4 sm:p-5 space-y-4">
        {/* image skeleton */}
        <div className="relative h-44 sm:h-52 rounded-xl bg-emerald-100/40 overflow-hidden" />

        {/* title */}
        <div className="h-5 w-3/4 rounded-md bg-slate-200/70" />

        {/* excerpt */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-slate-200/60" />
          <div className="h-3 w-5/6 rounded bg-slate-200/60" />
        </div>

        {/* stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-emerald-100 bg-white/40 p-3 space-y-2">
            <div className="h-2 w-1/2 bg-slate-200/60 rounded" />
            <div className="h-3 w-3/4 bg-slate-200/70 rounded" />
          </div>

          <div className="rounded-xl border border-emerald-100 bg-white/40 p-3 space-y-2">
            <div className="h-2 w-1/2 bg-slate-200/60 rounded" />
            <div className="h-3 w-2/3 bg-slate-200/70 rounded" />
          </div>
        </div>

        {/* progress */}
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-slate-200/50" />
          <div className="flex justify-between">
            <div className="h-3 w-1/3 bg-slate-200/60 rounded" />
            <div className="h-3 w-1/4 bg-slate-200/70 rounded" />
          </div>
        </div>

        {/* button */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-9 w-28 rounded-xl bg-slate-200/70" />
          <div className="h-6 w-6 rounded-full bg-slate-200/70" />
        </div>
      </div>
    </article>
  );
}


