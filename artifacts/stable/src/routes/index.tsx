import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  Bot,
  Boxes,
  Cpu,
  Database,
  Eye,
  GitBranch,
  KeyRound,
  Layers,
  Lock,
  type LucideIcon,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
  Globe,
  Mail,
} from "lucide-react";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CursorGlow } from "@/components/site/CursorGlow";
import { Particles } from "@/components/site/Particles";
import { Reveal } from "@/components/site/Reveal";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { ArchitectureDiagram } from "@/components/site/ArchitectureDiagram";
import { LogoMark } from "@/components/site/LogoMark";
import SoftAurora from "@/components/reactbits/SoftAurora/SoftAurora";
import CircularGallery from "@/components/reactbits/CircularGallery/CircularGallery";
const UNSPLASH = "?auto=format&fit=crop&w=1200&q=80";
const galleryHealthcare = `https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0${UNSPLASH}`;
const galleryMilitary = `https://images.unsplash.com/photo-1473186578172-c141e6798cf4${UNSPLASH}`;
const galleryDefense = `/gallery-defense.webp`;
const gallerySovereignty = `/gallery-sovereignty.jpg`;
const galleryAutonomy = `/gallery-autonomy.jpg`;
const galleryRobotics = `https://images.unsplash.com/photo-1485827404703-89b55fcc595e${UNSPLASH}`;
const galleryAi = `https://images.unsplash.com/photo-1531746790731-6c087fecd65a${UNSPLASH}`;
const galleryLifescience = `https://images.unsplash.com/photo-1532187863486-abf9dbad1b69${UNSPLASH}`;

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorGlow />
      <Nav />
      <Hero />
      <Capabilities />
      <FieldsGallery />
      <DashboardSection />
      <WhyFail />
      <HowItWorks />
      <CoreFeatures />
      <UseCases />
      <Architecture />
      <ApiIntegration />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

/* ----------------- NAV ----------------- */
function Nav() {
  const links = [
    { href: "#platform", label: "Platform" },
    { href: "#how", label: "How it works" },
    { href: "#features", label: "Features" },
    { href: "#architecture", label: "Architecture" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="glass flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-3 py-2">
        <a href="#top" className="flex items-center gap-2 pl-2">
          <LogoMark className="h-5 w-auto" />
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          Early access
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

/* ----------------- HERO ----------------- */
function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-80">
          <SoftAurora color1="#EF4444" color2="#EF4444" />
        </div>
        <div className="absolute inset-0 bg-background/55" />
        <div className="grid-bg mask-fade-y absolute inset-0 opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <Particles count={36} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <Reveal>
          <div className="glass mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#EF4444]" />
            </span>
            <span className="text-muted-foreground">Now in private beta · enterprise pilots open</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="mx-auto flex h-auto w-64 items-center justify-center sm:w-80"
            style={{ filter: "drop-shadow(0 0 32px rgba(239,68,68,0.5))" }}
          >
            <img
              src="/stable-logo-nobg.png"
              alt="STABLE"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="mt-10 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Enterprise AI
            <br />
            <span style={{ color: "#F04A30" }}>Reliability Infrastructure</span>
          </h1>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Monitor, evaluate, and improve AI systems with real-time observability,
            reliability scoring, and production-grade insights — the control plane
            for AI in production.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background shadow-[0_10px_40px_-10px_rgba(239,68,68,0.6)] transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Get early access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/[0.06]"
            >
              Book a demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span>Scroll</span>
          <div className="relative h-10 w-[1px] overflow-hidden bg-white/10">
            <span
              className="absolute left-0 top-0 h-3 w-[1px] bg-[#EF4444]"
              style={{ animation: "scroll-hint 1.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- CAPABILITIES ----------------- */
function Capabilities() {
  const items = [
    { icon: Eye, title: "Observability", body: "Distributed tracing across prompts, retrievers, tools, and agents." },
    { icon: Sparkles, title: "Evaluation", body: "Continuous offline + online evals with custom and built-in judges." },
    { icon: ShieldCheck, title: "Reliability scoring", body: "A single, explainable score per model, route, and feature." },
    { icon: BarChart3, title: "Analytics", body: "Quality, latency, cost, and drift in one production-grade view." },
  ];
  return (
    <Section id="platform" eyebrow="Platform" title="The reliability layer for AI in production" subtitle="STABLE sits between your application and your models — measuring, scoring, and protecting every interaction.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <Card>
              <it.icon className="h-5 w-5 text-[#EF4444]" />
              <h3 className="mt-6 text-lg font-medium">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------- FIELDS GALLERY ----------------- */
function FieldsGallery() {
  const items = [
    { image: galleryHealthcare, text: "Healthcare" },
    { image: galleryMilitary, text: "Military" },
    { image: galleryDefense, text: "Defense" },
    { image: gallerySovereignty, text: "Sovereignty" },
    { image: galleryAutonomy, text: "Autonomy" },
    { image: galleryRobotics, text: "Robotics" },
    { image: galleryAi, text: "Artificial Intelligence" },
    { image: galleryLifescience, text: "Life Science" },
  ];
  return (
    <section id="fields" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[#EF4444]" />
              Industries
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              We <span className="text-gradient">Help In Every Field</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
              From hospitals to command centers — STABLE powers mission-critical AI across every regulated industry.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-[560px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
            <CircularGallery
              items={items}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.05}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------- DASHBOARD ----------------- */
function DashboardSection() {
  return (
    <Section
      eyebrow="Product"
      title="A control room for every model in production"
      subtitle="Trace requests end-to-end, run continuous evaluations, and catch regressions before users do."
    >
      <Reveal>
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] opacity-60 blur-3xl"
            style={{ background: "radial-gradient(60% 50% at 50% 40%, rgba(239,68,68,0.25), transparent 70%)" }}
          />
          <DashboardPreview />
        </div>
      </Reveal>
    </Section>
  );
}

/* ----------------- WHY FAIL ----------------- */
function WhyFail() {
  const reasons = [
    { title: "Silent hallucinations", body: "Confident, plausible answers that are wrong — undetectable without grounded evaluation." },
    { title: "Prompt + model drift", body: "Behavior changes across model versions, providers, and retrieved context." },
    { title: "Unmeasured quality", body: "Latency dashboards exist. Truth, faithfulness, and toxicity rarely do." },
    { title: "Brittle pipelines", body: "Retrieval, tools, and agents fail in ways traditional APM cannot see." },
    { title: "No reliability SLOs", body: "Without a score, AI quality cannot be owned, alerted on, or improved." },
    { title: "Compliance blind spots", body: "PII, policy, and audit trails are often missing across providers." },
  ];
  return (
    <Section eyebrow="The problem" title="Why AI systems fail in production" subtitle="The hardest part of shipping AI isn't building it — it's keeping it reliable as models, prompts, and traffic change.">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <div key={r.title} className="group relative bg-background p-8 transition-colors hover:bg-white/[0.02]">
            <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-4 text-lg font-medium">{r.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------- HOW ----------------- */
function HowItWorks() {
  const steps = [
    {
      icon: GitBranch,
      title: "Connect",
      body: "Route through the STABLE gateway with one line of code, or drop in our SDK. Works with every major LLM provider.",
    },
    {
      icon: Eye,
      title: "Observe",
      body: "Every prompt, tool call, retrieval, and response is traced and stored with full context.",
    },
    {
      icon: Sparkles,
      title: "Evaluate",
      body: "Built-in and custom evaluators score faithfulness, groundedness, toxicity, and task success — online and offline.",
    },
    {
      icon: ShieldCheck,
      title: "Improve",
      body: "Alerts, regression detection, and reliability scoring close the loop on model + prompt iteration.",
    },
  ];
  return (
    <Section id="how" eyebrow="How it works" title="From first request to production-grade reliability" subtitle="A single integration replaces a patchwork of logging, evals, and homegrown dashboards.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <Card>
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-[#F04A30]" />
                <span className="font-mono text-xs text-muted-foreground">Step {i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------- CORE FEATURES ----------------- */
function CoreFeatures() {
  const features: { icon: LucideIcon; title: string; body: string }[] = [
    { icon: Workflow, title: "AI Gateway", body: "Unified routing, fallback, and policy enforcement across providers." },
    { icon: ShieldCheck, title: "Reliability evaluation", body: "Online + offline evals with custom judges and golden datasets." },
    { icon: AlertTriangle, title: "Hallucination detection", body: "Grounded answer checks against retrieved context and ground truth." },
    { icon: Sparkles, title: "Prompt evaluation", body: "Versioned prompts, A/B comparisons, and regression diffs." },
    { icon: Activity, title: "Response monitoring", body: "Latency, cost, error, and quality SLOs per route and tenant." },
    { icon: Eye, title: "Observability", body: "OpenTelemetry-compatible tracing across prompts, tools, and agents." },
    { icon: BarChart3, title: "Analytics", body: "Slice quality and drift by user, model, prompt, region, or version." },
    { icon: Bell, title: "Alerts", body: "PagerDuty, Slack, and webhook notifications on reliability breaches." },
    { icon: Layers, title: "Multi-LLM support", body: "OpenAI, Anthropic, Google, Mistral, Llama, and self-hosted models." },
    { icon: Lock, title: "Enterprise security", body: "SOC 2-aligned controls, SSO, RBAC, audit logs, and VPC isolation." },
    { icon: Users, title: "Team management", body: "Workspaces, roles, environments, and approval workflows." },
    { icon: KeyRound, title: "API access", body: "Programmatic access to traces, evals, and reliability scores." },
  ];
  return (
    <Section id="features" eyebrow="Core platform" title="Everything reliability requires" subtitle="A complete platform — not a single tool — for the teams responsible for AI in production.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.05}>
            <Card>
              <f.icon className="h-5 w-5 text-[#EF4444]" />
              <h3 className="mt-5 text-base font-medium">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------- USE CASES ----------------- */
function UseCases() {
  const cases = [
    {
      icon: Bot,
      title: "Customer-facing copilots",
      body: "Catch hallucinations and tone regressions before they reach end users.",
    },
    {
      icon: Database,
      title: "RAG over private data",
      body: "Measure groundedness against retrieved context and detect retrieval failures.",
    },
    {
      icon: Workflow,
      title: "Multi-step agents",
      body: "Trace tool use, plan steps, and recoveries with full step-level reliability.",
    },
    {
      icon: Cpu,
      title: "Internal AI platforms",
      body: "Give every team a shared gateway, reliability SLOs, and governance.",
    },
  ];
  return (
    <Section eyebrow="Enterprise use cases" title="Built for teams shipping AI to customers" subtitle="From single copilots to large internal AI platforms — STABLE scales with the surface area of your AI footprint.">
      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <Card padded>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <c.icon className="h-5 w-5 text-[#F04A30]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------- ARCHITECTURE ----------------- */
function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow="Architecture"
      title="A single control plane between apps and models"
      subtitle="Drop in as a gateway, an SDK, or both. STABLE captures, evaluates, and governs every AI interaction."
    >
      <Reveal>
        <ArchitectureDiagram />
      </Reveal>
    </Section>
  );
}

/* ----------------- API INTEGRATION ----------------- */
function ApiIntegration() {
  return (
    <Section
      eyebrow="Integration"
      title="One line. Every model."
      subtitle="Use STABLE as a drop-in OpenAI-compatible gateway, or instrument your stack with our SDKs."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <CodeBlock
            title="gateway.ts"
            lang="ts"
            code={`import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://gateway.stable.ai/v1",
  apiKey: process.env.STABLE_API_KEY,
});

// Same OpenAI SDK — now traced, evaluated, and scored.
const res = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Summarize Q3 earnings." }],
  metadata: { feature: "finance-copilot", user_tier: "enterprise" },
});`}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <CodeBlock
            title="evals.py"
            lang="py"
            code={`from stable import Evaluator, dataset

evaluator = Evaluator(
    judges=["faithfulness", "groundedness", "toxicity"],
    dataset=dataset("support-qa-golden"),
)

# Run against a candidate prompt/model and get a reliability score.
report = evaluator.run(
    model="claude-3-5-sonnet",
    prompt_version="v17",
)
print(report.reliability_score)  # 94.6`}
          />
        </Reveal>
      </div>
    </Section>
  );
}

function CodeBlock({ title, code, lang }: { title: string; code: string; lang: string }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Boxes className="h-3.5 w-3.5" />
          <span className="font-mono">{title}</span>
        </div>
        <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
          {lang}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-foreground/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ----------------- FAQ ----------------- */
function Faq() {
  const items = [
    {
      q: "What does STABLE do, in one sentence?",
      a: "STABLE is the reliability layer for AI in production — observability, evaluation, and scoring for every model your applications depend on.",
    },
    {
      q: "How do we integrate it?",
      a: "Two ways: route requests through our OpenAI-compatible gateway, or instrument your code with our SDKs. Most teams ship a first integration in under an hour.",
    },
    {
      q: "Which models and providers are supported?",
      a: "OpenAI, Anthropic, Google, Mistral, Llama variants, and self-hosted endpoints. New providers are added continuously.",
    },
    {
      q: "Where is data stored?",
      a: "Cloud, single-tenant, or fully in-VPC deployments are available. PII redaction and retention policies are configurable per workspace.",
    },
    {
      q: "Is STABLE built for enterprise?",
      a: "Yes — SSO, RBAC, audit logs, environment isolation, and SOC 2-aligned controls are first-class, not afterthoughts.",
    },
    {
      q: "Can we run our own evaluators?",
      a: "Absolutely. Use built-in judges, your own LLM-as-judge prompts, deterministic checks, or human review — all unified in one reliability score.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered" subtitle="If you need deeper detail, talk to our team.">
      <div className="mx-auto max-w-3xl divide-y divide-white/5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-sm font-medium sm:text-base">{it.q}</span>
                <span
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-muted-foreground transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm text-muted-foreground">{it.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ----------------- CONTACT ----------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const cards = [
    {
      icon: Mail,
      title: "Email",
      body: "Founder (afeef2109@gmail.com)",
    },
    {
      icon: Users,
      title: "Partnerships",
      body: "Looking to become a design partner or integrate STABL into your AI stack.",
    },
    {
      icon: BarChart3,
      title: "Investors",
      body: "Interested in learning about STABL's vision, roadmap, and traction? Let's connect.",
    },
    {
      icon: Zap,
      title: "Early Access",
      body: "Join the beta and help shape the future of AI reliability.",
    },
  ];
  const inputCls =
    "w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-[#EF4444]/60 focus:ring-2 focus:ring-[#EF4444]/20";
  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Final CTA */}
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Every reliable AI system starts with trust.{" "}
              <span className="text-gradient">Build yours with STABL.</span>
            </h2>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal>
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[#EF4444]" />
              Contact
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Let's Build Reliable AI{" "}
              <span className="text-gradient">Together</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
              Whether you're building AI products, exploring enterprise reliability, or
              interested in partnering with STABL, we'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact cards */}
          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card padded>
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <c.icon className="h-5 w-5 text-[#EF4444]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-medium">{c.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="glass-strong space-y-4 rounded-3xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Full Name
                  </span>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="John Doe"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Work Email
                  </span>
                  <input
                    type="email"
                    className={inputCls}
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Company
                  </span>
                  <input
                    type="text"
                    className={inputCls}
                    placeholder="Acme Inc."
                    required
                  />
                </label>
                <div>
                  <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Reason for Contact
                  </span>
                  <Select defaultValue="early-access">
                    <SelectTrigger
                      className={cn(
                        inputCls,
                        "h-auto cursor-pointer pr-8"
                      )}
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-white/10 bg-[oklch(0.19_0.02_260)]">
                      <SelectItem value="early-access">
                        Request Early Access
                      </SelectItem>
                      <SelectItem value="demo">Book a Demo</SelectItem>
                      <SelectItem value="design-partner">
                        Become a Design Partner
                      </SelectItem>
                      <SelectItem value="investor">
                        Investor Inquiry
                      </SelectItem>
                      <SelectItem value="general">
                        General Contact
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  rows={4}
                  className={inputCls}
                  placeholder="Tell us what you're building or how we can help..."
                  required
                />
              </label>
              <div className="flex flex-col items-stretch justify-between gap-3 pt-2 sm:flex-row sm:items-center">
                <p className="text-xs text-muted-foreground">
                  We typically respond within 24–48 hours.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background shadow-[0_10px_40px_-10px_rgba(239,68,68,0.6)] transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {submitted ? "Message sent" : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------- FOOTER ----------------- */
function Footer() {
  const cols = [
    { title: "Platform", links: ["AI Gateway", "Evaluation", "Observability", "Analytics", "Alerts"] },
    { title: "Company", links: ["About", "Careers", "Security", "Contact"] },
    { title: "Resources", links: ["Documentation", "Changelog", "Status", "Privacy"] },
  ];
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{ background: "radial-gradient(60% 60% at 50% 100%, rgba(239,68,68,0.18), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_2fr]">
        <div>
          <LogoMark className="h-6 w-auto" />
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Enterprise AI reliability infrastructure. Built for the teams responsible
            for AI in production.
          </p>
          <div className="mt-6 flex items-center gap-2">
            <Social icon={GitBranch} />
            <Social icon={Globe} />
            <Social icon={Mail} />
            <Social icon={Zap} />
          </div>

        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-foreground/80 transition-colors hover:text-[#EF4444]">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} STABLE Labs, Inc. All rights reserved.</span>
          <span className="font-mono">stable.ai · enterprise reliability for AI</span>
        </div>
      </div>
    </footer>
  );
}

function Social({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <a
      href="#"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-colors hover:border-[#EF4444]/40 hover:text-[#EF4444]"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

/* ----------------- LAYOUT HELPERS ----------------- */
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-[#EF4444]" />
              {eyebrow}
            </div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">{subtitle}</p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Card({ children, padded }: { children: React.ReactNode; padded?: boolean }) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-[#EF4444]/30 hover:bg-white/[0.04] ${padded ? "p-7" : "p-6"}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(239,68,68,0.10), transparent 40%)",
        }}
      />
      {children}
    </div>
  );
}
