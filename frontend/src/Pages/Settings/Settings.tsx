import './Settings.css';
import { VerticalList } from '../../Components/List/VerticalList.tsx';
import { ProfileItem } from '../../Components/ProfileItem/ProfileItem.tsx';
import { useEffect, useRef, useState } from 'react';
import { fetchData } from '../../helpers/fetchHelpers.ts';
import { Link } from 'react-router';

export const Settings = () => {
    const [ N, setN ] = useState();
    const [ profiles, setProfiles ] = useState([ {} ]);
    const profileInputRef = useRef<HTMLInputElement | null>(null);
    const nInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        fetchData('settings').then(data => setN(data[0].n));
    }, []);

    useEffect(() => {
        fetchData('profiles').then(data => setProfiles(data));
    }, []);

    const handleProfileAdd = () => {
        fetchData('profiles', {
            method: 'POST',
            body: {
                name: profileInputRef.current?.value
            },
        }).then(data => setProfiles(profiles.concat(data)));
        profileInputRef.current.value = null;
    };

    const handleSave = () => {
        fetchData('settings', {
            method: 'POST',
            body: {
                N: nInputRef.current?.value,
            },
        }).then(data => setN(data[0].N));

    };

    return (
        <div className="settings__root">
            <div className="settings__window">
                <div className="settings__header">
                    <span className="settings__header-title">Настройки</span>
                </div>
                <div className="settings__content">
                    <div className="settings__block">
                        <span className="settings__block-title">Ограничение на количество юрлиц(N)</span>
                        <input type="text" className="settings__block-input input" ref={nInputRef} defaultValue={N}/>
                    </div>
                    <div className="settings__block">
                        <span className="settings__block-title">Профили обслуживания</span>
                        <VerticalList Entity={ProfileItem} items={profiles} setItems={setProfiles}/>
                        <div className="setting__profile-add-block">
                            <input type="text" className="input" ref={profileInputRef}/>
                            <button className="button" onClick={handleProfileAdd}>Добавить</button>
                        </div>
                    </div>
                </div>
                <div className="settings__control">
                    <Link to="/" className="button" onClick={handleSave}>Сохранить</Link>
                </div>
            </div>
        </div>
    );
};
