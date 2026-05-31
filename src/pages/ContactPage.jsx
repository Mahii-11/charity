import { useState } from "react";

const CONTACT_INFO = [
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-200/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] right-[-100px] h-80 w-80 rounded-full bg-teal-100/30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Contact HopeBridge
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s Connect For Real Impact
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
            Questions, partnerships, or support requests - send us a message and
            our team will get back to you quickly.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-4">
            {CONTACT_INFO.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-100 bg-white/80 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.title}
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-500">{item.hint}</p>
              </div>
            ))}
          </aside>

          <div className="rounded-3xl border border-emerald-100/80 bg-white/80 p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.08),0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur sm:p-7">
            <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>

            {submitted ? (
              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">
                Thanks! Your message has been received. We will contact you soon.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1.5 w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                  placeholder="How can we help?"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1.5 w-full rounded-xl border border-emerald-100 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Write your message..."
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
