import { BreadcrumbsProps } from '@utils/types'
import { LinkObject } from '@components/modules'
import { IconSelector, Flex } from '@components/utility'

export const Breadcrumbs = ({
  className,
  componentId,
  crumbs,
  current,
  testId,
}: BreadcrumbsProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`breadcrumbs${className ? ` ${className}` : ''}`}
    >
      <nav>
        <Flex
          elementTag="ul"
          alignItems="center"
          gap="micro"
          noBreak
          className="unstyled"
        >
          <IconSelector icon="Compass" weight="bold" size={20} />
          {crumbs?.map((crumb) => (
            <Flex
              noBreak
              elementTag="li"
              gap="micro"
              alignItems="center"
              key={crumb.label}
            >
              <LinkObject href={crumb.href}>{crumb.label}</LinkObject>
              <IconSelector icon="CaretRight" weight="bold" />
            </Flex>
          ))}
          {current && (
            <li>
              <span>{current}</span>
            </li>
          )}
        </Flex>
      </nav>
    </div>
  )
}
