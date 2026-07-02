import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, MapPin } from "lucide-react";

const services = [
  "Manual Therapy",
  "Sports Rehabilitation",
  "Post-Surgery Recovery",
  "Chronic Pain Management",
  "Neurological Rehabilitation",
  "Pediatric Physiotherapy",
  "General Assessment",
];

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
];

const contactInfo = [
  {
    icon: <Phone size={18} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    label: "Phone",
    value: "+91 98765 43210",
    sub: "Mon–Sat, 8 AM – 7 PM",
  },
  {
    icon: <Mail size={18} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    label: "Email",
    value: "hello@physiocore.in",
    sub: "We reply within 2 hours",
  },
  {
    icon: <MapPin size={18} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    label: "Locations",
    value: "123 Wellness Ave, Jubilee Hills",
    sub: "& 45 Healing St, Banjara Hills",
  },
  {
    icon: <Clock size={18} strokeWidth={1.5} className="text-[#6B8E7C]" />,
    label: "Hours",
    value: "Mon–Fri: 7 AM – 8 PM",
    sub: "Sat–Sun: 8 AM – 4 PM",
  },
];

export function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-inter text-sm font-medium text-[#6B8E7C] uppercase tracking-widest mb-3"
          >
            Get Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-[clamp(2rem,4vw,3rem)] font-700 text-gray-900 leading-tight mb-4"
          >
            Book Your <span className="text-[#2C3831]">Appointment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-gray-500 leading-relaxed"
          >
            Take the first step toward a pain-free life. Our team will reach out within 2 hours to confirm your booking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-[#EBF0EC] border border-[#6B8E7C]/30 rounded-3xl p-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#6B8E7C]/20 flex items-center justify-center mb-5">
                  <CheckCircle size={32} strokeWidth={1.5} className="text-[#6B8E7C]" />
                </div>
                <h3 className="font-outfit font-700 text-gray-900 text-2xl mb-3">Appointment Requested!</h3>
                <p className="font-inter text-gray-600 leading-relaxed max-w-sm">
                  Thank you, {form.name.split(" ")[0] || "there"}! We've received your request and will confirm your{" "}
                  <strong>{form.service || "appointment"}</strong> session within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" }); }}
                  className="mt-6 text-[#2C3831] font-inter text-sm font-medium underline underline-offset-4"
                >
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F4F7F5] border border-gray-100 rounded-3xl p-8 lg:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="font-inter text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                      <User size={14} strokeWidth={1.5} className="text-gray-400" /> Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-inter text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                      <Phone size={14} strokeWidth={1.5} className="text-gray-400" /> Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-inter text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                      <Mail size={14} strokeWidth={1.5} className="text-gray-400" /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="font-inter text-sm font-medium text-gray-700 mb-2 block">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="font-inter text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                      <Calendar size={14} strokeWidth={1.5} className="text-gray-400" /> Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="font-inter text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                      <Clock size={14} strokeWidth={1.5} className="text-gray-400" /> Preferred Time
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="font-inter text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-2">
                    <MessageSquare size={14} strokeWidth={1.5} className="text-gray-400" /> Brief Description (optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your condition or any specific concerns..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-inter text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B8E7C]/40 focus:border-[#6B8E7C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2C3831] hover:bg-[#1B231E] disabled:opacity-60 text-white py-3.5 rounded-xl font-inter font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Appointment"
                  )}
                </button>
                <p className="font-inter text-gray-400 text-xs text-center mt-3">
                  We'll confirm your booking within 2 hours. No payment required upfront.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="bg-[#2C3831] rounded-3xl p-8 text-white mb-1">
              <h3 className="font-outfit font-700 text-xl mb-1">Talk to Us Directly</h3>
              <p className="font-inter text-white/60 text-sm leading-relaxed mb-6">
                Prefer to speak with someone? Our care coordinators are on hand to help you choose the right service and schedule your visit.
              </p>
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-inter text-xs text-white/40 mb-0.5">{item.label}</p>
                      <p className="font-outfit font-600 text-white text-sm">{item.value}</p>
                      <p className="font-inter text-white/50 text-xs">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance accepted */}
            <div className="bg-[#EBF0EC] border border-[#6B8E7C]/20 rounded-3xl p-6">
              <p className="font-outfit font-600 text-gray-900 mb-3 text-sm">Insurance & Payments</p>
              <div className="flex flex-wrap gap-2">
                {["Aetna", "Blue Cross", "Cigna", "UnitedHealth", "Medicare", "Humana", "Private Pay"].map((ins) => (
                  <span key={ins} className="bg-white border border-gray-200 text-gray-600 font-inter text-xs px-2.5 py-1 rounded-lg">
                    {ins}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
