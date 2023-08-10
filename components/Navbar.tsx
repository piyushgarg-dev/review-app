import React from 'react'

import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import ProjectSwitcher from './project-switcher'

const Navbar = () => {
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