import React from 'react'

export type VerticalLayoutProps = {
  children: React.ReactNode
  className?: string
}

export function ThreeColumnsRight({ children, className = '' }: VerticalLayoutProps) {
  return (
    <div
      className={`grid grid-cols-[15%_40%_25%] gap-[10%] ${className}`}
    >
      {children}
    </div>
  )
}