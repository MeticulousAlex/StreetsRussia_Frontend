import React from 'react';
import './CititesPopup.css';
import Popup from '../Popup/Popup';
import { availableCities } from '../constants';
import searchIcon from '../../images/search-icon.svg';

export default function CititesPopup({isCitiesPopupOpen, setIsCitiesPopupOpen, city, setCity}){

    const [currentCityName, setCurrentCityName] = React.useState(city);
    const [searchCity, setSearchCity] = React.useState('');
    const [citiesList, setCitiesList] = React.useState([]);

    function confirmCity(e){
        const currentCityNode = document.querySelector('.city__container_chosen');
        const newCityNode = e.target.parentNode;

        currentCityNode.classList.remove('city__container_chosen');
        newCityNode.classList.add('city__container_chosen');
        
        localStorage.setItem('currentCity',e.target.textContent);
        setCurrentCityName(e.target.textContent);
        setCity(e.target.textContent);
    }

    function handleCityInput(e){
        setSearchCity(e.target.value)
    }

    function CitiesRender(){
        let citiesDOMList = availableCities.map((city)=>{
            if (city.name === currentCityName && city.name.toLocaleLowerCase().includes(searchCity.toLocaleLowerCase())){
               return(
                <div className='city__container city__container_chosen'>
                    <p className='city__name'>{city.name}</p>
                    <div className='city__indicator'/>
                </div>
                )
            } else if (city.name.toLocaleLowerCase().includes(searchCity.toLocaleLowerCase())){
               return(
                <li className='city__container'>
                    <p className='city__name' onClick={confirmCity}>{city.name}</p>
                    <div className='city__indicator'/>
                </li>
                ) 
            }
        })
        setCitiesList(citiesDOMList);
    }

    React.useEffect(()=>{
        CitiesRender();
    },[searchCity, city])

    if (isCitiesPopupOpen){
        return(
        <Popup isPopupOpen={setIsCitiesPopupOpen} type='cities'>
            <div className='popup__header'>
                <h3 className='popup__title'>Выберите город</h3>
                <p className='popup__title-caption'>От выбранного города зависит, какие мероприятия вы увидите</p>
            </div>
            <form className="popup__form" name="cities">
                <input className='city__search' placeholder='Введите город...' value={searchCity || ''} onChange={handleCityInput}></input>
                <img className='city__search-icon' src={searchIcon}/>
            </form>
            <ul className='city__list'>
               {citiesList} 
            </ul>
            
        </Popup>
    )
}
}