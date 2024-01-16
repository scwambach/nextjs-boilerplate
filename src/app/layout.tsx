import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import '@styles/main.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  )
}
