import { ReactElement, useContext } from 'react';
import { Icon24Cancel as Close } from '@vkontakte/icons';
import './Modal.css';
import { closeModal, ModalContext } from './Modal.helpers.tsx';

export const Modal = (): ReactElement => {
    const value = useContext(ModalContext);
    return (
        <dialog className="modal-window" id="modal-window">
            <div className="modal-window__root">
                <Close className="modal-window__close" onClick={closeModal}/>
                {/*{value.children}*/}
            </div>
        </dialog>
    );
};
