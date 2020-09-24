import cl from 'classnames';
import {connect} from 'react-redux';

const Post_title = ({menuShow, h1, description}) => {


  return(
    <div className={cl({"post-title--hidden": menuShow === 'show_in' ? true : false,
                       }, "post-title")}>
      <span className="post-title__disclaimer">Русский Силомер</span>
      <h1 className="post-title__h1">{h1}</h1>
      <p className="post-title__description">{description}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  menuShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Post_title);