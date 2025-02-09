import { ReactElement, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { Modal } from '../modalWindow/Modal.tsx';
import { ModalContext, openModal } from '../modalWindow/Modal.helpers.tsx';
import { ModalContextType } from '../modalWindow/Modal.types.ts';
import { ManagerModal } from '../../Components/AddManagerModal/ManagerModal.tsx';
import './Manager.css';

export const Manager = (): ReactElement => {
    const params = useParams();

    const mockItems = {
        id: params.id,
        name: 'Супер имя',
        profile: 'profile2'
    };

    const [ modalValue, setModalValue ] = useState<ModalContextType>(null);

    const handleAdd = useCallback(() => {
        setModalValue({ children: (
                <ManagerModal />
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
                            <span className="manager-page__header-name">{mockItems.name}</span>
                            <span className="manager-page__header-id">ID: {mockItems.id}</span>
                            <span className="manager-page__header-profile">Профиль: {mockItems.profile}</span>
                        </div>
                        <button className="manager-page__add-button button" onClick={handleAdd}>Добавить</button>
                    </div>
                    <div className="">
                        {/*<VerticalList items={mockItems} Entity={ManagerItem} setModal={setModalValue}/>*/}
                    </div>
                </div>
                <Modal />
            </div>
        </ModalContext.Provider>);
};
