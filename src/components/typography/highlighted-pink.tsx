import React from 'react'

export type HighlightedProps = {
  children: React.ReactNode
}

export function HighlightedPink({children}: HighlightedProps) {
  return (
    <span className={`bg-tpink text-black  rounded-tr-xs `}>{children}</span>
  )
}
