import './About.css';
import video from '../../videos/Forum-opening.mp4';

import HistoryCardList from '../HistoryCardList/HistoryCardList';
import TeamCardList from '../TeamCardList/TeamCardList';
import Card from '../Card/Card';
import PartnersLine from '../PartnersLine/PartnersLine';

import {fedTeam, 
        regTeam,
        targets, 
        genPartners,
        strategyPartners,
        orgPartners,
        regPartners} from '../constants';

export default function About() {

  return (
    <section className='about'>
      <h2 className='about__title'>О нас</h2>
      <div className='about__info'>
        <p className='about__text about__text_type_main'>
          Что такое Улицы России?<br/>
          Это единственная общероссийская организация в такой сфере, которая способствует развитию уличных культур: воркаут, паркур, граффити, хип хоп и другие. 
          Мы ломаем стереотипы о том, что это агрессивный и травмоопасный спорт. И доказываем, что этим может заниматься любой.
        </p>
        <video className='about__video' src={video}></video>
        <p className='about__text'>
          Улицы - не какая-то субкультура, а целая культура, интегрирующаяся в современную российскую культуру и спорт, сохраняя при этом традиционные и почитаемые в России традиции. 
          Улицы – это культура полная драйва, креатива, своего особого вайба. 
          Она дает возможность каждому вне зависимости от возраста и пола проявляться и в танце, и в искусстве, и в спорте Мы приобщаем к этой культуре разные поколения. 
          И работаем над тем, чтобы стать не только общероссийской, но и мировой организацией.
        </p>
      </div>
      <div className='about_mission'>
        <h3 className='about__subtitle'>Наша миссия</h3>
        <p className='about__mission-text'>Развивай себя, создавай для своих !!!</p>
      </div>
      <div className='about__target'>
        <h3 className='about__subtitle about__subtitle_block_target'>Наши цели</h3>
        {targets.map((item) => (
          <Card
          key={item.id}
          modificator={item.modificator}
          blockModificator=''
          src={item.src}
          alt={item.title}
          title={item.title}
          text={item.text}
        />
        )) 
        }
      </div>
      <div className='about__history'>
        <h3 className='about__subtitle'>Наша история</h3>
        <HistoryCardList />
      </div>
      <div>
        <h3 className='about__subtitle'>Наша команда</h3>
        <TeamCardList
          teamHeader='Федеральная команда'
          team={fedTeam}
        />
        <TeamCardList 
          teamHeader='Региональная команда'
          team={regTeam}
        />
      </div>
      <div className='about__partners'>
        <h3 className='about__subtitle'>Наши партнеры</h3>
        <PartnersLine
          title='Генеральные партнёры'
          partners={genPartners}
        />
        <PartnersLine
          title='Стратегические партнёры'
          partners={strategyPartners}
        />
        <PartnersLine
          title='Организационные партнёры'
          partners={orgPartners}
        />
        <PartnersLine
          title='Региональные партнёры'
          partners={regPartners}
        />
      </div>
    </section>
  )
}