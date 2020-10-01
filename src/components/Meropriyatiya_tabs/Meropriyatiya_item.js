import cl from 'classnames';
import Link from 'next/link';
import moment from 'moment';

const Meropriyatiya_item = ({eventTitle, eventLink, eventImage, eventDate}) => {
  moment.locale('ru');

  const formatStr = 'DD MMMM YYYY';

  function myFormat(value) {
    return value ? value.format(formatStr) : '';
  }

  let printDate = myFormat(moment(eventDate, 'DD/MM/YYYY'));

  let defaultEventImage = {
    src: '/images/main_first.jpeg',
    alt: 'Мероприятие',
  }

  if(!eventImage){
    eventImage = defaultEventImage;
  }

  if(!eventTitle){
    return(
      <></>
    )
  }

  return (
    <div className={cl("event")}>
      <picture className={cl("event__picture")}>
        <img className={cl("event__image")} src={eventImage.src} alt={eventImage.alt} />
      </picture>
      <Link href={eventLink ? eventLink : '#'}>
        <a className={cl("event__link")}>
          <h3 className={cl("event__title")}>{eventTitle}</h3>
        </a>
      </Link>
      <div className={cl("event__date")}>{eventDate ? printDate : 'Дата не указана'}</div>
    </div>
  )
}


export default Meropriyatiya_item;