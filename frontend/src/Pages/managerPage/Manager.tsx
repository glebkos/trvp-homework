import {ReactElement, useCallback, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { Modal } from '../modalWindow/Modal.tsx';
import { ModalContext, openModal } from '../modalWindow/Modal.helpers.tsx';
import { ModalContextType } from '../modalWindow/Modal.types.ts';
import './Manager.css';
import { ClientsItem } from '../../Components/ClientsItem/ClientsItem.tsx';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ClientModal } from '../../Components/ClientModal/ClientModal.tsx';
import {fetchData} from "../../helpers/fetchHelpers.ts";
import {ManagerType} from "./Manager.types.ts";

export const Manager = (): ReactElement => {
    const params = useParams();
    const [manager, setManager] = useState<ManagerType>();
    const [managerClients, setManagerClients] = useState();

    useEffect(() => {
        fetchData(`manager/${params.id}`).then(data => setManager(data[0]));
    }, [params.id]);

    useEffect(() => {
        if (manager?.profile) {
            fetchData(`clients?profile=${manager?.profile}`).then(data => setManagerClients(data));
        }
    }, [manager?.profile]);

    const [ modalValue, setModalValue ] = useState<ModalContextType>(null);

    const handleAdd = useCallback(() => {
        setModalValue({ children: (
                <ClientModal />
            ),
        });
        openModal();
    }, []);
    return (
        <ModalContext.Provider  value={modalValue}>
            <div className="manager-page__root">
                <div className="manager-page__window">
                    <div className="manager-page__header">
                        <div className="manager-page__header-info">
                            <span className="manager-page__header-name">{manager?.name || ''}</span>
                            <span className="manager-page__header-id">ID: {manager?.id || ''}</span>
                            <span className="manager-page__header-profile">Профиль: {manager?.profile || ''}</span>
                        </div>
                        <button className="manager-page__add-button button" onClick={handleAdd}>Добавить</button>
                    </div>
                    <div className="">
                        {managerClients && <VerticalList items={managerClients} Entity={ClientsItem} setModal={setModalValue}/>}
                    </div>
                </div>
                <Modal />
            </div>
        </ModalContext.Provider>);
};
