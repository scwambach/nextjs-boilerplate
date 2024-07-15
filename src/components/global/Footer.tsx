'use client'

import { Box, Container, Markdown } from '@components/utility'

export const Footer = ({ copy, title }: { copy?: string; title: string }) => {
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
