const nodes = [
  {
    id: "clients",
    title: "clients",
    detail: "APIs",
    x: "16%",
    y: "50%",
    w: "20%",
    h: "20%",
  },
  {
    id: "identity",
    title: "identity",
    detail: "access",
    x: "30%",
    y: "18%",
    w: "22%",
    h: "20%",
  },
  {
    id: "agent",
    title: "AI Agent",
    detail: "n8n, LLMs",
    x: "50%",
    y: "50%",
    w: "26%",
    h: "26%",
    active: true,
  },
  {
    id: "database",
    title: "database",
    detail: "Supabase",
    x: "70%",
    y: "18%",
    w: "24%",
    h: "20%",
  },
  {
    id: "tools",
    title: "tools",
    detail: "MCP",
    x: "84%",
    y: "50%",
    w: "20%",
    h: "20%",
  },
  {
    id: "queue",
    title: "queue",
    detail: "workflows",
    x: "30%",
    y: "82%",
    w: "22%",
    h: "20%",
  },
  {
    id: "notify",
    title: "notify",
    detail: "Slack",
    x: "70%",
    y: "82%",
    w: "24%",
    h: "20%",
  },
] as const;

const connectors = [
  "M26 36 H37",
  "M30 20.16 V23.2 H42 V26.64",
  "M70 20.16 V23.2 H58 V26.64",
  "M63 36 H74",
  "M42 45.36 V48.6 H30 V51.84",
  "M58 45.36 V48.6 H70 V51.84",
];

const joints = [
  [26, 36],
  [37, 36],
  [30, 20.16],
  [42, 26.64],
  [70, 20.16],
  [58, 26.64],
  [63, 36],
  [74, 36],
  [42, 45.36],
  [30, 51.84],
  [58, 45.36],
  [70, 51.84],
];

export function ArchitectureDiagram() {
  return (
    <figure
      aria-hidden="true"
      className="w-full min-w-0 rounded-xl border border-[#47627F] bg-[#102137]"
    >
      <div className="flex items-center gap-3 border-b border-[#47627F]/80 px-4 py-3">
        <span className="flex shrink-0 items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#E15A4A]" />
          <span className="size-2.5 rounded-full bg-[#E2B15A]" />
          <span className="size-2.5 rounded-full bg-[#6FBE7A]" />
        </span>
        <span className="min-w-0 flex-1 truncate text-center font-mono text-xs text-[#C5D0DF]">
          workflow.diagram
        </span>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-[#8DE0C1]">
          <span className="size-1.5 rounded-full bg-[#8DE0C1]" />
          diagram
        </span>
      </div>
      <div className="relative aspect-[100/72] w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 72"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="#47627F"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          >
            {connectors.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <g fill="#47627F">
            {joints.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.7" />
            ))}
          </g>
        </svg>
        {nodes.map((node) => (
          <div
            key={node.id}
            className={
              "active" in node && node.active
                ? "absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-md border-2 border-[#FFB454] bg-[#203650] px-1 text-center"
                : "absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-hidden rounded-md border border-[#47627F] bg-[#203650] px-1 text-center"
            }
            style={{ left: node.x, top: node.y, width: node.w, height: node.h }}
          >
            <span
              className={
                "active" in node && node.active
                  ? "max-w-full truncate font-mono text-[10px] leading-tight font-semibold text-[#FFB454] sm:text-[11px]"
                  : "max-w-full truncate font-mono text-[10px] leading-tight font-medium text-[#F5F7FA] sm:text-[11px]"
              }
            >
              {node.title}
            </span>
            <span className="max-w-full truncate font-mono text-[9px] leading-tight text-[#C5D0DF] sm:text-[10px]">
              {node.detail}
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}
