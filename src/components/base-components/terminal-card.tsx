import type { ReactNode } from 'react'

type TerminalCardProps = {
  header: ReactNode
  children: ReactNode
  bodyClassName?: string
}

export const TerminalCard = ({ header, children, bodyClassName = '' }: TerminalCardProps) => {
  return (
    <div className="border-line bg-surface rounded-card min-w-0 overflow-hidden border">
      {header}
      <div className={`overflow-x-auto p-5 font-mono ${bodyClassName}`}>{children}</div>
    </div>
  )
}
