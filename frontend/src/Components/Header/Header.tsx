import { Icon28SettingsOutline as SettingsIcon } from '@vkontakte/icons';
import './Header.css';
import { Link } from 'react-router';
export const Header = () => {
    return(
        <div className="header__root">
            <Link to={'/'} className="header__title">Bank</Link>
            <Link to={'/settings'} className="header__settings"><SettingsIcon /></Link>
        </div>
    );
};
