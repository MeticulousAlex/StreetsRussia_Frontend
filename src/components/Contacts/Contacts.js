import React from 'react';
import './Contacts.css';
import coverImage from '../../images/contacts__cover.jpg';
import mapTargetImage from '../../images/contacts_map_target.png';
import mapSocialImage from '../../images/contacts_map_social.png';

export default function Contacts(){

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [query, setQuery] = React.useState('');
    const [agreement, setAgreement] = React.useState(false);


    const ref = React.useRef(null);
    const inputRef = React.useRef(null);

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleQueryChange(e){
        setQuery(e.target.value);
    }

    function toggleAgreement(){
        setAgreement(!agreement);
    }

    function handleSubmit(e){
        e.preventDefault();
        setEmail('');
        setName('');
        setQuery('');
    }


    return(
        <div className='contacts'>
            <h2 className='contacts__title'>Контакты</h2>
            <div className='contacts__grid'>
                <form className='contacts__form' onSubmit={handleSubmit}>
                    <h3 className='contacts__form-title'>Ждём твой отзыв или предложение</h3>
                    <p className='contacts__form-caption'>Напиши нам и мы ответим в ближайшее время!</p>
                    <label className="popup__form-field">
                    <input
                    type="text"
                    name="name"
                    value={name || ''}
                    onChange={handleNameChange}
                    placeholder="Введи имя"
                    className="contacts__input contacts__input_type_email"
                    required
                    minLength="2"
                    maxLength="200"
                    />
                    <span className="popup__form-input-error email-error"></span>
                </label>
                <label className="popup__form-field">
                    <input
                    type="email"
                    name="email"
                    value={email || ''}
                    onChange={handleEmailChange}
                    placeholder="Введи адрес электронной почты"
                    className="contacts__input contacts__input_type_email"
                    required
                    minLength="2"
                    maxLength="200"
                    />
                    <span className="popup__form-input-error email-error"></span>
                </label>
                <label className="popup__form-field">
                    <textarea 
                    className="contacts__input contacts__input_textarea"
                    name="Text1"
                    rows='5'
                    placeholder='Твой запрос или отзыв'
                    value={query || ''}
                    onChange={handleQueryChange}
                    ></textarea>
                    <span className="popup__form-input-error email-error"></span>
                </label>
                <div className="popup__agreement">
                    <input id="agreement" className="popup__agreement-button" type="radio" checked={agreement}></input>
                    <label className="popup__agreement-label" onClick={toggleAgreement} for="agreement"/>
                    <p className="contacts__agreement-title">Я даю своё согласие на обработку персональных данных, в соответствии с Политикой конфиденциальности</p>
                </div>
                <button className="contacts__form-button" type="submit">Отправить</button>
                </form>
                <img className='contacts__cover-image' src={coverImage} alt='contacts-cover-image'/>
                <img className='contacts__map-target' src={mapTargetImage} alt='contacts-map-target'/>
                <img className='contacts__map-social' src={mapSocialImage} alt='contacts-map-social'/>
            </div>
        </div>
    )
}