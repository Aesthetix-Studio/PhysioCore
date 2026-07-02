import { motion } from "motion/react";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Physiotherapist",
    speciality: "Orthopaedic & Sports Rehab",
    bio: "15+ years of experience in sports and orthopaedic rehabilitation. Former physiotherapist for the NY Rangers.",
    image: `${import.meta.env.BASE_URL}images/team-sarah.jpg`,
    color: "bg-[#EBF0EC]",
    initials: "SM",
  },
  {
    name: "Dr. James Okafor",
    role: "Senior Physio Therapist",
    speciality: "Neurological Rehabilitation",
    bio: "Specialist in neurological rehab with a PhD in Motor Recovery. Published researcher and international lecturer.",
    image: `${import.meta.env.BASE_URL}images/team-james.jpg`,
    color: "bg-[#EBF0EC]",
    initials: "JO",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Paediatric Physio Specialist",
    speciality: "Paediatric & Developmental",
    bio: "Dedicated to helping children reach their fullest physical potential through play-based, family-centred therapy.",
    image: `${import.meta.env.BASE_URL}images/team-priya.jpg`,
    color: "bg-[#EBF0EC]",
    initials: "PS",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Sports Rehabilitation Expert",
    speciality: "Post-Surgical & Athletic Performance",
    bio: "Former competitive athlete turned physio. Helps elite and recreational athletes return stronger from surgery.",
    image: `${import.meta.env.BASE_URL}images/team-marcus.jpg`,
    color: "bg-[#EBF0EC]",
    initials: "MC",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-[#F4F7F5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-sm font-medium text-[#6B8E7C] uppercase tracking-widest mb-3"
          >
            Meet the Experts
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-[clamp(2rem,4vw,3rem)] font-700 text-gray-900 leading-tight mb-4"
          >
            The Team Behind <span className="text-[#2C3831]">Your Recovery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-gray-500 leading-relaxed"
          >
            Our certified physiotherapists bring world-class expertise and genuine compassion
            to every session. Your recovery is their passion.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-[#2C3831]/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C3831]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social icons on hover */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {[
                    { Icon: Linkedin, label: "LinkedIn" },
                    { Icon: Twitter, label: "Twitter" },
                    { Icon: Mail, label: "Email" },
                  ].map(({ Icon, label }) => (
                    <button
                      key={label}
                      aria-label={label}
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#2C3831] hover:bg-[#6B8E7C] hover:text-white transition-colors"
                    >
                      <Icon size={14} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="inline-block bg-[#EBF0EC] text-[#2C3831] text-xs font-inter font-medium px-2.5 py-0.5 rounded-full mb-2">
                  {member.speciality}
                </div>
                <h3 className="font-outfit font-600 text-gray-900 text-base mb-0.5">{member.name}</h3>
                <p className="font-inter text-[#6B8E7C] text-xs font-medium mb-2">{member.role}</p>
                <p className="font-inter text-gray-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
