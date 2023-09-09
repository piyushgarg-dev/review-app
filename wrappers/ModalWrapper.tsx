import { useEffect, useRef } from 'react'

import { CreateFormModal } from '@/components/Modals/CreateFormModal'
import { ProjectModal } from '@/components/Modals/ProjectModal'

const ModalWrapper = () => {
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
      <CreateFormModal />
    </>
  )
}

export default ModalWrapper
