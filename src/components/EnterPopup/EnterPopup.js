import React from "react";
import Popup from "../Popup/Popup";

export default function EnterPopup({isEnterPopupOpen, setIsEnterPopupOpen}){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsEnterPopupOpen(false);
    }

    if (isEnterPopupOpen){
       return(
            <Popup isPopupOpen={setIsEnterPopupOpen} type='enter'>
                <form className="popup__form" name="join" onSubmit={handleSubmit}>
                    <label className="popup__form-field">
                        <input
                        type="email"
                        name="email"
                        value={email || ''}
                        onChange={handleEmailChange}
                        placeholder="электронная почта"
                        className="popup__input popup__input_join popup__input_type_email"
                        required
                        minLength="2"
                        maxLength="200"
                        />
                        <span className="popup__form-input-error email-error"></span>
                    </label>
                    <label className="popup__form-field">
                        <input
                        type="password"
                        name="password"
                        value={password || ''}
                        onChange={handlePasswordChange}
                        placeholder="Пароль"
                        className="popup__input popup__input_join"
                        required
                        minLength="2"
                        maxLength="200"
                        />
                        <span className="popup__form-input-error password-error"></span>
                    </label>
                    <button className="popup__button_submit" type="submit">Войти</button> 
                </form>
            </Popup>
        ) 
    }
    
}