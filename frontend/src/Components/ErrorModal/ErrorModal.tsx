import { ReactElement } from 'react';
import './ErrorModal.css';
import { closeModal } from '../../Pages/modalWindow/Modal.helpers.tsx';

export const ErrorModal = (): ReactElement => {
    return (
        <div className="error-modal__root">
            <span className="error-modal__title">Превышено количество обслуживаемых клиентов</span>
            <span className="error-modal__description">Количестов клиентов, которых может обслуживать данный менеджер превышено</span>
            <div className="error-modal__button-block">
                <button className="button" onClick={() => {closeModal();}}>ОК</button>
            </div>
        </div>
    );
};
