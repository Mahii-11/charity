// loaders/BlogPageSkeleton.jsx

export default function BlogPageSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50 animate-pulse">
      {/* Hero */}
      <section className="relative bg-slate-900 pt-38 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="h-8 w-40 rounded-full bg-emerald-500/20 mb-5" />

            <div className="space-y-4 mb-6">
              <div className="h-14 bg-white/10 rounded-lg w-full" />
              <div className="h-14 bg-emerald-500/15 rounded-lg w-[80%]" />
            </div>

            <div className="space-y-3 mb-10">
              <div className="h-4 bg-white/10 rounded" />
              <div className="h-4 bg-white/10 rounded w-[90%]" />
              <div className="h-4 bg-white/10 rounded w-[70%]" />
            </div>

            <div className="flex flex-wrap gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-10 w-16 rounded bg-emerald-500/20 mb-2" />
                  <div className="h-3 w-20 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        {/* Latest Stories */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1 bg-slate-200" />
          <div className="h-4 w-28 bg-slate-200 rounded" />
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 w-28 rounded-full bg-slate-200"
            />
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((card) => (
            <div
              key={card}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200"
            >
              <div className="aspect-[16/10] bg-slate-200" />

              <div className="p-5">
                <div className="h-4 w-24 rounded bg-slate-200 mb-4" />

                <div className="space-y-3">
                  <div className="h-6 rounded bg-slate-200" />
                  <div className="h-6 rounded bg-slate-200 w-[85%]" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="h-4 rounded bg-slate-200" />
                  <div className="h-4 rounded bg-slate-200" />
                  <div className="h-4 rounded bg-slate-200 w-[70%]" />
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="h-4 w-24 rounded bg-slate-200" />
                  <div className="h-8 w-8 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-14">
          <div className="h-12 w-52 rounded-full bg-slate-200" />
        </div>
      </div>

      {/* CTA */}
      <section className="relative bg-white border-t border-slate-100 py-20 sm:py-24">
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="h-4 w-24 bg-slate-200 rounded mx-auto mb-4" />

          <div className="space-y-4 mb-6">
            <div className="h-12 bg-slate-200 rounded" />
            <div className="h-12 bg-slate-200 rounded w-[80%] mx-auto" />
          </div>

          <div className="space-y-3 mb-10">
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded w-[70%] mx-auto" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-14 w-44 rounded-full bg-slate-200" />
            <div className="h-14 w-44 rounded-full bg-slate-200" />
          </div>
        </div>
      </section>
    </div>
  );
}