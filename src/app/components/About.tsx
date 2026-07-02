import { motion } from "motion/react";
import { CheckCircle, Shield, Users, HeartPulse } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const milestones = [
  { year: "2009", label: "Founded in Hyderabad" },
  { year: "2014", label: "Opened second location" },
  { year: "2019", label: "Award for Excellence in Rehab" },
  { year: "2024", label: "8,000+ patients served" },
];

const values = [
  {
    icon: <Shield size={20} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Evidence-Based Practice",
    desc: "Every treatment is grounded in peer-reviewed research and clinical outcomes.",
  },
  {
    icon: <Users size={20} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Patient-Centered Care",
    desc: "Your goals, timeline, and wellbeing drive every decision we make.",
  },
  {
    icon: <HeartPulse size={20} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Compassionate Approach",
    desc: "We treat you as a whole person — not just a condition to be managed.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F4F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[540px]">
              <ImageWithFallback
                src={`${import.meta.env.BASE_URL}images/about-treadmill.jpg`}
                alt="Physiotherapist working with patient on treadmill"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B231E]/40 to-transparent" />
            </div>

            {/* Floating card: years */}
            <div className="absolute -right-6 top-12 bg-[#2C3831] text-white rounded-2xl p-5 shadow-2xl hidden md:block">
              <p className="font-outfit text-4xl font-800 text-[#6B8E7C]">15+</p>
              <p className="font-inter text-sm text-white/80 mt-0.5">Years of Excellence</p>
            </div>

            {/* Milestone timeline */}
            <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="font-outfit font-600 text-gray-800 text-sm mb-3">Our Journey</p>
              <div className="flex justify-between items-center relative">
                <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#EBF0EC]" />
                {milestones.map((m) => (
                  <div key={m.year} className="relative flex flex-col items-center gap-1.5 z-10">
                    <div className="w-6 h-6 rounded-full bg-[#6B8E7C] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <p className="font-outfit font-700 text-xs text-[#2C3831]">{m.year}</p>
                    <p className="font-inter text-[9px] text-gray-500 text-center leading-tight max-w-[60px]">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pl-4"
          >
            <p className="font-inter text-sm font-medium text-[#6B8E7C] uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="font-outfit text-[clamp(2rem,4vw,3rem)] font-700 text-gray-900 leading-tight mb-6">
              Hyderabad's Most Trusted{" "}
              <span className="text-[#2C3831]">Physio Clinic</span>
            </h2>
            <p className="font-inter text-gray-600 leading-relaxed mb-5">
              PhysioCore was founded in 2009 by a team of dedicated physiotherapists who believed
              that every patient deserves individualized, science-backed care. Today, we're proud to
              operate two state-of-the-art locations serving the local community.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed mb-8">
              Our multidisciplinary team includes orthopaedic specialists, sports physios,
              neurological rehabilitation experts, and pediatric therapists — all under one roof.
              We don't just treat symptoms; we uncover root causes and build lasting recovery.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5 mb-10">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF0EC] flex items-center justify-center shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-outfit font-600 text-gray-900 mb-0.5">{v.title}</p>
                    <p className="font-inter text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#2C3831] text-white px-6 py-3 rounded-xl font-inter font-medium hover:bg-[#1B231E] transition-colors shadow-sm"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => {
                  document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-[#2C3831]/20 text-[#2C3831] px-6 py-3 rounded-xl font-inter font-medium hover:bg-[#EBF0EC] transition-colors"
              >
                Meet Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
