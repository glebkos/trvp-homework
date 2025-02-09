import { ReactElement, useContext } from 'react';
import { Icon24Cancel as Close } from '@vkontakte/icons';
import './Modal.css';
import { closeModal, ModalContext } from './Modal.helpers.tsx';
import { ModalContextType } from './Modal.types.ts';

export const Modal = (): ReactElement => {
    const value: ModalContextType = useContext(ModalContext);
    return (
        <dialog className="modal-window" id="modal-window">
            <Close className="modal-window__close" onClick={closeModal}/>
            {value?.children}
        </dialog>
    );
};
