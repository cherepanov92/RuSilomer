import cl from 'classnames'
import {connect} from 'react-redux'

const Post_title = ({menuShow, h1, description, header = true, tag}) => {
  if (header) {
    return (
      <div
        className={cl({'post-title--hidden': menuShow === 'show_in' ? true : false}, 'post-title')}
      >
        {tag ? <span className="post-title__tag">{tag}</span> : null}
        <h1 className={cl('post-title__h1', tag ? 'post-title__h1--tag' : '')}>{h1}</h1>
        {description ? <p className="post-title__description">{description}</p> : null}
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
