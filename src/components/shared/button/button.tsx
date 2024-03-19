import React, { forwardRef } from 'react'

import { cn } from '@/utils'

interface Props extends React.ComponentProps<'button'> {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { children, size = 'medium', className, ...rest }: Props,
  ref
) {
  const sizeClassNames = {
    small: 'text-xs px-2 py-1',
    medium: 'text-sm px-5 py-3',
    large: 'text-base px-8 py-4'
  }

  return (
    <button
      className={cn(
        'bg-white text-black rounded-full hover:bg-[rgba(255,255,255,0.8)] transition-colors',
        sizeClassNames[size],
        className
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  )
})

export default Button
