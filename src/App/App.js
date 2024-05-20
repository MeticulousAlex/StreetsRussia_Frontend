import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import Promo from '../Promo/Promo';
import SupportPopup from '../SupportPopup/SupportPopup';
import Events from '../Events/Events';

function App() {

  const [isSupportOpen, setIsSupportOpen] = React.useState(false);



  return (
    <div className="App">
      <SupportPopup isSupportOpen={isSupportOpen} setIsSupportOpen={setIsSupportOpen}/>
      <Header setIsSupportOpen={setIsSupportOpen}/>
      <Promo/>
      <Map/>
    </div>
  );
}

export default App;
