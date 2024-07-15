import { ImageObject } from '../modules'
import { Box, Flex } from '../utility'
import { LogoRowProps } from '../../utils/types'

// TODO: Create LogoRow tests and stories

export const LogoRow = ({
  className,
  componentId,
  items,
  testId,
}: LogoRowProps) => {
  return (
    <Box
      componentId={componentId}
      testId={testId}
      className={`logoRow${className ? ` ${className}` : ''}`}
      elementTag="section"
    >
      <Flex justifyContent="center" alignItems="center" gap="xl">
        {items.map((item) => {
          return (
            <Box key={item.title}>
              <ImageObject {...item.image} alt={item.title} />
              <Box className="srOnly">{item.title}</Box>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
