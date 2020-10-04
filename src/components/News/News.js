import cl from 'classnames';
import Link from 'next/link';

const News_Item = ({title, link, image, description, showImage, cssClass}) => {

  let defaultImage = {
    src: '/images/main_first.jpeg',
    alt: 'Мероприятие',
  }

  if(!image){
    image = defaultImage;
  }

  if(!title){
    return(
      <></>
    )
  }

  return (
    <div className={cl({"news-item--imaged": showImage, }, "news-item", "news-item-" + cssClass)}>
      {
        showImage ?
          <picture className={cl({"news-item__picture--imaged": showImage}, "news-item__picture")}>
            <img className={cl({"news-item__image--imaged": showImage}, "news-item__image")} src={image.src} alt={image.alt} />
          </picture>
        :
          <></>
      }

      <Link href={link ? link : '#'}>
        <a className={cl({"news-item__link--imaged": showImage}, "news-item__link")}>
          <h3 className={cl({"news-item__title--imaged": showImage}, "news-item__title")}>{title}</h3>
        </a>
      </Link>
      <div className={cl({"news-item__description--imaged": showImage}, "news-item__description")}>{description ? description : ' '}</div>
    </div>
  )
}


export default News_Item;