import { LinkObject } from '@components/modules/LinkObject'
import data from '@data/global.json'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="grid">
          <nav>
            <ul>
              <li>
                <strong>{data.siteTitle}</strong>
              </li>
            </ul>
            <ul>
              {data.navigation.map((item) => (
                <li key={item.url}>
                  <LinkObject url={item.url}>{item.title}</LinkObject>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
