import 'styles/main.scss'
import { getServerSession } from 'next-auth'
import SessionProvider from '@components/global/SessionProvider'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang="en" className="theme-override">
      <body>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
