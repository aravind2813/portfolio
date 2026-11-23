import { CONTACT_LINKS, CONTACT_PITCH, RESUME_URL } from '../data/self'
import { Section } from './base-components/section'
import { MessageTerminal } from './message-terminal'

const LINK_CLASS = 'text-ink hover:text-accent underline underline-offset-4 transition-colors'

export const Contact = () => {
  return (
    <Section id="contact" title="contact" compact>
      <div className="grid items-start gap-10 pt-5 sm:grid-cols-2">
        <div>
          <h3 className="text-headline text-ink font-semibold tracking-tight">{CONTACT_PITCH}</h3>
          <p className="text-card text-muted mt-5">
            Send a message from the terminal, or reach me directly.
          </p>
          <div className="text-label mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono">
            <a href={CONTACT_LINKS.email} className={LINK_CLASS}>
              aravind.tech18@gmail.com
            </a>
            <a href={CONTACT_LINKS.github} target="_blank" rel="noreferrer" className={LINK_CLASS}>
              github
            </a>
            <a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className={LINK_CLASS}
            >
              linkedin
            </a>
            <a href={RESUME_URL} download className="text-accent underline underline-offset-4">
              resume.pdf ↓
            </a>
          </div>
        </div>

        <MessageTerminal />
      </div>
    </Section>
  )
}
