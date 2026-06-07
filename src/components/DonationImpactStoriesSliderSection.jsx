import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getImpactStories } from "../services/api";
import ImpactStoriesSkeleton from "../loaders/ImpactStoriesSkeleton";



const CATEGORY_THEME = {
  Water: {
    gradient: "from-teal-500 to-emerald-600",
    accentColor: "text-teal-600 bg-teal-50 border-teal-200",
  },
  Education: {
    gradient: "from-blue-500 to-indigo-600",
    accentColor: "text-blue-600 bg-blue-50 border-blue-200",
  },
  Healthcare: {
    gradient: "from-rose-500 to-pink-600",
    accentColor: "text-rose-600 bg-rose-50 border-rose-200",
  },
};






function ImpactCard({ post }) {

   const theme = CATEGORY_THEME[post.category] || CATEGORY_THEME.Water;

return (
    <article
      className={[
        "group relative w-[320px] sm:w-[360px] lg:w-[420px]",
        "rounded-2xl border border-emerald-100/70 bg-white/65 backdrop-blur",
        "shadow-sm hover:shadow-[0_0_0_1px_rgba(16,185,129,0.18),0_18px_55px_rgba(16,185,129,0.16)]",
        "transition-all duration-300 hover:-translate-y-1",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* subtle glass shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div
          className={[
            "absolute -top-24 -left-24 h-56 w-56 rounded-full blur-3xl",
            "bg-emerald-200/30",
          ].join(" ")}
        />

        <div
          className={[
            "absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-3xl",
            "bg-emerald-100/25",
          ].join(" ")}
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/50 via-white/0 to-white/30" />
      </div>

      <div className="p-4 sm:p-5">
        {/* image */}
        <div className="relative overflow-hidden rounded-xl border border-emerald-100/70 bg-white/40">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-white/0 to-white/20" />

          <div className="relative h-44 sm:h-52">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />

            {/* category badge */}
            <div className="absolute left-3 top-3">
              <span
                className={[
                  "inline-flex items-center rounded-full border px-3 py-1 text-xs sm:text-sm font-semibold",
                  theme.accentColor,
                  "backdrop-blur bg-white/60",
                ].join(" ")}
              >
                {post.category}
              </span>
            </div>

            {/* avatars */}
            <div className="absolute right-3 top-3 flex items-center gap-2">
  <div className="flex -space-x-2 rtl:space-x-reverse">
    {[
      "/images/user-1.jpg",
      "/images/user-2.jpg",
      "/images/user-3.jpg",
    ].map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Contributor ${idx + 1}`}
        className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
      />
    ))}

    {/* extra contributors */}
    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[11px] font-bold text-emerald-700 shadow-sm">
      +97
    </div>
  </div>

  <span className="hidden sm:inline-flex items-center rounded-full border border-emerald-100 bg-white/60 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 backdrop-blur">
    100+ Contributors
  </span>
</div>

            {/* overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* title */}
        <h3 className="mt-4 text-lg sm:text-xl font-semibold leading-snug text-slate-900">
          {post.title}
        </h3>

        {/* excerpt */}
        <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-600">
          {post.excerpt}
        </p>

        {/* stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-emerald-100 bg-white/55 p-3">
            <p className="text-[11px] font-semibold text-slate-500">
              Location
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              {post.location}
            </p>
          </div>

          <div className="rounded-xl border border-emerald-100 bg-white/55 p-3">
            <p className="text-[11px] font-semibold text-slate-500">
              Lives/Beneficiaries
            </p>

            <p className="mt-1 text-sm font-semibold text-emerald-800">
              {post.livesImpacted}
            </p>
          </div>
        </div>

        {/* progress */}
        <div className="mt-3">
          <div className="relative h-2 overflow-hidden rounded-full border border-emerald-100 bg-emerald-50">
            <div
              className={[
                "absolute inset-0 bg-gradient-to-r",
                theme.gradient,
                "opacity-90",
              ].join(" ")}
              style={{ width: "58%" }}
            />

            <div className="absolute inset-0 translate-x-[-120%] bg-white/35 animate-[shine_2.1s_ease-in-out_infinite] [animation-play-state:paused] group-hover:[animation-play-state:running]" />
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-[11px] font-semibold text-slate-500">
              Support Delivered
            </p>

            <p className="text-sm font-bold text-slate-900">
              {post.raised}
            </p>
          </div>
        </div>

        {/* button */}
        <div className="mt-5 flex items-center justify-between">
          <Link
            to={`/impact-stories/${post.slug}`}
            className={[
              "inline-flex items-center gap-2 rounded-xl border border-emerald-100",
              "bg-white/70 px-3.5 py-2 text-sm font-semibold text-emerald-800",
              "transition-all duration-300 hover:border-emerald-200 hover:bg-white",
            ].join(" ")}
          >
            <span className="relative">
              Read Story

              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </span>

            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50/70">
              <span className="text-emerald-700 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 rounded-xl border border-emerald-100 bg-white/60 px-3 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />

            <span className="text-[12px] font-semibold text-emerald-800">
              Thanks for fueling hope
            </span>
          </div>
        </div>
      </div>

      {/* local style */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }
      `}</style>
    </article>
  );
}

export default function DonationImpactStoriesSliderSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      const loadImpactStories = async () => {
        try {
          setLoading(true);
          const data = await getImpactStories();
          setItems(data);
          console.log("Fetched impact stories:", data);
        } catch (error) {
          console.error("Error fetching impact stories:", error);
        } finally {
          setLoading(false);
        }
      }

      loadImpactStories();
  },[])

  if (loading) {
    return (
      <ImpactStoriesSkeleton />
    )
  }

  return (
    <section className="relative bg-white">
      <style>{`
        @keyframes impact-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .impact-marquee-track {
          display: flex;
          width: max-content;
          animation: impact-marquee 34s linear infinite;
          will-change: transform;
        }

        .impact-marquee:hover .impact-marquee-track,
        .impact-marquee:focus-within .impact-marquee-track {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .impact-marquee-track {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .impact-marquee-track {
            animation: none;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        .animate-shine {
          animation: shine 2.1s ease-in-out infinite;
        }
      `}</style>

      {/* blur effects */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="pointer-events-none absolute right-[-120px] top-40 h-72 w-72 rounded-full bg-teal-200/15 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-120px] left-[-140px] h-80 w-80 rounded-full bg-emerald-100/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        {/* heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Stories of Hope & Impact
          </h2>

          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Every contribution creates a real human story filled with hope,
            recovery, and transformation.
          </p>
        </div>

        {/* slider */}
        <div className="mt-10 sm:mt-12">
          <div
            className="impact-marquee relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/60 backdrop-blur"
            role="region"
            aria-label="Donation impact stories carousel"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />

            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />

            <div className="impact-marquee-track gap-5 px-4 py-6 sm:gap-6">
              {[...items, ...items].map((post, idx) => (
                <ImpactCard key={`${post.id}-${idx}`} post={post} />
              ))}
            </div>
          </div>

          {/* footer text */}
          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
            <p className="font-semibold text-emerald-800/90">
              Tip: Hover a card to pause
            </p>

            <p className="hidden sm:block">
              Real stories. Transparent impact. Premium giving experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}