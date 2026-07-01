import { Heading, IconSelector, Flex, Box } from '../../utility'
import { Tag } from '../Tag'
import { StatProps } from '../../../utils/types'
import { formatStatValue, getLimitedValue, hasExceededMaxValue } from './logic'
import './styles.scss'

export const Stat = ({
  boxRadius,
  className,
  componentId,
  decimals,
  icon,
  maxValue,
  numberPrefix,
  numberSuffix,
  subtitle,
  tags,
  testId,
  theme = 'primary',
  title,
  type,
  value,
}: StatProps) => {
  const limitedValue = getLimitedValue(value, maxValue)
  const exceededMax = hasExceededMaxValue(value, maxValue)

  return (
    <Box
      componentId={componentId}
      shadow={2}
      className={`stat ${theme}${className ? ` ${className}` : ''}`}
      testId={testId}
      radius={boxRadius}
    >
      <Flex columnBreak="xxs" gap="xs">
        {icon && (
          <div className="icon" aria-hidden="true">
            <IconSelector icon={icon} size={32} />
          </div>
        )}
        <Flex direction="column" gap="xxs">
          <Heading nonHeadingElement="p" level={6} className="title">
            {title}
          </Heading>

          <div>
            <p className="value">
              {numberPrefix && <span className="prefix">{numberPrefix}</span>}
              <span className="main">
                {`${formatStatValue(limitedValue, type, decimals)}`}
                {exceededMax && <span>{'+'}</span>}
              </span>
              {numberSuffix && <span className="suffix">{numberSuffix}</span>}
            </p>

            {subtitle && <p>{subtitle}</p>}
          </div>

          {tags && tags.length > 0 && (
            <Flex columnBreak="none" className="tags" gap="micro">
              {tags.map((tag) => (
                <Tag theme={theme} key={tag} label={tag} />
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
