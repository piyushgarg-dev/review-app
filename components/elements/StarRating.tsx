import { cn } from '@/lib/utils'
import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

interface StarRatingProps {
  value: number
  onClick?: (index: number) => void
}

const StarRating: React.FC<StarRatingProps> = (props) => {
  const { value, onClick } = props

  return (
    <div className="star-rating flex items-center">
      {[...Array(value)].map((_, index) => (
        <StarFilledIcon
          key={index}
          onClick={() => (onClick ? onClick(index) : null)}
          className={cn(
            'offset_ring h-7 w-7 cursor-pointer rounded-md outline-none',
            {
              'text-yellow-400': index < value,
              'bg-transparent text-gray-400': !(index < value),
            }
          )}
        />
      ))}
    </div>
  )
}

export default StarRating
