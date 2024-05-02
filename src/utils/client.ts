import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2022-04-10',
  perspective: 'published',
  ignoreBrowserTokenWarning: false,
})

export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-04-10',
  useCdn: false,
  perspective: 'previewDrafts',
  token: process.env.SANITY_API_READ_TOKEN,
  ignoreBrowserTokenWarning: true,
})
