import { useState } from "react";
import { motion } from "framer-motion";
import { AMOUNTS } from "../data/data";
import { formatNumber } from "../lib/utils";
import { Reveal } from "../components/ui/Reveal";

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
    <section id="donate" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
       
           <div className="mb-16 w-full flex flex-col items-center text-center">

  <div className="max-w-3xl w-full flex flex-col items-center text-center">

    <p className="text-[0.75rem] uppercase tracking-[0.2em] text-emerald-600 font-semibold">
      Make A Difference
    </p>

    <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.75rem)] font-extrabold text-slate-900 leading-[1.15] tracking-tight text-center">
     Choose Your Donation
    </h2>

    <p className="mt-5 text-[1.05rem] leading-[1.8] text-slate-500 max-w-[60ch] text-center">
     Your generosity directly funds life-changing programs around the world.
    </p>

  </div>

          </div>


        <Reveal>
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

            {/* Amount selector */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-7">
              <p className="text-label-sm text-white/80 mb-4">
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
                    className={`py-3 rounded-xl font-display font-bold text-body-sm transition-all duration-200 ${
                      selectedAmount === amount && !customAmount
                        ? "bg-white text-emerald-700"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    ৳{formatNumber(amount)}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="px-8 py-7 space-y-6">

              {/* Custom amount */}
              <div>
                <label className="block text-body-xs font-semibold text-slate-700 mb-2">
                  Or enter a custom amount
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
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
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              {/* Payment method */}
              <div>
                <label className="block text-body-xs font-semibold text-slate-700 mb-3">
                  Payment method
                </label>

                <div className="grid grid-cols-3 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <motion.button
                      key={method}
                      onClick={() => setSelectedPayment(method)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`py-3 rounded-xl border-2 font-semibold text-body-xs transition-all duration-200 ${
                        selectedPayment === method
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 text-slate-600"
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
                className="w-full py-4 rounded-xl bg-emerald-600 text-white font-display font-bold"
              >
                Donate {displayAmount} →
              </motion.button>

              <p className="text-center text-label-sm text-slate-400">
                🔒 Secured & encrypted. Your information is safe with us.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}