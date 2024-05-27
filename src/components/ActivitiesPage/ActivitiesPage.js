import './ActivitiesPage.css';

import React from 'react';
import { Carousel, Card } from '../ActivitiesCarousel/ActivitiesCarousel';
import dancingImage from '../../images/dancing.png';
import skateboardingImage from '../../images/scateboarding.png';
import streetArtImage from '../../images/street_art.png';
import parkourImage from '../../images/parkour.png';
import workoutImage from '../../images/workout.png';

import dropdownArrow from '../../images/dropdown_arrow.svg';
import redSprite from '../../images/red_sprite_activities_selector.png';
import blueSprite from '../../images/blue_sprite_activities_selector.png';


export default function ActivitiesPage(){

    const [chosenDiscipline, setChosenDiscipline] = React.useState('Выбери направление');
    const [disciplinesSelectorOpen, setDisciplinesSelectorOpen] = React.useState(false);
    const [active, setActive] = React.useState(2);

    const cardsArr = [{title: 'DANCING', content: dancingImage},{title: 'SKATEBOARDING', content: skateboardingImage},{title: 'STREET ART', content: streetArtImage},{title: 'PARKOUR', content: parkourImage},{title: 'WORKOUT', content: workoutImage}];


    function toggleSelector(){
        setDisciplinesSelectorOpen(!disciplinesSelectorOpen);
    }

    function changeActivity(e){
        setChosenDiscipline(e.target.textContent);
        toggleSelector();
        cardsArr.forEach((card)=>{if (card.title === e.target.textContent) setActive(cardsArr.indexOf(card))})
    }

    return(
        <div className='activities-page'>
            <h2 className='activities-page__title'>Уличные виды культуры и спорта</h2>
            <div className='activities-page__select'>
                <p className='activities-page__selected-item' onClick={toggleSelector}>{chosenDiscipline}<img className={disciplinesSelectorOpen ?'activities-page__selector-arrow activities-page__selector-arrow_open' : 'activities-page__selector-arrow'} src={dropdownArrow}/></p>
                { disciplinesSelectorOpen && (<div className='activities-page__options-list'>
                  {cardsArr.map((card)=>(
                <p className='activities-page__select-option'value={card.title} onClick={changeActivity}>{card.title}</p>
                ))}
                </div>)}
            </div>  
            
            <p className='activities-page__caption'>Выбери направление дисциплины для просмотра фотографий, видеоматериалов и описания</p>
            <Carousel page='disciplines' active={active} setActive={setActive} disciplines={cardsArr} setChosenDiscipline={setChosenDiscipline}>
                {cardsArr.map((card) => (
                    <Card title={card.title} content={card.content}/>
                ))}
            </Carousel>
            <img className='sprite sprite_activities-selector-red' src={redSprite}></img>
            <img className='sprite sprite_activities-selector-blue' src={blueSprite}></img>
        </div>
    )
}