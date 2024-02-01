import React from 'react'
import { render } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar component', () => {
  it('renders correctly without image', () => {
    const { getByTestId } = render(
      <Avatar firstName="John" lastName="Doe" testId="avatar" />
    )
    const avatarElement = getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement).toHaveTextContent('JD')
    expect(avatarElement).toHaveStyle('height: 5rem')
    expect(avatarElement).toHaveStyle('width: 5rem')
    expect(avatarElement.querySelector('span')).toBeInTheDocument()
  })

  it('renders correctly with image', () => {
    const imageObjectProps = {
      query: 'nature',
      alt: 'John Doe',
      isBackground: true,
    }
    const { getByTestId } = render(
      <Avatar
        firstName="John"
        lastName="Doe"
        image={imageObjectProps}
        testId="avatar"
      />
    )
    const avatarElement = getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement).not.toHaveTextContent('JD')
    expect(avatarElement).toHaveStyle('height: 5rem')
    expect(avatarElement).toHaveStyle('width: 5rem')
    expect(avatarElement.querySelector('span')).not.toBeInTheDocument()
    expect(avatarElement.querySelector('img')).toBeInTheDocument()
  })

  it('renders correctly with custom size', () => {
    const { getByTestId } = render(
      <Avatar firstName="John" lastName="Doe" size={10} testId="avatar" />
    )
    const avatarElement = getByTestId('avatar')
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement).toHaveTextContent('JD')
    expect(avatarElement).toHaveStyle('height: 10rem')
    expect(avatarElement).toHaveStyle('width: 10rem')
  })
})
