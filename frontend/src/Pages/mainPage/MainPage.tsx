import { ReactElement, useCallback, useEffect, useState } from 'react';
import './MainPage.css';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ManagerItem } from '../../Components/ManagerItem/ManagerItem.tsx';
import { Modal } from '../modalWindow/Modal.tsx';
import { openModal, ModalContext } from '../modalWindow/Modal.helpers.tsx';
import { ModalContextType } from '../modalWindow/Modal.types.ts';
import { ManagerModal } from '../../Components/ManagerModal/ManagerModal.tsx';
import { fetchData } from '../../helpers/fetchHelpers.ts';

export const MainPage = (): ReactElement => {
    const [ managerList, setManagerList ] = useState([]);
    useEffect(() => {
        fetchData('manager/list').then((data) => setManagerList(data));
    }, []);
    const [ modalValue, setModalValue ] = useState<ModalContextType>(null);

    const handleAdd = useCallback(() => {
        setModalValue({ children: (
            <ManagerModal setManagerList={setManagerList}/>
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
                        <VerticalList items={managerList} Entity={ManagerItem} setModal={setModalValue} setManagerList={setManagerList}/>
                    </div>
                </div>
                <Modal />
            </div>
        </ModalContext.Provider>
    );
};
