import React, { useEffect, useState } from 'react'

import { ProjectModal } from '@/components/modals/ProjectModal'

export const ModalProvider: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => setIsMounted(true), [])

    if (!isMounted) return null

    return <ProjectModal />
}