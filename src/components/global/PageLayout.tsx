import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { GlobalProps } from '@utils/types'

export const PageLayout = ({
  children,
  global,
}: {
  children: ReactNode
  global: GlobalProps
}) => {
  return (
    <main>
      <Header menu={global.navigation} title={global.siteTitle} />
      {children}
      <Footer />
    </main>
  )
}
