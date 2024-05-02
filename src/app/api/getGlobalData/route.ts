import { NextResponse } from 'next/server'
import { client } from '@utils/client'

export async function GET() {
  const sanityGlobal = await client.fetch(`*[_type == "globalSettings"][0] {
    "siteTitle": title,
    "siteDescription": description,
    footerCopy,
    "favicon": favicon.asset->url,
    socials,
    "navigation": *[_type == "navigation" && title == "Main Navigation"][0].items[]
  }`)

  return NextResponse.json({
    status: 200,
    ...sanityGlobal,
  })
}
