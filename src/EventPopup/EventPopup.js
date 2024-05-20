import React, { useState } from "react";
import "./EventPopup.css";
import Popup from "../Popup/Popup";
import Filter from '../Filter/Filter';
import EventItem from '../EventItem/EventItem';

export default function EventPopup({isEventOpen, setIsEventOpen, events, discipline, setCurrentEvents}) {

if (isEventOpen) {

  const [filterDiscipline, setFilterDiscipline] = useState([]);

  function handleFilterDiscipline() {
    setCurrentEvents(events.filter(ev => ev.discipline === filterDiscipline));
  }


  return (
    <Popup isPopupOpen={setIsEventOpen}>
      <div className="popup__events-wrapper">
        <div className="popup__event-sidebar">
          <Filter 
            param='дисциплина'
            ops={discipline}
            filterDiscipline={filterDiscipline}
            onFilter={handleFilterDiscipline}
            setFilterDiscipline={setFilterDiscipline}
          />
        </div>
        <div className="popup__events-info">
          {events.map((ev) => (
            <EventItem 
              ev={ev}
              key={ev.id}/> 
          ))}
        </div>
      </div>
    </Popup>
  )
}
  
}