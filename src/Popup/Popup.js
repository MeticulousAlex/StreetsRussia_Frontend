import "./Popup.css";

export default function Popup({isPopupOpen,children}){

    function closeByBackground(e){
        if(e.target.className === 'popup'){
            closePopup();
        }
    }

    function closePopup(){
        isPopupOpen(false);
    }


    return(
        <section className="popup" onClick={closeByBackground}>
            <div className="popup__container">
                <div className="popup__content">
                <button
                    aria-label="Закрыть"
                    className="popup__button popup__button_type_cancel"
                    type="button"
                    onClick={closePopup}
                />
                    {children}
                </div>
            </div>
        </section>
    )
}