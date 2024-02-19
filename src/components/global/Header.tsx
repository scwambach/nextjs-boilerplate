import { Button, Dropdown } from '@components/modules'
import { Flex } from '@components/utility'
import { Heading } from '@components/utility/Heading'
import { ButtonTypes, GlobalProps } from '@utils/types'

export const Header = ({
  menu,
  title,
}: {
  menu: GlobalProps['navigation']
  title: GlobalProps['siteTitle']
}) => {
  return (
    <header>
      <div className="container">
        <Flex elementTag="nav" justifyContent="space-between">
          <Heading level={1} nonHeadingElement="p">
            {title}
          </Heading>
          <Flex elementTag="ul" className="unstyled">
            {menu.map((item) => (
              <li key={item.href}>
                {item.subnav ? (
                  <Dropdown
                    unstyled
                    href={item.href}
                    label={item.label}
                    items={item.subnav}
                  />
                ) : item.href ? (
                  <Button
                    unstyled
                    type={item.type as ButtonTypes}
                    href={item.href}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </Flex>
        </Flex>
      </div>
    </header>
  )
}
