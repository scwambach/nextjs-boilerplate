// Mock for next-sanity package
import React from 'react'

const PortableText = ({ value }) => {
  return React.createElement(
    'div',
    { 'data-testid': 'portable-text' },
    JSON.stringify(value)
  )
}

export {
  PortableText,
}

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
