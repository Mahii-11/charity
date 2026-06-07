export function TransparencySkeleton() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden animate-pulse">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT SKELETON */}
          <div className="flex-1 space-y-6">

            {/* label */}
            <div className="h-4 w-32 bg-slate-700 rounded" />

            {/* title */}
            <div className="space-y-3">
              <div className="h-8 w-full bg-slate-700 rounded" />
              <div className="h-8 w-4/5 bg-slate-700 rounded" />
            </div>

            {/* paragraph */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-slate-700 rounded" />
              <div className="h-4 w-5/6 bg-slate-700 rounded" />
              <div className="h-4 w-2/3 bg-slate-700 rounded" />
            </div>

            {/* stats */}
            <div className="flex gap-10 pt-4">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-8 w-20 bg-slate-700 rounded" />
                  <div className="h-3 w-24 bg-slate-700 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SKELETON */}
          <div className="flex-1 w-full space-y-5">

            {/* bars */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">

                {/* label row */}
                <div className="flex justify-between">
                  <div className="h-4 w-40 bg-slate-700 rounded" />
                  <div className="h-4 w-10 bg-slate-700 rounded" />
                </div>

                {/* bar */}
                <div className="h-2.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-slate-600 rounded-full" />
                </div>
              </div>
            ))}

            {/* footer box */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-800 border border-slate-700 space-y-3">
              <div className="h-3 w-full bg-slate-700 rounded" />
              <div className="h-3 w-5/6 bg-slate-700 rounded" />
              <div className="h-3 w-2/3 bg-slate-700 rounded" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}