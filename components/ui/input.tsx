import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  Eye,
  EyeOff
} from 'lucide-react'
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [passwordVisibility, setPasswordVisibility] = React.useState(false)
    return (
      type != "password" ?
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        /> :
        <div className='flex rounded-md border bg-background ring-offset-background transition-all focus-within:ring-2 focus-within:ring-ring focus-visible:ring-offset-2'>
          <input
            type={passwordVisibility ? "text" : "password"}
            className={cn(
              'flex h-10 w-full rounded-md bg-background px-3 py-2 text-smfile:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
              className
            )}
            ref={ref}
            {...props}
          />
          <div className='flex items-center mx-2 cursor-pointer' onClick={() => { setPasswordVisibility(!passwordVisibility) }}>
            {passwordVisibility ? 
            <Eye width={25} height={25} /> 
            : 
            <EyeOff width={25} height={25} />}
            </div>
        </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
