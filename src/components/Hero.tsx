"use client";

import { useEffect, useRef } from "react";
import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { profileLinks } from "@/components/profile";

const productShowcase = [
  {
    name: "Sacred Spices",
    category: "Commerce Platform",
    status: "Live Business",
    descriptor: "Storefront, Razorpay, catalog, orders",
  },
  {
    name: "NEXUS",
    category: "Productivity OS",
    status: "Product System",
    descriptor: "Goals, habits, analytics, life workflows",
  },
  {
    name: "Real Estate Platform",
    category: "AI Marketplace",
    status: "Beta",
    descriptor: "Property discovery and lead intelligence",
  },
  {
    name: "Jarvis AI",
    category: "Local AI Assistant",
    status: "Private Alpha",
    descriptor: "Desktop automation with local AI",
  },
];

const containerVariants: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textRevealVariants: Variants = {
  initial: { y: 18, opacity: 1, rotateX: 0 },
  animate: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { type: "spring", mass: 1, stiffness: 100, damping: 20 },
  },
};

const fadeVariants: Variants = {
  initial: { opacity: 1, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const meshX = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const meshY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      id="top"
      ref={containerRef}
      className="relative flex min-h-[88svh] items-start justify-center overflow-hidden bg-[#080A0C] px-0 pb-16 pt-24 text-[#F5F2EA] selection:bg-neutral-800 selection:text-[#F5F2EA] sm:pt-28 md:min-h-[92svh] md:pb-20 md:pt-30 perspective-1000"
    >
      {/* Animated Gradient Mesh & Lights */}
      <motion.div 
        style={{ x: meshX, y: meshY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[#10B981]/10 blur-[90px] animate-pulse sm:h-[500px] sm:w-[500px] sm:blur-[150px]" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[20%] right-[5%] h-72 w-72 rounded-full bg-[#3B82F6]/10 blur-[100px] animate-pulse sm:right-[10%] sm:h-[600px] sm:w-[600px] sm:blur-[180px]" style={{ animationDuration: '6s' }} />
        <div className="absolute left-[50%] top-[40%] h-72 w-80 -translate-x-1/2 rounded-full bg-white/[0.03] blur-[90px] pointer-events-none sm:h-[400px] sm:w-[800px] sm:blur-[100px]" />
      </motion.div>

      {/* Subtle geometry background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
      />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          style={{ rotateX, rotateY }}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center w-full max-w-5xl transform-gpu"
        >
          {/* Availability Status */}
          <motion.div variants={fadeVariants} className="mb-4 flex items-center gap-3 md:mb-5">
            <div className="relative flex items-center justify-center p-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center relative">
                <span className="absolute w-2 h-2 rounded-full bg-[#10B981] animate-ping opacity-60"></span>
                <span className="relative w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              </div>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-neutral-400 uppercase px-3">Available for product builds</span>
            </div>
          </motion.div>

          {/* Title & Role */}
          <div className="mb-5 flex w-full flex-col items-center md:mb-6">
            <motion.div variants={fadeVariants} className="mb-3 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-500 backdrop-blur-sm sm:mb-5 sm:gap-4 sm:px-6 sm:text-xs sm:tracking-[0.2em] cursor-default">
              <span className="text-neutral-300 font-medium tracking-[0.3em]">Rohan Vijaykumar Karande</span>
              <span className="hidden sm:block w-4 h-[1px] bg-neutral-700" />
              <span>Product Builder</span>
              <span className="hidden sm:block w-2 h-[1px] bg-neutral-700" />
              <span>AI Systems</span>
              <span className="hidden sm:block w-2 h-[1px] bg-neutral-700" />
              <span>Real Businesses</span>
            </motion.div>

            {/* Experimental Typographic Headline */}
            <h1 className="flex flex-col items-center gap-1 text-4xl font-bold leading-[1.12] tracking-normal drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem]">
              <div className="pb-1 sm:pb-2">
                <motion.div variants={textRevealVariants}>
                  I BUILD <span className="font-serif italic font-light text-neutral-400 pr-2">PRODUCTS,</span>
                </motion.div>
              </div>
              <div className="pb-1 sm:pb-2">
                <motion.div variants={textRevealVariants}>
                  NOT JUST
                </motion.div>
              </div>
              <div className="pb-3">
                <motion.div variants={textRevealVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F2EA] via-[#D6A84F] to-neutral-600">
                  WEBSITES.
                </motion.div>
              </div>
            </h1>
          </div>

          {/* Theme line and Description */}
          <motion.div variants={fadeVariants} className="mb-5 flex w-full max-w-2xl flex-col items-center gap-3 text-center md:mb-6">
            <h2 className="text-base font-medium uppercase tracking-widest text-neutral-100">
              Building businesses, AI systems, and commerce platforms.
            </h2>
            <p className="text-sm font-light leading-relaxed text-neutral-300 md:text-base">
              I ship real products for real businesses: deployed storefronts, AI tools, marketplace logic, and commerce systems that connect <strong className="font-medium text-neutral-300">revenue</strong>, <strong className="font-medium text-neutral-300">operations</strong>, and <strong className="font-medium text-neutral-300">customer experience</strong>.
            </p>
          </motion.div>

          <motion.div variants={fadeVariants} className="mb-6 grid w-full max-w-5xl grid-cols-2 gap-2 sm:mb-7 sm:grid-cols-2 lg:grid-cols-4">
            {productShowcase.map((product) => (
              <Link
                key={product.name}
                href="#projects"
                className="group border border-white/15 bg-[#0B0D10]/85 p-3 text-left shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#10B981]/45 hover:bg-[#11161A] focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#080A0C] sm:p-4"
                aria-label={`View ${product.name} project`}
              >
                <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3 sm:gap-3">
                  <span className="line-clamp-1 font-mono text-[8px] uppercase tracking-[0.14em] text-[#34D399] sm:text-[9px] sm:tracking-[0.22em]">
                    {product.category}
                  </span>
                  <span className="hidden shrink-0 rounded-full border border-white/15 bg-[#080A0C] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-neutral-300 xl:inline">
                    {product.status}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-normal text-[#F5F2EA] transition-colors group-hover:text-[#D6A84F] sm:text-base">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-neutral-300/85 sm:mt-2 sm:text-xs">
                  {product.descriptor}
                </p>
              </Link>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeVariants} className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-5">
            <Link 
              href="#projects" 
              className="group relative flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden bg-[#D6A84F] px-8 py-3.5 font-semibold tracking-wide text-[#080A0C] shadow-[0_0_42px_rgba(214,168,79,0.22)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(214,168,79,0.28)] sm:w-auto sm:min-w-[200px] sm:py-4"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#E6D8B8] to-[#F5F2EA] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-[150%]">View Products</span>
              <span className="absolute z-10 inset-0 flex items-center justify-center translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                See Proof <ArrowRight className="ml-2 w-4 h-4 inline-block" />
              </span>
            </Link>

            <Link 
              href="#contact" 
              className="group flex min-h-12 w-full items-center justify-center gap-2 border border-white/20 bg-[#0B0D10]/90 px-8 py-3.5 font-medium tracking-wide text-neutral-100 shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:text-[#F5F2EA] sm:w-auto sm:min-w-[200px] sm:py-4"
            >
              Hire Me
            </Link>
          </motion.div>

          <motion.div variants={fadeVariants} className="mt-5 flex items-center justify-center gap-3">
            {profileLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label === "Email" ? "Email Rohan Karande" : `${label} profile`}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0B0D10]/90 text-neutral-200 shadow-[0_12px_30px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-[#F5F2EA] focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#080A0C]"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
