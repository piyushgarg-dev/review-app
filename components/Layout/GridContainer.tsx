import { cn } from '@/lib/utils'

type GridContainerProps = {
  children: React.ReactNode
  className?: string
}

export const GridContainer = ({ children, className }: GridContainerProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  )
}
