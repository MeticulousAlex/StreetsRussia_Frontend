import './Footer.css';
import logo from '../../images/logo_white_extended.svg';
import vkLogo from '../../images/vk_logo.svg';
import youtubeLogo from '../../images/youtube_logo.svg';
import { Link } from 'react-router-dom';

export default function Footer(){

    return(
        <footer className='footer'>
            <div className='footer__logo-block'>
                <img className='footer__logo' src={logo}/>
                <p className='footer__reg-number'>ОГРН: 1217700519101; ИНН: 2636219592</p>
            </div>
            <ul className='footer__nav-list'>
                <li className='footer__nav-list-item'><Link className='footer__nav-link' to='/' >Главная</Link></li>
                <li className='footer__nav-list-item'><Link className='footer__nav-link' to='/news' >Новости</Link></li>
                <li className='footer__nav-list-item'><Link className='footer__nav-link' to='/about' >О нас</Link></li>
                <li className='footer__nav-list-item'><Link className='footer__nav-link' to='/calendar' >Календарь мероприятий</Link></li>
                <li className='footer__nav-list-item'><Link className='footer__nav-link' to='/disciplines' >Виды культуры и спорта</Link></li>
                <li className='footer__nav-list-item'><Link className='footer__nav-link' to='/contacts' >Контакты</Link></li>
            </ul>
            <div className='footer__social'>
                <div className='footer__social-links'>
                    <a className='footer__social-link'href='https://vk.com/streetrf' target='_blank' rel="noreferrer"><img className='footer__social-logo' src={vkLogo}/></a>
                    <a className='footer__social-link'href='https://www.youtube.com/c/STREETRUSSIA' target='_blank' rel="noreferrer"><img className='footer__social-logo' src={youtubeLogo} /></a>
                </div>
                <p className='footer__rights'>2021-2024<br/>«Улицы России»</p>
            </div>
        </footer>
    )
}