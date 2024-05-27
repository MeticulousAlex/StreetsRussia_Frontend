import './Promo.css';
import video from "../../videos/Promo_video.mp4";
import React, { useEffect } from 'react';

export default function Promo({setIsJoinPopupOpen}){

    const [visibility, setVisibility] = React.useState(false);

    function changeVisiblility(){
        setVisibility(true);
    }

    function handleJoinPopup(){
        setIsJoinPopupOpen(true);
    }
    
    useEffect(()=>{
        changeVisiblility()
    })

    return(
        <div className='promo'>
            <video className={visibility ? "promo__video-item promo__video-item_visible" : "promo__video-item"}autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
            <h1 className='promo__title'>Реализуй свой<br/>потенциал с нами</h1>
            <button className=" promo__button promo__button_join" type="button" onClick={handleJoinPopup}>Присоединиться</button>
        </div>
    )
}