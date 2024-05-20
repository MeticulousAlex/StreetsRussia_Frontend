import React from "react";
import "./JoinPopup.css";
import Popup from "../Popup/Popup";
import temporaryCities from "../temporaryCities/temporaryCities";
import { IMaskInput } from 'react-imask';

export default function JoinPopup({isJoinPopupOpen, setIsJoinPopupOpen}){

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [region, setRegion] = React.useState('');
    const [socialMedia, setSocialMedia] = React.useState('');
    const [agreement, setAgreement] = React.useState(false);


    const ref = React.useRef(null);
    const inputRef = React.useRef(null);

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
    }

    function handleSocialMediaChange(e){
        setSocialMedia(e.target.value);
    }

    function toggleAgreement(){
        setAgreement(!agreement);
    }

    function handleSubmit(e){
        e.preventDefault();
        setIsJoinPopupOpen(false);
    }

    if (isJoinPopupOpen){
        return(
        <Popup isPopupOpen={setIsJoinPopupOpen} type='join'>
            <form className="popup__form" name="join" onSubmit={handleSubmit}>
            <label className="popup__form-field">
                    <input
                    type="text"
                    name="name"
                    value={name || ''}
                    onChange={handleNameChange}
                    placeholder="ФИО полностью"
                    className="popup__input popup__input_type_email"
                    required
                    minLength="2"
                    maxLength="200"
                    />
                    <span className="popup__form-input-error email-error"></span>
                </label>
                <select name="region_id" className=" popup__input popup__input_dropdown" defaultValue="">
                    <option hidden disabled={true} value="">Регион</option>
                    <option value="22">Алтайский край</option>
                    <option value="28">Амурская область</option>
                    <option value="29">Архангельская область</option>
                    <option value="30">Астраханская область</option>
                    <option value="31">Белгородская область</option>
                    <option value="32">Брянская область</option>
                    <option value="33">Владимирская область</option>
                    <option value="34">Волгоградская область</option>
                    <option value="35">Вологодская область</option>
                    <option value="36">Воронежская область</option>
                    <option value="78">Еврейская АО</option>
                    <option value="75">Забайкальский край</option>
                    <option value="37">Ивановская область</option>
                    <option value="38">Иркутская область</option>
                    <option value="7">Кабардино-Балкарская Республика</option>
                    <option value="39">Калининградская область</option>
                    <option value="40">Калужская область</option>
                    <option value="41">Камчатский край</option>
                    <option value="9">Карачаево-Черкесская Республика</option>
                    <option value="42">Кемеровская область</option>
                    <option value="43">Кировская область</option>
                    <option value="44">Костромская область</option>
                    <option value="23">Краснодарский край</option>
                    <option value="24">Красноярский край</option>
                    <option value="45">Курганская область</option>
                    <option value="46">Курская область</option>
                    <option value="47">Ленинградская область</option>
                    <option value="48">Липецкая область</option>
                    <option value="49">Магаданская область</option>
                    <option value="85">Москва</option>
                    <option value="50">Московская область</option>
                    <option value="51">Мурманская область</option>
                    <option value="83">Ненецкий АО</option>
                    <option value="52">Нижегородская область</option>
                    <option value="53">Новгородская область</option>
                    <option value="54">Новосибирская область</option>
                    <option value="55">Омская область</option>
                    <option value="56">Оренбургская область</option>
                    <option value="57">Орловская область</option>
                    <option value="58">Пензенская область</option>
                    <option value="59">Пермский край</option>
                    <option value="25">Приморский край</option>
                    <option value="60">Псковская область</option>
                    <option value="1">Республика Адыгея</option>
                    <option value="4">Республика Алтай</option>
                    <option value="2">Республика Башкортостан</option>
                    <option value="3">Республика Бурятия</option>
                    <option value="5">Республика Дагестан</option>
                    <option value="6">Республика Ингушетия</option>
                    <option value="8">Республика Калмыкия</option>
                    <option value="10">Республика Карелия</option>
                    <option value="11">Республика Коми</option>
                    <option value="82">Республика Крым</option>
                    <option value="12">Республика Марий Эл</option>
                    <option value="13">Республика Мордовия</option>
                    <option value="14">Республика Саха (Якутия)</option>
                    <option value="15">Республика Северная Осетия-Алания</option>
                    <option value="16">Республика Татарстан</option>
                    <option value="17">Республика Тыва</option>
                    <option value="19">Республика Хакасия</option>
                    <option value="61">Ростовская область</option>
                    <option value="62">Рязанская область</option>
                    <option value="63">Самарская область</option>
                    <option value="77">Санкт-Петербург</option>
                    <option value="64">Саратовская область</option>
                    <option value="65">Сахалинская область</option>
                    <option value="66">Свердловская область</option>
                    <option value="84">Севастополь</option>
                    <option value="67">Смоленская область</option>
                    <option value="26">Ставропольский край</option>
                    <option value="68">Тамбовская область</option>
                    <option value="69">Тверская область</option>
                    <option value="70">Томская область</option>
                    <option value="71">Тульская область</option>
                    <option value="72">Тюменская область</option>
                    <option value="18">Удмуртская Республика</option>
                    <option value="73">Ульяновская область</option>
                    <option value="27">Хабаровский край</option>
                    <option value="79">Ханты-Мансийский АО</option>
                    <option value="74">Челябинская область</option>
                    <option value="20">Чеченская Республика</option>
                    <option value="21">Чувашская Республика</option>
                    <option value="80">Чукотский АО</option>
                    <option value="81">Ямало-Ненецкий АО</option>
                    <option value="76">Ярославская область</option>
                </select>
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
                    <IMaskInput
                    className="popup__input"
                    mask="+7(000)000-00-00"
                    radix="."
                    value=""
                    unmask={true} // true|false|'typed'
                    ref={ref}
                    inputRef={inputRef}
                    // USE onAccept INSTEAD
                    onAccept={
                        // depending on prop above first argument is
                        // `value` if `unmask=false`,
                        // `unmaskedValue` if `unmask=true`,
                        // `typedValue` if `unmask='typed'`
                        (value, mask) => console.log(value)
                    }
                    // ...and more mask props in a guide

                    // input props also available
                    placeholder='+7 (123) 456-78-90'
                    />
                    <span className="popup__form-input-error phone-error"></span>
                </label>
                <label className="popup__form-field">
                    <input
                    type="text"
                    name="social-media"
                    value={socialMedia || ''}
                    onChange={handleSocialMediaChange}
                    placeholder="Социальная сеть для связи"
                    className="popup__input"
                    required
                    minLength="2"
                    maxLength="200"
                    />
                    <span className="popup__form-input-error social-media-error"></span>
                </label>
                <div className="popup__agreement">
                    <input id="agreement" className="popup__agreement-button" type="radio" checked={agreement}></input>
                    <label className="popup__agreement-label" onClick={toggleAgreement} for="agreement"/>
                    <p className="popup__agreement-title">Я согласен с <a className="popup__agreement-title popup__agreement-title_offer" href="https://streetrussia.ru/static/files/dogovor-oferty.pdf" target="_blank" rel="noreferrer">правами и обязанностями участника</a><br/>ОООУКС “Улицы России”</p>
                </div>
                
                <button className="popup__button_submit" type="submit">Вступить</button>
                
            </form>
            
        </Popup>
    )
    }
    
}