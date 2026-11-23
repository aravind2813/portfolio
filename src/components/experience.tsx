import { Check } from 'lucide-react'
import {
  DARA_DESCRIPTION,
  SAGENT_EXPERIENCE,
  SAGENT_KEY_ACHIEVEMENTS,
  SAGENT_PERIOD,
  SAGENT_SKILLS,
} from '../data/sagent-experience'
import { Section } from './base-components/section'
import { SkillCard } from './base-components/skill-card'

export const Experience = () => {
  return (
    <Section id="experience" title="experience" info="● current">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-6">
        <div>
          <h3 className="text-title text-ink font-semibold">Sagent</h3>
          <p className="text-body text-card mt-1">Software Development Engineer · Dara</p>
        </div>
        <p className="text-dim text-label font-mono">{SAGENT_PERIOD}</p>
      </div>

      <p className="text-lead text-ink-soft max-w-measure mt-6">{DARA_DESCRIPTION}</p>

      <ul className="text-body text-label before:bg-line relative mt-6 space-y-3 font-mono before:absolute before:top-[10px] before:bottom-[10px] before:left-1 before:w-px">
        {SAGENT_EXPERIENCE.map((experience) => (
          <li key={experience.role} className="relative flex flex-wrap items-center gap-x-3">
            <span
              className={`size-2 rounded-full ${experience.current ? 'bg-accent' : 'bg-line-strong'}`}
            />
            <span>{experience.role}</span>
            <span className="text-dim">{experience.period}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {SAGENT_SKILLS.map((skill) => (
          <SkillCard key={skill.type} skill={skill} />
        ))}
      </div>

      <ul className="divide-line-subtle mt-8 divide-y">
        {SAGENT_KEY_ACHIEVEMENTS.map((achievement) => (
          <li key={achievement} className="text-card text-body flex gap-3 py-4">
            <Check size={16} aria-hidden="true" className="text-accent mt-1 shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
