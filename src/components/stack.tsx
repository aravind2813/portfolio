import { STACK } from '../data/stack'
import { Section } from './base-components/section'

export const Stack = () => {
  return (
    <Section id="stack" title="stack">
      <dl>
        {Object.entries(STACK).map(([category, tools]) => (
          <div
            key={category}
            className="border-line-subtle grid items-baseline gap-x-4 gap-y-1 border-b py-3.5 sm:grid-cols-[8.75rem_1fr]"
          >
            <dt className="text-dim text-micro font-mono">{category}</dt>
            <dd className="text-tool text-ink-soft">{tools}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
