import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { StaggerReveal } from "../components/ui/Reveal";
import { Phone, Locate, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const QUICK_LINKS = ["Home", "About Us", "Our Causes", "Donate", "Contact", "Annual Report"];
const PROGRAMS = [
  "Clean Water Initiative",
  "Education First",
  "Hunger Relief",
  "Medical Aid",
  "Shelter Program",
  "Women Empowerment",
];


const SOCIAL_ICONS = [
  { icon: FaFacebookF, link: "https://www.facebook.com/profile.php?id=61564418111813" },
  { icon: FaTwitter, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaYoutube, link: "#" }
];
export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <StaggerReveal delay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <motion.div variants={fadeUp}>
            <motion.div className="flex items-center gap-2.5 mb-5" whileHover={{ scale: 1.04 }}>
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white font-display font-bold text-lg">
                H
              </span>
              <span className="font-display font-extrabold text-body-lg text-white">HopeBridge</span>
            </motion.div>
            <p className="text-body-xs text-slate-400 leading-relaxed mb-6" style={{ maxWidth: "32ch" }}>
              Bridging the gap between compassion and action since 2012. Registered non-profit serving
              communities across 68 countries.
            </p>
            <div className="flex gap-3">
             <div className="flex gap-3">
               {SOCIAL_ICONS.map(({ icon: Icon, link }, i) => (
               <motion.a
                href={link}
                key={i}
                whileHover={{ scale: 1.15, backgroundColor: "#059669", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center"
                 >
                <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-display font-bold text-body-xs text-white mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <motion.li key={link} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="text-body-xs text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div variants={fadeUp}>
            <h4 className="font-display font-bold text-body-xs text-white mb-5 uppercase tracking-widest">
              Programs
            </h4>
            <ul className="space-y-3">
              {PROGRAMS.map((program) => (
                <motion.li key={program} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <a
                    href="#causes"
                    className="text-body-xs text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {program}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h4 className="font-display font-bold text-body-xs text-white mb-5 uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <span className="text-emerald-500 mt-0.5 shrink-0"><Locate size={15} /></span>
                <span className="text-body-xs leading-relaxed">
                  42 Solidarity Avenue, Dhaka 1215, Bangladesh
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-emerald-500 shrink-0"><Phone size={15}/></span>
                <a
                  href="tel:+8801700000000"
                  className="text-body-xs hover:text-emerald-400 transition-colors"
                >
                  +880 1700 000 000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-emerald-500 shrink-0"><Mail size={15} /></span>
                <a
                  href="mailto:hello@hopebridge.org"
                  className="text-body-xs hover:text-emerald-400 transition-colors"
                >
                  hello@hopebridge.org
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-7">
              <p className="text-label-sm text-slate-500 mb-3 font-semibold">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-body-xs placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 text-white text-body-xs font-semibold hover:bg-emerald-500 transition-colors"
                >
                  Go
                </motion.button>
              </div>
            </div>
          </motion.div>
        </StaggerReveal>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-label-sm text-slate-500 font-normal normal-case tracking-normal">
            © 2026 HopeBridge Foundation. All rights reserved. Reg. No. NGO-2012-BD-7841
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((label) => (
              <motion.a
                key={label}
                href="#"
                className="text-label-sm text-slate-500 hover:text-emerald-400 transition-colors font-normal normal-case tracking-normal"
                whileHover={{ color: "#34d399" }}
              >
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
