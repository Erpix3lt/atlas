import React from 'react'

export type VerticalLayoutProps = {
  children: React.ReactNode
  className?: string
}

export function ThreeColumnsLeft({ children, className = '' }: VerticalLayoutProps) {
  return (
    <div
      className={`grid grid-cols-[25%_40%_15%] gap-[10%] break-before-page ${className}`}
    >
      {children}
    </div>
  )
}