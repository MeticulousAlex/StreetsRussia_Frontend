import './EventCalendar.css';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css';
import 'color-calendar/dist/css/theme-glass.css'; 
import { useEffect } from 'react';

export default function EventCalendar({dayEvents, onDateClick, onShowEvents}) {

  useEffect(() => {
    new Calendar({
      id: '#color-calendar',
      theme: "glass",
      primaryColor: '#222',
      eventsData: dayEvents,
      selectedDateClicked: (currentDate, events) => {
        onDateClick();
        onShowEvents(events);
},
      monthChanged: (currentDate, DateEvents) => {
        console.log('it works');
      }
  })
  }
  , [])

  return (
    <div className='calendar' id='color-calendar'></div>
  )
}