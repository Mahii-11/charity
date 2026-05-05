import {
  FaTint,
  FaBookOpen,
  FaUtensils,
  FaHospital,
  FaHome,
  FaHandHoldingHeart,
} from "react-icons/fa";



export const NAV_LINKS = ["Home", "About", "Causes", "Donate", "Contact"];

export const AMOUNTS = [100, 500, 1000, 2500];


export const CAUSES = [
  {
    title: "Clean Water for All",
    desc: "Providing safe drinking water to rural communities lacking basic infrastructure.",
    raised: 48200,
    goal: 75000,
    tag: "Water & Sanitation",
    icon: FaTint,
  },
  {
    title: "Education First",
    desc: "Building schools and supplying learning materials to underprivileged children.",
    raised: 61500,
    goal: 90000,
    tag: "Education",
    icon: FaBookOpen,
  },
  {
    title: "Hunger Relief Program",
    desc: "Delivering nutritious meals and food packages to families in crisis zones.",
    raised: 33800,
    goal: 60000,
    tag: "Food & Nutrition",
    icon: FaUtensils,
  },
  {
    title: "Medical Aid Mission",
    desc: "Providing essential medicines and healthcare access to remote communities.",
    raised: 27000,
    goal: 50000,
    tag: "Healthcare",
    icon: FaHospital,
  },
  {
    title: "Shelter & Hope",
    desc: "Rebuilding homes for disaster-affected families and displaced communities.",
    raised: 55600,
    goal: 80000,
    tag: "Housing",
    icon: FaHome,
  },
  {
    title: "Empower Women",
    desc: "Skills training and microfinance programs supporting women-led businesses.",
    raised: 19400,
    goal: 40000,
    tag: "Empowerment",
    icon: FaHandHoldingHeart,
  },
];

export const STATS = [
  { value: "142,000+", label: "Lives Impacted" },
  { value: "$8.3M", label: "Funds Raised" },
  { value: "68", label: "Countries Reached" },
  { value: "98%", label: "Funds to Programs" },
];

export const TRANSPARENCY = [
  { label: "Direct Aid & Programs", pct: 78, color: "bg-emerald-500" },
  { label: "Community Operations", pct: 12, color: "bg-blue-400" },
  { label: "Awareness & Outreach", pct: 6, color: "bg-amber-400" },
  { label: "Administration", pct: 4, color: "bg-slate-400" },
];