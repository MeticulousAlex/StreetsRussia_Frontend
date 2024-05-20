import React from "react";
import "./Header.css";
import logo from "../images/logo_black.svg";

export default function Header({setIsSupportOpen}){

    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    function toggleMenu(){
        setIsMenuOpened(!isMenuOpened);
    }

    function handleSupportPopup(){
        setIsSupportOpen(true);
    }

    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"/>
            {/* <nav className="header__navigation">
                <a className="header__nav-link">О нас</a>
                <a className="header__nav-link">Направления</a>
                <a className="header__nav-link">Календарь</a>
                <a className="header__nav-link">Новости</a>
                <a className="header__nav-link">Контакты</a>
            </nav> */}
            
            <div className="header__buttons">
                <button className="header__button_support" type="button" onClick={handleSupportPopup}>Поддержать организацию</button>
                <button className="header__button_menu" tabIndex="0" onClick={toggleMenu} type='button'>
                        <span className={isMenuOpened ? 'header__menu-bar header__menu-bar_opened' : 'header__menu-bar'}></span>
                        <span className={isMenuOpened ? 'header__menu-bar header__menu-bar_opened' : 'header__menu-bar'}></span>
                        <span className={isMenuOpened ? 'header__menu-bar header__menu-bar_opened' : 'header__menu-bar'}></span>
                </button>
            </div>
        </header>
    )
}