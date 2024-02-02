import { BreadcrumbsProps } from '@utils/types'
import { LinkObject } from './LinkObject'
import { IconSelector } from '@components/utility/IconSelector'
import { Flex } from '@components/utility'

export const Breadcrumbs = ({
  crumbs,
  current,
  testId,
  className,
}: BreadcrumbsProps) => {
  return (
    <div
      data-testid={testId}
      className={`breadcrumbs${className ? ` ${className}` : ''}`}
    >
      <nav>
        <Flex
          elementTag="ul"
          alignItems="center"
          gap={0.5}
          noBreak
          className="unstyled"
        >
          <IconSelector icon="Compass" weight="bold" size={20} />
          {crumbs.map((crumb) => (
            <Flex
              noBreak
              elementTag="li"
              gap={0.5}
              alignItems="center"
              key={crumb.label}
            >
              <LinkObject href={crumb.href}>{crumb.label}</LinkObject>
              <IconSelector icon="CaretRight" weight="bold" />
            </Flex>
          ))}
          <li>
            <span>{current}</span>
          </li>
        </Flex>
      </nav>
    </div>
  )
}
