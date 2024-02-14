import MarkdownIt from 'markdown-it'
import { headingFont } from './fonts'

const mdParser = new MarkdownIt()

mdParser.use((md: any) => {
  const defaultRender = md.renderer.rules.heading_open
  md.renderer.rules.heading_open = function (
    tokens: any,
    idx: number,
    options: any,
    env: any,
    self: any
  ) {
    tokens[idx].attrJoin('class', headingFont.className)
    if (defaultRender) {
      return defaultRender(tokens, idx, options, env, self)
    } else {
      return self.renderToken(tokens, idx, options)
    }
  }
})

export const parseMarkdownToHTML = (markdown: string) => {
  return mdParser.render(markdown)
}
