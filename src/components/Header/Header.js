import React from "react";
import "./Header.css";
import Geolocation from "../Geolocation/Geolocation";
import { Link } from "react-router-dom";
import '../../fonts/fonts.css';
import logo from "../../images/logo_white_vector.svg";


export default function Header({setIsSupportPopupOpen, setIsJoinPopupOpen, city, setCity, isNotificationShown, setIsNotificationShown, setIsCitiesPopupOpen}){

    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    function toggleMenu(){
        setIsMenuOpened(!isMenuOpened);
    }

    function handleSupportPopup(){
        setIsSupportPopupOpen(true);
    }

    function handleJoinPopup(){
        setIsJoinPopupOpen(true)
    }

    return(
        <header className="header">
            <div className="header__menus">
               <button className="header__button_menu" tabIndex="0" onClick={toggleMenu} type='button'>
                        <span className={isMenuOpened ? 'header__menu-bar header__menu-bar_opened' : 'header__menu-bar'}></span>
                        <span className={isMenuOpened ? 'header__menu-bar header__menu-bar_opened' : 'header__menu-bar'}></span>
                        <span className={isMenuOpened ? 'header__menu-bar header__menu-bar_opened' : 'header__menu-bar'}></span>
                </button>
                <Geolocation city={city} setCity={setCity} isNotificationShown={isNotificationShown} setIsNotificationShown={setIsNotificationShown} setIsCitiesPopupOpen={setIsCitiesPopupOpen}/> 
            </div>
            
            <Link to='/'><img className="header__logo" src={logo} alt="logo"/></Link>
            {/* <nav className="header__navigation">
                <Link to='/about' className="header__nav-link">О нас</Link>
                <Link to='/activities' className="header__nav-link">Направления</Link>
                <Link to='/calendar' className="header__nav-link">Календарь</Link>
                <Link to='/news' className="header__nav-link">Новости</Link>
                <Link to='/contacts' className="header__nav-link">Контакты</Link>
                <Link to='/signin' className="header__nav-link">signin</Link>
                <Link to='/signup' className="header__nav-link">signup</Link>
            </nav> */}
            
            <div className="header__buttons">
                <button className="header__button header__button_join" type="button" onClick={handleJoinPopup}>Войти</button>
                <button className="header__button header__button_support" type="button" onClick={handleSupportPopup}>Поддержать организацию</button>
            </div>
        </header>
    )
}