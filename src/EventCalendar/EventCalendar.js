import './EventCalendar.css';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css';
import 'color-calendar/dist/css/theme-glass.css'; 
import { useEffect } from 'react';
import { EVENTS } from '../constants/events';

export default function EventCalendar() {

  useEffect(() => {
    new Calendar({
      id: '#color-calendar',
      eventsData: EVENTS,
      dateChanged: (currentDate, events) => {
        events.map((ev) => console.log(ev.name))
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