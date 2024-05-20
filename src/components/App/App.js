import './App.css';
import '../../fonts/fonts.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AuthPage from '../AuthPage/AuthPage';
import CititesPopup from '../CitiesPopup/CititesPopup';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { register, authorize } from '../../utils/MainApi';

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


  // Geolocation

  const [city, setCity] = React.useState(localStorage.getItem('currentCity') || '');
  const [isNotificationShown, setIsNotificationShown] = React.useState(true);

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



  React.useEffect(()=>{
    navigate('/', {replace: true})
  },[])

  return (
    <div className="App">
      <Header setIsSupportPopupOpen={setIsSupportPopupOpen} setIsJoinPopupOpen={setIsJoinPopupOpen} city={city} setCity={setCity} isNotificationShown={isNotificationShown} setIsNotificationShown={setIsNotificationShown} setIsCitiesPopupOpen={setIsCitiesPopupOpen}/>
      <Routes>
        <Route path='/' element={<Main isJoinPopupOpen={isJoinPopupOpen} setIsJoinPopupOpen={setIsJoinPopupOpen} isSupportPopupOpen={isSupportPopupOpen} setIsSupportPopupOpen={setIsSupportPopupOpen}/>}/>
        <Route path='/about' element={<p style={{color:'black', paddingTop:'300px', margin:'0'}}>about</p>}/>
        <Route path='/activities' element={<p style={{color:'black', paddingTop:'300px', margin:'0'}}>activities</p>}/>
        <Route path='/calendar' element={<p style={{color:'black', paddingTop:'300px', margin:'0'}}>calendar</p>}/>
        <Route path='/news' element={<p style={{color:'black', paddingTop:'300px', margin:'0'}}>news</p>}/>
        <Route path='/contacts' element={<p style={{color:'black', paddingTop:'300px', margin:'0'}}>contacts</p>}/>


        <Route path='/signin' element={<AuthPage pageType='login' setIsAuthPage={setIsAuthPage} isAuthorizedUser={isAuthorizedUser} setIsAuthorizedUser={setIsAuthorizedUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} serverAuthErrorMessage={serverAuthErrorMessage} setServerAuthErrorMessage={setServerAuthErrorMessage}/>}/>
        <Route path='/signup' element={<AuthPage pageType='register' setIsAuthPage={setIsAuthPage} isAuthorizedUser={isAuthorizedUser} setIsAuthorizedUser={setIsAuthorizedUser} setCurrentUser={setCurrentUser} handleRegister={handleRegister} serverAuthErrorMessage={serverAuthErrorMessage} setServerAuthErrorMessage={setServerAuthErrorMessage}/>}/>
      </Routes>
      <CititesPopup isCitiesPopupOpen={isCitiesPopupOpen} setIsCitiesPopupOpen={setIsCitiesPopupOpen} city={city} setCity={setCity}/>
    </div>
  );
}

export default App;
