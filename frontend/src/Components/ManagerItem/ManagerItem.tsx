import {ReactElement} from 'react';
import './ManagerItem.css';
import {ManagerItemInterface} from './ManagerItem.types.ts';
import {Icon24Delete as DeleteIcon} from '@vkontakte/icons';
import {Icon56UserCircleOutline as UserIcon} from '@vkontakte/icons';

export const ManagerItem = (props: ManagerItemInterface): ReactElement => {
    const {name, id} = props;
    return (
    <div className="manager-item__root">
        <div className="manager-item__image-wrap">
            <UserIcon className="manager-item__image"/>
        </div>
        <div className="manager-item__name">{name}</div>
        <div className="manager-item__id">{id}</div>
        <div className="manager-item__button-block">
            <DeleteIcon className="manager-item__delete manager-item__button" />
        </div>
    </div>
    );
};
