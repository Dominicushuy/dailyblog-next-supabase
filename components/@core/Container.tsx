import clsx from 'clsx'
import { ReactNode } from 'react'

export default function Container({ children, className = '', ...props }: { children: ReactNode, className?: string }) {
  return (
    <main
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 space-y-10 lg:px-8 lg:py-10', className)}
      {...props}>
      {children}
    </main>
  )
}
