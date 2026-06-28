export function ArchitectureDiagram() {
  const node = "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs font-medium backdrop-blur";
  return (
    <div className="glass rounded-3xl p-6 sm:p-10">
      <div className="grid gap-6 md:grid-cols-5 md:items-center">
        {/* Left: clients */}
        <div className="space-y-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Applications</div>
          <div className={node}>Web app</div>
          <div className={node}>Mobile / API</div>
          <div className={node}>Agents</div>
          <div className={node}>RAG pipelines</div>
        </div>

        {/* Arrow */}
        <Connector />

        {/* Middle: STABLE gateway */}
        <div className="md:col-span-1">
          <div
            className="relative rounded-2xl border border-[#F97316]/30 bg-gradient-to-b from-[#F97316]/10 to-transparent p-5 text-center shadow-[0_0_60px_-20px_#F97316]"
          >
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#EAB308]">STABLE</div>
            <div className="mt-1 text-base font-semibold">AI Reliability Gateway</div>
            <ul className="mt-4 space-y-1.5 text-left text-xs text-muted-foreground">
              <li>· Tracing & spans</li>
              <li>· Evaluators</li>
              <li>· Hallucination guard</li>
              <li>· Routing & fallback</li>
              <li>· Policy & PII</li>
            </ul>
          </div>
        </div>

        <Connector />

        {/* Right: models */}
        <div className="space-y-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Model providers</div>
          <div className={node}>OpenAI</div>
          <div className={node}>Anthropic</div>
          <div className={node}>Google · Mistral</div>
          <div className={node}>Self-hosted · vLLM</div>
        </div>
      </div>

      {/* Bottom storage row */}
      <div className="mt-8 grid gap-3 border-t border-white/5 pt-6 md:grid-cols-4">
        <div className={node}>Trace store</div>
        <div className={node}>Eval datasets</div>
        <div className={node}>Reliability scores</div>
        <div className={node}>Alerts · Webhooks</div>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center justify-center">
      <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-[#F97316]/40 to-transparent md:block" />
      <div className="block h-8 w-px bg-gradient-to-b from-transparent via-[#F97316]/40 to-transparent md:hidden" />
    </div>
  );
}
