'use client'

import { Box, Container, Markdown } from '@components/utility'
import './styles.scss'

export interface FooterProps {
  copy?: string
  title: string
}

export const Footer = ({ copy, title }: FooterProps) => {
  const year = new Date().getFullYear()
  return (
    <Box elementTag="footer" className="footer">
      <Container>
        <p>
          &copy; {year} {title}
        </p>
        {copy && <Markdown>{copy}</Markdown>}
      </Container>
    </Box>
  )
}
