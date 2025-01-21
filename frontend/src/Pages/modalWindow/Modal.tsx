import {ReactElement} from "react";
import {ModalProps} from "./Modal.types.ts";
import './Modal.css';

export const Modal = (props: ModalProps): ReactElement => {
    const {children, title} = props;
    return (
        <div className="modal-wrapper">
            <dialog className="modal-window">
                <button className="modal-window__close" />
                <span className="modal-window__title">{title}</span>
                <div className="modal-window__content">{children}</div>
                <button className="modal-window__cancel">Отмена</button>
                <button className="modal-window__continue">Сохранить</button>
            </dialog>
        </div>
    )
}
