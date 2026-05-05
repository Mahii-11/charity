import { motion } from "framer-motion";
import { CATEGORIES } from "../../data/blogs";

export function BlogFilters({ active, onChange, counts = {} }) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">

      {CATEGORIES.map((cat) => {
        const isActive = cat === active;

        return (
          <motion.button
            key={cat}
            onClick={() => onChange(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-700"
            }`}
          >
            {/* Active pill background */}
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-emerald-600"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}

            {/* Category name */}
            {cat}

            {/* Count */}
            <span
              className={`ml-1.5 text-xs font-normal ${
                isActive ? "text-emerald-200" : "text-slate-400"
              }`}
            >
              {counts?.[cat] ?? 0}
            </span>
          </motion.button>
        );
      })}

    </div>
  );
}