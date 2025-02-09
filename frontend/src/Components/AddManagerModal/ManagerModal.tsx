import { ReactElement, useCallback } from 'react';
import './ManagerModal.css';
import { closeModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ManagerModalTypes } from './ManagerModal.types.ts';

export const ManagerModal = (props: ManagerModalTypes) => {
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
        <div className="manager-modal__root">
            <div className="manager-modal__title">Добавить нового менеджера</div>
            <form method="POST" className="manager-modal__form" name="manager-modal-form">
                <div className="manager-modal__input-block">
                    <label htmlFor="name">ФИО</label>
                    <input type="text" name="name" className="manager-modal__input" value={props?.name}/>
                </div>
                <div className="manager-modal__input-block">
                    <label htmlFor="profile">Выбирите профиль обслуживания</label>
                    <select name="profile" form="manager-modal-form">
                        {profilesItems(props?.profile)}
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
