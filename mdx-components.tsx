import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, id, ...props }) => (
      <h2
        id={id}
        className="font-[family-name:var(--font-space-grotesk)] font-bold text-[20px] mt-10 mb-4 pb-3 border-b border-line-soft text-foreground"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, id, ...props }) => (
      <h3
        id={id}
        className="font-[family-name:var(--font-space-grotesk)] font-bold text-[17px] mt-8 mb-3 text-foreground"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }) => (
      <p className="text-muted mb-[22px] leading-[1.75]" {...props}>
        {children}
      </p>
    ),
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http')
      return (
        <a
          href={href}
          className="text-accent hover:text-accent/80 transition-colors duration-150"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        >
          {children}
        </a>
      )
    },
    code: ({ children, className, ...props }) => {
      const isInline = !className
      if (isInline) {
        return (
          <code
            className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] bg-sunken px-[5px] py-[2px] rounded-[4px] text-muted"
            {...props}
          >
            {children}
          </code>
        )
      }
      // Block code (inside pre) — pre handles the styling
      return (
        <code className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] leading-[1.8]" {...props}>
          {children}
        </code>
      )
    },
    pre: ({ children, ...props }) => (
      <pre
        className="bg-sunken border border-border rounded-[10px] p-[22px_24px] overflow-x-auto my-7 text-muted"
        {...props}
      >
        {children}
      </pre>
    ),
    ul: ({ children, ...props }) => (
      <ul className="text-muted mb-[22px] pl-6 list-disc space-y-1.5" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="text-muted mb-[22px] pl-6 list-decimal space-y-1.5" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="leading-[1.75]" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-2 border-accent pl-5 my-7 text-muted italic"
        {...props}
      >
        {children}
      </blockquote>
    ),
    hr: (props) => (
      <hr className="border-line-soft my-10" {...props} />
    ),
    strong: ({ children, ...props }) => (
      <strong className="font-semibold text-foreground" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }) => (
      <em className="italic" {...props}>
        {children}
      </em>
    ),
    ...components,
  }
}
