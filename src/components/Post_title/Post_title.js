import cl from 'classnames'
import {connect} from 'react-redux'

const Post_title = ({menuShow, h1, description, header = true}) => {
  if (header) {
    return (
      <div
        className={cl({'post-title--hidden': menuShow === 'show_in' ? true : false}, 'post-title')}
      >
        <span className="post-title__disclaimer">Русский Силомер</span>
        <h1 className="post-title__h1">{h1}</h1>
        <p className="post-title__description">{description}</p>
      </div>
    )
  }

  return (
    <div className={cl('post-title-page')}>
      {h1 && <h2 className="post-title-page__h2">{h1}</h2>}
      {description && <p className="post-title-page__description_p">{description}</p>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  menuShow: state.nav.show,
})

export default connect(mapStateToProps, null)(Post_title)
