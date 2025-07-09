import React from 'react'

export type HighlightedProps = {
  children: React.ReactNode
}

export function HighlightedBlack({children}: HighlightedProps) {
  return (
    <span className={`bg-black text-white rounded-tr-xs`}>{children}</span>
  )
}
