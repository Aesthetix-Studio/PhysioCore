import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle, ChevronDown, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "8,000+", label: "Patients Treated" },
  { value: "30+", label: "Therapy Programs" },
  { value: "97%", label: "Patient Satisfaction" },
];

const highlights = [
  "Evidence-based treatment protocols",
  "Certified specialist therapists",
  "Personalized recovery plans",
];

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#1B231E] overflow-hidden flex flex-col"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#6B8E7C]/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#2C3831]/40 blur-3xl" />

      <div className="relative flex-1 max-w-7xl mx-auto px-6 pt-36 pb-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Left content */}
        <div className="flex-1 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-inter mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#6B8E7C] animate-pulse" />
            Premium Holistic Care • Hyderabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-outfit text-[clamp(2.6rem,6vw,5rem)] leading-[1.1] font-800 mb-6"
          >
            Relieve Pain.
            <br />
            <span className="text-[#6B8E7C]">Restore Mobility.</span>
            <br />
            Reclaim Life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 font-inter text-lg leading-relaxed max-w-lg mb-8"
          >
            Targeted, evidence-based physiotherapy designed to get you back to
            doing what you love — faster, stronger, and pain-free.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-2.5 mb-10"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-white/80 font-inter text-sm">
                <CheckCircle size={16} strokeWidth={1.5} className="text-[#6B8E7C] shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-2 bg-[#6B8E7C] hover:bg-[#547262] text-white px-7 py-3.5 rounded-xl font-inter font-medium text-base transition-all shadow-lg shadow-[#6B8E7C]/30 hover:shadow-[#6B8E7C]/50 hover:-translate-y-0.5"
            >
              Book Appointment
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-7 py-3.5 rounded-xl font-inter font-medium text-base transition-all hover:bg-white/5"
            >
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-lg lg:max-w-none"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[580px]">
            <ImageWithFallback
              src="/images/hero-physio.jpg"
              alt="Physiotherapist treating a patient"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B231E]/60 to-transparent" />

            {/* Floating badge */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] flex items-center justify-center">
                  <Star size={20} className="text-[#6B8E7C] fill-[#6B8E7C]" />
                </div>
                <div>
                  <p className="font-outfit font-600 text-gray-900 text-sm">4.9/5 Rating</p>
                  <p className="font-inter text-xs text-gray-500">Based on 1,240 reviews</p>
                </div>
              </div>
            </div>

            {/* Floating treatment card */}
            <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl max-w-[180px]">
              <p className="font-outfit font-600 text-gray-900 text-sm mb-0.5">Next Available</p>
              <p className="font-inter text-[#6B8E7C] text-xs font-medium">Tomorrow, 9:00 AM</p>
              <div className="mt-2 flex -space-x-2">
                {["bg-[#6B8E7C]", "bg-[#547262]", "bg-[#86A696]"].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-outfit font-600`}>
                    {["A", "B", "C"][i]}
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-inter">
                  +4
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i < 3 ? "lg:border-r lg:border-white/10" : ""}`}>
              <p className="font-outfit text-3xl font-800 text-[#6B8E7C]">{stat.value}</p>
              <p className="font-inter text-sm text-white/60 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="font-inter text-xs">Scroll</span>
        <ChevronDown size={16} strokeWidth={1.5} className="animate-bounce" />
      </button>
    </section>
  );
}
