import './PartnerLogo.css';

export default function PartnerLogo({img, link}) {
  return (
    <a href={link}>
      <img src={img} className='partner-logo' alt='Логотип партнера'/>
    </a>
  )
}