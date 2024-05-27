import './EventCalendar.css';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css';
import 'color-calendar/dist/css/theme-glass.css'; 
import React from 'react';

export default function EventCalendar({events,
                                        onDateClick, 
                                        onSelect, 
                                        onHideEvents, 
                                        onSetDate}) {

  function handleSelect(events) {
    onSelect(events);  
  }

  React.useEffect(() => {
    new Calendar({
      id: '#color-calendar',
      headerColor: '#222',
      dropShadow: 'none',
      border: 'none',
      borderRadius: '0',
      fontFamilyHeader: 'Bahnschrift, serif',
      fontFamilyWeekdays: 'Bahnschrift, serif',
      fontFamilyBody: 'Bahnschrift, serif',
      eventsData: events,
      dateChanged: (currentDate, events) => {
        onHideEvents();
        if (events.length) {
          onDateClick(events);
          onSetDate(currentDate);
        } else {
          onSetDate('');
          onDateClick([])};

    },
  })
  }, [])

  return (
    <div className='event-calendar' >
      <div id='color-calendar'></div>
      <div className='event-calendar__buttons'>
        <button className='event-calendar__button event-calendar__button_type_close' onClick={onHideEvents}>Закрыть</button>
        <button className='event-calendar__button event-calendar__button_type_select' onClick={handleSelect}>Выбрать</button>
      </div>
    </div>
  )
}