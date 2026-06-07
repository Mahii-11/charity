export default function HeroSkeleton() {
  return (
    <section
      className="relative pt-[68px] min-h-screen flex items-center overflow-hidden animate-pulse"
      style={{
        background:
          "linear-gradient(135deg,#064e3b 0%,#065f46 40%,#0d4f3c 70%,#134e4a 100%)",
      }}
    >
      {/* Background blobs */}
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-emerald-400/10" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-teal-300/10" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-14 w-full">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="h-8 w-40 bg-amber-400/20 rounded-full mb-5 mx-auto lg:mx-0" />

          {/* Title */}
          <div className="space-y-4 mb-6">
            <div className="h-12 bg-white/15 rounded-lg w-full max-w-[500px] mx-auto lg:mx-0" />
            <div className="h-12 bg-amber-400/20 rounded-lg w-[85%] max-w-[430px] mx-auto lg:mx-0" />
            <div className="h-12 bg-white/10 rounded-lg w-[75%] max-w-[380px] mx-auto lg:mx-0" />
          </div>

          {/* Description */}
          <div className="space-y-3 mb-10 max-w-[42ch] mx-auto lg:mx-0">
            <div className="h-4 bg-white/10 rounded w-full" />
            <div className="h-4 bg-white/10 rounded w-[95%]" />
            <div className="h-4 bg-white/10 rounded w-[80%]" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
            <div className="h-14 w-44 rounded-full bg-amber-400/25" />
            <div className="h-14 w-44 rounded-full bg-white/10 border border-white/10" />
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xs mx-auto lg:mx-0">
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <div className="h-8 w-16 bg-amber-400/20 rounded mb-2" />
                <div className="h-3 w-20 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 w-full max-w-[420px]">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
            
            {/* Image */}
            <div className="aspect-[4/3] rounded-2xl bg-emerald-900/40 mb-6" />

            {/* Campaign Info */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 w-40 bg-white/15 rounded" />
                <div className="h-4 w-12 bg-amber-400/20 rounded" />
              </div>

              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-amber-400/20 rounded-full" />
              </div>

              <div className="flex justify-between">
                <div className="h-3 w-24 bg-white/10 rounded" />
                <div className="h-3 w-24 bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-3 w-12 bg-white/10 rounded" />
        <div className="w-px h-8 bg-white/10 rounded-full" />
      </div>
    </section>
  );
}