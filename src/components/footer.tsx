import { Container } from './base-components/container'

export const Footer = () => {
  return (
    <footer>
      <Container className="text-dim text-micro flex flex-wrap justify-between gap-x-6 gap-y-2 pb-10 font-mono">
        <span>© 2026 Aravind M</span>
        <span>built with react · tailwind</span>
      </Container>
    </footer>
  )
}
