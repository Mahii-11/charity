import { motion } from "framer-motion";
import { fadeUp } from "../../lib/animations";

export function BlogCard({ post }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 48px rgba(0,0,0,0.10)",
      }}
      transition={{ type: "spring", stiffness: 280 }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col cursor-pointer"
    >
      
      <div
        className={`relative h-52 bg-linear-to-br ${post.gradient} flex items-center justify-center overflow-hidden shrink-0`}
      >
          <img src={post.image} alt={post.category} className="w-full h-auto" />
        <motion.span
          className="text-5xl opacity-30 select-none"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
        
        </motion.span>

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-semibold bg-white/90 border ${post.accentColor}`}
        >
          {post.category}
        </span>

        {/* Read time */}
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-sm bg-black/30 text-white/90">
          {post.readTime} min read
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Date */}
        <p className="text-sm text-slate-400 mb-3">
          {post.date}
        </p>

        {/* Title */}
        <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">

          {/* Author */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
              {post.authorInitial}
            </span>

            <span className="text-sm font-medium text-slate-700">
              {post.author}
            </span>
          </div>

          {/* Read more */}
          <motion.span className="flex items-center gap-1.5 text-emerald-600 font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">

            Read More

            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>

          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}