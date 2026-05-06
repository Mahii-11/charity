import { useState } from "react";
import { motion } from "framer-motion";
import { AMOUNTS } from "../data/data";
import { formatNumber } from "../lib/utils";
import { Reveal } from "../components/ui/Reveal";
import { FiLock } from "react-icons/fi";

const PAYMENT_METHODS = ["bKash", "Nagad", "Card"];

const PAYMENT_ICONS = {
  bKash: "📱",
  Nagad: "💳",
  Card: "🏦",
};

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("bKash");

  const displayAmount = customAmount
    ? `৳${formatNumber(Number(customAmount))}`
    : selectedAmount
    ? `৳${formatNumber(selectedAmount)}`
    : "Now";

  return (
    <section
      id="donate"
      className="relative overflow-hidden py-24 bg-slate-900"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/donation-3.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-35 blur-[2px] scale-105"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/images/donation-5.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-center opacity-80"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(112deg, rgba(8,20,36,0.5) 0%, rgba(10,55,66,0.38) 58%, rgba(13,98,94,0.3) 100%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 52%)",
          backdropFilter: "blur(0.6px)",
          WebkitBackdropFilter: "blur(0.6px)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8">
       
           <div className="mb-16 w-full flex flex-col items-center text-center">

  <div className="max-w-3xl w-full flex flex-col items-center text-center">

    <p className="text-[0.75rem] uppercase tracking-[0.2em] text-emerald-200 font-semibold">
      Make A Difference
    </p>

    <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold text-white leading-[1.15] tracking-tight text-center drop-shadow-[0_8px_26px_rgba(0,0,0,0.45)]">
     Choose Your Donation
    </h2>

    <p className="mt-5 text-[1.05rem] leading-[1.8] text-slate-100/90 max-w-[60ch] text-center">
     Your generosity directly funds life-changing programs around the world.
    </p>

  </div>

          </div>


        <Reveal>
          <div className="bg-white/14 backdrop-blur-[20px] rounded-3xl border border-white/35 overflow-hidden shadow-[0_26px_70px_rgba(2,12,27,0.45),inset_0_1px_0_rgba(255,255,255,0.45)] -translate-y-1">

            {/* Amount selector */}
            <div className="bg-white/12 px-8 py-7 backdrop-blur-md border-b border-white/20">
              <p className="text-label-sm text-emerald-900/80 mb-4">
                Select an amount
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {AMOUNTS.map((amount, i) => (
                  <motion.button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.94 }}
                    className={`py-3 rounded-xl font-display font-bold text-body-sm transition-all duration-200 backdrop-blur-sm ${
                      selectedAmount === amount && !customAmount
                        ? "bg-emerald-200/75 text-emerald-950 border border-emerald-300/75 shadow-[0_8px_22px_rgba(16,185,129,0.25)]"
                        : "bg-emerald-400/10 text-emerald-900 hover:bg-emerald-300/20 border border-emerald-300/35"
                    }`}
                  >
                    ৳{formatNumber(amount)}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="px-8 py-7 space-y-6 bg-white/10 backdrop-blur-md">

              {/* Custom amount */}
              <div>
                <label className="block text-body-xs font-semibold text-emerald-950/90 mb-2">
                  Or enter a custom amount
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-900/60 font-bold">
                    ৳
                  </span>

                  <input
                    type="number"
                    placeholder="Your amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-emerald-300/45 bg-emerald-100/30 text-emerald-950 placeholder:text-emerald-900/45 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Payment method */}
              <div>
                <label className="block text-body-xs font-semibold text-emerald-950/90 mb-3">
                  Payment method
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <motion.button
                      key={method}
                      onClick={() => setSelectedPayment(method)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`py-3 rounded-xl border-2 font-semibold text-body-xs transition-all duration-200 backdrop-blur-sm ${
                        selectedPayment === method
                          ? "border-emerald-400/80 bg-emerald-200/75 text-emerald-950 shadow-[0_8px_22px_rgba(16,185,129,0.25)]"
                          : "border-emerald-300/40 bg-emerald-300/10 text-emerald-900"
                      }`}
                    >
                      {PAYMENT_ICONS[method]} {method}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 30px rgba(5,150,105,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-xl bg-white/10 backdrop-blur-md hover:bg-emerald-300/60 text-emerald-950 font-display font-bold border border-emerald-300/65 shadow-[0_12px_30px_rgba(5,150,105,0.28)]"
              >
                Donate {displayAmount} →
              </motion.button>

              <p className="text-center text-label-sm text-emerald-950/70">
                <div className="flex gap-1.5">
                    <FiLock size={16}/> 
                     Secured & encrypted. Your information is safe with us.
                </div>
              
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}