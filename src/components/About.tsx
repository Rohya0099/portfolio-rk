"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Target } from "lucide-react";
import { profile, profileLinks } from "@/components/profile";

const fadeUpVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const timeline = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    role: "Commerce Product Builder",
    company: "Sacred Spices",
    time: "2024 - Present",
    desc: "Shipped a public e-commerce website for a real food brand, covering storefront experience, payments, catalog structure, order flows, and commerce operations."
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    role: "Freelance-Ready Engineer & Designer",
    company: "Independent",
    time: "2024 - Present",
    desc: "Building specialized digital products, AI tools, and full-stack SaaS interfaces for founders, agencies, and startup teams."
  },
  {
    icon: <GraduationCap className="w-4 h-4" />,
    role: "Computer Engineering",
    company: "University",
    time: "2020 - 2024",
    desc: "Focused on software architecture, AI foundations, and modern web application development."
  }
];

const cards = [
  {
    title: "Product Creator",
    description: "Designing and developing complete SaaS platforms and digital products from zero to one. End-to-end founder-level ownership.",
    icon: <Target className="w-5 h-5 text-[#10B981]" />
  },
  {
    title: "Full Stack Engineer",
    description: "Architecting scalable backend systems and high-performance frontends using Next.js, Node.js, and modern databases.",
    icon: <Target className="w-5 h-5 text-[#3B82F6]" />
  },
  {
    title: "AI Product Builder",
    description: "Integrating powerful LLMs and multi-agent AI systems into production-ready business apps to solve complex problems.",
    icon: <Target className="w-5 h-5 text-[#D6A84F]" />
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#080A0C] text-[#F5F2EA] relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-24">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold tracking-normal mb-8">
                The Journey
              </h2>
              <p className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed mb-6">
                I am a full-stack engineer and product builder with shipped product experience. I partner with founders and technical teams to architect scalable SaaS platforms, intelligent AI systems, and high-performance digital products from zero to one.
              </p>
              <p className="text-base text-neutral-500 font-light leading-relaxed mb-8">
                I engineer scalable architectures using Next.js and Node.js, combined with multi-agent AI systems, to solve complex business problems. Sacred Spices anchors that with a real deployed commerce website built for brand credibility, customer experience, and business operations.
              </p>
              
              <div className="flex items-center gap-2 text-sm font-mono text-neutral-500 uppercase tracking-widest mt-8">
                <MapPin className="w-4 h-4" /> Based in India, Working Globally
              </div>

              <div className="mt-10 border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#10B981]">Professional Profile</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-[#F5F2EA]">{profile.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.roles.map((role) => (
                    <span key={role} className="border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono uppercase tracking-widest text-neutral-300">
                      {role}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {profileLinks.map(({ label, href, icon: Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-label={label === "Email" ? `Email ${profile.name}` : `Open ${label} profile`}
                      className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300 transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:text-[#F5F2EA]"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative border-l border-white/10 pl-8 space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-[#080A0C] border border-white/10 flex items-center justify-center text-neutral-400 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                      {item.icon}
                    </div>
                    <div className="text-xs font-mono text-neutral-500 mb-2 uppercase tracking-widest">{item.time}</div>
                    <h4 className="text-lg font-medium text-[#F5F2EA] mb-1">{item.role}</h4>
                    <div className="text-sm text-neutral-400 mb-3">{item.company}</div>
                    <p className="text-sm font-light text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-medium tracking-normal mb-8 text-[#F5F2EA]">Current Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group bg-white/[0.02] border border-white/5 p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#F5F2EA] relative z-10">{card.title}</h3>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed relative z-10">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
