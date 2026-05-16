/**
 * components/blog/MDXComponents.jsx
 *
 * Rich visual components for MDX blog posts.
 * All props use simple strings or children — no JS array literals —
 * so next-mdx-remote/rsc can parse them reliably from .mdx files.
 *
 * Array props accept pipe-separated strings:  "item 1 | item 2 | item 3"
 */

// ─── Helper: parse "a | b | c" or an array safely ─────────────────────────
function parseList(val) {
  if (Array.isArray(val)) return val;
  if (typeof val === "string") return val.split("|").map((s) => s.trim()).filter(Boolean);
  return [];
}

// ─── Pipeline / Flow Diagram ───────────────────────────────────────────────
// Usage in MDX:
//   <Pipeline steps="Step 1 | Step 2 | Step 3" />
export function Pipeline({ steps = "" }) {
  const stepList = parseList(steps);
  return (
    <div className="my-8 flex flex-col items-center gap-0">
      {stepList.map((step, i) => (
        <div key={i} className="flex flex-col items-center w-full max-w-lg">
          <div className="w-full rounded-xl border border-border bg-card px-5 py-3 flex items-center gap-3 shadow-sm hover:border-green-500/50 transition-colors">
            <span className="shrink-0 w-7 h-7 rounded-full bg-green-500/15 text-green-500 text-xs font-bold flex items-center justify-center border border-green-500/30">
              {i + 1}
            </span>
            <span className="text-sm text-foreground font-medium">{step}</span>
          </div>
          {i < stepList.length - 1 && (
            <svg width="20" height="28" viewBox="0 0 20 28" className="text-green-500/60 my-0.5 shrink-0">
              <line x1="10" y1="0" x2="10" y2="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2" />
              <polygon points="10,28 4,16 16,16" fill="currentColor" opacity="0.7" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Stat Cards Row (children-based) ──────────────────────────────────────
// Usage in MDX:
//   <StatRow>
//     <Stat value="~200ms" label="Search latency" />
//     <Stat value="8.5B" label="Pages indexed" />
//   </StatRow>
export function StatRow({ children }) {
  return (
    <div className="my-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {children}
    </div>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 text-center hover:border-green-500/40 hover:bg-green-500/5 transition-all">
      <div className="text-2xl font-bold text-green-500 mb-1">{value}</div>
      <div className="text-xs text-muted-foreground leading-snug">{label}</div>
    </div>
  );
}

// ─── Side-by-side Comparison ───────────────────────────────────────────────
// Usage in MDX:
//   <Comparison
//     beforeTitle="Old Way"
//     afterTitle="New Way"
//     before="item 1 | item 2 | item 3"
//     after="item 1 | item 2 | item 3"
//   />
export function Comparison({
  before = "",
  after = "",
  beforeTitle = "Old Way",
  afterTitle = "New Way",
}) {
  const beforeList = parseList(before);
  const afterList = parseList(after);
  return (
    <div className="my-8 grid sm:grid-cols-2 gap-4">
      {/* Before */}
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center justify-center font-bold">
            ✕
          </span>
          <span className="text-sm font-semibold text-red-400">{beforeTitle}</span>
        </div>
        <ul className="space-y-2">
          {beforeList.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-red-400 mt-0.5 shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* After */}
      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 text-xs flex items-center justify-center font-bold">
            ✓
          </span>
          <span className="text-sm font-semibold text-green-500">{afterTitle}</span>
        </div>
        <ul className="space-y-2">
          {afterList.map((item, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-green-500 mt-0.5 shrink-0">+</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Callout / Info box ────────────────────────────────────────────────────
// Usage in MDX:
//   <Callout type="tip">Your message here</Callout>
// types: info | tip | warning | key
const calloutStyles = {
  info:    { border: "border-blue-500/30",   bg: "bg-blue-500/5",   icon: "ℹ", iconColor: "text-blue-400" },
  tip:     { border: "border-green-500/30",  bg: "bg-green-500/5",  icon: "💡", iconColor: "text-green-400" },
  warning: { border: "border-yellow-500/30", bg: "bg-yellow-500/5", icon: "⚠", iconColor: "text-yellow-400" },
  key:     { border: "border-purple-500/30", bg: "bg-purple-500/5", icon: "🔑", iconColor: "text-purple-400" },
};

export function Callout({ type = "info", children }) {
  const s = calloutStyles[type] || calloutStyles.info;
  return (
    <div className={`my-6 rounded-xl border ${s.border} ${s.bg} px-5 py-4 flex gap-3`}>
      <span className={`text-lg shrink-0 mt-0.5 ${s.iconColor}`}>{s.icon}</span>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

// ─── Score / Relevance Bar ─────────────────────────────────────────────────
// Usage in MDX:
//   <ScoreBar label="Search Relevance" oldScore={45} newScore={92} />
export function ScoreBar({ label = "", oldScore = 0, newScore = 0 }) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-5 space-y-4">
      <div className="text-sm font-semibold text-foreground">{label}</div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Keyword Search</span>
          <span>{oldScore}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-red-400/60"
            style={{ width: `${oldScore}%` }}
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>AI / Vector Search</span>
          <span>{newScore}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-green-500"
            style={{ width: `${newScore}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── RAG Flow (special two-column diagram) ─────────────────────────────────
// Usage: <RAGFlow /> — no props needed
export function RAGFlow() {
  const llmSteps = [
    { label: "User Query", highlight: false },
    { label: "LLM (stale training data)", highlight: false },
    { label: "Knowledge Gap / Hallucination", highlight: true, bad: true },
  ];
  const ragSteps = [
    { label: "User Query", highlight: false },
    { label: "Embed Query → Search Index", highlight: false },
    { label: "Retrieve Relevant Chunks", highlight: false },
    { label: "LLM + Context = Accurate Answer", highlight: true, bad: false },
  ];
  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6 overflow-x-auto">
      <div className="text-xs font-semibold text-green-500 uppercase tracking-widest mb-5">
        RAG Architecture
      </div>
      <div className="grid sm:grid-cols-2 gap-6 min-w-[340px]">
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-medium mb-3">❌ LLM Only</div>
          {llmSteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-full rounded-lg border px-3 py-2 text-xs text-center ${
                  s.highlight
                    ? "border-red-500/30 bg-red-500/10 text-red-400"
                    : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {s.label}
              </div>
              {i < llmSteps.length - 1 && (
                <div className="text-muted-foreground text-base leading-none my-1">↓</div>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="text-xs text-muted-foreground font-medium mb-3">✅ RAG System</div>
          {ragSteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-full rounded-lg border px-3 py-2 text-xs text-center ${
                  s.highlight
                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                    : "border-border bg-muted/30 text-muted-foreground"
                }`}
              >
                {s.label}
              </div>
              {i < ragSteps.length - 1 && (
                <div className="text-green-500/60 text-base leading-none my-1">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Embedding Visualizer ──────────────────────────────────────────────────
// Usage: <EmbeddingViz /> — no props needed
export function EmbeddingViz() {
  const items = [
    { label: '"javascript framework"', dims: [0.12, -0.45, 0.89, 0.23], color: "bg-green-500", badge: null },
    { label: '"js library"',           dims: [0.11, -0.46, 0.88, 0.24], color: "bg-green-400", badge: { text: "96% similar", cls: "bg-green-500/15 text-green-500" } },
    { label: '"python tutorial"',      dims: [-0.82, 0.34, -0.51, 0.11], color: "bg-red-400",  badge: { text: "12% similar", cls: "bg-red-500/15 text-red-400" } },
  ];
  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6">
      <div className="text-xs font-semibold text-green-500 uppercase tracking-widest mb-4">
        Vector Space Visualization
      </div>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-foreground">{item.label}</span>
              {item.badge && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${item.badge.cls}`}>
                  {item.badge.text}
                </span>
              )}
            </div>
            <div className="flex gap-1 items-end h-7">
              {item.dims.map((v, j) => {
                const pct = Math.abs(v) * 100;
                const isNeg = v < 0;
                return (
                  <div key={j} className="flex-1 flex flex-col justify-end items-center">
                    <div
                      className={`w-full rounded-t ${isNeg ? "bg-muted" : item.color} opacity-80`}
                      style={{ height: `${pct * 0.25}px`, minHeight: 2, maxHeight: 24 }}
                    />
                  </div>
                );
              })}
              <span className="text-[10px] text-muted-foreground ml-1 self-end">…384d</span>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Similar meanings → similar vectors. Different topics → distant vectors.
      </p>
    </div>
  );
}

// ─── Ranking Formula Visual ────────────────────────────────────────────────
// Usage: <RankingFormula /> — no props needed
export function RankingFormula() {
  const signals = [
    { label: "Vector Similarity", weight: 40, color: "bg-green-500" },
    { label: "PageRank",          weight: 30, color: "bg-blue-400" },
    { label: "CTR History",       weight: 15, color: "bg-purple-400" },
    { label: "Freshness",         weight: 10, color: "bg-yellow-400" },
    { label: "Authority",         weight: 5,  color: "bg-orange-400" },
  ];
  return (
    <div className="my-8 rounded-2xl border border-border bg-card p-6">
      <div className="text-xs font-semibold text-green-500 uppercase tracking-widest mb-4">
        Google Ranking Signals
      </div>
      <div className="space-y-3">
        {signals.map((s, i) => (
          <div key={i} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-foreground">{s.label}</span>
              <span className="text-muted-foreground font-mono">{s.weight}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full rounded-full ${s.color} opacity-80`}
                style={{ width: `${s.weight * 2.5}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        AI captures <strong className="text-foreground">semantic relevance</strong>, but authority &amp; engagement signals still matter.
      </p>
    </div>
  );
}
