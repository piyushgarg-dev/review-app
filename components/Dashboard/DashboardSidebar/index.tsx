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
    name: 'Collect',
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
    name: 'Manage',
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
    <div className="space-y-4 pb-4 flex flex-col h-full overflow-y-auto border-r">
      <aside className="flex-1">
        <DropdownMenu>
          <div className="border-b cursor-pointer px-5 py-3">
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-3 w-fit">
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
                    <p className="relative h-10 w-10 rounded-full bg-violet-700 text-white flex items-center justify-center font-semibold">
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
                <p className="font-bold opacity-80 mt-7 px-2 text-primary/80">
                  {route.name}
                </p>
                {route.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={`${pathname}/${link.href}`}
                      className={cn(
                        'text-sm group flex p-2 my-0.5 w-full justify-start font-medium cursor-pointer rounded-lg transition hover:bg-accent',
                        {
                          'bg-accent': pathname === link.href,
                        }
                      )}
                    >
                      <div className="flex items-center flex-1">
                        <link.icon className="h-5 w-5 mr-3" />
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
