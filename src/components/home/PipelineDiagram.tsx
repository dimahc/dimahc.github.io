'use client'

import { memo } from 'react'

const paths = {
  ingestToStream: 'M40,60 C140,60 120,150 220,150',
  streamToTransform: 'M220,150 C300,150 300,60 380,60',
  streamToServe: 'M220,150 C160,150 160,270 260,270',
}

const dots = [
  { path: paths.ingestToStream, duration: 3.6, delay: 0 },
  { path: paths.ingestToStream, duration: 3.6, delay: 1.2 },
  { path: paths.streamToTransform, duration: 3.2, delay: 0.4 },
  { path: paths.streamToTransform, duration: 3.2, delay: 2.0 },
  { path: paths.streamToServe, duration: 4.0, delay: 0.8 },
  { path: paths.streamToServe, duration: 4.0, delay: 2.6 },
]

function PipelineDiagram() {
  return (
    <div
      className="relative w-full max-w-[420px] mx-auto aspect-[21/17]"
      role="img"
      aria-label="Diagram of a real-time data pipeline: ingest, queue, transform, and serve, with data packets flowing between each stage."
    >
      <style>{`
        .pipeline-path {
          stroke: var(--line);
          fill: none;
          stroke-width: 1.5;
        }
        .pipeline-node {
          fill: var(--bg-raised);
          stroke: var(--teal);
          stroke-width: 1.5;
        }
        .pipeline-node-label {
          fill: var(--text-dim);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          text-anchor: middle;
        }
        .pipeline-packet {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--amber);
          top: 0;
          left: 0;
          offset-rotate: 0deg;
          animation: pipeline-travel linear infinite;
        }
        @keyframes pipeline-travel {
          0%   { offset-distance: 0%; opacity: 0; }
          6%   { opacity: 1; }
          94%  { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .pipeline-packet {
            animation: none;
            opacity: 1;
            offset-distance: 50%;
          }
        }
      `}</style>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 420 340"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="pipeline-path" d={paths.ingestToStream} />
        <path className="pipeline-path" d={paths.streamToTransform} />
        <path className="pipeline-path" d={paths.streamToServe} />

        <circle className="pipeline-node" cx="40" cy="60" r="15" />
        <text className="pipeline-node-label" x="40" y="94">ingest</text>

        <circle className="pipeline-node" cx="220" cy="150" r="17" />
        <text className="pipeline-node-label" x="220" y="187">stream</text>

        <circle className="pipeline-node" cx="380" cy="60" r="15" />
        <text className="pipeline-node-label" x="380" y="34">transform</text>

        <circle className="pipeline-node" cx="260" cy="270" r="15" />
        <text className="pipeline-node-label" x="260" y="304">serve</text>
      </svg>

      {dots.map((dot, i) => (
        <div
          key={i}
          className="pipeline-packet"
          style={{
            offsetPath: `path('${dot.path}')`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default memo(PipelineDiagram)
