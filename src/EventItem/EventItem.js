import './EventItem.css';

export default function EventItem({ev}) {

  return (
    <div className='item__wrapper'>
      <h3 className='item__title'>{ev.name}</h3>
      <p className='item__info'>Тут будет описание</p>
      <p className='item__discipline'>{ev.discipline}</p>
      <p className='item__discipline'>{ev.city}</p>
      <a className='item__link'>Тут ссылка</a>
    </div>
  )
}