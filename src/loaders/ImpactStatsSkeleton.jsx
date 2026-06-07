export function ImpactStatsSkeleton() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* HEADER SKELETON */}
        <div className="mb-16 w-full flex flex-col items-center text-center">
          <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-4">

            <div className="h-3 w-28 bg-slate-200 rounded-full animate-pulse" />

            <div className="h-10 w-3/4 bg-slate-200 rounded animate-pulse" />

            <div className="space-y-2 w-full max-w-[60ch]">
              <div className="h-4 w-full bg-slate-200 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse" />
            </div>

          </div>
        </div>

        {/* GRID SKELETON */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl px-6 py-9 border border-slate-100 shadow-sm overflow-hidden"
            >
              {/* glow placeholder */}
              <div className="absolute inset-0 bg-slate-100 animate-pulse" />

              {/* number */}
              <div className="h-10 w-20 mx-auto bg-slate-200 rounded animate-pulse relative" />

              {/* label */}
              <div className="h-3 w-24 mx-auto mt-6 bg-slate-200 rounded animate-pulse relative" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}