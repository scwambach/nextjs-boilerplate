import { parseMarkdownToHTML } from './parseMarkdownToHTML'

describe('parseMarkdownToHTML', () => {
  it('correctly converts basic Markdown to HTML', () => {
    const markdown = 'This is *italic* and **bold**.'
    const expectedHTML =
      '<p>This is <em>italic</em> and <strong>bold</strong>.</p>\n'
    expect(parseMarkdownToHTML(markdown)).toBe(expectedHTML)
  })

  it('correctly handles Markdown with inline formatting', () => {
    const markdown = '*Emphasis*, **strong**, `code`'
    const expectedHTML =
      '<p><em>Emphasis</em>, <strong>strong</strong>, <code>code</code></p>\n'
    expect(parseMarkdownToHTML(markdown)).toBe(expectedHTML)
  })

  it('correctly handles Markdown with block elements', () => {
    const markdown = '# Heading 1\n\n- Item 1\n- Item 2'
    const expectedHTML =
      '<h1 class="heading" id="heading-1">Heading 1</h1>\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n</ul>\n'
    expect(parseMarkdownToHTML(markdown)).toBe(expectedHTML)
  })

  it('returns empty string if input is empty', () => {
    const markdown = ''
    expect(parseMarkdownToHTML(markdown)).toBe('')
  })

  it('returns input string unchanged if it contains only whitespace', () => {
    const markdown = '   '
    expect(parseMarkdownToHTML(markdown)).toBe('')
  })

  it('correctly handles Markdown with images', () => {
    const markdown = '![Alt text](https://example.com/image.jpg)'
    const result = parseMarkdownToHTML(markdown)
    expect(result).toContain('<div class="articleImage">')
    expect(result).toContain('<img src="https://example.com/image.jpg"')
    expect(result).toContain('title="Alt text"')
    expect(result).toContain('alt="Alt text"')
    expect(result).toContain('<div class="imageTitle">Alt text</div>')
  })

  it('correctly handles images without alt text', () => {
    const markdown = '![](https://example.com/image.jpg)'
    const result = parseMarkdownToHTML(markdown)
    expect(result).toContain('<div class="articleImage">')
    expect(result).toContain('<img src="https://example.com/image.jpg"')
    expect(result).not.toContain('<div class="imageTitle">')
  })

  it('correctly handles images without src', () => {
    const markdown = '![Alt text]()'
    const result = parseMarkdownToHTML(markdown)
    expect(result).toContain('<div class="articleImage">')
    expect(result).toContain('src=""')
    expect(result).toContain('alt="Alt text"')
  })
})
