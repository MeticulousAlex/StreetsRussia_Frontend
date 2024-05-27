import React from 'react';

import dropdownArrow from '../../images/dropdown_arrow.svg';
import "slick-carousel/slick/slick.css";
import './News.css';

import arrowLeft from '../../images/news_arrow_left.svg';
import arrowRight from '../../images/news_arrow_right.svg';

import Slider from "react-slick";
import { Link } from 'react-router-dom';

import news1 from '../../images/news_1.png';
import news2 from '../../images/news_2.png';
import news3 from '../../images/news_3.png';
import news4 from '../../images/news_4.png';
import news5 from '../../images/news_5.png';
import news6 from '../../images/news_6.png';

import notFoundCover from '../../images/not-found-cover.png';

import spriteRed from '../../images/sprite_news_red.png';
import spriteBlue from '../../images/sprite_news_blue.png';

export default function News({setCurrentNewsTitle}){

    const [newsCategory, setNewsCategory] = React.useState('Выбери тип');
    const newsCategoryList = ['Все новости', 'Федеральные новости', 'Региональные новости'];
    const [isNewsSelectorOpen, setIsNewsSelectorOpen] = React.useState(false);

    const [carouselElement, setCarouselElement] = React.useState([]);

    const newsList = [{title: 'news_1', preview:news1,type:'federal'}, {title: 'news_2', preview: news2, type:'regional'},{title: 'news_3', preview: news3, type:'federal'},{title: 'news_4', preview: news4, type:'regional'},{title: 'news_5', preview: news5, type:'federal'},{title: 'news_6', preview: news6, type:'federal'}]

    function toggleSelector(){
        setIsNewsSelectorOpen(!isNewsSelectorOpen);
    }

    function changeCategory(e){
        setNewsCategory(e.target.textContent);
        setIsNewsSelectorOpen(false);
    }

    function setNewsTitle(e){
        setCurrentNewsTitle(e.target.name);
    }

    function justifyCards(){
        let newCardList = newsList.filter((card) =>{
            if (newsCategory === 'Выбери тип' || newsCategory === 'Все новости'){
                return <img className='news__carousel-preview' src={card.preview}/>
            } else if (newsCategory === 'Региональные новости' && card.type === 'regional'){
                return <img className='news__carousel-preview' src={card.preview}/>
            } else if (newsCategory === 'Федеральные новости' && card.type === 'federal'){
                return <img className='news__carousel-preview' src={card.preview}/>
            }
        });

        let newCardElementList = newCardList.map((element)=>{
            return <Link to='/news/news-item' replace={true} ><img className='news__carousel-preview' src={element.preview} name={element.title} onClick={setNewsTitle}/></Link>
        })

        if (newCardElementList.length >= 3){
            setCarouselElement(
                <div className='news__carousel'>
                    <Slider 
                    nextArrow={<img className='slider__ arrow slider__arrow_next' src={arrowRight} />}
                    prevArrow={<img className='slider__ arrow slider__arrow_previous' src={arrowLeft}/>}
                    dots={false}
                    slidesToShow={3}
                    infinite={true}
                    >
                        {newCardElementList}
                    </Slider>
                </div>
                );
        } else if (newCardElementList.length > 0) {
            setCarouselElement(
                <div className='news__carousel'>
                    <Slider 
                    slidesToShow={2}
                    variableWidth={true}
                    dots={false}
                    infinite={false}
                    nextArrow={<img className='slider__arrow_next' src={arrowRight} />}
                    prevArrow={<img className='slider__arrow_previous' src={arrowLeft}/>}
                    >
                        {newCardElementList}
                    </Slider>
                </div>
            );
        } else {
            setCarouselElement(
                <>
                    <p className='carousel__not-found-notification'>К сожалению, на данный момент  нет актуальных новостей в выбранном регионе. Попробуйте изменить запрос или выбрать другой регион для отображения новостей.</p>
                    <img className='carousel__not-found-cover-image' src={notFoundCover} alt='not-found'/>
                </>
            ) 
        }
    }


    React.useEffect(() => {
        justifyCards();
    },[newsCategory])

    return(
        <div className='news'>
            <h2 className='news__title'>Новости</h2>
            <p className='news__description'>На странице новостей  ты найдешь свежие обзоры федеральных и региональных событий и проектов, анонсы предстоящих выставок и концертов, а также эксклюзивные интервью с творческими личностями, чья работа оставляет след в городском пространстве.  Будь в курсе всех трендов уличной культуры вместе с нами!</p>
            <h3 className='news__select-title'>Выбери тип новостей  для отображения информации</h3>
            <div className='news__select'>
                <p className='news__selected-item' onClick={toggleSelector}>{newsCategory}<img className={isNewsSelectorOpen ?'news__selector-arrow news__selector-arrow_open' : 'news__selector-arrow'} src={dropdownArrow}/></p>
                { isNewsSelectorOpen && (<div className='news__options-list'>
                {newsCategoryList.map((category)=>(
                <p className='news__select-option' onClick={changeCategory}>{category}</p>
                ))}
                </div>)}
            </div>
            {carouselElement}
            <img className='sprite sprite__news_blue' src={spriteBlue}/>
            <img className='sprite sprite__news_red' src={spriteRed}/>
        </div>
        
    )
}