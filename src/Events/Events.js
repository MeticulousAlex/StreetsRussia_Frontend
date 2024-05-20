import './Events.css';
import EventCalendar from '../EventCalendar/EventCalendar';
import EventPopup from '../EventPopup/EventPopup';
import { EVENTS } from '../constants/events';
import { DISCIPLINE} from '../constants/discipline';
import { useEffect, useState } from 'react';


export default function Events() {

  const [isEventOpen, setIsEventOpen] = useState(false);
  const [currentEvents, setCurrentEvents] = useState([]);

  function handleEventOpen() {
    setIsEventOpen(true);
  }

  function handleShowEvents(events) {
    setCurrentEvents(events);
  }

  useEffect(() => {
    setCurrentEvents(EVENTS);
  }, [])
  
  return(
    <section className='events'>
        <EventCalendar
          dayEvents={EVENTS}
          onDateClick={handleEventOpen}
          onShowEvents={handleShowEvents}
        />
        <EventPopup 
          isEventOpen={isEventOpen} 
          setIsEventOpen={setIsEventOpen} 
          events={currentEvents} 
          discipline={DISCIPLINE}
          setCurrentEvents={setCurrentEvents}
        />
    </section>
  )
}