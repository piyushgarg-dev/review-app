import { create } from 'zustand'

interface useConfirmDeleteFormModalStore {
    isConfirmDeleteFormModalOpen: boolean
    formId?: string | null
    openConfirmDeleteFormModal: ({ formId }: { formId?: string }) => void
    closeConfirmDeleteFormModal: () => void
}

export const useConfirmDeleteFormModal = create<useConfirmDeleteFormModalStore>((set) => ({
    isConfirmDeleteFormModalOpen: false,

    openConfirmDeleteFormModal: ({ formId }) => set({ isConfirmDeleteFormModalOpen: true, formId }),
    closeConfirmDeleteFormModal: () => set({ isConfirmDeleteFormModalOpen: false, formId: null }),

}))