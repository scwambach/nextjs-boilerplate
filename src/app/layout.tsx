import '@styles/main.scss'
import { bodyFont } from '@utils/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={bodyFont.className}>
      <body>{children}</body>
    </html>
  )
}
