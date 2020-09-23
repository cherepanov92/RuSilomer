import cl from 'classnames';
import Image_rectangle from '../Image_rectangle/Image_rectangle';

const Images_main = ({children, images}) => {



  return(
    <div className="Images-main main__item">
      <Image_rectangle cssClass="Images-main__item" image={images.image_one}/>
      <Image_rectangle cssClass="Images-main__item" image={images.image_two}/>
      <Image_rectangle cssClass="Images-main__item" image={images.image_three}/>
      {children}
    </div>
  )

}

export default Images_main;