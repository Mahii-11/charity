import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../lib/animations";
import { Reveal } from "../components/ui/Reveal";

export function StorySection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Image side */}
          <Reveal variants={slideLeft} className="flex-1 relative">
             <motion.div
  className="aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl relative group"
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 250 }}
>
  {/* Image */}
  <img
    src="/images/cities foundation.jpg" // 👉 ekhane tomar image path
    alt="Fatima"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/20 to-transparent" />

  {/* Text */}
  <div className="absolute bottom-6 left-6 right-6">
    <p className="font-display font-bold text-body-md text-white">
      Fatima, 9
    </p>
    <p className="text-label-sm text-emerald-200 mt-0.5">
      Bangladesh · Education Program
    </p>
  </div>
</motion.div>
            {/* Floating quote */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:-right-10 bg-amber-400 text-slate-900 rounded-2xl p-4 shadow-lg max-w-[200px]"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              <p className="text-body-xs font-semibold leading-snug">
                "Now I go to school every day and dream of becoming a doctor."
              </p>
            </motion.div>
          </Reveal>

          {/* Text side */}
          <Reveal variants={slideRight} className="flex-1">
            <p className="text-label-sm text-emerald-600 mb-3">Real Stories</p>
            <h2 className="font-display text-display-lg font-extrabold text-slate-900 text-balance mb-6">
              A Single Donation Changed{" "}
              <span className="text-emerald-600">Everything</span>
            </h2>

            <div className="space-y-4">
              <p className="text-body-lg text-slate-600 text-pretty">
                Fatima used to walk three kilometers each morning — not to school, but to collect water
                for her family. At nine years old, her childhood was defined by survival, not learning.
              </p>
              <p className="text-body-md text-slate-500 text-pretty">
                When HopeBridge installed a clean water point in her village, everything shifted. Her
                mother's daily burden eased. Fatima enrolled in school for the first time. Within a year,
                she was top of her class.
              </p>
              <p className="text-body-md text-slate-500 text-pretty">
                Behind this one story are{" "}
                <span className="font-semibold text-slate-800">142,000 more</span> — each made possible
                by someone exactly like you who chose to act.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#donate"
                whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(5,150,105,0.3)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 text-white font-display font-bold text-body-sm shadow-md hover:bg-emerald-700 transition-colors"
              >
                Be Someone's Story
              </motion.a>
              <motion.a
                href="#causes"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-slate-200 text-slate-700 font-display font-semibold text-body-sm hover:border-emerald-400 hover:text-emerald-700 transition-all"
              >
                See All Causes
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
