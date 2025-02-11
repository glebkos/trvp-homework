import './Settings.css';

export const Settings = () => {
    return (
        <div className="settings__root">
            <div className="settings__window">
                <div className="settings__header">
                    <span className="settings__header-title">Настройки</span>
                </div>
                <div className="settings__content">
                    <div className="settings__block">
                        <span className="settings__block-title">Ограничение на количество юрлиц(N)</span>
                        <input type="text" className="settings__block-input input"/>
                    </div>
                    <div className="settings__block">
                        <span className="settings__block-title">Профили обслуживания</span>
                        {/*<VerticalList />*/}
                    </div>
                </div>
                <div className="settings__control">
                    <button className="button">Сохранить</button>
                </div>
            </div>
        </div>
    )
}
