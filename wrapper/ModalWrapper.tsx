import React, { useEffect, useRef } from 'react'

import { ProjectModal } from '@/components/Modals/ProjectModal'

const ModalWrapper: React.FC = () => {
    const ref = useRef(false)

    useEffect(() => {
        ref.current = true
        return () => {
            ref.current = false
        }
    }, [])

    if (!ref.current) return null

    return (
        <>
            <ProjectModal />
        </>
    )
}

export default ModalWrapper