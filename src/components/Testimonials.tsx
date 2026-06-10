"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#080A0C] relative border-t border-white/5 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-normal text-[#F5F2EA] mb-4">
            Client Testimonials
          </h2>
          <p className="text-neutral-400 font-light text-lg">
            Real social proof matters. I do not use fake names or invented client quotes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl border border-white/5 bg-white/[0.025] p-8 text-center"
        >
          <Quote className="mx-auto mb-6 h-8 w-8 text-[#D6A84F]/50" />
          <p className="text-xl font-medium tracking-normal text-[#F5F2EA]">
            Client testimonials coming soon.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light leading-relaxed text-neutral-400 md:text-base">
            Until verified client feedback is available, the strongest proof on this site is the live product work: Sacred Spices, CIVIX, NEXUS, and the project case studies below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
