"use client";

import { ArrowUp } from "lucide-react";
import { profileLinks } from "@/components/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 bg-[#080A0C] text-neutral-500 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="font-mono text-xs uppercase tracking-widest text-[#F5F2EA]">
          RK.
        </div>

        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <p className="text-xs font-light">
            Designed &amp; Developed by Rohan Vijaykumar Karande &copy; {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {profileLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label === "Email" ? "Email Rohan Vijaykumar Karande" : `Open ${label} profile`}
                className="inline-flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-[#F5F2EA]"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center border border-white/10 hover:bg-white/5 hover:text-[#F5F2EA] transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
