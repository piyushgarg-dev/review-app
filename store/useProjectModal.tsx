import { create } from 'zustand'

interface useProjectModalStore {
  isOpen: boolean
  onOpen: () => void // Naming ❌
  onClose: () => void // Naming ❌
}

export const useProjectModal = create<useProjectModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
