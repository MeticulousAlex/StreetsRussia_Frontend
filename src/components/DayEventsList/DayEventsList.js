import './DayEventsList.css';
import React from 'react';
import EventItem from '../EventItem/EventItem';

export default function DayEventsList({selectedDate, dayEvents}) {

  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [weekday, setWeekday] = React.useState('');

  const [isSlider, setIsSlider] = React.useState(false);
  const [sliderStart , setSliderStart] = React.useState(0);
  const [isEndOfList, setIsEndOfList] = React.useState(false);


  function handleSlideRigth() {
    if (sliderStart + 1 < dayEvents.length) {
      if (sliderStart >= dayEvents.length ) {
        setIsEndOfList(true);
      }
      setSliderStart(sliderStart + 1);
    }
  }

  function handleSlideLeft() {
    if  (sliderStart > 0) {
      setSliderStart(sliderStart - 1);
    }
  }

  function handleShowDate() {
    setMonth(selectedDate.toLocaleDateString('ru-RU', {month: 'long'}));
    setDay(selectedDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long'}));
    setWeekday(selectedDate.toLocaleDateString('ru-RU', {weekday: 'long'}))
  }

  React.useEffect(() => {
    handleShowDate();
  },[selectedDate])

  React.useEffect(() => {
    if (dayEvents.length > 1) {
      setIsSlider(true);
    } else setIsSlider(false)
  }, [dayEvents])

  return ( 
    <div className='event-items'>
      <div className='event-items__date'>
        <p className='event-items__date-info'>{month}</p>
        <p className='event-items__date-info'>{day}, {weekday}</p>
      </div>
      {isSlider&&<div className='event-items__buttons'>
        <button className={`event-items__button ${isSlider&&'button__active_left'}`} onClick={handleSlideLeft}/>
        <button className={`event-items__button ${isSlider&&'button__active_right'}`} onClick={handleSlideRigth}/>
      </div>}
      <div className='event-items__list'>
        {dayEvents.slice(sliderStart, (sliderStart + 2)).map((dayEvent) => (
          <EventItem
            isSlider={isSlider}
            key={dayEvent.id} 
            item={dayEvent}
          />
        ))}
      </div>
    </div>
  )
}