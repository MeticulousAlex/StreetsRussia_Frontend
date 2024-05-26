import './DayEventsList.css';
import React from 'react';
import EventItem from '../EventItem/EventItem';

export default function DayEventsList({selectedDate, dayEvents}) {

  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [weekday, setWeekday] = React.useState('');

  function handleShowDate() {
    setMonth(selectedDate.toLocaleDateString('ru-RU', {month: 'long'}));
    setDay(selectedDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long'}));
    setWeekday(selectedDate.toLocaleDateString('ru-RU', {weekday: 'long'}))
  }

  React.useEffect(() => {
    handleShowDate();
  },[selectedDate])

  return ( 
    <div className='event-items'>
      <div className='event-items__date'>
        <p className='event-items__date-info'>{month}</p>
        <p className='event-items__date-info'>{day}, {weekday}</p>
      </div>
      {dayEvents.map((dayEvent) => (
        <EventItem 
          item={dayEvent}
        />
      ))}
    </div>
  )
}