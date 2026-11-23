import { RESUME_URL, SELF_INTRODUCTION_PITCH } from '../data/self'
import { TERMINAL_DATA } from '../data/terminal'
import { TerminalCard } from './base-components/terminal-card'
import { Container } from './base-components/container'
import { Stars } from './stars'

type TerminalKey = keyof typeof TERMINAL_DATA

const VALUE_TONE: Record<TerminalKey, string> = {
  whoami: 'text-ink',
  role: 'text-ink',
  at: 'text-info',
  stack: 'text-body',
  experience: 'text-body',
  location: 'text-body',
  status: 'text-accent',
}

const terminalLines = Object.entries(TERMINAL_DATA) as [TerminalKey, string][]

const FIRST_LINE_DELAY_S = 0.3
const LINE_STEP_S = 0.35

const lineDelay = (index: number) => ({
  animationDelay: `${FIRST_LINE_DELAY_S + index * LINE_STEP_S}s`,
})

export const Hero = () => {
  return (
    <section
      id="top"
      className="pt-hero-top-mobile pb-hero-bottom-mobile sm:pt-hero-top sm:pb-hero-bottom relative overflow-hidden"
    >
      <Stars />
      <Container className="relative grid items-center gap-12 sm:grid-cols-2">
        <div>
          <p className="text-accent text-label font-mono">
            full stack software engineer · chennai, india
          </p>

          <h1 className="text-hero text-ink max-w-hero-title mt-6 font-semibold tracking-tight">
            From the screen to the stream.
          </h1>

          <p className="text-lead text-body max-w-measure mt-6">{SELF_INTRODUCTION_PITCH}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              download
              className="bg-ink text-canvas h-control rounded-button text-tool flex items-center px-5 font-medium"
            >
              Download resume
            </a>
            <a
              href="#experience"
              className="border-line-strong text-ink h-control rounded-button text-tool flex items-center border px-5 font-medium"
            >
              See my work
            </a>
          </div>
        </div>

        <TerminalCard
          header={
            <div className="border-line flex h-14 items-center gap-2.5 border-b px-5">
              {Array.from({ length: 3 }, (_, i) => (
                <span key={i} className="bg-line-strong size-2.5 rounded-full" />
              ))}
              <span className="text-dim text-label ml-2 font-mono">~/ar4</span>
            </div>
          }
        >
          {terminalLines.map(([key, value], i) => (
            <div
              key={key}
              style={lineDelay(i)}
              className="animate-log-in text-label grid grid-cols-[6rem_1fr] gap-x-4 py-1 whitespace-nowrap"
            >
              <span className="text-dim">{key}</span>
              <span className={VALUE_TONE[key]}>{value}</span>
            </div>
          ))}
          <div
            style={lineDelay(terminalLines.length)}
            className="animate-log-in text-label mt-3 flex items-center gap-2"
          >
            <span className="text-accent">$</span>
            <span className="bg-accent animate-blink h-4 w-2" />
          </div>
        </TerminalCard>
      </Container>
    </section>
  )
}
