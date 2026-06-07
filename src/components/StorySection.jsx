import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideLeft, slideRight } from "../lib/animations";
import { Reveal } from "../components/ui/Reveal";
import { getStoryData } from "../services/api"; 

export function StorySection() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const data = await getStoryData();
        setStory(data?.[0]);
      } catch (err) {
        console.error("Failed to load story:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-center text-slate-500">Loading story...</p>
        </div>
      </section>
    );
  }

  if (!story) return null;

  const {
    title,
    story: storyHtml,
    person,
   // impactNumber,
    badge,
  } = story;

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
                src={person?.image}
                alt={person?.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display font-bold text-body-md text-white">
                  {person?.name}, {person?.age}
                </p>
                <p className="text-label-sm text-emerald-200 mt-0.5">
                  {person?.location} · {person?.program}
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
                "{person?.quote}"
              </p>
            </motion.div>
          </Reveal>

          {/* Text side */}
          <Reveal variants={slideRight} className="flex-1">
            <p className="text-label-sm text-emerald-600 mb-3">
              {badge}
            </p>

            <h2 className="font-display text-display-lg font-extrabold text-slate-900 text-balance mb-6">
              {title.split("Changed")[0]}
              <span className="text-emerald-600"> Changed</span>
              {title.split("Changed")[1]}
            </h2>

            <div
              className="space-y-4 text-body-md text-slate-600"
              dangerouslySetInnerHTML={{ __html: storyHtml }}
            />

         

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