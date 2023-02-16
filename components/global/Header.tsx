import Image from 'next/image'

const Header = () => {
  return (
    <header className="description">
      <p>
        Get started by editing&nbsp;
        <code className="code">pages/index.tsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="vercelLogo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </header>
  )
}

export { Header }
