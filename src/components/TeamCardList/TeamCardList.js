import React from 'react';
import './TeamCardList.css';
import Card from '../Card/Card';

export default function TeamCardList({teamHeader, team}) {

  const [isSlider, setIsSlider] = React.useState(false);
  const [isEndOfList, setIsEndOfList] = React.useState(false);
  const [isAnimation, setIsAnimation] = React.useState(false);

  const [sliderStart , setSliderStart] = React.useState(0);

  function handleSlideRigth() {
    if (sliderStart + 3 < team.length) {
      if (sliderStart + 3 >= team.length ) {
        setIsEndOfList(true);
      }
      setSliderStart(sliderStart + 3);
    }
  }

  function handleSlideLeft() {
    if  (sliderStart > 0) {
      setSliderStart(sliderStart - 3);
    }
  }

  React.useEffect(() => {
    if (team.length > 3) {
      setIsSlider(true);
      setIsAnimation(true);
    }
  }, [])

  return (
    <>
      <div className='team__header'>
        <h4 className='team__title'>{teamHeader}</h4>
        {isSlider&& 
          <div className='team__buttons'>
            <button className='team__button team__button_type_left' onClick={handleSlideLeft}/>
            <button className='team__button team__button_type_right' onClick={handleSlideRigth}/>
          </div>}
      </div>
      <div className={`team__list ${isEndOfList&&'team__end-of-list'} ${isAnimation&&'slider__animation'}`}>
        {team.slice(sliderStart, (sliderStart+4)).map((item) => (
          <Card
          key={item.id}
          modificator='team'
          blockModificator='team'
          src={item.img}
          alt={item.title}
          title={item.title}
          text={item.text}
        />
        ))}
      </div>
    </>
  )
}