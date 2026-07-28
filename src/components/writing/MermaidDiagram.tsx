'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
})

export default function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    mermaid.render(`mermaid-${Math.random().toString(36).slice(2)}`, chart).then(({ svg }) => {
      if (ref.current) {
        ref.current.innerHTML = svg
      }
    }).catch(() => {
      if (ref.current) {
        ref.current.textContent = chart
      }
    })
  }, [chart])

  return (
    <div
      ref={ref}
      className="my-8 flex justify-center"
    />
  )
}
