import './Notification.css'

export default function Notification({isNotificationShown, setIsNotificationShown, city, setCity, setIsCitiesPopupOpen}){

    function handleConfirm(){
        setIsNotificationShown(false);
        localStorage.setItem('currentCity', city)
    }

    function handleChoose(){
        setIsNotificationShown(false);
        setIsCitiesPopupOpen(true);
        
    }

    function handleClose(){
        setIsNotificationShown(false);
        localStorage.setItem('currentCity', city)
    }


    return(
        <div className={isNotificationShown ? 'notification' : 'notification notification_hidden'}>
                <div className='notification__content'>
                    <button className='notification__close-button' onClick={handleClose}/>
                    <p className='notification__title'>Ваш город&nbsp;<p className='notification__title notification__title_city'>{city}</p>?</p>
                    <div className='notification__buttons'>
                        <button className='notification__button notification__button_agree' onClick={handleConfirm}>Да</button>
                        <button className='notification__button notification__button_choose' onClick={handleChoose}>Указать другой</button>
                    </div>
                    <p className='notification__caption'>От выбранного города зависит, какие мероприятия вы увидите</p>
                </div>
            </div>
    )
}