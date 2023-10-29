import StarRating from '@/components/elements/StarRating'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FormResponse } from '@/gql/graphql'
import { formatToLocalDateTime } from '@/utils/time'
import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export const columns: ColumnDef<FormResponse>[] = [
  {
    accessorKey: 'name',
    header: 'Person',
    cell({ row }) {
      const { name, imageURL, email } = row.original
      return (
        <div className="flex items-center space-x-4">
          <Avatar>
            {imageURL && <AvatarImage src={imageURL} />}
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4>{name}</h4>
            <h4>{email}</h4>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'testimonial',
    header: 'Testimonial',
    cell({ row }) {
      const { testimonial, rating = 0 } = row.original
      return (
        <div className="flex flex-col space-y-2">
          <StarRating value={rating as number} />
          <p>{testimonial}</p>
        </div>
      )
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell({ row }) {
      const { createdAt } = row.original
      if (!createdAt) return null

      const dateToLocalFormat = formatToLocalDateTime(createdAt, 'PP')
      return (
        <div className="flex flex-col space-y-2">
          <p>{dateToLocalFormat}</p>
        </div>
      )
    },
  },
  {
    accessorKey: 'approved',
    header: 'Status',
    cell({ row }) {
      const { approved } = row.original

      return (
        <div className="flex flex-col space-y-2">
          <Badge
            variant={'default'}
            className={cn({
              'bg-green-500': approved,
              'bg-yellow-500': !approved,
            })}
          >
            {approved ? 'Approved' : 'Pending'}
          </Badge>
        </div>
      )
    },
  },
]
