import { ReactNode } from 'react'
import { Header, Footer } from '@components/global'
import { GlobalProps } from '@utils/types'
import { SkipToMain } from '@components/utility'

export const PageLayout = ({
  children,
  global,
  pageClasses,
}: {
  pageClasses?: string
  children: ReactNode
  global: GlobalProps
}) => {
  return (
    <main className={pageClasses}>
      <SkipToMain />
      <Header menu={global.navigation} title={global.siteTitle} />
      <div id="bodyContent" tabIndex={-1}>
        {children}
      </div>

      <Footer title={global.siteTitle} copy={global.footerCopy} />
    </main>
  )
}
