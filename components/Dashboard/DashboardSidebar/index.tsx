import {
  ChevronDown,
  HeartIcon,
  Import,
  Inbox,
  Search,
  TagIcon,
  UserCircle2,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useCurrentUser } from '@/hooks/query/user'
import { cn } from '@/lib/utils'
import { Fragment } from 'react'

const routes = [
  {
    name: 'COLLECT',
    links: [
      {
        label: 'Forms',
        icon: Inbox,
        href: 'forms',
      },
      {
        label: 'Import Testimonials',
        icon: Import,
        href: 'import',
      },
      {
        label: 'Contacts',
        icon: UserCircle2,
        href: 'contacts',
      },
    ],
  },
  {
    name: 'MANAGE',
    links: [
      {
        label: 'Testimonials',
        icon: HeartIcon,
        href: 'testimonials',
      },

      {
        label: 'Search',
        icon: Search,
        href: 'search',
      },
      {
        label: 'Tags',
        icon: TagIcon,
        href: 'tags',
      },
      {
        label: 'Teams',
        icon: Users,
        href: 'teams',
      },
    ],
  },
]

const DashboardSidebar: React.FC = () => {
  const pathname = usePathname()
  const { user } = useCurrentUser()

  return (
    <div className="flex h-full flex-col space-y-4 overflow-y-auto border-r pb-4">
      <aside className="flex-1">
        <DropdownMenu>
          <div className="cursor-pointer border-b px-5 py-3">
            <DropdownMenuTrigger asChild>
              <div
                tabIndex={0}
                className="offset_ring flex w-fit items-center gap-3 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  {user?.profileImageURL ? (
                    <div className="relative h-10 w-10 rounded-full">
                      <Image
                        src={user?.profileImageURL}
                        alt=""
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <p className="relative flex h-10 w-10 items-center justify-center rounded-full bg-violet-700 font-semibold text-white">
                      {user?.firstName.charAt(0)}
                      {user?.lastName?.charAt(0)}
                    </p>
                  )}
                  <p className="truncate">
                    {user?.firstName} {user?.lastName}
                  </p>
                </div>
                <ChevronDown size={15} />
              </div>
            </DropdownMenuTrigger>
          </div>
          <DropdownMenuContent align="center">
            <div className="w-full p-2 text-sm">
              Signed in as
              <p className="font-semibold"> {user?.email}</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <nav>
          <ul className="px-3 py-2">
            {routes.map((route) => (
              <Fragment key={route.name}>
                <p className="mt-7 px-2 text-xs font-bold tracking-wider text-primary/80 opacity-80">
                  {route.name}
                </p>
                {route.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`${pathname}/${link.href}`}
                      className={cn(
                        'offset_ring group my-0.5 flex w-full cursor-pointer justify-start rounded-lg p-2 text-sm font-medium hover:bg-accent',
                        {
                          'bg-accent': pathname === link.href,
                        }
                      )}
                    >
                      <div className="flex flex-1 items-center">
                        <link.icon className="mr-3 h-5 w-5" />
                        {link.label}
                      </div>
                    </Link>
                  </li>
                ))}
              </Fragment>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default DashboardSidebar
