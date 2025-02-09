import {ReactElement} from 'react';
import { IoClose } from 'react-icons/io5';
import './Modal.css';
import {closeModal} from "./Modal.helpers.tsx";

export const Modal = (): ReactElement => {
    return (
        <dialog className="modal-window" id="modal-window">
            <div className="modal-window__root">
                <IoClose className="modal-window__close" onClick={closeModal}/>
                {/*{modalChildren}*/}
            </div>
        </dialog>
    );
};
