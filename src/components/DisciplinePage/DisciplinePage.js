import './DisciplinePage.css';

import Footer from '../Footer/Footer';
import backArrow from '../../images/back_arrow.svg';
import descriptionPlaceholder from '../../images/discipline_street_art_placeholder.png';

import disciplinesImage1 from '../../images/disciplines_grid_1.png';
import disciplinesImage2 from '../../images/disciplines_grid_2.png';
import disciplinesImage3 from '../../images/disciplines_grid_3.png';
import disciplinesImage4 from '../../images/disciplines_grid_4.png';
import disciplinesImage5 from '../../images/disciplines_grid_5.png';
import disciplinesImage6 from '../../images/disciplines_grid_6.png';

import redSprite from '../../images/red_sprite_activities_selector.png';
import blueSprite from '../../images/sprite_blue_discipline_page.png';
import { useNavigate  } from 'react-router-dom';

export default function DisciplinePage({discipline}){
    const navigate = useNavigate();

    function handleGoBack(){
        navigate('/disciplines', {replace:true});
    }

    return(
        <>
            <div className='discipline-page'>
                    <button className='back-button' onClick={handleGoBack}>
                        <img className='back-button__arrow' src={backArrow}/>
                        <p className='back-button__text'>Назад</p>
                    </button>
                    <h2 className='discipline-page__title'>Street Art</h2>
                    <div className='discipline-page__description-container'>
                        <img className='discipline-page__description-image' src={descriptionPlaceholder}/>
                        <p className='discipline-page__description-paragraph'>Стрит-арт — это разновидность современного урбанистического искусства. Бытует широкое заблуждение, что граффити является единственным проявлением стрит-арт. Однако, это не так, граффити является лишь одним из видов уличного искусства.Разделение на стили можно наблюдать, в основном, среди граффити: writing, bombing, tagging, bubble-letter, throw-up, character, wild style, 3D-style. <br/>Стрит-арт — способ выразить себя и своё творчество, а также самоутвердиться в обществе. Представители этого искусства создают уличные шедевры не только для самовыражения, но и с целью привлечения внимания общественности к важным повседневным проблемам.</p>
                    </div>
                    <ul className='photo-grid'>
                        <li className='photo-grid__item photo-grid__item_long '><img className='photo-grid__image' src={disciplinesImage1}/></li>
                        <li className='photo-grid__item photo-grid__item_medium'><img className='photo-grid__image' src={disciplinesImage2}/></li>
                        <li className='photo-grid__item photo-grid__item_medium'><img className='photo-grid__image' src={disciplinesImage3}/></li>
                        <li className='photo-grid__item photo-grid__item_short'><img className='photo-grid__image' src={disciplinesImage4}/></li>
                        <li className='photo-grid__item photo-grid__item_medium'><img className='photo-grid__image' src={disciplinesImage5}/></li>
                        <li className='photo-grid__item photo-grid__item_medium'><img className='photo-grid__image' src={disciplinesImage6}/></li>
                    </ul>
                    <button className='discipline-page__button discipline-page__button_support '>Посмотреть больше фото</button>
                    <p className='discipline-page__caption'>Понравилось направление? Нажми на кнопку и получи возможность участвовать в мероприятиях в своём городе и развиваться вместе с нами!</p>
                    <button type='button' className='discipline-page__button discipline-page__button_join'>Присоединиться</button>
                    <Footer/>
                    <img className='sprite sprite_discipline-page-red' src={redSprite}></img>
                    <img className='sprite sprite_discipline-page-blue' src={blueSprite}></img>
            </div>
            
        </>
    )
}