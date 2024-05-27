import './NewsItem.css';
import { useNavigate } from 'react-router-dom';

import spriteRed from '../../images/sprite_news-item_red.png';
import spriteBlue from '../../images/sprite_news-item_blue.png';
import backArrow from '../../images/back_arrow.svg';

import coverImage from '../../images/news-item-cover.png';

export default function NewsItem({currentNewsTitle}){

    const navigate = useNavigate();

    function handleGoBack(){
        navigate('/news', {replace:true});
    }

    return(
        <div className='news-item'>
            <button className='back-button' onClick={handleGoBack}>
                <img className='back-button__arrow' src={backArrow}/>
                <p className='back-button__text'>Назад</p>
            </button>
            <h2 className='news-item__title'>{currentNewsTitle}</h2>
            <img className='news-item__cover-image' src={coverImage} alt='cover-image'/>
            <p className='news-item__paragraph'> Саратов на связи! Отличные новости для всех любителей уличного баскетбола! В Саратове проводятся соревнования, в которых могут принять участие как опытные игроки, так и те, кто хочет попробовать свои силы впервые.  Команды из 3 человек приглашаются к участию в соревнованиях по "Уличному баскетболу" среди юношей.<br/>Регистрация открыта с 23.05.24 по 25.05.24 (до 9:00 утра).<br/>Для подачи заявки на участие обращайтесь к организаторам: Егор (<a className='news-item__paragraph-link' href='https://vk.com/elgoto'>https://vk.com/elgoto</a>) и Глеб. (<a className='news-item__paragraph-link' href='https://vk.com/elgoto'>https://vk.com/elgoto</a>)<br/>Соревнования состоятся 25.05.24 в 13:00 по местному времени.<br/>Количество мест ограничено, в соревновании смогут принять участие только 8 команд, поэтому не упустите свой шанс!<br/>Дополнительную информацию можно найти в сообществе « (<a className='news-item__paragraph-link' href='https://vk.com/biogen_saratov'>https://vk.com/biogen_saratov</a>)Улицы Саратова (<a className='news-item__paragraph-link' href='https://vk.com/biogen_saratov'>https://vk.com/biogen_saratov</a>)» (<a className='news-item__paragraph-link' href='https://vk.com/biogen_saratov'>https://vk.com/biogen_saratov</a>)</p>
            <img className='sprite sprite__news-item_red' src={spriteRed} alt='sprite-news-item-red'/>
            <img className='sprite sprite__news-item_blue' src={spriteBlue} alt='sprite-news-item-blue'/>
        </div>
    )
}