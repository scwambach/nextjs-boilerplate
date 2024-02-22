import { SpacerProps } from '@utils/types'

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
