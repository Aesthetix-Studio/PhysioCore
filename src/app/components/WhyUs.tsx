import { motion } from "motion/react";
import { Activity, ClipboardList, Clock, ShieldCheck, Stethoscope, Users } from "lucide-react";

const features = [
  {
    icon: <Activity size={26} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Evidence-Based Protocols",
    desc: "Our treatments are informed by the latest clinical research and continuously updated guidelines — no guesswork.",
  },
  {
    icon: <ClipboardList size={26} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Personalised Recovery Plans",
    desc: "Each patient receives a custom program designed around their specific condition, lifestyle, and recovery goals.",
  },
  {
    icon: <Clock size={26} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Flexible Appointments",
    desc: "Early morning, evening, and weekend slots available. We work around your schedule, not the other way around.",
  },
  {
    icon: <ShieldCheck size={26} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Certified Specialists",
    desc: "All our therapists hold postgraduate qualifications in their specialty area and undergo continuous education.",
  },
  {
    icon: <Stethoscope size={26} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Advanced Equipment",
    desc: "Shockwave therapy, ultrasound, dry needling, and digital movement analysis — all in-house.",
  },
  {
    icon: <Users size={26} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    title: "Multidisciplinary Team",
    desc: "Physios collaborate with sports doctors, nutritionists, and psychologists for a truly holistic approach.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: big visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-[#2C3831] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
              {/* Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6B8E7C]/20 rounded-full blur-3xl" />

              <p className="font-inter text-[#6B8E7C] text-sm font-medium uppercase tracking-widest mb-4 relative z-10">
                Why Choose Us
              </p>
              <h2 className="font-outfit text-[clamp(2rem,4vw,3.2rem)] font-700 text-white leading-tight mb-6 relative z-10">
                A Clinic Built Around <span className="text-[#6B8E7C]">Your Recovery</span>
              </h2>
              <p className="font-inter text-white/70 leading-relaxed mb-10 relative z-10">
                From your very first appointment to your final discharge, PhysioCore is with you
                every step of the way — measuring progress, adjusting your plan, and celebrating
                your milestones.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { val: "97%", label: "Satisfaction rate" },
                  { val: "< 24h", label: "Appointment wait" },
                  { val: "12", label: "Certified specialists" },
                  { val: "2", label: "Clinic locations" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-2xl p-4">
                    <p className="font-outfit text-2xl font-700 text-[#6B8E7C]">{s.val}</p>
                    <p className="font-inter text-white/60 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-5 rounded-2xl border border-gray-100 hover:border-[#6B8E7C]/30 hover:bg-[#F4F7F5] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF0EC] flex items-center justify-center mb-4 group-hover:bg-[#6B8E7C]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-outfit font-600 text-gray-900 mb-2">{f.title}</h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
