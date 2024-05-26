import './Menu.css';

import { Link } from 'react-router-dom';

export default function Menu({isMenuOpened,setIsMenuOpened}){

    function closeMenu(){
        setIsMenuOpened(false);
    }

    return(
        <nav className={isMenuOpened ? 'menu menu_opened' : 'menu'}>
                <Link to='/about' className="menu__nav-link" onClick={closeMenu}>О нас</Link>
                <Link to='/calendar' className="menu__nav-link" onClick={closeMenu}>Календарь</Link>
                <Link to='/disciplines' className="menu__nav-link" onClick={closeMenu}>Дисциплины</Link>
                <Link to='/news' className="menu__nav-link" onClick={closeMenu}>Новости</Link>
                <Link to='/contacts' className="menu__nav-link" onClick={closeMenu}>Контакты</Link>
        </nav>
    )

}