import cl from 'classnames';

const Image_rectangle = ({image,cssClass }) => {



    return(
      <>
        <div className={cl(cssClass, "Image_rectangle")}>
          <picture className="Image_rectangle__picture">
            <img className="Image_rectangle__image"
                 src={image.src}
                 alt={image.alt}/>
          </picture>
        </div>

        <style jsx>{`
        .Image_rectangle__picture {
          background-image: url(${image.src});
          background-repeat: no-repeat;
          background-position: ${image.position};
          background-size: ${image.size};
          display: block;
          opacity: .6;
        }
        `}</style>
      </>
    )

}

export default Image_rectangle;