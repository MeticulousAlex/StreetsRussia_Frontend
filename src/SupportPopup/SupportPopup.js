import React from "react";
import "./SupportPopup.css";
import Popup from "../Popup/Popup";

export default function SupportPopup({isSupportOpen, setIsSupportOpen}){

    const [amount, setAmount] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [agreement, setAgreement] = React.useState(false);
    const [isCustomAmountPresent, setIsCustomAmountPresent] = React.useState(false);

    function handleAmountChange(e){
        setAmount(e.target.value)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handlePhoneChange(e){
        setPhone(e.target.value)
    }

    function toggleAgreement(){
        setAgreement(!agreement);
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsSupportOpen(false);
    }

    function revealField(e){
        if (e.target.name === 'amount' && e.target.id !== 'other'){
            setIsCustomAmountPresent(false);
        } else if (e.target.name === 'amount' && e.target.id === 'other'){
            setIsCustomAmountPresent(true);
        }
    }

    if (isSupportOpen){
        return(
        <Popup isPopupOpen={setIsSupportOpen}>
            <div className="popup__amount-grid" onClick={revealField}>
                <input className="popup__amount-button" id="500" type="radio" name='amount' defaultChecked/>
                <label className="popup__amount-label" for="500">500 ₽</label>
                <input className="popup__amount-button" id="1000" type="radio" name='amount'/>
                <label className="popup__amount-label" for="1000">1000 ₽</label>
                <input className="popup__amount-button" id="2000" type="radio" name='amount'/>
                <label className="popup__amount-label" for="2000">2000 ₽</label>
                <input className="popup__amount-button" id="other" type="radio" name='amount'/>
                <label className="popup__amount-label" for="other" >Другая сумма</label>
            </div>
            <form className="popup__form" name="support" onSubmit={handleSubmit}>
                <label className={isCustomAmountPresent ? "popup__form-field" : "popup__form-field popup__form-field_hidden"}>
                    <input
                    type="number"
                    name="amount"
                    value={amount || ''}
                    onChange={handleAmountChange}
                    placeholder="сумма"
                    className="popup__input popup__input_type_amount"
                    required
                    minLength="2"
                    maxLength="40"
                    />
                    <span className="popup__form-input-error amount-error"></span>
                </label>
                <label className="popup__form-field">
                    <input
                    type="email"
                    name="email"
                    value={email || ''}
                    onChange={handleEmailChange}
                    placeholder="электронная почта"
                    className="popup__input popup__input_type_email"
                    required
                    minLength="2"
                    maxLength="200"
                    />
                    <span className="popup__form-input-error email-error"></span>
                </label>
                <label className="popup__form-field">
                    <input
                    type="tel"
                    name="phone"
                    value={phone || ''}
                    onChange={handlePhoneChange}
                    placeholder="номер телефона"
                    className="popup__input popup__input_type_phone"
                    required
                    minLength="2"
                    maxLength="200"
                    />
                    <span className="popup__form-input-error phone-error"></span>
                </label>
                <div className="popup__agreement">
                    <input id="agreement" className="popup__agreement-button" type="radio" checked={agreement}></input>
                    <label className="popup__agreement-label" onClick={toggleAgreement} for="agreement"/>
                    <p className="popup__agreement-title">Я принимаю <a className="popup__agreement-title popup__agreement-title_offer" href="https://streetrussia.ru/static/files/dogovor-oferty.pdf" target="_blank" rel="noreferrer">договор-оферту</a></p>
                </div>
                
                <button className="popup__button_submit" type="submit">Поддержать организацию</button>
                
            </form>
            
        </Popup>
    )
    }
    
}