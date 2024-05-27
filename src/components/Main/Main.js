import './Main.css'
import Map from '../Map/Map';
import Promo from '../Promo/Promo';

import spriteRed from '../../images/sprite_main_red.png';
import spriteBlue from '../../images/sprite_main_blue.png';

export default function Main({setIsJoinPopupOpen}){

    return(
        <div className='main'>
            <Promo setIsJoinPopupOpen={setIsJoinPopupOpen}/>
            <Map/>
            <img className='sprite sprite__main_red' src={spriteRed} alt='sprite-red-main'/>
            <img className='sprite sprite__main_blue' src={spriteBlue} alt='sprite-main-blue'/>
        </div>
    )
}