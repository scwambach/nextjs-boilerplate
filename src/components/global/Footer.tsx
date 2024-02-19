'use client'
import { Markdown } from '@components/utility/Markdown'
import data from '@data/global.json'

export const Footer = ({ copy }: { copy?: string }) => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {year} {data.siteTitle}
        </p>
        {copy && <Markdown>{copy}</Markdown>}
      </div>
    </footer>
  )
}
