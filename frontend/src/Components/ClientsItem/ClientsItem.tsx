import { Icon56UserCircleOutline as UserIcon } from '@vkontakte/icons';
import { Icon24WriteOutline as EditIcon } from '@vkontakte/icons';
import { Icon24Delete as DeleteIcon } from '@vkontakte/icons';
import { ClientsItemProps } from './ClientsItem.types.ts';
import { useCallback, useContext } from 'react';
import { openModal } from '../../Pages/modalWindow/Modal.helpers.tsx';
import { ClientModal } from '../ClientModal/ClientModal.tsx';
import { ManagerIDContext } from '../../Pages/managerPage/Manager.helpers.ts';
import { fetchData } from '../../helpers/fetchHelpers.ts';
import { sortClients } from '../../Pages/managerPage/Manager.helpers.ts';
import { ErrorModal } from '../ErrorModal/ErrorModal.tsx';

export const ClientsItem = (props: ClientsItemProps) => {
    const { name, id, profile, setModal, setClientsList, managerID } = props;
    const currentManagerID = useContext(ManagerIDContext);

    const handleEdit = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        setModal({
                children: (<ClientModal id={id} setClientsList={setClientsList} profile={profile}/>),
            }
        );
        openModal();
    }, [ setModal, id, setClientsList, profile ]);

    const handleDelete = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        fetchData(`clients/${id}`, {
            method: 'DELETE'
        }).then(data => setClientsList(sortClients(data, currentManagerID)));
    }, [ id, setClientsList, currentManagerID ]);

    const handleAddToService = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        fetchData(`clients/${id}`, {
            method: 'POST',
            body: {
                name: name,
                profile: profile,
                manager: currentManagerID,
            }
        })
            .then(data => {
                if (data.status === 400){
                    setModal({
                            children: (<ErrorModal />),
                        }
                    );
                    openModal();
                    return;
                }
                setClientsList(sortClients(data, currentManagerID));
            });
    }, [ name, profile, id, currentManagerID, setClientsList, setModal ]);

    const handleDeleteFromService = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        fetchData(`clients/${id}`, {
            method: 'POST',
            body: {
                name: name,
                profile: profile,
                manager: null,
            }
        }).then(data => setClientsList(sortClients(data, currentManagerID)));
    }, [ name, profile, id, currentManagerID, setClientsList ]);

    return (
        <div className="manager-item__root">
            <div className="manager-item__image-wrap">
                <UserIcon className="manager-item__image"/>
            </div>
            <div className="manager-item__name">{name} {currentManagerID === managerID && <div className="manager-item__served">Обслуживается</div>}</div>
            <div className="manager-item__id">ID:{id}</div>
            <div className="manager-item__button-block">
                {currentManagerID === managerID
                    ? <div className="manager-item__delete-served" onClick={handleDeleteFromService}>Удалить</div>
                    : <div className="manager-item__add-served" onClick={handleAddToService}>Добавить</div>}
                <EditIcon onClick={handleEdit} className="manager-item__edit manager-item__button"/>
                <DeleteIcon onClick={handleDelete} className="manager-item__delete manager-item__button"/>
            </div>
        </div>
    );
};
