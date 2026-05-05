import { motion, easeOut } from "framer-motion";
import { STATS } from "../data/data";
import { fadeUp } from "../lib/animations";
import { StaggerReveal } from "../components/ui/Reveal";

export function ImpactStats() {
  return (
    <section id="about" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        <div className="mb-16 w-full flex flex-col items-center text-center">

  <div className="max-w-3xl w-full flex flex-col items-center text-center">

    <p className="text-[0.75rem] uppercase tracking-[0.2em] text-emerald-600 font-semibold">
      Real Impact
    </p>

    <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold text-slate-900 leading-[1.15] tracking-tight text-center">
      Every Number Tells a Story of Hope
    </h2>

    <p className="mt-5 text-[1.05rem] leading-[1.8] text-slate-500 max-w-[60ch] text-center">
      Behind every statistic is a real life changed — families supported,
      children educated, and communities rebuilt through collective compassion.
    </p>

  </div>

          </div>

        {/* Stats Grid */}
        <StaggerReveal delay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 50px rgba(16,185,129,0.10)",
              }}
              transition={{ type: "spring", stiffness: 280 }}
              className="group relative bg-white rounded-2xl px-6 py-9 text-center border border-slate-100 shadow-sm overflow-hidden"
            >

              {/* subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-50" />

              {/* Number */}
              <motion.p
                className="relative font-display font-extrabold text-[2rem] sm:text-[2.4rem] text-emerald-600 leading-none"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easeOut }}
              >
                {s.value}
              </motion.p>

              {/* Label */}
              <p className="relative mt-3 text-[0.8rem] uppercase tracking-[0.15em] font-medium text-slate-500">
                {s.label}
              </p>

            </motion.div>
          ))}

        </StaggerReveal>
      </div>
    </section>
  );
}