import { Modal } from '@/components/ui/modal'
import { Button } from '../ui/button'

interface DeleteModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  onCancel,
}: DeleteModalProps) {
  return (
    <Modal title="Delete Form" description="" isOpen={isOpen} onClose={onClose}>
      <div>
        <p>Are you sure you want to delete this form?</p>
      </div>

      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button variant="outline" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="button" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  )
}
