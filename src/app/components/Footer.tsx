import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";

const links = {
  Services: [
    "Manual Therapy",
    "Sports Rehabilitation",
    "Post-Surgery Recovery",
    "Chronic Pain Management",
    "Neurological Rehab",
    "Pediatric Physiotherapy",
  ],
  Company: ["About Us", "Our Team", "Careers", "Blog & Research", "Press", "Contact Us"],
  Support: ["FAQs", "Insurance Info", "Pricing", "Patient Portal", "Referral Program", "Accessibility"],
};

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121A15] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-outfit font-700 text-2xl text-white mb-1">
              Ready to start your recovery?
            </h3>
            <p className="font-inter text-white/50 text-sm">
              Book a free initial assessment — no commitment required.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 bg-[#6B8E7C] hover:bg-[#547262] text-white px-7 py-3.5 rounded-xl font-inter font-medium text-sm transition-all shrink-0 shadow-lg shadow-[#6B8E7C]/20"
          >
            Book Free Assessment
            <ArrowRight size={15} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#2C3831] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="white" fillOpacity="0.3"/>
                  <path d="M8 10c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" fill="white" fillOpacity="0.6"/>
                  <path d="M7 17c1.1-1.26 2.75-2 5-2s3.9.74 5 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="font-outfit text-lg font-700 text-white">
                  Physio<span className="text-[#6B8E7C]">Core</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase font-inter text-white/40">
                  Rehabilitation Center
                </p>
              </div>
            </div>

            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Hyderabad's premier physiotherapy clinic, helping patients reclaim their mobility and live pain-free since 2009.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {[
                { Icon: MapPin, text: "123 Wellness Ave, Jubilee Hills" },
                { Icon: Phone, text: "+91 98765 43210" },
                { Icon: Mail, text: "hello@physiocore.in" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-white/50 text-sm font-inter">
                  <Icon size={14} strokeWidth={1.5} className="text-[#6B8E7C] shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:border-[#6B8E7C]/50 hover:text-[#6B8E7C] transition-colors"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-outfit font-600 text-white text-sm mb-5">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <button className="font-inter text-white/40 text-sm hover:text-white/80 transition-colors text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/30 text-xs">
            © 2026 PhysioCore Rehabilitation Center. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
              <button key={item} className="font-inter text-white/30 text-xs hover:text-white/60 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
