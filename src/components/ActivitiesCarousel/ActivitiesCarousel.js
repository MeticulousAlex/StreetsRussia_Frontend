import React from 'react';
import './ActivitiesCarousel.css';

import arrowLeft from '../../images/ic_arrow_left.svg';
import arrowRight from '../../images/ic_arrow_right.svg';
import { Link } from 'react-router-dom';

export function Card({title,content}){

    return(
        <Link to='/disciplines/activity' className="carousel__card">
            <h4>{title}</h4>
            <img className='carousel__image' src={content} alt={title + '_image'}></img>
        </Link>
    )
}

export function Carousel({active, setActive, disciplines, setChosenDiscipline, children}){

    const maxVisibility = 3;

    const count = React.Children.count(children);

    function setCard(e){
        setActive(Number(e.target.id));
        setChosenDiscipline(disciplines[Number(e.target.id)].title);
    }

    function toggleRight(){
        setChosenDiscipline(disciplines[Number(active+1)].title)
        document.getElementById(String(active+1)).checked = true;
        setActive((i) => i + 1);
    }

    function toggleLeft(){
        setChosenDiscipline(disciplines[Number(active-1)].title)
        document.getElementById(String(active-1)).checked = true;
        setActive((i) => i - 1);

    }

    return(
        <>
            <div className="carousel">
                {active > 0 && (<button className="nav nav_left" onClick={toggleLeft}>
                        <img className="icon icon_left" src={arrowLeft} alt='#'/>
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div className="card-container" style={{
                    '--active': i === active ? 1 : 0,
                    '--offset': (active - i) / 3,
                    '--direction': active - i,
                    '--abs-offset': Math.abs(active - i) / 3,
                    'pointer-events': active === i ? 'auto' : 'none',
                    'opacity': Math.abs(active - i) >= maxVisibility ? '0' : '1',
                    'visibility': Math.abs(active - i) > maxVisibility ? 'invisible' : 'visible',
                }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button className="nav nav_right" onClick={toggleRight}>
                        <img className="icon icon_right" src={arrowRight} alt='#'/>
                </button>
            )}
            </div>
            <div className='radio-selectors'>
                {}
                <input type='radio' className='radio-button' name='cards' id='0' checked={active===0?true:false}onChange={setCard}/>
                <input type='radio' className='radio-button' name='cards' id='1' checked={active===1?true:false}onChange={setCard}/>
                <input type='radio' className='radio-button' name='cards' id='2' checked={active===2?true:false}defaultChecked onChange={setCard}/>
                <input type='radio' className='radio-button' name='cards' id='3' checked={active===3?true:false}onChange={setCard}/>
                <input type='radio' className='radio-button' name='cards' id='4' checked={active===4?true:false}onChange={setCard}/>
            </div>
        </>
    );
};

