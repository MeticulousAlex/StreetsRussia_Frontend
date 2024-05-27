import './Card.css';

export default function Card({src, alt, title, text, modificator, blockModificator}) {
  return (
    <figure className={`card card_type_${modificator}`}>
      <img className={`card__img card__img_block_${blockModificator}`} src={src} alt={alt}/>
      <figcaption className={`card__info card__info_block_${blockModificator}`}>
        <h5 className={`card__title card__title_block_${blockModificator}`}>{title}</h5>
        <p className={`card__text card__text_block_${blockModificator}`}>{text}</p>
      </figcaption>
    </figure>    
  )
}