import './App.css';
import Map from './Map/Map';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Events from './Events/Events';

function App() {
  return (
    <div className="App">
      <Map/>
      <Events />
    </div>
  );
}

export default App;
