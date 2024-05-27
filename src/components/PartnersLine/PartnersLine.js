import './PartnersLine.css';
import React from 'react';
import PartnerLogo from '../PartnerLogo/PartnerLogo';

export default function PartnersLine({title, partners}) {
  
  const [isSlider, setIsSlider] = React.useState(false);
  const [sliderStart , setSliderStart] = React.useState(0);
  const [isEndOfList, setIsEndOfList] = React.useState(false);


  function handleSlideRigth() {
    if (sliderStart + 2 < partners.length) {
      if (sliderStart + 1 >= partners.length ) {
        setIsEndOfList(true);
      }
      setSliderStart(sliderStart + 2);
    }
  }

  function handleSlideLeft() {
    if  (sliderStart > 0) {
      setSliderStart(sliderStart - 2);
    }
  }

  React.useEffect(() => {
    if (partners.length > 2) {
      setIsSlider(true);
    }
  }, [])

  return (
    <div className='partners-line'>
      <h4 className='partners-line__title'>{title}</h4>
      <button className={`partners-line__button partners-line__button_type_left ${isSlider&&'button__active_left'}`} onClick={handleSlideLeft}/>
      <div className={`partners-line__list ${isEndOfList&&'partners-line__end-of-list'}`}>
        {partners.slice(sliderStart, (sliderStart+2)).map((item) => (
          <PartnerLogo 
            img={item.logo}
            link={item.url}
          />
        ))}
      </div>
      <button className={`partners-line__button partners-line__button_type_right ${isSlider&&'button__active_right'}`} onClick={handleSlideRigth}/>
    </div>
  )
}