import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { GlobalProps } from '@utils/types'
import { SkipToMain } from '@components/utility/SkipToMain'

export const PageLayout = ({
  children,
  global,
}: {
  children: ReactNode
  global: GlobalProps
}) => {
  return (
    <main>
      <SkipToMain />
      <Header menu={global.navigation} title={global.siteTitle} />
      <div id="bodyContent" tabIndex={-1}>
        {children}
      </div>
      <Footer />
    </main>
  )
}
