'use client'
import { Markdown } from '@wambach-dev/react-library'

export const Footer = ({ copy, title }: { copy?: string; title: string }) => {
  const year = new Date().getFullYear()
  return (
    <footer className="wdrlscw-footer">
      <div className="container">
        <p>
          &copy; {year} {title}
        </p>
        {copy && <Markdown>{copy}</Markdown>}
      </div>
    </footer>
  )
}
