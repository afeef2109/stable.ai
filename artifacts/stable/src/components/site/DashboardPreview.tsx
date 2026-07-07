import { Activity, AlertTriangle, CheckCircle2, Cpu, Gauge, Sparkles } from "lucide-react";

export function DashboardPreview() {
  const bars = [38, 52, 44, 68, 58, 74, 62, 80, 72, 88, 76, 92, 84, 78, 90];
  const events = [
    { lvl: "ok", txt: "gpt-4o · evaluation pass · faithfulness 0.97", t: "12s" },
    { lvl: "warn", txt: "claude-3.5 · latency spike · p95 1.84s", t: "47s" },
    { lvl: "err", txt: "llama-3.1 · hallucination flagged · trace #8a21", t: "1m" },
    { lvl: "ok", txt: "gpt-4o · prompt eval · grounded 0.94", t: "2m" },
    { lvl: "ok", txt: "mistral-large · response within SLO", t: "3m" },
  ];
  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl p-2 shadow-[0_40px_120px_-30px_rgba(239,68,68,0.20)] sm:p-3">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="h-3 w-3 rounded-full bg-black/10" />
          <span className="h-3 w-3 rounded-full bg-black/10" />
        </div>
        <div className="truncate px-2 font-mono text-xs text-muted-foreground">app.stable.ai / reliability</div>
        <div className="h-3 w-12 shrink-0" />
      </div>

      <div className="grid gap-3 rounded-xl bg-background/60 p-3 md:grid-cols-12 md:p-4">
        {/* Sidebar */}
        <aside className="hidden md:col-span-2 md:flex md:flex-col md:gap-1">
          {["Overview", "Traces", "Evaluations", "Alerts", "Models", "Settings"].map((l, i) => (
            <div
              key={l}
              className={`rounded-md px-2.5 py-1.5 text-xs ${i === 0 ? "bg-black/5 font-medium text-foreground" : "text-muted-foreground"}`}
            >
              {l}
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="space-y-3 md:col-span-10">
          {/* KPI row */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
            <Kpi icon={<Gauge className="h-3.5 w-3.5" />} label="Reliability" value="94.6" suffix="/100" tint="orange" />
            <Kpi icon={<Activity className="h-3.5 w-3.5" />} label="Req / min" value="12.4k" tint="default" />
            <Kpi icon={<Sparkles className="h-3.5 w-3.5" />} label="Pass rate" value="98.2%" tint="gold" />
            <Kpi icon={<AlertTriangle className="h-3.5 w-3.5" />} label="Incidents" value="2" tint="default" />
          </div>

          {/* Chart */}
          <div className="rounded-lg border border-black/8 bg-black/[0.02] p-3 sm:p-4">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Reliability over time</div>
                <div className="truncate font-mono text-xs sm:text-sm">last 24h · faithfulness · groundedness</div>
              </div>
              <div className="hidden gap-2 sm:flex">
                <Pill color="#EF4444" label="faithfulness" />
                <Pill color="#F04A30" label="groundedness" />
                <Pill color="#94a3b8" label="toxicity" />
              </div>
            </div>
            <div className="flex h-24 items-end gap-0.5 sm:h-32 sm:gap-1">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 space-y-0.5">
                  <div
                    className="w-full rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: "linear-gradient(180deg, #EF4444 0%, rgba(239,68,68,0.15) 100%)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Live events */}
          <div className="rounded-lg border border-black/8 bg-black/[0.02]">
            <div className="flex items-center justify-between border-b border-black/8 px-3 py-2.5 sm:px-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4444] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EF4444]" />
                </span>
                Live trace stream
              </div>
              <Cpu className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <ul className="divide-y divide-black/5 text-xs">
              {events.map((e, i) => (
                <li key={i} className="flex items-center justify-between gap-2 px-3 py-2 font-mono sm:gap-3 sm:px-4">
                  <span className="flex min-w-0 items-center gap-2">
                    {e.lvl === "ok" && <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />}
                    {e.lvl === "warn" && <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-amber-500" />}
                    {e.lvl === "err" && <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-[#EF4444]" />}
                    <span className="truncate text-muted-foreground">{e.txt}</span>
                  </span>
                  <span className="shrink-0 text-muted-foreground/70">{e.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ icon, label, value, suffix, tint }: { icon: React.ReactNode; label: string; value: string; suffix?: string; tint?: "orange" | "gold" | "default" }) {
  const color = tint === "orange" ? "#EF4444" : tint === "gold" ? "#F04A30" : undefined;
  return (
    <div className="rounded-lg border border-black/8 bg-black/[0.02] p-2.5 sm:p-3">
      <div className="flex items-center gap-1 text-[10px] text-muted-foreground sm:gap-1.5 sm:text-[11px]">{icon}{label}</div>
      <div className="mt-1 font-mono text-lg tracking-tight sm:text-xl" style={color ? { color } : undefined}>
        {value}<span className="ml-0.5 text-xs text-muted-foreground">{suffix}</span>
      </div>
    </div>
  );
}

function Pill({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-black/10 px-2 py-0.5 text-[10px] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}
