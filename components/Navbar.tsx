import React from 'react'

import { MainNav } from '@/components/MainNav'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import ProjectSwitcher from './ProjectSwitcher'

const Navbar = () => {
    // const { userId } = auth();

    // if (!userId) {
    //     redirect('/sign-in');
    // }

    // const projects = await prismadb.project.findMany({
    //     where: {
    //         userId,
    //     }
    // });

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <ProjectSwitcher items={[]} />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />
                    <Button className=''>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar