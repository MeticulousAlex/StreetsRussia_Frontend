import './HistoryCardList.css';
import {historyPoints} from '../constants';
import HistoryCard from '../HistoryCard/HistoryCard';

export default function HistoryCardList() {

  return (
    <div className='historyList'>
      {historyPoints.map((item) => (
        <HistoryCard
          key={item.id}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  )
}