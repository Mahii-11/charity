export default function AboutPageSkeleton() {
  return (
    <div className="bg-white pt-16 animate-pulse">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="h-8 w-40 rounded-full bg-emerald-500/20" />

          <div className="mt-5 space-y-4 max-w-4xl">
            <div className="h-12 rounded bg-white/10" />
            <div className="h-12 w-[90%] rounded bg-white/10" />
            <div className="h-12 w-[75%] rounded bg-white/10" />
          </div>

          <div className="mt-6 space-y-3 max-w-3xl">
            <div className="h-4 rounded bg-white/10" />
            <div className="h-4 rounded bg-white/10 w-[95%]" />
            <div className="h-4 rounded bg-white/10 w-[80%]" />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/5 p-4 border border-white/10"
              >
                <div className="h-8 w-20 bg-white/10 rounded" />
                <div className="mt-2 h-4 w-28 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-slate-200 bg-white p-7"
          >
            <div className="h-4 w-28 bg-slate-200 rounded" />
            <div className="mt-4 h-8 w-2/3 bg-slate-200 rounded" />
            <div className="mt-4 space-y-3">
              <div className="h-4 bg-slate-200 rounded" />
              <div className="h-4 bg-slate-200 rounded" />
              <div className="h-4 w-4/5 bg-slate-200 rounded" />
            </div>
          </div>
        ))}
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="h-10 w-56 bg-slate-200 rounded" />
          <div className="mt-4 h-4 w-96 max-w-full bg-slate-200 rounded" />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-5"
              >
                <div className="h-6 w-40 bg-slate-200 rounded" />
                <div className="mt-3 space-y-2">
                  <div className="h-4 bg-slate-200 rounded" />
                  <div className="h-4 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="h-10 w-56 bg-slate-200 rounded" />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="h-4 w-20 bg-slate-200 rounded" />
              <div className="mt-3 h-6 w-2/3 bg-slate-200 rounded" />
              <div className="mt-3 space-y-2">
                <div className="h-4 bg-slate-200 rounded" />
                <div className="h-4 bg-slate-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="h-10 w-64 bg-slate-200 rounded" />
          <div className="mt-4 h-4 w-96 max-w-full bg-slate-200 rounded" />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div className="h-6 w-40 bg-slate-200 rounded" />
                <div className="mt-2 h-4 w-28 bg-slate-200 rounded" />

                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-slate-200 rounded" />
                  <div className="h-4 bg-slate-200 rounded" />
                  <div className="h-4 w-4/5 bg-slate-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="rounded-3xl p-8 bg-slate-200">
          <div className="h-4 w-48 bg-white/50 rounded" />
          <div className="mt-4 h-10 w-2/3 bg-white/50 rounded" />

          <div className="mt-4 space-y-2">
            <div className="h-4 bg-white/50 rounded" />
            <div className="h-4 bg-white/50 rounded w-4/5" />
          </div>

          <div className="mt-6 flex gap-3 flex-wrap">
            <div className="h-8 w-40 rounded-full bg-white/50" />
            <div className="h-8 w-48 rounded-full bg-white/50" />
            <div className="h-8 w-52 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

    </div>
  );
}