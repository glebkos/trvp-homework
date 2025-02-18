import { ReactElement, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { closeModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ClientModalTypes } from './ClientModal.types.ts';
import './ClientModal.css';
import { fetchData } from '../../helpers/fetchHelpers.ts';
import { ManagerIDContext } from '../../Pages/managerPage/Manager.helpers.ts';
import { sortClients } from '../../Pages/managerPage/Manager.helpers.ts';

export const ClientModal = (props: ClientModalTypes) => {
    const managerID = useContext(ManagerIDContext);
    const { id, setClientsList, profile } = props;
    const [ profiles, setProfiles ] = useState([]);
    const [ client, setClient ] = useState<{name: string, profile: number}>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const selectRef = useRef<HTMLSelectElement | null>(null);

    useEffect(() => {
        fetchData('profiles').then(data => setProfiles(data));
    }, [ setProfiles ]);

    useEffect(() => {
        if (id) {
            fetchData(`clients/${id}`).then(data => setClient(data[0]));
        } else {
            setClient(null);
        }
    }, [ id, setClient ]);

    useEffect(() => {
        nameRef.current.value = client?.name || '';
    }, [ client?.name, nameRef ]);

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
        const src = id ? `clients/${id}` : 'clients/create';
        fetchData(src, {
            method: 'POST',
            body: {
                name: nameRef.current?.value,
                profile: selectRef.current?.value,
            }
        }).then(data => {
            console.log(data.profile, profile);
            if (id || (data[0].profile === profile)) {
                setClientsList(sortClients(data, managerID));
            }
        });
        closeModal();
    }, [ id, setClientsList, managerID, profile ]);

    return (
    <div className="client-modal__root">
        <div className="client-modal__title">Добавить новое юрлицо</div>
        <form method="POST" className="client-modal__form" name="client-modal-form">
            <div className="client-modal__input-block">
                <label htmlFor="name">Название</label>
                <input type="text" name="name" className="client-modal__input input" ref={nameRef}/>
            </div>
            <div className="client-modal__input-block">
                <label htmlFor="profile">Выберите профиль обслуживания</label>
                <select name="profile" form="client-modal-form" ref={selectRef} className="input">
                    {profilesItems(client?.profile)}
                </select>
            </div>
            <div className="client-modal__button-block">
                <button className="client-modal__button-cancel button" onClick={handleClose}>Отмена</button>
                <button className="client-modal__button-submition button" onClick={handleSave}>{id ? 'Сохранить' : 'Добавить'}</button>
            </div>
        </form>
    </div>
);
};
