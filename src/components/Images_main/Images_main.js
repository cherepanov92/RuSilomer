import cl from 'classnames';
import Image_rectangle from '../Image_rectangle/Image_rectangle';

const Images_main = ({cssClass, children, images}) => {



  return(
    <div className={cl("images-main", cssClass)}>
      <Image_rectangle cssClass="images-main__item" image={images.image_one}/>
      <Image_rectangle cssClass="images-main__item" image={images.image_two}/>
      <Image_rectangle cssClass="images-main__item" image={images.image_three}/>
      {children}
    </div>
  )

}

export default Images_main;