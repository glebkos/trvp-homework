import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import './ManagerModal.css';
import { closeModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ManagerModalTypes } from './ManagerModal.types.ts';
import { fetchData } from '../../helpers/fetchHelpers.ts';

export const ManagerModal = ({ id, setManagerList }: ManagerModalTypes) => {
    const [ profiles, setProfiles ] = useState([]);
    const [ manager, setManager ] = useState(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
        fetchData('profiles').then(data => setProfiles(data));
    }, []);

    useEffect(() => {
        if (id){
            fetchData(`manager/${id}`).then(data => setManager(data[0]));
        } else {
            setManager(null);
        }
    }, [ id ]);

    useEffect(() => {
        nameRef.current.value = manager?.name || '';
    }, [ manager?.name, nameRef ]);

    const profilesItems  = useCallback((checked): ReactElement[] => {
        const result = [];
        for (const item of profiles) {
            result.push(<option value={item.id} selected={checked === item.id}>{item.name}</option>);
        }
        return result;
    }, [ profiles ]);

    const handleClose = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        closeModal();
    }, []);

    const handleSave = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        const src = id ? `manager/${id}` : '/manager/create';
        fetchData(src, {
            method: 'POST',
            body: {
                name: nameRef.current?.value,
                profile: selectRef.current?.value,
            }
        }).then(data => setManagerList(data));
        closeModal();
    }, [ setManagerList, nameRef, selectRef, id ]);

    return (
        <div className="manager-modal__root">
            <div className="manager-modal__title">Добавить нового менеджера</div>
            <form method="POST" className="manager-modal__form" name="manager-modal-form">
                <div className="manager-modal__input-block">
                    <label htmlFor="name">ФИО</label>
                    <input type="text" name="name" className="manager-modal__input input" defaultValue={manager?.name} ref={nameRef}/>
                </div>
                <div className="manager-modal__input-block">
                    <label htmlFor="profile">Выберите профиль обслуживания</label>
                    <select name="profile" form="manager-modal-form" ref={selectRef} className="input">
                        {profilesItems(manager?.profile)}
                    </select>
                </div>
                <div className="manager-modal__button-block">
                    <button className="manager-modal__button-cancel button" onClick={handleClose}>Отмена</button>
                    <button className="manager-modal__button-submition button" onClick={handleSave}>{id ? 'Сохранить': 'Добавить'}</button>
                </div>
            </form>
        </div>
    );
};
