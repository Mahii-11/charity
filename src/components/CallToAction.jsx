import { motion } from "framer-motion";
import { Reveal } from "../components/ui/Reveal";

export function CallToAction() {
  return (
    <section className="py-28 bg-gradient-to-br from-emerald-600 to-teal-700 text-white text-center relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <Reveal>
          <motion.span
            className="inline-block mb-5 px-4 py-1.5 rounded-full bg-white/20 text-label-sm text-white font-normal normal-case tracking-widest"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.2)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Take Action Today
          </motion.span>

          <h2 className="font-display text-display-xl font-extrabold text-balance mb-6">
            Don't Wait.
            <span className="block text-amber-300">Someone Needs You Now.</span>
          </h2>

          <p
            className="text-body-xl text-emerald-100/80 text-pretty mb-12 mx-auto"
            style={{ maxWidth: "50ch" }}
          >
            Millions of people wake up each day without clean water, food, or shelter. A single
            decision from you can rewrite their story.
          </p>

          <motion.a
            href="#donate"
            whileHover={{ scale: 1.07, boxShadow: "0 24px 50px rgba(251,191,36,0.45)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-amber-400 text-slate-900 font-display font-extrabold text-body-lg shadow-2xl hover:bg-amber-300 transition-colors"
          >
            Donate Now — Make It Real
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>

          <div className="flex justify-center">
              <p className="mt-7 text-label-sm text-emerald-200/60 font-normal normal-case tracking-wide">
            Takes 30 seconds · 100% secure · Tax deductible
          </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
