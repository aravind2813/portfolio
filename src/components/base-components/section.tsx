import { type ReactNode } from 'react'
import { Container } from './container'

type SectionProps = {
  id: string
  title: string
  info?: string
  compact?: boolean
  children: ReactNode
}

export const Section = ({ id, title, info, compact = false, children }: SectionProps) => {
  return (
    <section id={id} className={`${compact ? 'pb-section-end' : 'pb-section'} scroll-mt-16`}>
      <Container>
        <div className="border-line flex items-baseline justify-between border-b pb-3">
          <h2 className="text-muted text-label font-mono">{title}</h2>
          {info && <span className="text-accent text-label font-mono">{info}</span>}
        </div>
        <div className="mt-2">{children}</div>
      </Container>
    </section>
  )
}
