import './HistoryCard.css';

export default function HistoryCard({title, text}) {
  return (
    <div className='history'>
      <h5 className='history__title'>{title}</h5>
      <div className='history__point'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#B73A34"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="48" viewBox="0 0 2 48" fill="none">
          <path d="M0.249998 47C0.249998 47.4142 0.585784 47.75 0.999998 47.75C1.41421 47.75 1.75 47.4142 1.75 47L0.249998 47ZM0.25 -3.27836e-08L0.249998 47L1.75 47L1.75 3.27836e-08L0.25 -3.27836e-08Z" fill="#1E5B9C"/>
        </svg>
      </div>
      <p className='history__text'>{text}</p>
    </div>
  )
}