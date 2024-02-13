import { ComponentProps } from '@utils/types'

interface SpacerProps extends ComponentProps {
  size: number
  divide?: boolean
}

export const Spacer = ({ className, size, divide }: SpacerProps) => {
  return (
    <div
      className={`spacer${className ? ` ${className}` : ''}`}
      style={{
        padding: `${size}rem 0 ${size}rem 0`,
      }}
    >
      {divide && <hr />}
    </div>
  )
}
