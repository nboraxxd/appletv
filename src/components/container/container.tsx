import { cn } from '@/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Props) {
  return <div className={cn('mx-auto max-w-[1024px] pl-6 pr-6', className)}>{children}</div>
}
