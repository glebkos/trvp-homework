import { ReactElement, useCallback } from 'react';
import './ManagerItem.css';
import { ManagerItemInterface } from './ManagerItem.types.ts';
import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { Icon24WriteOutline as EditIcon } from '@vkontakte/icons';
import { Icon56UserCircleOutline as UserIcon } from '@vkontakte/icons';
import { openModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ManagerModal } from '../ManagerModal/ManagerModal.tsx';
import { Link } from 'react-router';

export const ManagerItem = (props: ManagerItemInterface): ReactElement => {
    const { name, profile, id, setModal } = props;

    const handleEdit = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setModal({
            children: (<ManagerModal name={name} profile={profile}/>),
        }
        );
        openModal();
    }, [ setModal, name, profile ]);

    const handleDelete = useCallback(() => {

    }, []);

    return (
        <Link to={{
            pathname: `/manager/${id}`,
        }} className="manager-item__root">
            <div className="manager-item__image-wrap">
                <UserIcon className="manager-item__image"/>
            </div>
            <div className="manager-item__name">{name}</div>
            <div className="manager-item__id">ID:{id}</div>
            <div className="manager-item__button-block">
                <EditIcon onClick={handleEdit} className="manager-item__edit manager-item__button" />
                <DeleteIcon onClick={handleDelete} className="manager-item__delete manager-item__button" />
            </div>
        </Link>
    );
};
