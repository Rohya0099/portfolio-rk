"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Copy, Check, Mail, Phone, MessageCircle } from "lucide-react";
import { profile, profileLinks } from "@/components/profile";

const fadeUpVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const MagneticButton = ({ children, className, onClick, href, target, rel }: { children: React.ReactNode, className?: string, onClick?: () => void, href?: string, target?: string, rel?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const currentTarget = e.currentTarget as HTMLElement;
    const { height, width, left, top } = currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const props = {
    className: `relative ${className}`,
    onClick,
    href,
    target,
    rel,
  };

  const Wrapper = href ? motion.a : motion.button;

  return (
    <Wrapper
      {...props}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </Wrapper>
  );
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#080A0C] text-[#F5F2EA] border-t border-white/5 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#10B981]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={fadeUpVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping relative inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="absolute inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
              Available for Freelance
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-normal mb-6">
            Let&apos;s Build Something <span className="font-serif italic font-light text-neutral-400">Remarkable.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12 max-w-xl">
            Have an idea, business, or product you want to build? Let&apos;s discuss how we can turn it into reality.
          </p>

          <div className="mb-8 inline-flex items-center gap-2 border border-[#10B981]/15 bg-[#10B981]/10 px-4 py-2 text-sm text-neutral-300">
            <Check className="h-4 w-4 text-[#10B981]" />
            Response time: Usually within 24 hours
          </div>

          <div className="mb-8 grid w-full max-w-2xl gap-3 text-left sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}?subject=Project%20Inquiry%20for%20Rohan`}
              className="group border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#D6A84F]/35 hover:bg-white/[0.06]"
            >
              <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D6A84F]">
                <Mail className="h-4 w-4" /> Email
              </span>
              <span className="block break-all text-sm font-medium text-[#F5F2EA]">
                {profile.email}
              </span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="group border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#10B981]/35 hover:bg-white/[0.06]"
            >
              <span className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#10B981]">
                <Phone className="h-4 w-4" /> Phone
              </span>
              <span className="block text-sm font-medium text-[#F5F2EA]">
                {profile.phone}
              </span>
            </a>
          </div>

          <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            <MagneticButton 
              href={`mailto:${profile.email}?subject=Project%20Inquiry%20for%20Rohan`}
              className="group flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden bg-[#D6A84F] px-4 py-4 font-semibold tracking-wide text-[#080A0C]"
            >
              <Mail className="w-5 h-5" /> Email Me
            </MagneticButton>

            <MagneticButton
              href={`tel:${profile.phone}`}
              className="group flex min-h-14 w-full items-center justify-center gap-2 border border-[#10B981]/25 bg-[#10B981]/10 px-4 py-4 font-medium tracking-wide text-[#F5F2EA] transition-all duration-300 hover:border-[#10B981]/45 hover:bg-[#10B981]/15"
            >
              <Phone className="w-5 h-5 text-[#10B981]" /> Call Me
            </MagneticButton>

            <MagneticButton
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-14 w-full items-center justify-center gap-2 border border-[#10B981]/25 bg-[#10B981]/10 px-4 py-4 font-medium tracking-wide text-[#F5F2EA] transition-all duration-300 hover:border-[#10B981]/45 hover:bg-[#10B981]/15"
            >
              <MessageCircle className="w-5 h-5 text-[#10B981]" /> WhatsApp Me
            </MagneticButton>

            <MagneticButton 
              onClick={handleCopy}
              className="group flex min-h-14 w-full items-center justify-center gap-2 border border-neutral-700 bg-transparent px-4 py-4 font-medium text-[#F5F2EA] transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-900"
            >
              {copied ? <Check className="w-5 h-5 text-[#10B981]" /> : <Copy className="w-5 h-5 text-neutral-400 group-hover:text-[#F5F2EA]" />}
              <span className="text-center text-sm">{copied ? "Email Copied!" : "Copy Email"}</span>
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-white/10">
            {profileLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label === "Email" ? `Email ${profile.name}` : `Open ${label} profile`}
              className="group inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-[#F5F2EA]"
            >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                {label === "Email" ? "Email Me" : label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
