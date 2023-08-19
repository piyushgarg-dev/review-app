import { Crown, HeartIcon, LucideHeartCrack, TagIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const routes = [
    {
        label: 'Testimonials',
        icon: HeartIcon,
        href: '/dashboard/testimonials',
    },
    {
        label: 'Tags',
        icon: TagIcon,
        href: '/dashboard/tags',
    },
    {
        label: 'Teams',
        icon: Crown,
        href: '/dashboard/teams',
    },
];

const DashboardSidebar: React.FC = () => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 pb-4 flex flex-col h-full overflow-y-auto border-r">
            <aside className="flex-1">
                <Link href="/dashboard" className="flex items-center justify-center border-b py-3">
                    <LucideHeartCrack className="text-violet-700 h-10 w-10" />
                    {/* <h1 className="text-2xl font-bold">
                        Review
                    </h1> */}
                </Link>
                <nav>
                    <ul className="space-y-2 mt-14 px-3 py-2">
                        {routes.map((route) => (
                            <li key={route.href}>
                                <Link
                                    href={route.href}
                                    className={cn(
                                        "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition hover:bg-slate-700/30", {
                                        "bg-slate-700/30": pathname === route.href
                                    }
                                    )}
                                >
                                    <div className="flex items-center flex-1">
                                        <route.icon className="h-5 w-5 mr-3" />
                                        {route.label}
                                    </div>
                                </Link>
                            </li>

                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default DashboardSidebar