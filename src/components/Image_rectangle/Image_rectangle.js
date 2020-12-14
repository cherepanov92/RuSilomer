import cl from 'classnames'

const Image_rectangle = ({image, cssClass}) => {
  return (
    <>
      <div className={cl(cssClass, 'image_rectangle')}>
        <picture className="image_rectangle__picture">
          <img className="image_rectangle__image" src={image.src} alt={image.alt} />
        </picture>
      </div>
    </>
  )
}

export default Image_rectangle
