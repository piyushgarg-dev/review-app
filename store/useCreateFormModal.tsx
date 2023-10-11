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

// interface useDeleteFormModalStore {
//   isDeleteModalOpen: boolean
//   openDeleteFormModal: () => void
//   closeDeleteFormModal: () => void
// }

// export const useDeleteFormModal = create<useDeleteFormModalStore>((set) => ({
//   isDeleteModalOpen: false,
//   openDeleteFormModal: () => set({ isDeleteModalOpen: true }),
//   closeDeleteFormModal: () => set({ isDeleteModalOpen: false }),
// }))
