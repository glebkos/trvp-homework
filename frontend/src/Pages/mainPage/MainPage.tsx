import {ReactElement} from 'react';
import './MainPage.css';
import {VerticalList} from '../../Components/List/VerticalList.tsx';
import {ManagerItem} from '../../Components/ManagerItem/ManagerItem.tsx';

const mockItems = [{
    name: 'Rts',
    id: '1',
},{
    name: 'Rts2',
    id: '2',
},];
export const MainPage = (): ReactElement => {
    return (
        <div className="main-page__root">
            <div className="main-page__window">
                <div className="main-page__header">
                    <span className="main-page__header-title">Список менеджеров</span>
                    <button className="main-page__add-button button-main">Добавить</button>
                </div>
                <div className="">
                    <VerticalList items={mockItems} Entity={ManagerItem}/>
                </div>
            </div>
        </div>
    );
};
