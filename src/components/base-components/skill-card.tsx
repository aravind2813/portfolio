import type { Skill } from '../../data/sagent-experience'

const LABEL_TONE: Record<Skill['type'], string> = {
  frontend: 'text-info',
  backend: 'text-accent',
}

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="border-line bg-surface rounded-card border p-6">
      <div className="text-micro flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono">
        <span className={LABEL_TONE[skill.type]}>{skill.type}</span>
        <span className="text-dim">{skill.coreSkills.join(' · ')}</span>
      </div>

      <p className="text-card text-body mt-4">{skill.majorUseCase}</p>
    </div>
  )
}
