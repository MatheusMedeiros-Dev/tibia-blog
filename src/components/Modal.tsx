import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import AppButton from './AppButton'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  textToModel: string
  onClickClose: () => void
  onClickConfirm: () => void
}

const modalRoot = document.getElementById('modal-root')!

export default function Modal({
  isOpen,
  onClose,
  textToModel,
  onClickClose,
  onClickConfirm,
}: ModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      className='fixed inset-0 flex items-center justify-center bg-modal-bg'
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white p-6 rounded-lg'
      >
        <p className='mb-4'>{textToModel}</p>
        <div className='flex justify-center gap-2'>
          <AppButton
            type='button'
            label='Cancelar'
            buttonType='default'
            onClick={onClickClose}
          />
          <AppButton
            type='button'
            label='Confirmar'
            buttonType='delete'
            onClick={onClickConfirm}
          />
        </div>
      </div>
    </div>,
    modalRoot
  )
}
