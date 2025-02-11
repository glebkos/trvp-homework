import { ReactElement, useCallback } from 'react';
import { closeModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ClientModalTypes } from './ClientModal.types.ts';
import './ClientModal.css';

export const ClientModal = (props: ClientModalTypes) => {
    const profiles: string[] = [ 'profile1', 'profile2' ];

    const profilesItems  = useCallback((checked): ReactElement[] => {
        const result = [];
        for (const item of profiles) {
            result.push(<option value={item} selected={checked === item}>{item}</option>);
        }
        return result;
    }, [ profiles ]);

    const handleClose = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        closeModal();
    }, []);

    return (
    <div className="client-modal__root">
        <div className="client-modal__title">Добавить новое юрлицо</div>
        <form method="POST" className="client-modal__form" name="client-modal-form">
            <div className="client-modal__input-block">
                <label htmlFor="name">Название</label>
                <input type="text" name="name" className="client-modal__input" value={props?.name}/>
            </div>
            <div className="client-modal__input-block">
                <label htmlFor="profile">Выберите профиль обслуживания</label>
                <select name="profile" form="client-modal-form">
                    {profilesItems(props?.profile)}
                </select>
            </div>
            <div className="client-modal__button-block">
                <button className="client-modal__button-cancel button" onClick={handleClose}>Отмена</button>
                <button className="client-modal__button-submition button">Добавить</button>
            </div>
        </form>
    </div>
);
};
