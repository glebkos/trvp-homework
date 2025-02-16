import {ReactElement, useCallback, useEffect, useState} from 'react';
import './MainPage.css';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ManagerItem } from '../../Components/ManagerItem/ManagerItem.tsx';
import { Modal } from '../modalWindow/Modal.tsx';
import { openModal, ModalContext } from '../modalWindow/Modal.helpers.tsx';
import { ModalContextType } from '../modalWindow/Modal.types.ts';
import { ManagerModal } from '../../Components/ManagerModal/ManagerModal.tsx';

const mockItems = [ {
    name: 'Какое-то классное имя',
    profile: 'profile1',
    id: '1',
},{
    name: 'Какое-то классное имя 2',
    profile: 'profile2',
    id: '2',
}, ];

export const MainPage = (): ReactElement => {
    const [managerList, setManagerList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/manager/list', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                setManagerList(data);
                console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);
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
            <div className="main-page__root">
                <div className="main-page__window">
                    <div className="main-page__header">
                        <span className="main-page__header-title">Список менеджеров</span>
                        <button className="main-page__add-button button" onClick={handleAdd}>Добавить</button>
                    </div>
                    <div className="">
                        <VerticalList items={managerList} Entity={ManagerItem} setModal={setModalValue}/>
                    </div>
                </div>
                <Modal />
            </div>
        </ModalContext.Provider>
    );
};
