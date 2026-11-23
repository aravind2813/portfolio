import { Download, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS } from '../data/nav'
import { RESUME_URL, USER_NAME } from '../data/self'
import { Container } from './base-components/container'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-line bg-canvas/90 sticky top-0 z-50 border-b backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="text-ink font-mono text-base font-medium">
          {USER_NAME}
          <span className="text-accent">_</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-6">
          <nav aria-label="Primary" className="flex items-center gap-6 max-sm:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-accent text-label py-3 font-mono transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={RESUME_URL}
            download
            className="border-accent-line bg-accent-subtle text-accent h-control rounded-button text-label flex items-center gap-2 border px-4 font-mono"
          >
            <Download size={14} aria-hidden="true" />
            resume.pdf
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="border-line-strong text-ink size-control rounded-button flex items-center justify-center border sm:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-line bg-canvas absolute inset-x-0 top-full border-b sm:hidden"
        >
          <Container className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-accent text-mono py-3 font-mono transition-colors"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
