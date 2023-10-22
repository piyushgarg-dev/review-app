import { useEffect, useRef } from 'react'

import { CreateFormModal } from '@/components/Modals/CreateFormModal'
import { ProjectModal } from '@/components/Modals/ProjectModal'
import { ConfirmDeleteFormModal } from '@/components/Modals/ConfirmDeleteFormModal'

const ModalWrapper = () => {
  // const ref = useRef(false)

  // useEffect(() => {
  //   ref.current = true
  //   return () => {
  //     ref.current = false
  //   }
  // }, [])

  // if (!ref.current) return null

  return (
    <>
      <ProjectModal />
      <CreateFormModal />
      <ConfirmDeleteFormModal />
    </>
  )
}

export default ModalWrapper
