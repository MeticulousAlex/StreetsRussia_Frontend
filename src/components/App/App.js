import './App.css';
import '../../fonts/fonts.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import ActivitiesPage from '../ActivitiesPage/ActivitiesPage';
import DisciplinePage from '../DisciplinePage/DisciplinePage';
import AuthPage from '../AuthPage/AuthPage';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Calendar from '../Calendar/Calendar';
import CititesPopup from '../CitiesPopup/CititesPopup';
import JoinPopup from '../JoinPopup/JoinPopup';
import SupportPopup from '../SupportPopup/SupportPopup';
import EnterPopup from '../EnterPopup/EnterPopup';
import News from '../News/News';
import NewsItem from '../NewsItem/NewsItem';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { register, authorize } from '../../utils/MainApi';
import {EVENTS} from '../events';

function App() {

  // ---------------- VARIABLES -----------------------

  const navigate = useNavigate();

  // Login/Register

  const [isAuthPage, setIsAuthPage] = React.useState(false);
  const [isAuthorizedUser, setIsAuthorizedUser] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [serverAuthErrorMessage, setServerAuthErrorMessage] = React.useState('');


  // Popups

  const [isSupportPopupOpen, setIsSupportPopupOpen] = React.useState(false);
  const [isJoinPopupOpen, setIsJoinPopupOpen] = React.useState(false);
  const [isCitiesPopupOpen, setIsCitiesPopupOpen] = React.useState(false);
  const [isEnterPopupOpen, setIsEnterPopupOpen] = React.useState(false);


  // Geolocation

  const [city, setCity] = React.useState(localStorage.getItem('currentCity') || '');
  const [isNotificationShown, setIsNotificationShown] = React.useState(true);

  const [filteredEvents, setFilteredEvents] = React.useState([]);

  const [currentNewsTitle, setCurrentNewsTitle] = React.useState('News_0');

  // ----------------- FUNCTIONS ---------------------

  function handleRegister(email, password){
    register(email, password).then((res) => {
        handleLogin(res.user.email, password)
    }).catch((err) => {
        if (err.includes('400')){
            setServerAuthErrorMessage('Введены некорректные данные');
        } else if (err.includes('409')){
            setServerAuthErrorMessage('Пользователь с таким email уже существует');
        } else {
            setServerAuthErrorMessage('Ой. Ошибка на сервере');
        }
    });
  }

  function handleLogin(email, password){
    authorize(email, password).then((res) => {
        localStorage.setItem('isAuthorizedUser', 'true');
        localStorage.setItem('user', JSON.stringify({email: res.email, _id: res._id}));
        leaveAuthPage();
    }).catch((err) => {
        if (err.includes('401')){
            setServerAuthErrorMessage('Такого пользователя не существует');
        } else if (err.includes('400')){
            setServerAuthErrorMessage('Введены некорректные данные');
        } else {
            setServerAuthErrorMessage('Ой. Ошибка на сервере');
        }
    });
  }

  function leaveAuthPage(){
    navigate('/', {replace: true});
    setIsAuthPage(false);
    setIsAuthorizedUser(true);
  }

  function getCityEvents() {
    setFilteredEvents(() => EVENTS.filter(ev => ev.city === city));
  }

  React.useEffect(() => {
    getCityEvents()
  }, [city])

  React.useEffect(()=>{
    navigate('/', {replace: true})
  },[])

  return (
    <div className="App">
      <Header setIsSupportPopupOpen={setIsSupportPopupOpen} setIsEnterPopupOpen={setIsEnterPopupOpen} city={city} setCity={setCity} isNotificationShown={isNotificationShown} setIsNotificationShown={setIsNotificationShown} setIsCitiesPopupOpen={setIsCitiesPopupOpen}/>
      <Routes>
        <Route path='/' element={<Main setIsJoinPopupOpen={setIsJoinPopupOpen}/>}/>
        <Route path='/disciplines' element={<ActivitiesPage/>}/>
        <Route path='/disciplines/activity' element={<DisciplinePage setIsJoinPopupOpen={setIsJoinPopupOpen}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/calendar' element={<Calendar filteredEvents={filteredEvents} city={city} setCity={setCity} isNotificationShown={isNotificationShown} setIsNotificationShown={setIsNotificationShown} setIsCitiesPopupOpen={setIsCitiesPopupOpen}/>}/>
        <Route path='/news' element={<News setCurrentNewsTitle={setCurrentNewsTitle}/>}/>
        <Route path='/news/news-item' element={<NewsItem currentNewsTitle={currentNewsTitle}/>}/>
        <Route path='/contacts' element={<Contacts/>}/>



        <Route path='/signin' element={<AuthPage pageType='login' setIsAuthPage={setIsAuthPage} isAuthorizedUser={isAuthorizedUser} setIsAuthorizedUser={setIsAuthorizedUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} serverAuthErrorMessage={serverAuthErrorMessage} setServerAuthErrorMessage={setServerAuthErrorMessage}/>}/>
        <Route path='/signup' element={<AuthPage pageType='register' setIsAuthPage={setIsAuthPage} isAuthorizedUser={isAuthorizedUser} setIsAuthorizedUser={setIsAuthorizedUser} setCurrentUser={setCurrentUser} handleRegister={handleRegister} serverAuthErrorMessage={serverAuthErrorMessage} setServerAuthErrorMessage={setServerAuthErrorMessage}/>}/>
      </Routes>
      <CititesPopup isCitiesPopupOpen={isCitiesPopupOpen} setIsCitiesPopupOpen={setIsCitiesPopupOpen} city={city} setCity={setCity}/>
      <JoinPopup isJoinPopupOpen={isJoinPopupOpen} setIsJoinPopupOpen={setIsJoinPopupOpen}/>
      <SupportPopup isSupportPopupOpen={isSupportPopupOpen} setIsSupportPopupOpen={setIsSupportPopupOpen}/>
      <EnterPopup isEnterPopupOpen={isEnterPopupOpen} setIsEnterPopupOpen={setIsEnterPopupOpen}/>
      <Footer/>
    </div>
  );
}

export default App;
