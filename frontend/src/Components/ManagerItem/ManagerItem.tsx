import { ReactElement, useCallback } from 'react';
import './ManagerItem.css';
import { ManagerItemInterface } from './ManagerItem.types.ts';
import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { Icon24WriteOutline as EditIcon } from '@vkontakte/icons';
import { Icon56UserCircleOutline as UserIcon } from '@vkontakte/icons';

export const ManagerItem = (props: ManagerItemInterface): ReactElement => {
    const { name, id } = props;

    const editHandle = useCallback(() => {

    }, []);

    const deleteHandle = useCallback(() => {

    }, []);

    return (
    <div className="manager-item__root">
        <div className="manager-item__image-wrap">
            <UserIcon className="manager-item__image"/>
        </div>
        <div className="manager-item__name">{name}</div>
        <div className="manager-item__id">ID:{id}</div>
        <div className="manager-item__button-block">
            <EditIcon onClick={editHandle} className="manager-item__edit manager-item__button" />
            <DeleteIcon onClick={deleteHandle} className="manager-item__delete manager-item__button" />
        </div>
    </div>
    );
};
