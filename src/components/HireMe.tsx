import { BrainCircuit, BriefcaseBusiness, Code2, CreditCard, Rocket } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    description: "Professional websites for local businesses, agencies, service brands, and founders who need a credible online presence.",
    outcome: "A polished, mobile-ready website that explains your offer clearly and makes it easy for visitors to contact you.",
    value: "Builds trust, improves discoverability, and turns attention into qualified inquiries.",
    icon: BriefcaseBusiness,
  },
  {
    title: "AI-Powered Applications",
    description: "AI tools, assistants, workflow automations, and smart interfaces built around real user problems.",
    outcome: "A usable AI product with clear flows, useful outputs, and practical integration into your process.",
    value: "Saves time, reduces manual work, and creates a modern product advantage.",
    icon: BrainCircuit,
  },
  {
    title: "E-Commerce Platforms",
    description: "Commerce experiences with product catalogs, cart flows, checkout thinking, admin needs, and operational structure.",
    outcome: "A real storefront that helps customers discover products, place orders, and trust the brand.",
    value: "Supports revenue, customer experience, and day-to-day commerce operations.",
    icon: CreditCard,
  },
  {
    title: "MVP Development",
    description: "Focused first versions for founders who need to validate an idea without wasting months on unnecessary complexity.",
    outcome: "A launchable MVP with the core flows, dashboard, landing experience, and technical foundation in place.",
    value: "Helps test demand, attract users, and move from idea to working product faster.",
    icon: Rocket,
  },
  {
    title: "Custom Web Applications",
    description: "Dashboards, internal tools, portals, marketplaces, and data-driven apps tailored to specific workflows.",
    outcome: "A maintainable full-stack application designed around how the business actually works.",
    value: "Improves efficiency, centralizes operations, and gives your team software that fits.",
    icon: Code2,
  },
];

export default function HireMe() {
  return (
    <section id="hire-me" className="border-t border-white/5 bg-[#080A0C] py-24 text-[#F5F2EA] md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#D6A84F]">
            Hire Me
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-normal md:text-5xl">
            What Can I Build For You?
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-neutral-400 md:text-lg">
            Clear product work for people who need more than a nice-looking website: a business outcome, a working system, and a reliable path to launch.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ title, description, outcome, value, icon: Icon }) => (
            <article key={title} className="border border-white/5 bg-white/[0.025] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.04]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#D6A84F]/20 bg-[#D6A84F]/10 text-[#D6A84F]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-normal text-[#F5F2EA]">
                {title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-neutral-400">
                {description}
              </p>
              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#10B981]">
                    Expected Outcome
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {outcome}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#D6A84F]">
                    Business Value
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {value}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-6xl border border-[#10B981]/20 bg-[#10B981]/[0.045] p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#10B981]">
              Ready to launch
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300 md:text-base">
              Send your idea, current website, or rough scope. I will reply with practical next steps and a build direction.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-5 inline-flex w-full items-center justify-center bg-[#D6A84F] px-5 py-3 text-sm font-medium text-[#080A0C] transition-transform hover:-translate-y-0.5 sm:mt-0 sm:w-auto"
          >
            Contact Rohan
          </a>
        </div>
      </div>
    </section>
  );
}
