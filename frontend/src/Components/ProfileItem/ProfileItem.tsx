import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { useCallback } from 'react';
import './ProfileItem.css';
import { fetchData } from '../../helpers/fetchHelpers.ts';

export const ProfileItem = ({ name, id, setItems, items }) => {
    const handleDelete = useCallback(() => {
        fetchData(`/profiles/${id}`, {
            method: 'DELETE',
        }).then(data => setItems(items.filter((item) => {
            return item.id !== data[0].id;
        })));
    }, [ id, items, setItems ]);
    return (
        <div className="profile__root">
            <span className="profile__name">{name}</span>
            <DeleteIcon onClick={handleDelete} className="profile__delete"/>
        </div>
    );
};
