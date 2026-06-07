import { motion } from "framer-motion";

export default function CausesSkeleton({ count = 6 }) {
  return (
       <section className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
        >
          {/* Image Skeleton */}
          <div className="h-48 bg-slate-200 relative overflow-hidden">
            <div className="absolute top-3 left-3 w-20 h-7 rounded-full bg-slate-300" />
          </div>

          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <div className="h-5 w-4/5 bg-slate-200 rounded-md" />
              <div className="h-5 w-2/3 bg-slate-200 rounded-md" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-slate-100 rounded-md" />
              <div className="h-3 w-11/12 bg-slate-100 rounded-md" />
              <div className="h-3 w-4/5 bg-slate-100 rounded-md" />
            </div>

            {/* Progress Section */}
            <div className="space-y-3 pt-1">
              <div className="flex justify-between">
                <div className="h-3 w-24 bg-slate-200 rounded-md" />
                <div className="h-3 w-10 bg-slate-200 rounded-md" />
              </div>

              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  className="h-full bg-slate-300 rounded-full"
                  initial={{ width: "20%" }}
                  animate={{ width: ["20%", "70%", "40%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <div className="h-3 w-28 bg-slate-100 rounded-md" />
            </div>

            {/* Button */}
            <div className="h-11 w-full rounded-xl bg-slate-200 mt-2" />
          </div>
        </motion.div>
      ))}
    </div>
       </section>
  );
}