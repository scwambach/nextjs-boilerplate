'use client'
import { Box, Container, Markdown } from '@wambach-dev/react-library'

export const Footer = ({ copy, title }: { copy?: string; title: string }) => {
  const year = new Date().getFullYear()
  return (
    <Box elementTag="footer" className="wdrlscw-footer">
      <Container>
        <p>
          &copy; {year} {title}
        </p>
        {copy && <Markdown>{copy}</Markdown>}
      </Container>
    </Box>
  )
}
