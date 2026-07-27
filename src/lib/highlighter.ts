import { createHighlighter, type Highlighter } from 'shiki'

let highlighterPromise: Promise<Highlighter> | null = null

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: [
        'python', 'go', 'javascript', 'typescript', 'jsx', 'tsx',
        'bash', 'shell', 'json', 'yaml', 'html', 'css', 'sql',
        'rust', 'ruby', 'php', 'java', 'c', 'cpp', 'diff',
      ],
    })
  }
  return highlighterPromise
}

export async function highlightCode(code: string, lang: string): Promise<string> {
  const highlighter = await getHighlighter()
  const loaded = highlighter.getLoadedLanguages()
  if (!loaded.includes(lang)) {
    try {
      await highlighter.loadLanguage(lang as any)
    } catch {
      // fall back to no highlighting if language isn't available
    }
  }
  return highlighter.codeToHtml(code, {
    lang,
    theme: 'github-dark',
  })
}
