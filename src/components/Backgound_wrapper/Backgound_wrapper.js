import cl from 'classnames';
import {connect} from 'react-redux';

const Backgound_wrapper = ({children, navShow, cssClass}) => {

  return(
    <div className={cl( { "background-wrapper--colored": navShow === 'show_in' ? true : false,
                           "background-wrapper--uncolored": navShow === 'show_out' ? true : false,
                        }, cssClass ,"background-wrapper")}>
      {children}
    </div>
  )

}

const mapStateToProps = state => ({
  navShow: state.nav.show,
});

export default connect(mapStateToProps, null)(Backgound_wrapper);


