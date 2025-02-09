import { ReactElement } from 'react';
import './VerticalList.css';

export const VerticalList = (props):ReactElement => {
    const { items, Entity, setModal } = props;
    const rows = [];
    for (const item of items) {
        rows.push(<Entity name={item.name} profile={item.profile} id={item.id} setModal={setModal}/>);
    }
    return (<div className="vertical-list__root">
        {rows}
    </div>);
};
