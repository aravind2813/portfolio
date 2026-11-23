import type { CSSProperties } from 'react'

const STAR_COUNT = 70

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min)

const STARS: CSSProperties[] = Array.from({ length: STAR_COUNT }, () => {
  const size = randomBetween(1, 2)

  return {
    top: `${randomBetween(0, 100)}%`,
    left: `${randomBetween(0, 100)}%`,
    width: size,
    height: size,
    animationDuration: `${randomBetween(3, 7)}s`,
    animationDelay: `${randomBetween(0, 4)}s`,
  }
})

export const Stars = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
    {STARS.map((style, i) => (
      <span
        key={i}
        className="animate-twinkle bg-ink absolute rounded-full opacity-50"
        style={style}
      />
    ))}
  </div>
)
