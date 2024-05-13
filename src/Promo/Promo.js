import './Promo.css';
import video from "../videos/Promo_video.mp4";
import React, { useEffect } from 'react';

export default function Promo(){

    const [visibility, setVisibility] = React.useState(false);

    function changeVisiblility(){
        setVisibility(true);
    }
    
    useEffect(()=>{
        changeVisiblility()
    })

    return(
        <video className={visibility ? "promo__video-item promo__video-item_visible" : "promo__video-item"}autoPlay muted loop>
            <source src={video} type="video/mp4"/>
        </video>
    )
}