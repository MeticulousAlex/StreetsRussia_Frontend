import React from 'react';
import './EventItem.css';

export default function EventItem({item, isSlider}) {

  const imgStyle = {
    backgroundImage: 'url(' + item.img + ')',
  }

  return (
    <div className='event-item'>
      <div className={`event-item__img ${isSlider&&'event-item__img_type_slider'}`} style={imgStyle}></div>
    </div>
  )
}