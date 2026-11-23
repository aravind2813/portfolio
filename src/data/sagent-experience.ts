export const DARA_DESCRIPTION =
  "Dara is Sagent's cloud-based mortgage servicing platform, used by lenders and banks to run the full life of a loan. I joined as an intern and grew into owning features end to end: UI, APIs, event processing and production rollout."

export const SAGENT_PERIOD = 'jan 2024 — present · chennai'

export const SAGENT_EXPERIENCE = [
  {
    role: 'software development engineer entry',
    period: 'apr 2025 — now',
    current: true,
  },
  {
    role: 'software engineer trainee',
    period: 'jul 2024 — mar 2025',
  },
  {
    role: 'software engineer intern',
    period: 'jan — jun 2024',
  },
]

export type Skill = {
  type: 'frontend' | 'backend'
  coreSkills: string[]
  majorUseCase: string
}

export const SAGENT_SKILLS: Skill[] = [
  {
    type: 'frontend',
    coreSkills: ['react', 'typescript', 'ably'],
    majorUseCase:
      'Built a reusable framework that blocks user actions based on a loan’s “stop” state, configurable across buttons, dropdowns and custom components. Integrated Ably so screens update instantly when Kafka-driven data changes, with no manual reloads.',
  },
  {
    type: 'backend',
    coreSkills: ['spring boot', 'java', 'kafka', 'graphql'],
    majorUseCase:
      'Designed an event-driven alerting system: 2 microservices and a rule engine processing 100+ event types into real-time alerts. Also built REST and GraphQL APIs (Node.js, Apollo) on top of Spring Boot services.',
  },
]

export const SAGENT_KEY_ACHIEVEMENTS = [
  'Spot Award, June 2026: designed an AI-assisted command framework that standardised feature work across React and Spring Boot, delivering 13 features in one sprint.',
  'Removed a class of India–US date bugs by moving ~60–70% of the app to timezone-aware handling in ~2 weeks, using a script that detected and fixed usages automatically.',
  'Wrote Dockerfiles, multi-environment Helm values and Azure Pipelines CI/CD for containerised GKE deployments.',
  'Mentored 2 interns who shipped to production, ran React knowledge sessions, and conducted 10+ hiring interviews.',
]
