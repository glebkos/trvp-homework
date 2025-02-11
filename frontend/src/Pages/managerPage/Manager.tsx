import { ReactElement, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { Modal } from '../modalWindow/Modal.tsx';
import { ModalContext, openModal } from '../modalWindow/Modal.helpers.tsx';
import { ModalContextType } from '../modalWindow/Modal.types.ts';
import './Manager.css';
import { ClientsItem } from '../../Components/ClientsItem/ClientsItem.tsx';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ClientModal } from '../../Components/ClientModal/ClientModal.tsx';

export const Manager = (): ReactElement => {
    const params = useParams();

    const mockManager = {
        id: params.id,
        name: 'Супер имя',
        profile: 'profile2'
    };
    const mockItems = [ {
        id: 1,
        name: 'Один',
        profile: 'profile2'
    },{
        id: 2,
        name: 'Два',
        profile: 'profile1'
    }, ];

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
                            <span className="manager-page__header-name">{mockManager.name}</span>
                            <span className="manager-page__header-id">ID: {mockManager.id}</span>
                            <span className="manager-page__header-profile">Профиль: {mockManager.profile}</span>
                        </div>
                        <button className="manager-page__add-button button" onClick={handleAdd}>Добавить</button>
                    </div>
                    <div className="">
                        <VerticalList items={mockItems} Entity={ClientsItem} setModal={setModalValue}/>
                    </div>
                </div>
                <Modal />
            </div>
        </ModalContext.Provider>);
};
