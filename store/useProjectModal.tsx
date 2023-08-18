import { create } from 'zustand'

interface useProjectModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useProjectModal = create<useProjectModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
