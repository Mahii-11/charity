import { motion, easeOut } from "framer-motion";
import { CAUSES } from "../data/data";
import { progressPct, formatNumber } from "../lib/utils";
import { fadeUp } from "../lib/animations";
import { StaggerReveal } from "../components/ui/Reveal";

export function Causes() {
  return (
    <section id="causes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
    
           <div className="mb-16 w-full flex flex-col items-center text-center">

                <div className="max-w-3xl w-full flex flex-col items-center text-center">

               <p className="text-[0.75rem] uppercase tracking-[0.2em] text-emerald-600 font-semibold">
                Active Campaigns
               </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold text-slate-900 leading-[1.15] tracking-tight text-center">
              Our Causes
             </h2>

             <p className="mt-5 text-[1.05rem] leading-[1.8] text-slate-500 max-w-[60ch] text-center">
                Each cause represents a community in need. Choose where your support goes.
               </p>

             </div>

          </div>

        <StaggerReveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAUSES.map((cause) => {
            const progress = progressPct(cause.raised, cause.goal);
             // const Icon = cause.icon;
            return (
              <motion.div
                key={cause.title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 280 }}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-default"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-linear-to-br from-emerald-50 to-teal-100 flex items-center justify-center relative overflow-hidden">
                  <motion.div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-teal-600/20 group-hover:opacity-80 transition-opacity duration-300" />
                   <img src={cause.image} alt={cause.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
       
                 <motion.div
                 className="absolute inset-0"
                 animate={{ scale: [1, 1.05, 1] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 text-emerald-700 text-label-sm rounded-full font-semibold normal-case tracking-normal">
                    {cause.tag}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-body-lg text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {cause.title}
                  </h3>
                  <p className="text-body-xs text-slate-500 leading-relaxed">{cause.desc}</p>

                  {/* Progress */}
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between items-baseline">
                      <span className="text-label-sm text-slate-600 font-semibold normal-case tracking-normal">
                        ৳{formatNumber(cause.raised)} raised
                      </span>
                      <span className="text-label-sm text-emerald-600 font-bold normal-case tracking-normal">
                        {progress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="bg-emerald-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: easeOut, delay: 0.2 }}
                      />
                    </div>
                    <p className="text-label-sm text-slate-400 font-normal normal-case tracking-normal">
                      Goal: ৳{formatNumber(cause.goal)}
                    </p>
                  </div>

                  <motion.a
                    href="#donate"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-center py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-body-xs font-semibold border border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-200 mt-2"
                  >
                    Donate to This Cause
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
