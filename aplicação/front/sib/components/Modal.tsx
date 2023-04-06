import React, { ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Transition show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px- text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
          <span
            className="inline-block h-screen  align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block w-full items-center text-center bg-[#303030] text-white max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6"
            >
              {title}
            </Dialog.Title>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}