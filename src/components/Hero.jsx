import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import { getHeroData } from "../services/api";
import HeroSkeleton from "../loaders/HeroSkeleton";

export function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);


  useEffect(() => {
    const loadHero = async () => {
      try {
        setLoading(true);

        const data = await getHeroData(); // already normalized in api.js

        setHero(data?.[0] || null); // ONLY this needed
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadHero();
  }, []);


if (loading || !hero) {
  return <HeroSkeleton />;
}

  
  const stats = hero?.stats || [];
  const words = hero?.title?.split(" ") || [];
  const line1 = words.slice(0, 2).join(" "); 
  const line2 = words.slice(2, 4).join(" "); 
  const line3 = words.slice(4).join(" ");    
  const campaign = hero?.campaign;

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-[68px] min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg,#064e3b 0%,#065f46 40%,#0d4f3c 70%,#134e4a 100%)" }}
    >
      {/* Parallax blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-emerald-400/10" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-teal-300/10" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-amber-400/30"
          style={{ left: `${15 + i * 13}%`, top: `${22 + (i % 3) * 22}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 flex flex-col lg:flex-row items-center gap-14 w-full"
      >
        {/* Text block */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate="show"
        >
           <motion.p
             variants={fadeUp}
             className="text-[0.8rem] tracking-wide uppercase text-amber-300 mb-5 inline-block px-4 py-1.5 rounded-full bg-amber-400/15 font-medium"
             >
              {hero.badge}
           </motion.p>

           <motion.h1
             variants={fadeUp}
             className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-extrabold text-white mb-6 tracking-tight"
            >
             {line1}
             <motion.span
               className="block text-amber-400 mt-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5, duration: 0.7, ease: easeOut }}
                  >
                {line2}
               </motion.span>
             <span className="block mt-2 text-white/90"> {line3}</span>
                </motion.h1>

           <motion.div
               variants={fadeUp}
               className="text-[1.05rem] leading-[1.75] text-emerald-100/80 mb-10 mx-auto lg:mx-0"
               style={{ maxWidth: "42ch" }}
               dangerouslySetInnerHTML={{ __html: hero.description }}
            />

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
          >
            <motion.a
              href="#donate"
              whileHover={{ scale: 1.06, boxShadow: "0 20px 40px rgba(251,191,36,0.35)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-semibold text-[0.95rem] tracking-wide"
              >
              Donate Now
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>

            <motion.a
              href="#causes"
              whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-[0.95rem]"
            >
              Explore Causes
            </motion.a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            variants={staggerContainer(0.1)}
            className="mt-14 grid grid-cols-3 gap-6 max-w-xs mx-auto lg:mx-0"
          >
           {stats.map((s) => (
              <motion.div key={s.count} variants={fadeUp} className="text-center lg:text-left">
               <p className="font-display font-extrabold text-2xl text-amber-400">
                   {s.count}
               </p>
               <p className="text-[0.8rem] text-emerald-200/60 mt-1 leading-tight">
                    {s.text}
              </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero card */}
        <motion.div
          className="flex-1 w-full max-w-[420px]"
          initial={{ opacity: 0, x: 80, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: easeOut }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-900/40 flex items-center justify-center mb-6"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(52,211,153,0)",
                  "0 0 30px rgba(52,211,153,0.2)",
                  "0 0 0px rgba(52,211,153,0)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
          <img 
                src={campaign?.image}
                alt={campaign?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
       
          <motion.div
            className="absolute inset-0"
             animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           />
            </motion.div>

            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-body-sm text-white/80 font-medium">{campaign?.title}</span>
                <span className="font-display font-bold text-body-sm text-amber-400">{campaign?.progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-amber-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${campaign?.progress}%` }}
                  transition={{ delay: 1, duration: 1.2, ease: easeOut }}
                />
              </div>
              <div className="flex justify-between text-label-sm text-white/50 font-normal normal-case tracking-normal">
                <span>{campaign?.raised} raised</span>
              <span>Goal: {campaign?.goal}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-label-sm text-white/30 font-normal normal-case tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-8 bg-white/25 rounded-full origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
