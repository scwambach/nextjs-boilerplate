'use client'
import data from '@data/global.json'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="container">
      <p>
        &copy; {year} {data.siteTitle}
      </p>
    </footer>
  )
}
