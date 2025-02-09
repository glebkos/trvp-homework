import React, { ReactElement, useCallback } from 'react';
import './AddManagerModal.css';
import {closeModal} from "../../Pages/modalWindow/Modal.helpers.tsx";

export const AddManagerModal = () => {
    const profiles: string[] = [ 'profile1', 'profile2' ];

    const profilesItems  = useCallback((): ReactElement[] => {
        const result = [];
        for (const item of profiles) {
            result.push(<option value={item}>{item}</option>);
        }
        return result;
    }, [ profiles ]);

    const handleClose = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        closeModal();
    }, []);

    return (
        <div className="manager-modal__root">
            <div className="manager-modal__title">Добавить нового менеджера</div>
            <form method="POST" className="manager-modal__form" name="manager-modal-form">
                <div className="manager-modal__input-block">
                    <label htmlFor="name">ФИО</label>
                    <input type="text" name="name" className="manager-modal__input"/>
                </div>
                <div className="manager-modal__input-block">
                    <label htmlFor="profile">Выбирите профиль обслуживания</label>
                    <select name="profile" form="manager-modal-form">
                        {profilesItems()}
                    </select>
                </div>
                <div className="manager-modal__button-block">
                    <button className="manager-modal__button-cancel button" onClick={handleClose}>Отмена</button>
                    <button className="manager-modal__button-submition button">Добавить</button>
                </div>
            </form>
        </div>
    );
};
