import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import { BlogCard } from "../components/blogs/BlogCard";
import { useEffect, useMemo, useState } from "react";
import { CATEGORIES } from "../data/blogs";
import { BlogFilters } from "../components/blogs/BlogFiltersProps";
import { Reveal } from "../components/ui/Reveal";
import { getBlogCtaData, getBlogHeroData, getBlogPosts } from "../services/api";
import BlogPageSkeleton from "../loaders/BlogPageSkeleton";



  const normalize = (str) => str.toLowerCase();


export default function BlogPage() {
     const [blogPosts, setBlogPosts] = useState([]);
     const [activeCategory, setActiveCategory] = useState("All");
     const [hero, setHero] = useState(null);
     const [loading, setLoadin] = useState(true);
     const [cta, setCta] = useState(null);

    useEffect(() => {
      const loadBlogHero = async () => {
        try {
          setLoadin(true);
          const data = await getBlogHeroData();
           setHero(data?.[0] || null);
        } catch (error) {
          console.error("Error fetching Blog Hero data", error);
        } finally {
          setLoadin(false);
        }
      }
      loadBlogHero();
    }, [])



useEffect(() => {
  const loadCTA = async () => {
    const res = await getBlogCtaData();

    setCta(res?.data?.data?.[0] || null);
  };

  loadCTA();
}, []);




    



    useEffect(() => {
       const loadPosts = async () => {
        try {
           const data = await getBlogPosts();
           setBlogPosts(data);
           console.log("Fetched blog posts:", data);
        } catch (error) {
          console.error("Error fetching blog posts:", error);
        }
       }
        loadPosts();
    }, []) 
   
  /*  const filteredPosts = useMemo(() => {
    const nonFeatured = blogPosts.filter((p) => !p.featured);

    if (activeCategory === "All") return nonFeatured;

    return nonFeatured.filter((p) => p.category === activeCategory);
  }, [blogPosts, activeCategory]); */

  const filteredPosts = useMemo(() => {
  const nonFeatured = blogPosts;

  if (activeCategory === "All") return nonFeatured;

  return nonFeatured.filter(
    (p) => normalize(p.category) === normalize(activeCategory)
  );
}, [blogPosts, activeCategory]);

  // counts per category
 /*  const counts = useMemo(() => {
  const nonFeatured = blogPosts.filter((p) => !p.featured);

  const result = {};
  result["All"] = nonFeatured.length;

  CATEGORIES.filter((c) => c !== "All").forEach((cat) => {
    result[cat] = nonFeatured.filter(
      (p) => normalize(p.category) === normalize(cat)
    ).length;
  });

  return result;
}, [blogPosts]); */


const counts = useMemo(() => {
  const result = {};

  // all posts count
  result["All"] = blogPosts.length;

  // category counts
  CATEGORIES.filter((c) => c !== "All").forEach((cat) => {
    result[cat] = blogPosts.filter(
      (p) => normalize(p.category) === normalize(cat)
    ).length;
  });

  return result;
}, [blogPosts]);


 if (loading || !hero) {
    return (
      <BlogPageSkeleton />
    );
  }











  return (
        <div className="min-h-screen bg-slate-50">

        <section className="relative bg-slate-900 pt-38 pb-20 overflow-hidden">
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
              {hero?.badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-display-2xl font-extrabold text-white text-balance mb-6"
            >
              {hero?.title?.line1}
              <span className="block text-emerald-400"> {hero?.title?.line2}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-body-xl text-slate-400 text-pretty mb-10"
              style={{ maxWidth: "54ch" }}
            >
             {hero?.description}
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8"
            >
         {hero?.stats?.map((s) => (
  <div key={s.label}>
    <p className="font-display font-extrabold text-display-md text-emerald-400">
      {s.value}
    </p>

    <p className="text-label-sm text-slate-500 font-normal normal-case tracking-normal mt-0.5">
      {s.label}
    </p>
  </div>
))}
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

         <section className="relative bg-white border-t border-slate-100 py-20 sm:py-24 overflow-hidden">
  {/* subtle background glow */}
  

  <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
    <Reveal>
      {/* small label */}
      <div className="flex justify-center">
         <p className="text-xs sm:text-sm tracking-widest uppercase text-emerald-600 mb-3">
        {cta?.badge}
      </p>

      </div>
      {/* heading */}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
         {cta?.title?.line1}
          <br />
         {cta?.title?.line2}
      </h2>

      {/* description */}
      <p className="text-base sm:text-lg text-slate-500 mb-10 mx-auto max-w-[52ch] leading-relaxed">
         {cta?.description}
      </p>

      {/* buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <motion.a
          href="/#donate"
          whileHover={{ scale: 1.06, boxShadow: "0 18px 40px rgba(5,150,105,0.30)" }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-semibold text-base shadow-lg hover:bg-emerald-700 transition-all"
        >
          Donate Now
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>

        <motion.a
          href="/#causes"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-300 text-slate-700 font-semibold text-base hover:border-emerald-500 hover:text-emerald-700 transition-all"
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
