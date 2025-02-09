import React, { ReactElement, useCallback, useState } from 'react';
import './MainPage.css';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ManagerItem } from '../../Components/ManagerItem/ManagerItem.tsx';
import { Modal } from '../modalWindow/Modal.tsx';
import { openModal, ModalContext } from '../modalWindow/Modal.helpers.tsx';
import { ModalContextType } from '../modalWindow/Modal.types.ts';
import { AddManagerModal } from '../../Components/AddManagerModal/AddManagerModal.tsx';

const mockItems = [ {
    name: 'Какое-то классное имя',
    id: '1',
},{
    name: 'Какое-то классное имя 2',
    id: '2',
}, ];

export const MainPage = (): ReactElement => {
    const [ modalValue, setModalValue ] = useState<ModalContextType>(null);

    const handleAdd = useCallback(() => {
        setModalValue({ children: (
            <AddManagerModal />
            ),
        });
        openModal();
    }, []);

    return (
        <ModalContext.Provider  value={modalValue}>
            <div className="main-page__root">
                <div className="main-page__window">
                    <div className="main-page__header">
                        <span className="main-page__header-title">Список менеджеров</span>
                        <button className="main-page__add-button button" onClick={handleAdd}>Добавить</button>
                    </div>
                    <div className="">
                        <VerticalList items={mockItems} Entity={ManagerItem}/>
                    </div>
                </div>
                <Modal />
            </div>
        </ModalContext.Provider>
    );
};
