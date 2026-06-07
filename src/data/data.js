export const NAV_LINKS = ["Home", "About", "Causes", "Donate", "Contact"];

export const AMOUNTS = [100, 500, 1000, 2500];


////////////////////////////////////////////////////////////////////////////


//About objects//


export const ABOUT_HERO = {
  badge: "About HopeBridge",

  title: {
    line1: "Building Long-Term Social",
    line2: "Impact With Trust, Data, and",
    line3: "Community Leadership",
  },

  description:
    "HopeBridge is a mission-driven NGO focused on improving outcomes in education, healthcare, and safe water access for underserved communities. We bring together donors, local partners, and technical teams to deliver measurable and lasting impact.",

  stats: [
    {
      value: "120K+",
      label: "People Reached",
    },
    {
      value: "38",
      label: "Programs Completed",
    },
    {
      value: "16",
      label: "District Partnerships",
    },
  ],
};

export const MISSION_VISION = [
  {
    label: "Our Mission",
    title: "Turn generosity into structured, sustainable change.",
    text: "We design and deliver high-quality social programs that solve urgent needs today while building systems that continue to serve communities tomorrow. Our model blends field execution, local partnership, and transparent monitoring.",
    theme: "white",
  },
  {
    label: "Our Vision",
    title: "A future where every community can thrive with dignity.",
    text: "We imagine resilient communities where children stay in school, families access quality healthcare, and safe water is never a privilege. We work toward this through collaborative and scalable intervention models.",
    theme: "emerald",
  },
];



export const CORE_VALUES = [
  {
    title: "Human Dignity First",
    text: "Every program is designed around people, not just numbers. We listen before we act and co-create with communities.",
  },
  {
    title: "Evidence-Led Impact",
    text: "We combine field insight with measurable outcomes so every donation can be traced to real, meaningful change.",
  },
  {
    title: "Local Partnership",
    text: "Our strongest results come from working with local educators, health workers, youth leaders, and civil society groups.",
  },
  {
    title: "Accountability by Design",
    text: "Transparent reporting, regular reviews, and independent checks are embedded into our operations from day one.",
  },
];

export const TIMELINE = [
  {
    year: "2016",
    title: "Founded With One Core Idea",
    text: "HopeBridge started with a small volunteer group committed to making giving more transparent and community-led.",
  },
  {
    year: "2019",
    title: "Scaled Multi-District Programs",
    text: "We expanded into health, education, and water initiatives while building local implementation partnerships.",
  },
  {
    year: "2022",
    title: "Digital Transparency Rollout",
    text: "Program tracking and donor reporting systems were upgraded to provide faster and clearer impact visibility.",
  },
  {
    year: "Today",
    title: "Integrated NGO Platform",
    text: "We now operate as a cross-functional NGO with field teams, technical experts, and governance advisors.",
  },
];

export const LEADERSHIP = [
  {
    name: "Ayesha Rahman",
    role: "Executive Director",
    bio: "Leads strategy, public partnerships, and organizational growth with over 14 years in development leadership.",
  },
  {
    name: "Nafiz Karim",
    role: "Head of Programs",
    bio: "Drives implementation quality across water, education, and healthcare portfolios with field-first operations.",
  },
  {
    name: "Tahmina Islam",
    role: "Director, Governance & Finance",
    bio: "Oversees compliance, risk controls, and sustainable financial planning for long-term institutional resilience.",
  },
];






//Blog objects//

export const BLOG_HERO = {
  badge: "Stories · Insights · Impact",

  title: {
    line1: "Stories That",
    line2: "Move the World",
  },

  description:
    "Real stories from the field. Updates from our programs. Insights on how compassion, technology, and community are changing lives every single day.",

  stats: [
    {
      value: "8+",
      label: "Stories Published",
    },
    {
      value: "12K+",
      label: "Monthly Readers",
    },
    {
      value: "6",
      label: "Impact Categories",
    },
  ],
};



export const BLOG_CTA = {
  badge: "Make Your Own Impact",

  title: {
    line1: "Every Story Here",
    line2: "Started With One Donor",
  },

  description:
    "The stories you've just read weren’t inevitable — they happened because someone chose to give. Be the beginning of the next one.",
};





//Home page Story Section objects//

export const STORY_DATA = [
  {
    id: 1,

    badge: "Real Stories",

    title: {
      line1: "A Single Donation Changed",
      highlight: "Everything",
    },

    story: {
      paragraph1:
        "Fatima used to walk three kilometers each morning — not to school, but to collect water for her family. At nine years old, her childhood was defined by survival, not learning.",

      paragraph2:
        "When HopeBridge installed a clean water point in her village, everything shifted. Her mother's daily burden eased. Fatima enrolled in school for the first time. Within a year, she was top of her class.",

      paragraph3:
        "Behind this one story are 142,000 more — each made possible by someone exactly like you who chose to act.",
    },

    person: {
      name: "Fatima",
      age: 9,
      location: "Bangladesh",
      program: "Education Program",
      image: "/images/cities foundation.jpg",
      quote:
        "Now I go to school every day and dream of becoming a doctor.",
    },

    impactNumber: "142,000+",
  },
];



// Home page cta section objects//

export const CTA_DATA = [
  {
    id: 1,

    badge: "Take Action Today",

    title: {
      line1: "Don't Wait.",
      highlight: "Someone Needs You Now.",
    },

    description:
      "Millions of people wake up each day without clean water, food, or shelter. A single decision from you can rewrite their story.",

    cta: {
      label: "Donate Now — Make It Real",
      href: "#donate",
    },

    note: "Takes 30 seconds · 100% secure · Tax deductible",
  },
];





//Contact page objects//


export const CONTACT_INFO = [
  {
    title: "Email Us",
    value: "support@hopebridge.org",
    hint: "We usually reply within 24 hours.",
  },
  {
    title: "Call Us",
    value: "+880 1700-000000",
    hint: "Sat - Thu, 9:00 AM - 6:00 PM",
  },
  {
    title: "Visit Office",
    value: "Dhaka, Bangladesh",
    hint: "Community support center",
  },
];


// CONTACT FORM PAYLOAD//
export const CONTACT_FORM_PAYLOAD =
{
  name: "",
  email: "",
  subject: "",
  message: ""
}