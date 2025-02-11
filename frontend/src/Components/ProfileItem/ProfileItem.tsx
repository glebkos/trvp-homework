import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { useCallback } from 'react';
import './ProfileItem.css';

export const ProfileItem = ({ name }) => {
    const handleDelete = useCallback(() => {

    }, []);
    return (
        <div className="profile__root">
            <span className="profile__name">{name}</span>
            <DeleteIcon onClick={handleDelete} className="profile__delete"/>
        </div>
    );
};
