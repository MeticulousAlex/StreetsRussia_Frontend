import './Calendar.css';
import React from 'react';
import Geolocation from '../Geolocation/Geolocation';
import Filter from '../Filter/Filter';
import EventCalendar from '../EventCalendar/EventCalendar';
import DayEventsList from '../DayEventsList/DayEventsList';
import Footer from '../Footer/Footer';

import noEvent from '../../images/NoEvent.png'; 
import { discipline } from '../constants';


export default function Calendar({city, setCity, isNotificationShown, setIsNotificationShown, setIsCitiesPopupOpen, filteredEvents}) {

  const [isEvent, setIsEvent] = React.useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [dayEvents, setDayEvents] = React.useState([]);
  const [filteredDayEvents, setFilteredDayEvents] = React.useState([]);

  function handleFilter(item) {
    if (item != 'Выбери направление') {
      setSelectedDiscipline(item);
    } else {
      setSelectedDiscipline('');
    }
  }

  function handleShowEvetns() {
    setIsEvent(true);
  }

  function handleHideEvetns() {
    setIsEvent(false);
  }

  function handleSetDate(date) {
    setSelectedDate(date)
  }

  function handleShowInfo() {
    let eventsCheck = dayEvents;
    if (selectedDiscipline != '') {
      setFilteredDayEvents(dayEvents.filter(ev => ev.discipline === selectedDiscipline));
      eventsCheck = dayEvents.filter(ev => ev.discipline === selectedDiscipline);
    } else {
      setFilteredDayEvents(dayEvents);
    }
    if (eventsCheck.length !== 0) {
      handleShowEvetns();
    } else {
      handleHideEvetns();
    }
  }
  
  return(
    <section className='calendar'>
      <h4 className='calendar__title'>Календарь событий</h4>
      <p className='calendar__text'>Уже 30 регионов занимаются хип-хопом, брейкингом, воркаутом и другими направлениями 
      в сообществе единомышленников, и ты можешь к ним присоединиться!
      Выбери направление уличной культуры и спорта по душе и посмотри, 
      какие мероприятия планируются в твоем городе.</p>
      <h5 className='calendar__subtitle'>Выбери день и направление  для отображения информации</h5>
      <div className='calendar__events-wrapper'>
        <div className='calendar__events'>
          <Geolocation city={city} setCity={setCity} isNotificationShown={isNotificationShown} setIsNotificationShown={setIsNotificationShown} setIsCitiesPopupOpen={setIsCitiesPopupOpen}/>
          <Filter 
            ops={discipline}
            param='Выбери направление'
            onFilter={handleFilter}
          />
          <EventCalendar
            selectedDiscipline={selectedDiscipline} 
            events={filteredEvents}
            onShowEvents={handleShowEvetns}
            onHideEvents={handleHideEvetns}
            onSetDate={handleSetDate}
            onDateClick={setDayEvents}
            onSelect={handleShowInfo}
            city={city}
          />
        </div>
        <div className='calendar__event-info'>
            {!isEvent&&<img className='calendar__event-img' src={noEvent}/>}
            {isEvent&&
              <DayEventsList 
                selectedDate={selectedDate}
                dayEvents={filteredDayEvents}
              />}
        </div>
      </div>
      <Footer />
    </section>
  )
}