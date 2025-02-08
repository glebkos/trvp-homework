import {ReactElement} from 'react';
import './ManagerItem.css';
import {ManagerItemInterface} from './ManagerItem.types.ts';

export const ManagerItem = (props: ManagerItemInterface): ReactElement => {
    const {name, id} = props;
    return (
    <div className="manager-item__root">
        <div className="manager-item__image"></div>
        <div className="manager-item__id">{id}</div>
        <div className="manager-item__name">{name}</div>
        <div className="manager-item__edit"></div>
        <div className="manager-item__delete"></div>
    </div>
    );
};
