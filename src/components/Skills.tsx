"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUpVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const skillsGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "Next.js Integration", proof: "Used in Live Projects" },
      { name: "React Architecture", proof: "Strong Experience" },
      { name: "TypeScript", proof: "Used in Live Projects" },
      { name: "Tailwind UI", proof: "Used in Production" },
      { name: "Framer Motion", proof: "Strong Experience" }
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js Microservices", proof: "Strong Experience" },
      { name: "Python Automation", proof: "Used in Live Projects" },
      { name: "PostgreSQL Design", proof: "Working Knowledge" }
    ],
  },
  {
    category: "AI Engineering",
    skills: [
      { name: "LLM Integration", proof: "Used in Live Projects" },
      { name: "Agentic Workflows", proof: "Strong Experience" },
      { name: "RAG Systems", proof: "Working Knowledge" }
    ],
  },
  {
    category: "Product & Infrastructure",
    skills: [
      { name: "System Architecture", proof: "Strong Experience" },
      { name: "Payment Integrations", proof: "Used in Production" },
      { name: "Offline-First Mobile", proof: "Used in Live Projects" },
      { name: "Docker/Deployment", proof: "Working Knowledge" }
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillsGroups.map(g => g.category)];
  
  const filteredGroups = activeCategory === "All" 
    ? skillsGroups 
    : skillsGroups.filter(g => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#080A0C] text-[#F5F2EA] border-t border-white/5 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#3B82F6]/[0.015] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-normal">
              Technologies
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat 
                    ? "bg-[#D6A84F] text-[#080A0C]" 
                    : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-[#F5F2EA] border border-transparent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredGroups.map((group) => (
                <motion.div 
                  key={group.category}
                  layout
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/[0.02] p-6 border border-white/5"
                >
                  <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest border-b border-white/10 pb-3 mb-6 flex items-center justify-between">
                    {group.category}
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-neutral-300">{group.skills.length}</span>
                  </h3>
                  <div className="flex flex-col gap-4">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex flex-col gap-2 border border-white/5 bg-white/[0.025] px-4 py-3 transition-colors group-hover:border-[#D6A84F]/20 group-hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between">
                          <span className="text-sm font-medium text-neutral-300 group-hover:text-[#F5F2EA] transition-colors">{skill.name}</span>
                          <span className="w-max rounded-full border border-[#10B981]/15 bg-[#10B981]/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#10B981] transition-colors">
                            {skill.proof}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
