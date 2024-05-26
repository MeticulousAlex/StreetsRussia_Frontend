import React from 'react';
import './EventItem.css';

export default function EventItem({item}) {

  const imgStyle = {
    backgroundImage: 'url(' + item.img + ')'
  }

  return (
    <div className='event-item'>
      <div className='event-item__img' style={imgStyle}></div>
    </div>
  )
}