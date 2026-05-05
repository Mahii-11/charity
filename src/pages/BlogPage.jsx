import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import { BlogCard } from "../components/blogs/BlogCard";
import { useMemo, useState } from "react";
import { BLOG_POSTS, CATEGORIES } from "../data/blogs";
import { BlogFilters } from "../components/blogs/BlogFiltersProps";
import { Reveal } from "../components/ui/Reveal";

 const STATS = [
    { value: "8+", label: "Stories Published" },
    { value: "12K+", label: "Monthly Readers" },
    { value: "6", label: "Impact Categories" },
  ];

  const normalize = (str) => str.toLowerCase();


export default function BlogPage() {
     const [activeCategory, setActiveCategory] = useState("All");
   
    const filteredPosts = useMemo(() => {
    const nonFeatured = BLOG_POSTS.filter((p) => !p.featured);

    if (activeCategory === "All") return nonFeatured;

    return nonFeatured.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // counts per category
   const counts = useMemo(() => {
  const nonFeatured = BLOG_POSTS.filter((p) => !p.featured);

  const result = {};
  result["All"] = nonFeatured.length;

  CATEGORIES.filter((c) => c !== "All").forEach((cat) => {
    result[cat] = nonFeatured.filter(
      (p) => normalize(p.category) === normalize(cat)
    ).length;
  });

  return result;
}, []);











  return (
        <div className="min-h-screen bg-slate-50">

        <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-emerald-600/10"
            animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-500/10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-label-sm text-emerald-400 mb-5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
            >
              Stories · Insights · Impact
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-display-2xl font-extrabold text-white text-balance mb-6"
            >
              Stories That
              <span className="block text-emerald-400"> Move the World</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-body-xl text-slate-400 text-pretty mb-10"
              style={{ maxWidth: "54ch" }}
            >
              Real stories from the field. Updates from our programs. Insights on how compassion,
              technology, and community are changing lives every single day.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8"
            >
            {STATS.map((s) => {
                 <div key={s.l}>
                  <p className="font-display font-extrabold text-display-md text-emerald-400">{s.v}</p>
                  <p className="text-label-sm text-slate-500 font-normal normal-case tracking-normal mt-0.5">{s.l}</p>
                </div>
            })}
            </motion.div>
          </motion.div>
        </div>
      </section>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

      <Reveal className="mb-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-label-sm text-slate-400 font-normal normal-case tracking-widest">Latest Stories</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal>
          <BlogFilters
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
           
          />
        </Reveal>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))
            ) : (
              <motion.div
                variants={fadeUp}
                className="col-span-full py-24 text-center"
              >
                <p className="text-5xl mb-4">🔍</p>
                <p className="font-display font-bold text-body-lg text-slate-700">No stories in this category yet</p>
                <p className="text-body-sm text-slate-400 mt-2">Check back soon — more impact stories are on the way.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Load more */}
        {filteredPosts.length > 0 && (
          <Reveal className="mt-14 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-display font-semibold text-body-sm hover:border-emerald-400 hover:text-emerald-700 transition-all duration-200"
            >
              Load More Stories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </Reveal>
        )}
        </div>

         <section className="bg-white border-t border-slate-100 py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <Reveal>
            <p className="text-label-sm text-emerald-600 mb-3  ">Make Your Own Impact</p>
            <h2 className="font-display text-display-lg font-extrabold text-slate-900 text-balance mb-5">
              Every Story Here Started With One Donor
            </h2>
            <p className="text-body-lg text-slate-500 text-pretty mb-10 mx-auto" style={{ maxWidth: "50ch" }}>
              The stories you've just read weren't inevitable — they happened because someone chose to
              give. Be the beginning of the next one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#donate"
                whileHover={{ scale: 1.06, boxShadow: "0 16px 36px rgba(5,150,105,0.28)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-display font-bold text-body-md shadow-lg hover:bg-emerald-700 transition-colors"
              >
                Donate Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/#causes"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-slate-200 text-slate-700 font-display font-semibold text-body-md hover:border-emerald-400 hover:text-emerald-700 transition-all"
              >
                Browse Causes
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>

      </div>

      
    
  )
}
