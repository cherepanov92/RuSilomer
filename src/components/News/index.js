import cl from 'classnames'
import Link from 'next/link'
import moment from 'moment'

const News_Item = ({title, subtitle, id, img, date, importance, cssClass}) => {
  let showImage = importance === 'high' || importance === 'medium' ? true : false
  moment.locale('ru')

  const formatStr = 'DD MMMM YYYY'

  // let defaultImage = {
  //   src: '/images/main_first.jpeg',
  //   alt: 'Мероприятие',
  // }

  // if (!image) {
  //   image = defaultImage
  // }

  // if (!title) {
  //   return <></>
  // }

  return (
    <Link href={id ? `/novosti/${id}` : '#'}>
      <a className={cl({'news-item--imaged': showImage}, 'news-item', 'news-item-' + cssClass)}>
        {showImage ? (
          <picture className={cl({'news-item__picture--imaged': showImage}, 'news-item__picture')}>
            <img
              className={cl({'news-item__image--imaged': showImage}, 'news-item__image')}
              // src={`${process.env.NEXT_PUBLIC_HOST2}/${img}`}
              src={'/images/main_first.jpeg'}
              alt={title}
            />
          </picture>
        ) : (
          <></>
        )}

        <div className={cl({'news-item__link--imaged': showImage}, 'news-item__link')}>
          <h3 className={cl({'news-item__title--imaged': showImage}, 'news-item__title')}>
            {title}
          </h3>
        </div>

        <div
          className={cl({'news-item__description--imaged': showImage}, 'news-item__description')}
        >
          {subtitle ? subtitle : ' '}
        </div>
        <div className={cl({'news-item__date--imaged': showImage}, 'news-item__date')}>
          {date ? moment(date, 'YYYY-MM-DD').format(formatStr) : ' '}
        </div>
      </a>
    </Link>
  )
}

export default News_Item
