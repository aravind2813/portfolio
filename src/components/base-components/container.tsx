import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`max-w-page px-gutter-mobile sm:px-gutter mx-auto w-full ${className}`}>
    {children}
  </div>
)
