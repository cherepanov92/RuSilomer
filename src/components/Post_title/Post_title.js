import cl from 'classnames';

const Post_title = ({hidden, h1, description}) => {


  return(
    <div className={cl({"post-title--hidden": hidden,
                       }, "post-title")}>
      <span className="post-title__disclaimer">Русский Силомер</span>
      <h1 className="post-title__h1">{h1}</h1>
      <p className="post-title__description">{description}</p>
    </div>
  )
}

export default Post_title;