import { EDUCATION } from '../data/stack'
import { Section } from './base-components/section'

export const Education = () => {
  return (
    <Section id="education" title="education">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pt-3">
        <div>
          <h3 className="text-project text-ink font-medium">{EDUCATION.degree}</h3>
          <p className="text-card text-muted">{EDUCATION.institution}</p>
        </div>
        <p className="text-dim text-label flex gap-x-5 font-mono">
          <span>{EDUCATION.year}</span>
          <span>cgpa {EDUCATION.cgpa}</span>
        </p>
      </div>
    </Section>
  )
}
