import Social from '../Social/Social'
import {connect} from 'react-redux';
import cl from 'classnames';

const Footer = ({socialList, navShow, cssClasses}) => {

    return (
        <footer className={cl({
                            "footer--fixed": navShow === 'show_in' ? true : false,
                        },cssClasses, "footer")}>
            <div className="footer__tag">#русиломер</div>
            <Social socialList={socialList}/>
        </footer>
    )
}

const mapStateToProps = state => ({
    navShow: state.nav.show,
});


export default connect(mapStateToProps, null)(Footer);