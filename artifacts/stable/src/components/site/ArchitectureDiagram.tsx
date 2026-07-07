export function ArchitectureDiagram() {
  const node = "rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3 text-center text-xs font-medium backdrop-blur";
  return (
    <div className="glass rounded-2xl p-4 sm:rounded-3xl sm:p-6 lg:p-10">
      <div className="grid gap-4 md:grid-cols-5 md:items-center md:gap-6">
        {/* Left: clients */}
        <div className="space-y-2 sm:space-y-3">
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
          <div className="relative rounded-2xl border border-[#EF4444]/30 bg-gradient-to-b from-[#EF4444]/8 to-transparent p-4 text-center shadow-[0_0_60px_-20px_#EF4444] sm:p-5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#EF4444]">STABLE</div>
            <div className="mt-1 text-sm font-semibold sm:text-base">AI Reliability Gateway</div>
            <ul className="mt-3 space-y-1 text-left text-xs text-muted-foreground sm:mt-4 sm:space-y-1.5">
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
        <div className="space-y-2 sm:space-y-3">
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Model providers</div>
          <div className={node}>OpenAI</div>
          <div className={node}>Anthropic</div>
          <div className={node}>Google · Mistral</div>
          <div className={node}>Self-hosted · vLLM</div>
        </div>
      </div>

      {/* Bottom storage row */}
      <div className="mt-6 grid grid-cols-2 gap-2 border-t border-black/8 pt-5 sm:mt-8 sm:gap-3 sm:pt-6 md:grid-cols-4">
        <div className={node}>Trace store</div>
        <div className={node}>Eval datasets</div>
        <div className={node}>Reliability scores</div>
        <div className={cn(node, "col-span-2 md:col-span-1")}>Alerts · Webhooks</div>
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function Connector() {
  return (
    <div className="flex items-center justify-center">
      <div className="hidden h-px w-full bg-gradient-to-r from-transparent via-[#EF4444]/40 to-transparent md:block" />
      <div className="block h-6 w-px bg-gradient-to-b from-transparent via-[#EF4444]/40 to-transparent md:hidden" />
    </div>
  );
}
