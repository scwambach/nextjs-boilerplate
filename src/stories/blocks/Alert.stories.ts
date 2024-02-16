import { Alert } from '@components/blocks/Alert'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
  title: 'Components/Blocks/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Warning: Story = {
  args: {
    alertId: 'warning',
    message: 'This is a warning message',
    type: 'warning',
  },
}

export const Error: Story = {
  args: {
    alertId: 'error',
    message: 'This is an error message',
    type: 'error',
  },
}

export const Success: Story = {
  args: {
    alertId: 'success',
    message: 'This is a success message',
    type: 'success',
  },
}

export const Info: Story = {
  args: {
    alertId: 'info',
    message: 'This is an info message',
    type: 'info',
  },
}
