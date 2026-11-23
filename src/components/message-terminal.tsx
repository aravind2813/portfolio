import { useLayoutEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { RESUME_URL } from '../data/self'
import { TerminalCard } from './base-components/terminal-card'

type Tone = 'muted' | 'accent' | 'info' | 'warn'
type Line = { id: number; text: string; tone: Tone }
type Mode = 'message' | 'email'

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string
const HONEYPOT_FIELD = 'website'
const MAX_LINES = 8
const INTRO = 'hi, leave a message and your email. i read everything.'

const TONE_CLASS: Record<Tone, string> = {
  muted: 'text-muted',
  accent: 'text-accent',
  info: 'text-info',
  warn: 'text-warn',
}

const looksLikeEmail = (value: string) => value.includes('@') && value.includes('.')

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = RESUME_URL
  link.download = ''
  link.click()
}

const TerminalHeader = () => (
  <div className="border-line text-label flex h-10 items-center justify-between border-b px-5 font-mono">
    <span className="text-muted">message ar4</span>
    <span className="text-dim">try: ping · help</span>
  </div>
)

export const MessageTerminal = () => {
  const nextId = useRef(1)
  const [lines, setLines] = useState<Line[]>([{ id: 0, text: INTRO, tone: 'muted' }])
  const [mode, setMode] = useState<Mode>('message')
  const [value, setValue] = useState('')
  const [pendingMessage, setPendingMessage] = useState('')
  const [sending, setSending] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useLayoutEffect(() => {
    const input = inputRef.current
    if (!input) return
    input.style.height = 'auto'
    input.style.height = `${input.scrollHeight}px`
  }, [value])

  const addLine = (text: string, tone: Tone = 'muted') =>
    setLines((previous) =>
      [
        ...previous.filter((line) => line.tone !== 'warn'),
        { id: nextId.current++, text, tone },
      ].slice(-MAX_LINES),
    )

  const handleEmail = async (email: string) => {
    if (!looksLikeEmail(email)) {
      addLine("400 · that doesn't look like an email, try again", 'warn')
      setValue(email)
      return
    }

    setSending(true)
    addLine('sending…')
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ message: pendingMessage, email }),
      })
      if (!response.ok) throw new Error(`status ${response.status}`)

      addLine("202 Accepted · message delivered. i'll reply to the address soon.", 'accent')
      setPendingMessage('')
      setMode('message')
    } catch {
      addLine("500 · couldn't send. try the email link instead", 'warn')
      setValue(email)
    } finally {
      setSending(false)
    }
  }

  const handleMessage = (message: string) => {
    switch (message.toLowerCase()) {
      case 'ping':
        addLine('200 OK · pong', 'accent')
        break
      case 'help':
        addLine('ping · resume · clear · or type any message')
        break
      case 'resume':
        addLine('→ opening resume.pdf', 'info')
        downloadResume()
        break
      case 'clear':
        setLines([])
        break
      default:
        addLine('got it. your email, so i can reply:')
        setPendingMessage(message)
        setMode('email')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const input = value.trim()
    if (!input || sending) return

    // Real visitors never see the honeypot field, so only bots fill it.
    if (new FormData(event.currentTarget).get(HONEYPOT_FIELD)) return

    setValue('')
    if (mode === 'email') void handleEmail(input)
    else handleMessage(input)
  }

  // Enter sends, Shift+Enter adds a new line.
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      event.currentTarget.form?.requestSubmit()
    }
  }

  const isEmailMode = mode === 'email'

  return (
    <TerminalCard header={<TerminalHeader />} bodyClassName="min-h-44">
      <div role="log" aria-live="polite" className="text-label space-y-1 wrap-break-word">
        {lines.map((line) => (
          <p key={line.id} className={TONE_CLASS[line.tone]}>
            {line.text}
          </p>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-3 flex items-start gap-3">
        <input
          type="text"
          name={HONEYPOT_FIELD}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <span className="text-accent text-label py-2">{isEmailMode ? 'email:' : '>'}</span>
        <textarea
          ref={inputRef}
          rows={1}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          aria-label={isEmailMode ? 'your email' : 'message'}
          placeholder={isEmailMode ? 'you@example.com' : 'type a message…'}
          autoComplete="off"
          className="text-label text-ink placeholder:text-dim min-w-0 flex-1 resize-none bg-transparent py-2 outline-none"
        />
        <button
          type="submit"
          disabled={sending}
          className="border-line-strong bg-surface-raised text-label text-ink rounded-button h-9 border px-4 disabled:opacity-50"
        >
          enter
        </button>
      </form>
    </TerminalCard>
  )
}
