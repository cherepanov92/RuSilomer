import cl from 'classnames'
import Link from 'next/link'
import moment from 'moment'

const Meropriyatiya_item = ({
  city,
  date,
  description,
  id,
  img,
  importance,
  location,
  name,
  cssClass,
}) => {
  moment.locale('ru')
  let showImage = importance === 'high' || importance === 'medium' ? true : false
  const formatStr = 'DD MMMM YYYY'

  let defaultEventImage = {
    src: '/images/main_first.jpeg',
    alt: 'Мероприятие',
  }

  if (!name) {
    return <></>
  }

  return (
    // <div className={cl('event')}>
    //   {importance !== 'default' ? null : null}
    //   <picture className={cl('event__picture')}>
    //     <img className={cl('event__image')} src={img || defaultEventImage.src} alt={name} />
    //   </picture>
    //   <Link href={false || '#'}>
    //     <a className={cl('event__link')}>
    //       <h3 className={cl('event__title')}>{name}</h3>
    //     </a>
    //   </Link>
    //   <div className={cl('event__date')}>{date ? printDate : 'Дата не указана'}</div>
    // </div>
    <Link href={id ? `/meropriyatiya/${city}/${id}` : '#'}>
      <a className={cl({'event-item--imaged': showImage}, 'event-item', 'event-item-' + cssClass)}>
        {showImage ? (
          <picture
            className={cl({'event-item__picture--imaged': showImage}, 'event-item__picture')}
          >
            <img
              className={cl({'event-item__image--imaged': showImage}, 'event-item__image')}
              src={img ? process.env.NEXT_PUBLIC_HOST2 + img : defaultEventImage.src}
              alt={name}
            />
          </picture>
        ) : (
          <></>
        )}

        <div className={cl({'event-item__link--imaged': showImage}, 'event-item__link')}>
          <h3 className={cl({'event-item__title--imaged': showImage}, 'event-item__title')}>
            {name}
          </h3>
        </div>

        <div
          className={cl({'event-item__description--imaged': showImage}, 'event-item__description')}
        >
          {description ? description : ' '}
        </div>
        <div className={cl({'event-item__date--imaged': showImage}, 'event-item__date')}>
          {date ? moment(date, 'YYYY-MM-DD').format(formatStr) : ' '}
        </div>
      </a>
    </Link>
  )
}

export default Meropriyatiya_item
