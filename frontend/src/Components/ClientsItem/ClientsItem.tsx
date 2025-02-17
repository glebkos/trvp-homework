import { Icon56UserCircleOutline as UserIcon } from '@vkontakte/icons';
import { Icon24WriteOutline as EditIcon } from '@vkontakte/icons';
import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { ClientsItemProps } from './ClientsItem.types.ts';
import {useCallback, useContext} from 'react';
import { openModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ClientModal } from '../ClientModal/ClientModal.tsx';
import {ManagerIDContext} from "../../Pages/managerPage/Manager.tsx";
import {fetchData} from "../../helpers/fetchHelpers.ts";
import {sortClients} from "../../Pages/managerPage/Manager.helpers.ts";

export const ClientsItem = (props: ClientsItemProps) => {
    const { name, id, profile, setModal, setClientsList, managerID } = props;
    const currentManagerID = useContext(ManagerIDContext);

    const handleEdit = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setModal({
                children: (<ClientModal id={id} setClientsList={setClientsList}/>),
            }
        );
        openModal();
    }, [ name, profile, setModal ]);
    const handleDelete = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        fetchData(`clients/${id}`, {
            method: 'DELETE'
        }).then(data => setClientsList(sortClients(data, currentManagerID)));
    }, [id]);
    return (
        <div className="manager-item__root">
            <div className="manager-item__image-wrap">
                <UserIcon className="manager-item__image"/>
            </div>
            <div className="manager-item__name">{name}</div>
            <div className="manager-item__id">ID:{id} {currentManagerID === managerID && <div className="manager-item__served">Обслуживается</div>}</div>
            <div className="manager-item__button-block">
                <EditIcon onClick={handleEdit} className="manager-item__edit manager-item__button"/>
                <DeleteIcon onClick={handleDelete} className="manager-item__delete manager-item__button"/>
            </div>
        </div>
    );
};
