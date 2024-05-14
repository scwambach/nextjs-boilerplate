import { ReactNode } from 'react'
import { Header, Footer } from '@components/global'
import { SkipToMain } from '@wambach-dev/react-library'
import { GlobalProps } from '@wambach-dev/react-library/src/utils/types'

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
