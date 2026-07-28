type Props = {
  file: string
  content: string
  languageColor: string
}

export default function ProjectTerminal({ file, content, languageColor }: Props) {
  return (
    <div className="bg-sunken border border-border rounded-[10px] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface">
        <div className="flex items-center gap-[7px]">
          <span className="w-[11px] h-[11px] rounded-full bg-red-500/80" />
          <span className="w-[11px] h-[11px] rounded-full bg-yellow-500/80" />
          <span className="w-[11px] h-[11px] rounded-full bg-green-500/80" />
        </div>
        <span className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] text-faint">
          {file}
        </span>
        <div className="w-[51px]" />
      </div>

      {/* Content */}
      <div className="p-5">
        <pre className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] leading-relaxed text-muted whitespace-pre-wrap m-0">
          {content}
        </pre>
      </div>
    </div>
  )
}
