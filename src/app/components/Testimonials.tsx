import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rachel Thompson",
    role: "Marathon Runner",
    rating: 5,
    text: "After my ACL surgery, I was told I might never run again. PhysioCore proved everyone wrong. Within 8 months I was back on the track and I just completed my fourth marathon. The team's expertise and relentless encouragement made all the difference.",
    initials: "RT",
    color: "bg-[#6B8E7C]",
    service: "Post-Surgical Rehab",
  },
  {
    name: "Michael Brennan",
    role: "Office Professional",
    rating: 5,
    text: "I had been suffering from chronic lower back pain for 3 years. Two sessions in and I was already sleeping better. After 6 weeks I was pain-free for the first time in years. Dr. Mitchell genuinely listened to me — that's rare.",
    initials: "MB",
    color: "bg-[#547262]",
    service: "Chronic Pain Management",
  },
  {
    name: "Linda & Tom Park",
    role: "Parents",
    rating: 5,
    text: "Our daughter was diagnosed with a developmental coordination disorder at age 7. Dr. Sharma's pediatric sessions were nothing short of magical. She actually looked forward to every visit. Now at 9, she's in her school swimming team.",
    initials: "LP",
    color: "bg-[#4A6455]",
    service: "Pediatric Physiotherapy",
  },
  {
    name: "David Hernandez",
    role: "Semi-Professional Footballer",
    rating: 5,
    text: "I tore my hamstring in a pre-season game. Marcus had me back on the pitch in 10 weeks — two weeks ahead of schedule. He gave me a full prevention program that I still follow. Best investment I've made in my career.",
    initials: "DH",
    color: "bg-[#6B8E7C]",
    service: "Sports Rehabilitation",
  },
  {
    name: "Grace Oduya",
    role: "Stroke Survivor",
    rating: 5,
    text: "After my stroke, I couldn't walk more than a few steps. James worked with me patiently, celebrating every centimetre of progress. Eighteen months later I walked my daughter down the aisle. Words can't express my gratitude.",
    initials: "GO",
    color: "bg-[#547262]",
    service: "Neurological Rehabilitation",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          className={i < count ? "text-amber-400 fill-amber-400" : "text-gray-200"}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-[#1B231E] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium text-[#6B8E7C] uppercase tracking-widest mb-3"
            >
              Patient Stories
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-outfit text-[clamp(2rem,4vw,3rem)] font-700 text-white leading-tight"
            >
              Real People.{" "}
              <span className="text-[#6B8E7C]">Real Results.</span>
            </motion.h2>
          </div>

          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-xl border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-xl bg-[#6B8E7C] flex items-center justify-center text-white hover:bg-[#547262] transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Main featured testimonial */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-10"
              >
                <Quote size={40} strokeWidth={1.5} className="text-[#6B8E7C]/40 mb-6" />
                <p className="font-inter text-white/85 text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-outfit font-700 text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-outfit font-600 text-white">{t.name}</p>
                    <p className="font-inter text-white/50 text-sm">{t.role}</p>
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-1">
                    <StarRating count={t.rating} />
                    <span className="font-inter text-[#6B8E7C] text-xs">{t.service}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "bg-[#6B8E7C] w-8" : "bg-white/20 w-4"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                  i === active
                    ? "border-[#6B8E7C]/50 bg-[#6B8E7C]/10"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white font-outfit font-700 text-xs`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-outfit font-600 text-white text-sm">{item.name}</p>
                    <p className="font-inter text-white/40 text-xs">{item.service}</p>
                  </div>
                </div>
                <p className="font-inter text-white/60 text-xs line-clamp-2 leading-relaxed">
                  "{item.text.slice(0, 80)}..."
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-8 justify-center lg:justify-between items-center"
        >
          {[
            { val: "4.9/5", label: "Average rating on Google" },
            { val: "1,240+", label: "Verified patient reviews" },
            { val: "98%", label: "Would recommend to family" },
            { val: "10+", label: "Industry awards won" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-outfit text-2xl font-700 text-[#6B8E7C]">{s.val}</p>
              <p className="font-inter text-white/50 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
