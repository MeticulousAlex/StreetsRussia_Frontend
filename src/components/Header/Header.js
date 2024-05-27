import React from "react";
import "./Header.css";
import Geolocation from "../Geolocation/Geolocation";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import '../../fonts/fonts.css';
import logo from "../../images/logo_white_vector.svg";


export default function Header({setIsSupportPopupOpen, setIsEnterPopupOpen, city, setCity, isNotificationShown, setIsNotificationShown, setIsCitiesPopupOpen}){

    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    function toggleMenu(){
        setIsMenuOpened(!isMenuOpened);
    }

    function handleSupportPopup(){
        setIsSupportPopupOpen(true);
    }

    function handleJoinPopup(){
        setIsEnterPopupOpen(true)
    }

    return(
        <>
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
                <div className="header__buttons">
                    <button className="header__button header__button_join" type="button" onClick={handleJoinPopup}>Войти</button>
                    <button className="header__button header__button_support" type="button" onClick={handleSupportPopup}>Поддержать организацию</button>
                </div>
                
            </header>
            <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened}/>
        </>
    )
}