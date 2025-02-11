import { Icon56UserCircleOutline as UserIcon } from '@vkontakte/icons';
import { Icon24WriteOutline as EditIcon } from '@vkontakte/icons';
import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { ClientsItemProps } from './ClientsItem.types.ts';
import { useCallback } from 'react';

export const ClientsItem = (props: ClientsItemProps) => {
    const { name, id } = props;

    const handleEdit = useCallback(() => {

    }, []);
    const handleDelete = useCallback(() => {

    }, []);
    return (
        <div className="manager-item__root">
            <div className="manager-item__image-wrap">
                <UserIcon className="manager-item__image"/>
            </div>
            <div className="manager-item__name">{name}</div>
            <div className="manager-item__id">ID:{id}</div>
            <div className="manager-item__button-block">
                <EditIcon onClick={handleEdit} className="manager-item__edit manager-item__button"/>
                <DeleteIcon onClick={handleDelete} className="manager-item__delete manager-item__button"/>
            </div>
        </div>
    );
};
