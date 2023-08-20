import React, { useEffect, useState } from 'react'

import { ProjectModal } from '@/components/modals/ProjectModal'

// This is not a Provider ❌
const ModalProvider: React.FC = () => {
  // Naming ❌
  // Not Generic
  const [isMounted, setIsMounted] = useState(false) // use -> useRef does not re-render

  useEffect(() => setIsMounted(true), []) // This is re-rendering

  if (!isMounted) return null

  return (
    <>
      <ProjectModal />
    </>
  )
}

export default ModalProvider
