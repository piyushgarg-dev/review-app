import { Modal } from '@/components/ui/modal'
import { Button } from '../ui/button'
import { useConfirmDeleteFormModal } from '@/store/useConfirmDeleteFormModal';
import { useDeleteForm } from '@/hooks/mutation/form';
import { useCallback } from 'react';
import toast from 'react-hot-toast'
import { useSelectedProject } from '@/hooks/query/project';
import { useListForms } from '@/hooks/query/form';



export const ConfirmDeleteFormModal: React.FC = () => {
    const { project } = useSelectedProject()
    const { refetch } = useListForms(project?.id)


    const confirmDeleteFormModal = useConfirmDeleteFormModal();
    const formId = confirmDeleteFormModal.formId;


    const { mutateAsync: deleteFormAsync } = useDeleteForm()

    const handleDeleteClick = useCallback(
        async () => {
            if (formId) {
                try {
                    toast.loading('Please wait', { id: formId })
                    await deleteFormAsync({
                        id: formId,

                    })
                    toast.success('Form deleted successsfully', { id: formId })
                    confirmDeleteFormModal.closeConfirmDeleteFormModal()
                    refetch();
                } catch (error) {
                    toast.error('Something went wrong', { id: formId })
                }
            }

        },
        [confirmDeleteFormModal, deleteFormAsync, formId, refetch]
    )



    return (
        <Modal title="Delete Form" description="" isOpen={confirmDeleteFormModal.isConfirmDeleteFormModalOpen} onClose={confirmDeleteFormModal.closeConfirmDeleteFormModal}>
            <div>
                <p>Are you sure you want to delete this form?</p>
            </div>

            <div className="flex w-full items-center justify-end space-x-2 pt-6">
                <Button variant="outline" type="button" onClick={confirmDeleteFormModal.closeConfirmDeleteFormModal}>
                    Cancel
                </Button>
                <Button type="button" onClick={handleDeleteClick}>
                    Continue
                </Button>
            </div>
        </Modal>
    )
}