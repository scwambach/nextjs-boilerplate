import '@styles/main.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-white min-h-screen">{children}</main>
      </body>
    </html>
  )
}
