import Image from 'next/image'

import { Layout } from '@components/wrappers/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="center">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className="thirteen">
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
    </Layout>
  )
}
