import { create } from 'zustand'

interface useCreateFormModalStore {
  isCreateFormModalOpen: boolean
  openCreateFormModal: () => void
  closeCreateFormModal: () => void
}

export const useCreateFormModal = create<useCreateFormModalStore>((set) => ({
  isCreateFormModalOpen: false,
  openCreateFormModal: () => set({ isCreateFormModalOpen: true }),
  closeCreateFormModal: () => set({ isCreateFormModalOpen: false }),
}))
