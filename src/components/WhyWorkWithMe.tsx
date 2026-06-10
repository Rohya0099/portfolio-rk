"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Rocket, LayoutTemplate } from "lucide-react";

const reasons = [
  {
    title: "Real Product Experience",
    desc: "Architecting complete platforms end-to-end, including a deployed commerce website for a real brand with storefront, payments, catalog, and operational workflows.",
    icon: <LayoutTemplate className="w-6 h-6 text-[#10B981]" />
  },
  {
    title: "AI Development Expertise",
    desc: "Deep knowledge of LLMs, agentic workflows, and API integrations. Building software that adapts and automates intelligently.",
    icon: <BrainCircuit className="w-6 h-6 text-[#3B82F6]" />
  },
  {
    title: "Full Stack Capability",
    desc: "Proficient across the modern stack (React/Next.js, Node, SQL, NoSQL). Bridging the gap between front-end visuals and robust back-end logic.",
    icon: <Code2 className="w-6 h-6 text-[#D6A84F]" />
  },
  {
    title: "Startup Mindset",
    desc: "Founder-level execution. I prioritize shipping usable product, improving customer journeys, and turning technical architecture into measurable business value.",
    icon: <Rocket className="w-6 h-6 text-[#D6A84F]" />
  }
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="py-24 md:py-32 bg-[#080A0C] relative border-t border-white/5 overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#3B82F6]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-normal text-[#F5F2EA] mb-4"
          >
            Why Work With Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 font-light text-lg leading-relaxed"
          >
            I bring a comprehensive, product-first approach to engineering. Here is what you get when we collaborate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto cursor-default">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#0B0D10] border border-white/5 p-8 flex flex-col gap-6 overflow-hidden"
            >
              {/* Subtle spotlight base glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-4 bg-white/5 rounded-full w-min border border-white/5 group-hover:border-white/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#F5F2EA] mb-3 tracking-normal">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-light text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
