"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Link2 } from "lucide-react";
import { profile } from "@/lib/profile";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

type Metric = {
  label: string;
  value: string;
};

type Project = {
  name: string;
  badge: string;
  desc: string;
  image?: string;
  visualLabel: string;
  visualEyebrow: string;
  accent: string;
  challenge?: string;
  approach?: string;
  architecture?: string;
  outcome?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  metrics?: Metric[];
  proofBadges?: string[];
  proofNote?: string;
  tech: string[];
  featured: boolean;
  primary?: boolean;
  status: string;
  github?: string;
  demo: string;
};

const nexusSequence = [
  {
    step: "Step 1 of 5",
    title: "Welcome to NEXUS.",
    detail: "Choose one area, one goal, and one habit.",
  },
  {
    step: "Step 2 of 5",
    title: "Choose a focus area.",
    detail: "Discipline, health, career, or learning.",
  },
  {
    step: "Step 3 of 5",
    title: "Set one goal.",
    detail: "Example: Improve discipline this month.",
  },
  {
    step: "Step 4 of 5",
    title: "Add one small habit.",
    detail: "Example: 10 minute discipline check-in.",
  },
  {
    step: "Step 5 of 5",
    title: "Start NEXUS.",
    detail: "Enter a dashboard built from your setup.",
  },
];

const nexusDashboards = [
  "Dashboard",
  "Life Score",
  "AI Chat",
  "Analytics",
];

const fadeUpVariants: Variants = {
  initial: { opacity: 1, y: 0 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  initial: { opacity: 1 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const projects: Project[] = [
  {
    name: "Sacred Spices",
    badge: "E-Commerce Brand & Commerce Platform",
    desc: "A deployed commerce platform for a real food brand, built around product discovery, Razorpay payments, catalog operations, inventory workflows, order management, and a polished customer buying experience.",
    image: "/projects/sacred-spices-showcase.png",
    visualLabel: "Commerce command center",
    visualEyebrow: "Live website + business operations",
    accent: "emerald",
    challenge: "A real spice and food products brand needed more than a brochure site. The business needed a credible storefront, clean product catalog, payment readiness, inventory visibility, order workflows, and an admin path for day-to-day commerce operations.",
    approach: "Built a production-facing commerce experience with a premium storefront, Razorpay-ready checkout flow, structured catalog presentation, operational admin thinking, and clear customer journeys from discovery to purchase.",
    architecture: "Next.js storefront, Tailwind interface system, Razorpay integration, product catalog flows, order management patterns, inventory-ready data structure, and admin dashboard foundations.",
    outcome: "Sacred Spices now acts as a public credibility anchor: a real deployed website for a real business, proving Rohan can ship commercial products that support revenue, customer experience, and operations.",
    metrics: [
      { label: "Public", value: "Deployed" },
      { label: "Payments", value: "Razorpay" },
      { label: "Scope", value: "Commerce Ops" },
    ],
    proofBadges: [
      "Live Product",
      "Deployed on Vercel",
      "Mobile Responsive",
      "Razorpay Integrated",
      "Admin Dashboard",
    ],
    proofNote: "Real commerce platform, not a demo project.",
    tech: ["Next.js", "Tailwind", "Razorpay", "Commerce"],
    featured: true,
    primary: true,
    status: "Live Business",
    demo: "https://sacred-spices.vercel.app/",
  },
  {
    name: "CIVIX",
    badge: "Business Website Platform",
    desc: "A deployed business website platform designed to help local businesses establish a professional online presence, build credibility, and generate qualified leads through a modern web experience.",
    visualLabel: "Business growth website",
    visualEyebrow: "Live website + lead generation",
    accent: "sky",
    challenge: "Many businesses rely only on social media and lack a professional digital presence that builds trust, improves discoverability, and converts visitors into customers.",
    approach: "Built a modern website platform focused on trust, branding, lead generation, business presentation, mobile optimization, and fast performance across devices.",
    architecture: "Next.js, TypeScript, Tailwind CSS, Vercel deployment, SEO-ready page structure, responsive UI system, and conversion-focused content architecture.",
    outcome: "CIVIX helps businesses establish credibility, improve online discoverability, generate qualified leads, and create a stronger digital brand presence.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Focus", value: "Lead Gen" },
      { label: "Platform", value: "Business Web" },
    ],
    proofBadges: [
      "Live Product",
      "Deployed on Vercel",
      "Mobile Responsive",
      "SEO Ready",
    ],
    proofNote: "Built to improve business credibility, lead generation, and mobile-first discovery.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    status: "Live",
    demo: "https://civix-silk.vercel.app/",
  },
  {
    name: "NEXUS",
    badge: "Personal Growth Operating System",
    desc: "A comprehensive platform designed to help individuals manage goals, habits, productivity, life systems, analytics, and self-improvement from a single operating environment.",
    visualLabel: "Life systems dashboard",
    visualEyebrow: "SaaS-style product architecture",
    accent: "indigo",
    challenge: "Users struggle to manage habits, daily planning, and journaling without relying on multiple fragmented SaaS tools.",
    approach: "Architected a unified, scalable personal operating system that tracks real-time productivity metrics using dynamic dashboards and gamification systems.",
    architecture: "Next.js 14 App Router, Node.js, PostgreSQL with Prisma ORM, Framer Motion for premium micro-interactions.",
    outcome: "Proven scalable SaaS potential, boosting daily active engagement metrics and streamlining personal workflows.",
    metrics: [
      { label: "Performance", value: "98 Lighthouse" },
      { label: "Modules", value: "12+ Systems" },
    ],
    proofBadges: ["Mobile Responsive", "AI Powered", "Admin Dashboard"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Full Stack"],
    featured: true,
    status: "Production",
    demo: "",
  },
  {
    name: "Real Estate Platform",
    badge: "AI-Powered Marketplace",
    desc: "A trust-focused real estate platform designed to bridge the gap between customers, agents, and builders while simplifying property discovery.",
    visualLabel: "Property intelligence workspace",
    visualEyebrow: "AI matching + marketplace flows",
    accent: "sky",
    challenge: "Property searching is overwhelming, with static filters failing to capture nuanced buyer preferences, resulting in poor lead quality for agents.",
    approach: "Architected a generative AI discovery engine mapping buyers to relevant properties through natural language, while establishing a robust lead-generation ecosystem.",
    architecture: "TypeScript monorepo, Supabase pgvector for embeddings, OpenAI APIs linking Buyer/Agent/Builder dashboards.",
    outcome: "Reduced search friction, generated high-intent leads, and established a scalable middleman ecosystem ready for monetization.",
    metrics: [
      { label: "Accuracy", value: "94% Match" },
      { label: "Latency", value: "< 200ms" },
    ],
    proofBadges: ["Mobile Responsive", "SEO Ready", "AI Powered"],
    tech: ["TypeScript", "pgvector", "LLMs", "Marketplace"],
    featured: true,
    status: "Beta / Stealth",
    demo: "",
  },
  {
    name: "Jarvis AI Assistant",
    badge: "Personal AI Operating System",
    desc: "A privacy-first AI assistant designed to help users manage tasks, workflows, productivity, automation, and everyday digital activities.",
    visualLabel: "Local AI control panel",
    visualEyebrow: "Desktop assistant prototype",
    accent: "violet",
    challenge: "Repetitive desktop tasks and unstructured file organizations consumed excessive daily time for power users.",
    approach: "Created a privacy-first, locally-hosted AI assistant utilizing offline local LLMs to manipulate files, execute scripts, and automate scheduling via voice/text.",
    architecture: "Python core, Local LLM inference, native OS automation bridging, Voice-to-text integration.",
    outcome: "Automated standard daily operations, saving hours of manual computer interactions weekly, showcasing a viable personal AI software platform.",
    metrics: [
      { label: "Type", value: "Offline-First" },
      { label: "Speed", value: "Real-time" },
    ],
    proofBadges: ["AI Powered"],
    tech: ["Python", "Local LLMs", "Automation"],
    featured: false,
    status: "Private Alpha",
    demo: "",
  },
  {
    name: "AI Attraction Analyzer",
    badge: "Multi-Agent AI Tool",
    desc: "Multi-agent AI chat psychology analyzer using LLMs to break down human dialogue.",
    visualLabel: "Conversation insight engine",
    visualEyebrow: "Multi-agent analysis",
    accent: "rose",
    problem: "Analyzing complex chat dynamics manually lacks deep conversational pattern recognition.",
    solution: "Developed context-aware multi-agent LLM systems that parse tone, sentiment, and underlying psychology in raw text streams.",
    impact: "Delivered highly accurate communication insights helping users understand interaction dynamics autonomously.",
    proofBadges: ["AI Powered"],
    tech: ["Next.js", "OpenAI", "LangChain"],
    featured: false,
    status: "Beta",
    demo: "",
  },
  {
    name: "Dairy Dost",
    badge: "B2B Mobile Sync Architecture",
    desc: "Offline-first dairy billing application for seamless record-keeping in remote agricultural areas.",
    visualLabel: "Offline billing ledger",
    visualEyebrow: "Rural operations app",
    accent: "amber",
    problem: "Rural dairy operators needed reliable digital ledgers but faced severe internet connectivity issues.",
    solution: "Engineered an offline-first mobile architecture that syncs bi-directionally when cellular connectivity is restored.",
    impact: "Eliminated paper record loss and modernized B2B accounting for remote agricultural operations.",
    proofBadges: ["Mobile Responsive"],
    tech: ["React Native", "Local DB", "Expo"],
    featured: false,
    status: "Production",
    demo: "",
  },
];

const accentClasses: Record<string, { glow: string; line: string; dot: string; text: string; fill: string }> = {
  emerald: {
    glow: "from-[#10B981]/25 via-[#10B981]/5 to-transparent",
    line: "bg-[#10B981]",
    dot: "bg-[#10B981]",
    text: "text-[#10B981]",
    fill: "from-[#10B981] to-[#D6A84F]",
  },
  indigo: {
    glow: "from-[#3B82F6]/25 via-[#3B82F6]/5 to-transparent",
    line: "bg-[#3B82F6]",
    dot: "bg-[#3B82F6]",
    text: "text-[#3B82F6]",
    fill: "from-[#3B82F6] to-[#3B82F6]",
  },
  sky: {
    glow: "from-[#3B82F6]/25 via-[#3B82F6]/5 to-transparent",
    line: "bg-[#3B82F6]",
    dot: "bg-[#3B82F6]",
    text: "text-[#3B82F6]",
    fill: "from-[#3B82F6] to-[#3B82F6]",
  },
  violet: {
    glow: "from-[#3B82F6]/25 via-[#3B82F6]/5 to-transparent",
    line: "bg-[#3B82F6]",
    dot: "bg-[#3B82F6]",
    text: "text-[#3B82F6]",
    fill: "from-[#3B82F6] to-[#D6A84F]",
  },
  rose: {
    glow: "from-[#D6A84F]/25 via-[#D6A84F]/5 to-transparent",
    line: "bg-[#D6A84F]",
    dot: "bg-[#D6A84F]",
    text: "text-[#D6A84F]",
    fill: "from-[#D6A84F] to-[#D6A84F]",
  },
  amber: {
    glow: "from-[#D6A84F]/25 via-[#D6A84F]/5 to-transparent",
    line: "bg-[#D6A84F]",
    dot: "bg-[#D6A84F]",
    text: "text-[#D6A84F]",
    fill: "from-[#D6A84F] to-[#10B981]",
  },
};

function ProjectVisual({ project }: { project: Project }) {
  const accent = accentClasses[project.accent];
  const rows = project.primary
    ? ["Catalog", "Checkout", "Inventory", "Orders", "Admin"]
    : project.tech.slice(0, 5);

  if (project.name === "CIVIX") {
    return <CivixHeroVisual />;
  }

  if (project.name === "NEXUS") {
    return <NexusSequenceVisual accent={accent} />;
  }

  if (project.image) {
    return (
      <div className="absolute inset-0 bg-[#0B0D10] overflow-hidden">
        <ProjectMockup project={project} rows={rows} accent={accent} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} live website homepage screenshot`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/5 pointer-events-none" />
        <div className="absolute left-4 top-4 rounded-full border border-[#10B981]/30 bg-[#080A0C]/70 px-3 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#10B981]">Live Sacred Spices Website</span>
        </div>
      </div>
    );
  }

  return <ProjectMockup project={project} rows={rows} accent={accent} />;
}

function CivixHeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080A0C]">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,10,12,0.96)_0%,rgba(8,10,12,0.58)_48%,rgba(8,10,12,0.9)_100%)]" />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(245,242,234,0.08) 1px, transparent 1px), linear-gradient(rgba(245,242,234,0.04) 1px, transparent 1px)",
          backgroundSize: "82px 100%, 100% 68px",
        }}
      />
      <div className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(circle_at_56%_46%,rgba(214,168,79,0.24),transparent_34%),linear-gradient(110deg,transparent_0%,rgba(245,242,234,0.08)_30%,transparent_31%,transparent_42%,rgba(245,242,234,0.07)_43%,transparent_44%,transparent_60%,rgba(245,242,234,0.08)_61%,transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(214,168,79,0.18),transparent_18%),radial-gradient(circle_at_45%_58%,rgba(245,242,234,0.08),transparent_28%)]" />

      <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
        <div className="font-mono text-lg tracking-[0.35em] text-[#F5F2EA]">
          CIV<span className="text-[#D6A84F]">I</span>X
        </div>
        <div className="hidden items-center gap-5 font-mono text-[8px] uppercase tracking-[0.35em] text-neutral-500 sm:flex">
          <span>Work</span>
          <span>Studio</span>
          <span>Process</span>
          <span className="bg-[#D6A84F] px-4 py-2 text-[#080A0C]">Begin</span>
        </div>
      </div>

      <div className="absolute left-5 top-[22%] max-w-[78%]">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#D6A84F]/50" />
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#D6A84F]">
            Est. 1998 / Mumbai, India
          </span>
        </div>
        <div className="font-serif text-[clamp(48px,11vw,120px)] font-semibold uppercase leading-[0.78] tracking-[-0.08em] text-[#F5F2EA]">
          CIVIX
          <br />
          Engineerin<span className="text-[#F5F2EA]/45">g</span>
        </div>
        <p className="mt-6 max-w-[420px] text-[12px] leading-relaxed text-[#F5F2EA]/78">
          Cinematic civil engineering for towers, infrastructure, industrial campuses, and landmark spaces across India.
        </p>
      </div>

      <div className="absolute bottom-7 left-5 flex gap-7">
        {[
          ["523+", "Projects"],
          ["26+", "Years"],
          ["₹4,200Cr", "Delivered"],
        ].map(([value, label]) => (
          <div key={label}>
            <div className="text-xl font-semibold text-[#F5F2EA]">{value}</div>
            <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.3em] text-[#D6A84F]">{label}</div>
          </div>
        ))}
      </div>

      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2 sm:flex">
        {[0, 1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`h-1.5 w-1.5 rounded-full ${dot === 0 ? "bg-[#D6A84F]" : "bg-[#F5F2EA]/25"}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-transparent to-[#080A0C]/25" />
    </div>
  );
}

function NexusSequenceVisual({
  accent,
}: {
  accent: { glow: string; dot: string; text: string; fill: string };
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080A0C]">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow}`} />
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,242,234,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,234,0.045) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute inset-x-4 top-4 bottom-4 rounded-xl border border-[#3B82F6]/20 bg-[#0B0D10]/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#3B82F6]">
              NEXUS Product Flow
            </span>
            <h4 className="mt-1 text-lg font-semibold tracking-normal text-[#F5F2EA]">
              Setup sequence to dashboard
            </h4>
          </div>
          <span className="hidden rounded-full border border-[#10B981]/20 bg-[#10B981]/10 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#10B981] sm:block">
            Guided OS
          </span>
        </div>

        <div className="grid h-[calc(100%-56px)] grid-cols-1 gap-3 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-5 lg:grid-cols-1">
            {nexusSequence.map((item, idx) => (
              <div
                key={item.step}
                className="relative overflow-hidden rounded-lg border border-[#3B82F6]/18 bg-white/[0.035] p-3"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${idx === 0 ? "bg-[#10B981]" : "bg-[#3B82F6]"}`} />
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#3B82F6]">
                    {item.step}
                  </span>
                </div>
                <div className="text-[13px] font-semibold leading-tight text-[#F5F2EA]">
                  {item.title}
                </div>
                <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-neutral-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden flex-col gap-3 lg:flex">
            <div className="rounded-lg border border-[#10B981]/20 bg-[#10B981]/[0.045] p-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#10B981]">
                Dashboard State
              </span>
              <h5 className="mt-3 text-2xl font-semibold text-[#F5F2EA]">Life Score 64</h5>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                One task, one habit, one score loop.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {nexusDashboards.map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.035] p-3">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-neutral-500">
                    Core
                  </span>
                  <p className="mt-1 text-xs font-semibold text-[#F5F2EA]">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-lg border border-[#D6A84F]/20 bg-[#D6A84F]/[0.055] p-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D6A84F]">
                Analytics
              </span>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {["Career", "Health", "Learning"].map((area) => (
                  <div key={area}>
                    <div className="mb-1 flex justify-between text-[9px] text-neutral-400">
                      <span>{area}</span>
                      <span>0%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/10">
                      <div className="h-full w-1/3 rounded-full bg-[#D6A84F]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMockup({
  project,
  rows,
  accent,
}: {
  project: Project;
  rows: string[];
  accent: { glow: string; dot: string; text: string; fill: string };
}) {
  return (
    <div className="absolute inset-0 bg-[#0B0D10] overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[length:22px_22px] opacity-50" />

      <div className="absolute inset-x-4 top-4 bottom-4 rounded-xl border border-white/10 bg-[#080A0C]/45 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A84F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6A84F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#10B981]/80" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-500">Case Study</span>
        </div>

        <div className="grid h-[calc(100%-45px)] grid-cols-[0.72fr_1.28fr] gap-4 p-4">
          <div className="hidden sm:flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <div>
              <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accent.text}`}>{project.visualEyebrow}</span>
              <h4 className="mt-3 text-lg font-semibold tracking-normal text-[#F5F2EA]">{project.name}</h4>
            </div>
            <div className="space-y-2">
              {rows.slice(0, 4).map((row, idx) => (
                <div key={row} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">{row}</span>
                  <span className="ml-auto h-px flex-1 bg-white/10" style={{ maxWidth: `${52 - idx * 7}%` }} />
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-lg border border-white/10 bg-[#111418]/80 p-3 sm:p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-neutral-500">{project.visualLabel}</span>
                <div className="mt-1 h-1.5 w-24 rounded-full bg-white/10">
                  <div className={`h-full w-2/3 rounded-full bg-gradient-to-r ${accent.fill}`} />
                </div>
              </div>
              <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${accent.fill} opacity-90 shadow-lg`} />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(project.metrics ?? rows.slice(0, 3).map((row) => ({ label: row, value: "Ready" }))).slice(0, 3).map((metric) => (
                <div key={metric.label} className="rounded-md border border-white/10 bg-white/[0.04] p-2">
                  <span className="block truncate font-mono text-[8px] uppercase tracking-widest text-neutral-500">{metric.label}</span>
                  <span className="mt-1 block truncate text-xs font-medium text-[#F5F2EA]">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              {rows.map((row, idx) => (
                <div key={row} className="rounded-md border border-white/10 bg-white/[0.025] p-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-[10px] font-medium uppercase tracking-widest text-neutral-300">{row}</span>
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${idx % 2 === 0 ? accent.dot : "bg-neutral-600"}`} />
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-white/10">
                    <div className={`h-full rounded-full bg-gradient-to-r ${accent.fill}`} style={{ width: `${82 - idx * 9}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#080A0C] text-[#F5F2EA] border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981]/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-normal mb-4">
              Selected Work
            </h2>
            <p className="max-w-2xl text-neutral-400 font-light text-lg leading-relaxed">
              Public commerce, SaaS systems, AI workflows, and operational products built with business outcomes in mind.
            </p>
          </div>
          <a href="https://sacred-spices.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex w-max items-center gap-2 border-b border-[#10B981]/40 pb-1 text-sm font-medium text-[#10B981] transition-colors hover:text-[#F5F2EA]">
            Visit Sacred Spices <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <div className="mb-10 border border-[#D6A84F]/20 bg-[#D6A84F]/[0.055] p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D6A84F]">
              Available for client work
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-300">
              Need a business website, MVP, AI workflow, or commerce platform? I can help turn the scope into a launch-ready product.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-4 inline-flex w-full items-center justify-center bg-[#D6A84F] px-5 py-3 text-sm font-medium text-[#080A0C] transition-transform hover:-translate-y-0.5 sm:mt-0 sm:w-auto"
          >
            Start a Project
          </a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              variants={fadeUpVariants}
              viewport={{ once: true }}
              className={`group relative bg-white/[0.02] border border-white/5 p-1 hover:bg-white/[0.04] transition-all duration-500 flex flex-col ${project.primary ? "md:col-span-2 lg:col-span-3" : project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

              <div className={`bg-[#0B0D10] border border-white/5 p-6 sm:p-8 h-full flex flex-col z-10 relative overflow-hidden transition-colors duration-500 hover:border-white/10 ${project.primary ? "lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-10" : ""}`}>
                <div className={`${project.primary ? "lg:col-span-1" : ""}`}>
                  <div className={`w-full ${project.primary ? "h-72 sm:h-96 lg:h-full lg:min-h-[520px]" : "h-48 sm:h-64 md:h-72"} bg-neutral-900 border border-white/5 mb-8 relative overflow-hidden group-hover:border-white/10 transition-colors duration-500 cursor-pointer`} onClick={() => toggleExpand(idx)}>
                    <ProjectVisual project={project} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-80" />
                  </div>
                </div>

                <div className={`${project.primary ? "lg:col-span-1 lg:flex lg:flex-col" : ""}`}>
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      {project.badge && (
                        <span className="inline-block px-3 py-1 mb-3 text-[10px] uppercase tracking-widest font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 rounded-full">
                          {project.badge}
                        </span>
                      )}
                      <h3 className={`${project.primary ? "text-3xl md:text-4xl" : "text-2xl"} font-bold tracking-normal text-[#F5F2EA] group-hover:text-[#D6A84F] transition-colors cursor-pointer`} onClick={() => toggleExpand(idx)}>
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex gap-2 relative z-20 pt-1">
                      <button onClick={() => toggleExpand(idx)} className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full transition-all text-neutral-400 hover:text-[#F5F2EA]" aria-label={`${expandedId === idx ? "Collapse" : "Expand"} ${project.name} case study`}>
                        {expandedId === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      <a href={project.github || profile.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full transition-all text-neutral-400 hover:text-[#F5F2EA]" aria-label={`${project.name} GitHub repository`}>
                          <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/20 hover:border-[#10B981]/40 rounded-full transition-all text-[#10B981] hover:text-[#F5F2EA]" aria-label={`${project.name} live website`}>
                          <Link2 className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className={`${project.primary ? "text-lg" : "text-base"} text-neutral-400 font-light mb-6 leading-relaxed`}>
                    {project.desc}
                  </p>

                  {project.proofBadges && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.proofBadges.map((badge) => (
                        <span
                          key={badge}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#D6A84F]/20 bg-[#D6A84F]/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-[#D6A84F]"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.proofNote && (
                    <div className="mb-6 border border-[#10B981]/15 bg-[#10B981]/[0.045] p-4">
                      <p className="text-sm font-medium leading-relaxed text-[#F5F2EA]">
                        {project.proofNote}
                      </p>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-[#10B981] transition-colors hover:text-[#F5F2EA]"
                        >
                          Website: {project.demo.replace("https://", "").replace(/\/$/, "")}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}

                  {project.name === "Sacred Spices" && (
                    <div className="mb-6 border border-[#D6A84F]/15 bg-[#D6A84F]/[0.045] p-4">
                      <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#D6A84F]">
                        Business Proof
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {["Product catalog", "Cart system", "Checkout", "Razorpay integration", "Order management", "Admin dashboard"].map((item) => (
                          <span key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.name === "CIVIX" && project.outcome && (
                    <div className="mb-6 border border-[#3B82F6]/15 bg-[#3B82F6]/[0.045] p-4">
                      <h4 className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
                        Business Impact
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-neutral-300">
                        {project.outcome}
                      </p>
                    </div>
                  )}

                  {project.name === "NEXUS" && (
                    <div className="mb-6 border border-[#3B82F6]/15 bg-[#3B82F6]/[0.04] p-4">
                      <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#3B82F6]">
                        Product Sequence
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-5">
                        {nexusSequence.map((item, sequenceIndex) => (
                          <div key={item.step} className="border border-white/10 bg-white/[0.025] p-2">
                            <span className="font-mono text-[9px] text-[#D6A84F]">
                              0{sequenceIndex + 1}
                            </span>
                            <p className="mt-1 text-[10px] font-medium leading-snug text-neutral-300">
                              {item.title.replace(".", "")}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <AnimatePresence>
                    {expandedId === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="space-y-4 pt-4 border-t border-white/10">
                          {project.featured && project.challenge ? (
                            <>
                              <div>
                                <h4 className="text-xs font-mono text-[#D6A84F] uppercase tracking-widest mb-1.5">Challenge</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.challenge}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono text-[#10B981] uppercase tracking-widest mb-1.5">Solution</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.approach}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-widest mb-1.5">Technologies</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.architecture}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono text-[#D6A84F] uppercase tracking-widest mb-1.5">Business Impact</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.outcome}</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <h4 className="text-xs font-mono text-[#10B981] uppercase tracking-widest mb-1.5">Problem</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.problem}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono text-[#3B82F6] uppercase tracking-widest mb-1.5">Solution</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.solution}</p>
                              </div>
                              <div>
                                <h4 className="text-xs font-mono text-[#D6A84F] uppercase tracking-widest mb-1.5">Impact</h4>
                                <p className="text-sm font-light text-neutral-300 leading-relaxed">{project.impact}</p>
                              </div>
                            </>
                          )}

                          {project.metrics && (
                            <div className="flex flex-wrap gap-4 pt-4 mt-2 border-t border-white/5">
                              {project.metrics.map((m) => (
                                <div key={m.label} className="flex flex-col">
                                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{m.label}</span>
                                  <span className="text-sm font-medium text-[#F5F2EA]">{m.value}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono tracking-widest uppercase px-2 py-1 bg-white/5 border border-white/5 text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" || project.status === "Live Business" || project.status === "Production" ? "bg-[#10B981]" : "bg-[#D6A84F]"}`} />
                      {project.status}
                    </span>
                  </div>

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full sm:w-max items-center justify-center gap-2 bg-[#D6A84F] px-5 py-3 text-sm font-medium text-[#080A0C] transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D6A84F] focus:ring-offset-2 focus:ring-offset-[#0B0D10]">
                      Live Website <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
