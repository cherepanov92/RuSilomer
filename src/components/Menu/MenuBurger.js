import cl from 'classnames';
import {connect} from 'react-redux';
import {navShow, navHide } from '../../actions/toggleNav';

const MenuBurger = ({clname, showButton, navShow, navHide}) => {

    const toggleMenuHandler = () => {
        showButton ? navHide() : navShow();
    }

    return(
        <button type="button" 
                className={cl({"menu-burger__transformed": showButton},
                                                clname,
                                                 "menu-burger")} 
                title="Меню"
                onClick={toggleMenuHandler}>
        <svg version="1.1"
            width="80"
            height="60"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" 
                className="menu-burger__line-one"></path>
            <path d="M300,320 L540,320" 
                className="menu-burger__line-two"></path>
            <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" 
                className="menu-burger__line-three" 
                transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>

            </svg>
        </button>
    )
}

const mapStateToProps = state => ({
    showButton: state.nav.show,
});

const mapDispatchToProps =  {
        navShow,
        navHide
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger);