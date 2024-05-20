
import Map from '../Map/Map';
import Promo from '../Promo/Promo';
import SupportPopup from '../SupportPopup/SupportPopup';
import JoinPopup from '../JoinPopup/JoinPopup';
import IP from '../IP/IP';

export default function Main({isJoinPopupOpen,setIsJoinPopupOpen,isSupportPopupOpen,setIsSupportPopupOpen}){

    return(
        <>
            <JoinPopup isJoinPopupOpen={isJoinPopupOpen} setIsJoinPopupOpen={setIsJoinPopupOpen}/>
            <SupportPopup isSupportPopupOpen={isSupportPopupOpen} setIsSupportPopupOpen={setIsSupportPopupOpen}/>
            <Promo setIsJoinPopupOpen={setIsJoinPopupOpen}/>
            <Map/>
            <IP/>
        </>
    )
}