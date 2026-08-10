// Mock for next-sanity package
import React from 'react'

const defaultBlockTags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  normal: 'p',
  blockquote: 'blockquote',
}

const PortableText = ({ value, components }) => {
  const blocks = Array.isArray(value) ? value : [value]

  return React.createElement(
    'div',
    { 'data-testid': 'portable-text' },
    blocks.map((block, index) => {
      if (block._type === 'image') {
        const ImageComponent = components?.types?.image
        return ImageComponent
          ? React.createElement(ImageComponent, {
              key: block._key ?? index,
              value: block,
            })
          : null
      }

      const text = (block.children || []).map((span) => span.text).join('')
      const children = (block.children || []).map((span) => span.text)

      const BlockComponent = components?.block?.[block.style]
      if (BlockComponent) {
        return React.createElement(BlockComponent, {
          key: block._key ?? index,
          children,
          value: block,
        })
      }

      const Tag = defaultBlockTags[block.style] || 'p'
      return React.createElement(Tag, { key: block._key ?? index }, text)
    })
  )
}

export { PortableText }

export default {
  createClient: jest.fn(() => ({
    fetch: jest.fn(),
    listen: jest.fn(),
  })),
  groq: (strings, ...values) => {
    return strings.reduce((acc, str, i) => {
      return acc + str + (values[i] || '')
    }, '')
  },
  defineQuery: jest.fn((query) => query),
  loadQuery: jest.fn(),
  sanityFetch: jest.fn(),
  defineLive: jest.fn(),
  PortableText,
}
