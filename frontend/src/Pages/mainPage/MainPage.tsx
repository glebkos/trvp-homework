import React, {ReactElement, useCallback} from 'react';
import './MainPage.css';
import {VerticalList} from '../../Components/List/VerticalList.tsx';
import {ManagerItem} from '../../Components/ManagerItem/ManagerItem.tsx';
import {Modal} from "../modalWindow/Modal.tsx";
import {openModal} from "../modalWindow/Modal.helpers.tsx";

const mockItems = [{
    name: 'Какое-то классное имя',
    id: '1',
},{
    name: 'Какое-то классное имя 2',
    id: '2',
},];

export const MainPage = (): ReactElement => {
    const handleAdd = useCallback(() => {
        openModal(<></>);
    }, []);

    return (
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
    );
};
