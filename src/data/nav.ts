export type NavLink = {
  label: string
  href: string
}

// "projects" is intentionally left out until that section is built.
export const NAV_LINKS: NavLink[] = [
  { label: 'experience', href: '#experience' },
  { label: 'stack', href: '#stack' },
  { label: 'contact', href: '#contact' },
]
