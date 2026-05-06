import { motion, easeOut } from "framer-motion";
import { TRANSPARENCY } from "../data/data";
import { slideLeft, slideRight } from "../lib/animations";
import { Reveal } from "../components/ui/Reveal";

export function Transparency() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: copy */}
          <Reveal variants={slideLeft} className="flex-1">
            <p className="text-label-sm text-emerald-400 mb-3">Full Transparency</p>
            <h2 className="font-display text-display-lg font-extrabold text-white text-balance mb-5">
              Every Taka, Accounted For
            </h2>
            <p
              className="text-body-lg text-slate-400 text-pretty mb-10"
              style={{ maxWidth: "44ch" }}
            >
              We believe donors deserve to know exactly how their money is used. Here's a clear
              breakdown — no fine print, no hidden costs.
            </p>

            <div className="flex gap-10">
              {[
                { n: "98%", l: "To programs & aid", c: "text-emerald-400" },
                { n: "AAA", l: "Charity rating", c: "text-amber-400" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className={`font-display font-extrabold text-display-md ${s.c}`}>{s.n}</p>
                  <p className="text-body-xs text-slate-400 mt-1">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Right: bars */}
          <Reveal variants={slideRight} className="flex-1 w-full space-y-5">
            {TRANSPARENCY.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-body-sm font-medium text-slate-300">{item.label}</span>
                  <span className="font-display font-bold text-body-sm text-white">{item.pct}%</span>
                </div>
                <div className="w-full bg-slate-700/70 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    className={`${item.color} h-2.5 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: easeOut, delay: i * 0.15 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-body-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-white">Certified by</span> the Global Giving
                Standards Board and independently audited annually.{" "}
                <a
                  href="#contact"
                  className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300 transition-colors"
                >
                  View full report →
                </a>
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
