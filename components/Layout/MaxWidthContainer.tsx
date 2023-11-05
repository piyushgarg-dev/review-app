/**
 * MaxWidthContainer - A container that has a max width of 1120px inorder to keep the almost all the container as of the same width
 */

import { cn } from '@/lib/utils'

type MaxWidthContainerProps = {
  children: React.ReactNode
  className?: string
}

export const MaxWidthContainer = ({
  children,
  className,
}: MaxWidthContainerProps) => {
  return (
    <div
      className={cn('mx-auto w-[100%] max-w-[1280px] px-5 md:px-10', className)}
    >
      {children}
    </div>
  )
}
