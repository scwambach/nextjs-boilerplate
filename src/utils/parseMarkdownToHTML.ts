import MarkdownIt from 'markdown-it'

const mdParser = new MarkdownIt()

export const parseMarkdownToHTML = (markdown: string): string => {
  return mdParser.render(markdown)
}
