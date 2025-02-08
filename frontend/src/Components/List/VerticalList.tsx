import {ReactElement} from 'react';
import './VerticalList.css';

export const VerticalList = (props):ReactElement => {
    const {items, Entity} = props;
    const rows = [];
    for (const item of items) {
        rows.push(<Entity name={item.name} id={item.id}/>);
    }
    return (<div className="vertical-list__root">
        {rows}
    </div>);
};
