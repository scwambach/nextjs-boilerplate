'use client'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="container">
      <p>&copy; {year} My Website</p>
    </footer>
  )
}
