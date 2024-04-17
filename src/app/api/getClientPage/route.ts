import { client } from '@utils/client'
import { NextResponse } from 'next/server'
import { PAGE_QUERY } from 'queries/page'

export async function GET(req: Request) {
  const slug = req.url.split('?slug=').pop()

  const data = await client.fetch(PAGE_QUERY, { slug })

  return NextResponse.json({
    status: 200,
    ...data,
  })
}
