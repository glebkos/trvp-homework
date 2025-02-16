import './Settings.css';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ProfileItem } from '../../Components/ProfileItem/ProfileItem.tsx';
import {useEffect, useState} from "react";
import {fetchData} from "../../helpers/fetchHelpers.ts";

export const Settings = () => {
    const [N, setN] = useState();
    const [profiles, setProfiles] = useState([{}]);

    useEffect(() => {
        fetchData('settings').then(data => setN(data[0].n));
    }, []);

    useEffect(() => {
        fetchData('profiles').then(data => setProfiles(data));
    }, []);

    return (
        <div className="settings__root">
            <div className="settings__window">
                <div className="settings__header">
                    <span className="settings__header-title">Настройки</span>
                </div>
                <div className="settings__content">
                    <div className="settings__block">
                        <span className="settings__block-title">Ограничение на количество юрлиц(N)</span>
                        <input type="text" className="settings__block-input input" value={N}/>
                    </div>
                    <div className="settings__block">
                        <span className="settings__block-title">Профили обслуживания</span>
                        <VerticalList Entity={ProfileItem} items={profiles}/>
                        <div className="setting__profile-add-block">
                            <input type="text" className="input"/>
                            <button className="button">Добавить</button>
                        </div>
                    </div>
                </div>
                <div className="settings__control">
                    <button className="button">Сохранить</button>
                </div>
            </div>
        </div>
    );
};
