import './Events.css';
import Filter from '../Filter/Filter';
import EventCalendar from '../EventCalendar/EventCalendar';
import {REGIONS} from '../constants/regions';

export default function Events() {
  
  return(
    <section className='events'>
        <Filter 
          ops={REGIONS}
          param = 'регион'
        />
        <EventCalendar/>
    </section>
  )
}