import 'styles/main.scss'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="theme-override">
      <body>{children}</body>
    </html>
  )
}
