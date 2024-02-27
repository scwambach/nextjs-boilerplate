import { ContainerProps } from '@utils/types'

export const Container = ({
  className,
  testId,
  children,
  padded,
  containerClass,
}: ContainerProps) => {
  return (
    <div
      data-testid={testId}
      className={`container${padded ? ` padded` : ''}${
        containerClass ? ` ${containerClass}` : ''
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
