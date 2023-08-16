import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
    const pathname = usePathname();

    const routes = [
        {
            href: `/testimonials`,
            label: 'Testimonials',
            active: pathname === `/testimonials`,
        },
        {
            href: `/tags`,
            label: 'Tags',
            active: pathname === `/tags`,
        },
        {
            href: `/teams`,
            label: 'Teams',
            active: pathname === `/teams`,
        },
    ]

    return (
        <nav>
            <ul
                className={cn("flex items-center space-x-4 lg:space-x-6", className)}
                {...props}
            >
                {routes.map((route) => (
                    <li key={route.href}>
                        <Link
                            href={route.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-primary',
                                route.active ? 'text-black dark:text-white' : 'text-muted-foreground'
                            )}
                        >
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
};