import { createContext } from 'react';

export const ModalContext = createContext(null);

export const openModal = (children) => {
    const modalWindow: HTMLDialogElement = document.querySelector('#modal-window');
    modalWindow.showModal();
    // setModalChildren(children);
};

export const closeModal = () => {
    const modalWindow: HTMLDialogElement = document.querySelector('#modal-window');
    modalWindow.close();
};
