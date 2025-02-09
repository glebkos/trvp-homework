import { Context, createContext } from 'react';
import { ModalContextType } from './Modal.types.ts';

export const ModalContext: Context<ModalContextType> = createContext({});

export const openModal = () => {
    const modalWindow: HTMLDialogElement = document.querySelector('#modal-window');
    modalWindow.showModal();
};

export const closeModal = () => {
    const modalWindow: HTMLDialogElement = document.querySelector('#modal-window');
    modalWindow.close();
};
