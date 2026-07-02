import { motion } from "motion/react";
import { ArrowRight, Activity, HeartPulse, Stethoscope, Sparkles, Brain, Baby } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Manual Therapy",
    description:
      "Hands-on techniques to mobilize joints and soft tissue, reducing pain and improving range of motion.",
    image: "/images/service-manual.jpg",
    tag: "Most Popular",
    icon: <Activity size={24} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Sports Rehabilitation",
    description:
      "Specialized programs for athletes to recover from injury and return to peak performance safely.",
    image: "/images/service-sports.jpg",
    tag: null,
    icon: <HeartPulse size={24} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Post-Surgery Recovery",
    description:
      "Structured rehabilitation following orthopaedic surgery to restore strength and functionality.",
    image: "/images/service-post-surgery.jpg",
    tag: null,
    icon: <Stethoscope size={24} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Chronic Pain Management",
    description:
      "Long-term strategies combining manual therapy, exercise, and education to manage persistent pain.",
    image: "/images/service-chronic.jpg",
    tag: null,
    icon: <Sparkles size={24} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Neurological Rehabilitation",
    description:
      "Targeted programs for patients with neurological conditions such as stroke, MS, and Parkinson's.",
    image: "/images/about-treadmill.jpg",
    tag: "Specialist",
    icon: <Brain size={24} strokeWidth={1.5} className="text-white" />,
  },
  {
    title: "Pediatric Physiotherapy",
    description:
      "Gentle, child-friendly physiotherapy for developmental issues, sports injuries, and postural problems.",
    image: "/images/service-pediatric.jpg",
    tag: null,
    icon: <Baby size={24} strokeWidth={1.5} className="text-white" />,
  },
];

export function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-inter text-sm font-medium text-[#6B8E7C] uppercase tracking-widest mb-3"
            >
              What We Offer
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-outfit text-[clamp(2rem,4vw,3rem)] font-700 text-gray-900 leading-tight max-w-lg"
            >
              Comprehensive Therapy{" "}
              <span className="text-[#2C3831]">Services</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-gray-500 max-w-sm leading-relaxed text-sm"
          >
            Every treatment plan is tailored to your unique needs, guided by
            our team of certified physiotherapists with decades of combined
            experience.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#2C3831]/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3831]/70 to-transparent" />

                {/* Tag */}
                {service.tag && (
                  <div className="absolute top-3 right-3 bg-[#6B8E7C] text-white text-xs font-inter font-medium px-2.5 py-1 rounded-full">
                    {service.tag}
                  </div>
                )}

                {/* Icon */}
                <div className="absolute bottom-3 left-4">{service.icon}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-outfit font-600 text-gray-900 text-lg mb-2 group-hover:text-[#2C3831] transition-colors">
                  {service.title}
                </h3>
                <p className="font-inter text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-[#2C3831] font-inter text-sm font-medium group/btn"
                >
                  Learn More
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
