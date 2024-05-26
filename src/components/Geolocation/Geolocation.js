import React from 'react';
import Notification from '../Notification/Notification';
import './Geolocation.css';
import { availableCities } from '../constants';

export default function Geolocation({city, setCity, isNotificationShown, setIsNotificationShown, setIsCitiesPopupOpen}){

    const [predictedCity, setPredictedCity] = React.useState('');

    React.useEffect(()=>{
        if (navigator.geolocation && !localStorage.getItem('currentCity')) {
        navigator.geolocation.getCurrentPosition(showCity, console.log('err'),{
            enableHighAccuracy: true,
            timeout: 50000,
            maximumAge: 0,
          });
        } else {
            console.log("City is already set or geolocation is not supported by this browser.");
        }
    },[])

    // const round = (n, dp) => {
    //     const h = +('1'.padEnd(dp + 1, '0'))
    //     return Math.round(n * h) / h
    // }
    
    function showCity(position) {
        setPredictedCity(calculateClosestCity(position.coords, availableCities));

        
        // const latitude = round(position.coords.latitude,4);
        // const longitude = round(position.coords.longitude,4);
        // const APIkey = '6344772f35e24d8abfb58291044ecccd'
    
        // const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${APIkey}`
        // console.log(url);
    
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => {
        //     const city = data[0].name
    
        //     console.log(`Your city is ${city}.`);
        // })
        // .catch((error) => console.log(error));
    }

    function calculateClosestCity(userCoords, citiesList){
        const distances = citiesList.map((city) => {
            return Math.sqrt(Math.abs(userCoords.latitude - city.coordinates[0])**2 + Math.abs(userCoords.longitude - city.coordinates[1])**2)
        });

        const minimalDistanceIndex = distances.indexOf(Math.min(...distances));
        console.log(minimalDistanceIndex);
        return citiesList[minimalDistanceIndex].name
    }

    function openCitiesPopup(){
        setIsCitiesPopupOpen(true);
        setIsNotificationShown(false);
    }

    return(
        <div className='geolocation'>
            <div className='geolocation__button' onClick={openCitiesPopup}>
                <svg className='geolocation__place-icon'viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 17.35C10.0333 15.4833 11.5417 13.7875 12.525 12.2625C13.5083 10.7375 14 9.38333 14 8.2C14 6.38333 13.4208 4.89583 12.2625 3.7375C11.1042 2.57917 9.68333 2 8 2C6.31667 2 4.89583 2.57917 3.7375 3.7375C2.57917 4.89583 2 6.38333 2 8.2C2 9.38333 2.49167 10.7375 3.475 12.2625C4.45833 13.7875 5.96667 15.4833 8 17.35ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z" fill="#B73A34"/>
                </svg>
                <button className='geolocation__place-name' type='button'>{city||predictedCity}</button>
            </div>
            <Notification isNotificationShown={isNotificationShown} setIsNotificationShown={setIsNotificationShown} city={city} setCity={setCity} setIsCitiesPopupOpen={setIsCitiesPopupOpen} predictedCity={predictedCity}/>
        </div>
    )
}
