import { create } from 'zustand'

interface useDeleteFormModalStore {

  isDeleteFormModalOpen: boolean 
  formData: string ; 
  openDeleteFormModal:(form: any) => void; 
  closeDeleteFormModal: () => void
}

export const useDeleteFormModal = create<useDeleteFormModalStore>((set) => ({
  isDeleteFormModalOpen: false,
  formData: "",
  openDeleteFormModal: (form) => set({ isDeleteFormModalOpen: true, formData: form }),
  closeDeleteFormModal: () => set({ isDeleteFormModalOpen: false }),
}))
