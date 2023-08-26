


import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export interface ModalProps {
    className?: string | undefined
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
    heightOffset?: string | '100%' | '70%'
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    marginTop?: string
    cssProp: object
    overflowClassName?: string
}

export default function Modal({
    className = undefined,
    children,
    size = 'md',
    heightOffset = '70%',
    isOpen = false,
    marginTop,
    setIsOpen,
    cssProp = {},
    overflowClassName = "overflow-hidden"
}: ModalProps) {

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            {/* @ts-ignore */}
            <Transition appear show={isOpen} as={Fragment}>
                {/* @ts-ignore */}
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    {/* @ts-ignore */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0  bg-black bg-opacity-25" />
                    </Transition.Child>
                    {/* w-[326px] */}
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className={`flex min-h-[70%] ${marginTop && 'mt-12'}  items-center justify-center p-4 text-center`}>
                            {/* @ts-ignore */}
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                {/* @ts-ignore */}
                                <Dialog.Panel
                                    className={`w-full ${size ? `max-w-${size}` : 'w-fit'} transform ${overflowClassName} rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ${className}`}>
                                    {children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
